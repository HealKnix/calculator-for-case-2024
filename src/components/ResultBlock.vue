<template>
  <div class="calc__results">
    <span class="calc__results_title"> Итоги </span>

    <div
      v-for="total in totals"
      :key="total.id"
      class="calc__result total_text"
    >
      <span class="calc__result_title total_text">{{ total.title }}</span>
      <span
        v-if="total.value"
        class="calc__result_value total_text"
        :class="[
          { 'highlight-green': total.highlight && total.value > 0 },
          { 'highlight-red': total.highlight && total.value < 0 },
        ]"
      >
        {{ formatNumber(Math.floor(total.value)) }}
        <span>₽</span>
      </span>

      <span
        v-else
        class="calc__result_value total_text hidden"
        :class="[
          { 'highlight-green': total.highlight && total.value > 0 },
          { 'highlight-red': total.highlight && total.value < 0 },
        ]"
      >
        -
      </span>
    </div>
  </div>

  <div class="calc__results">
    <span class="calc__results_title">Дополнительные сведения</span>

    <div v-for="info in addInfo" :key="info.id" class="calc__result">
      <span class="calc__result_title">{{ info.title }}</span>
      <span v-if="info.value" class="calc__result_value">
        {{ formatNumber(Math.floor(info.value)) }}
        <span>₽</span>
      </span>

      <span v-else class="calc__result_value hidden"> - </span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import formatNumber from '@/helpers/formatNumber';
import { useResultsStore } from '@/stores/useResultsStore';

const results = useResultsStore();

const totals = ref([
  {
    id: 0,
    title: 'Общие затраты',
    value: null,
  },
  {
    id: 1,
    title: 'Общая прибыль',
    value: null,
  },
  {
    id: 2,
    title: 'Чистая прибыль',
    value: null,
    highlight: true,
  },
]);

const addInfo = ref([
  {
    id: 0,
    title: 'Затраты на кустовые площадки',
    value: null,
  },
  {
    id: 1,
    title: 'Затраты на новые скважины',
    value: null,
  },
  {
    id: 2,
    title: 'Стоимость ликвидации скважин',
    value: null,
  },
  {
    id: 3,
    title: 'Убытки от КРС всех старых скважин',
    value: null,
  },
  {
    id: 4,
    title: 'Затраты на дороги за 10 лет (строительство + обслуживание)',
    value: null,
  },
  {
    id: 5,
    title: 'Затраты на ЛЭП',
    value: null,
  },
]);

const updateValues = () => {
  totals.value = [
    {
      id: 0,
      title: 'Общие затраты',
      value: results.total.totalCosts,
    },
    {
      id: 1,
      title: 'Общая прибыль',
      value: results.total.totalProfit,
    },
    {
      id: 2,
      title: 'Чистая прибыль',
      value: results.total.netIncome,
      highlight: true,
    },
  ];

  addInfo.value = [
    {
      id: 0,
      title: 'Затраты на кустовые площадки',
      value: results.addInfo.costsOfWellPads,
    },
    {
      id: 1,
      title: 'Затраты на новые скважины',
      value: results.addInfo.costsOfNewWells,
    },
    {
      id: 2,
      title: 'Стоимость ликвидации скважин',
      value: results.addInfo.costOfWellAbandonment,
    },
    {
      id: 3,
      title: 'Убытки от КРС всех старых скважин',
      value: results.addInfo.lossesFromKRSofAllOldWells,
    },
    {
      id: 4,
      title: 'Затраты на дороги за 10 лет (строительство + обслуживание)',
      value: results.addInfo.roadCostsForTenYears,
    },
    {
      id: 5,
      title: 'Затраты на ЛЭП',
      value: results.addInfo.transmissionLineCosts,
    },
  ];
};

watch(results, updateValues);
</script>

<style scoped>
.calc__results {
  width: 100%;
  max-width: 450px;
}

.calc__result {
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.25);
  transition: 0.15s ease-in-out;
}

.calc__result.total_text {
  padding-bottom: 30px;
}

.calc__result:hover {
  border-bottom: 4px solid rgba(33, 33, 33, 0.25);
}

.calc__result:has(.highlight-green):hover {
  border-bottom: 4px solid #58cd2f;
}
.calc__result:has(.highlight-red):hover {
  border-bottom: 4px solid #e24c4c;
}

.calc__result:not(:first-child) {
  padding-top: 20px;
}

.calc__results_title {
  width: 100%;
  display: block;
  font-size: 40px;
  font-weight: bold;
  border-bottom: 2px solid #333333;
  padding-bottom: 10px;
}

.calc__result_title {
  font-size: 20px;
}

.calc__result_title.total_text {
  font-size: 32px;
}

.calc__result_value {
  font-size: 24px;
  font-weight: 600;
}

.calc__result_value:not(.hidden) {
  animation: opac 0.5s ease-in-out;
}

@keyframes opac {
  from {
    margin-top: -25px;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
}
.calc__result_value.total_text {
  font-size: 36px;
  font-weight: 600;
}

.calc__result_value.highlight-green {
  color: #58cd2f;
}
.calc__result_value.highlight-red {
  color: #e24c4c;
}

@media (width < 865px) {
  .calc__wrapper {
    width: 100%;
    max-width: 450px;
  }
  .calc__results__wrapper {
    justify-content: center;
  }
}

@media (width < 500px) {
  .calc__result_title {
    font-size: 1.5em;
  }
  .calc__results_title {
    font-size: 2em;
  }
  .calc__results_title.total_text {
    font-size: 2em;
  }
  .calc__result_value {
    font-size: 1.5em;
  }
  .calc__result_value.total_text {
    font-size: 2em;
  }
}
</style>
@/stores/useResultsStore
