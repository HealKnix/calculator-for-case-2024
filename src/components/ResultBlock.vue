<template>
  <div class="calc__results__wrapper">
    <div class="calc__results">
      <span class="calc__results_title"> Итоги </span>

      <div
        v-for="total in totals"
        :key="total.id"
        class="calc__result total_text"
      >
        <span class="calc__result_title total_text">{{ total.title }}</span>
        <span
          class="calc__result_value total_text"
          :class="{ highlight: total.highlight }"
        >
          {{ formatNumber(total.value) }}
          <span>₽</span>
        </span>
      </div>
    </div>

    <div class="calc__results">
      <span class="calc__results_title">Дополнительные сведения</span>

      <div v-for="info in addInfo" :key="info.id" class="calc__result">
        <span class="calc__result_title">{{ info.title }}</span>
        <span class="calc__result_value">
          {{ formatNumber(info.value) }}
          <span>₽</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import formatNumber from '@/helpers/formatNumber';

const totals = [
  {
    id: 0,
    title: 'Общие затраты',
    value: 63049120000,
  },
  {
    id: 1,
    title: 'Общая прибыль',
    value: 265993750000,
  },
  {
    id: 2,
    title: 'Чистая прибыль',
    value: 202944630000,
    highlight: true,
  },
];

const addInfo = [
  {
    id: 0,
    title: 'Затраты на кустовые площадки',
    value: 375000000,
  },
  {
    id: 1,
    title: 'Затраты на новые скважины',
    value: 4800000000,
  },
  {
    id: 2,
    title: 'Стоимость ликвидации скважин',
    value: 480000000,
  },
  {
    id: 3,
    title: 'Убытки от КРС всех старых скважин',
    value: 52434120000,
  },
  {
    id: 4,
    title: 'Затраты на дороги за 10 лет (строительство + обслуживание)',
    value: 4650000000,
  },
  {
    id: 5,
    title: 'Затраты на ЛЭП',
    value: 310000000,
  },
];
</script>

<style scoped>
.calc__results__wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1000px;
  gap: 35px;
}

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
  -o-border-bottom: 1px solid rgba(33, 33, 33, 0.25);
  -moz-border-bottom: 1px solid rgba(33, 33, 33, 0.25);
  -webkit-border-bottom: 1px solid rgba(33, 33, 33, 0.25);
  transition: 0.15s ease-in-out;
  -o-transition: 0.15s ease-in-out;
  -moz-transition: 0.15s ease-in-out;
  -webkit-transition: 0.15s ease-in-out;
}

.calc__result.total_text {
  padding-bottom: 30px;
}

.calc__result:hover {
  border-bottom: 4px solid rgba(33, 33, 33, 0.25);
  -o-border-bottom: 4px solid rgba(33, 33, 33, 0.25);
  -moz-border-bottom: 4px solid rgba(33, 33, 33, 0.25);
  -webkit-border-bottom: 4px solid rgba(33, 33, 33, 0.25);
}

.calc__result:has(.highlight):hover {
  border-bottom: 4px solid #58cd2f;
  -o-border-bottom: 4px solid #58cd2f;
  -moz-border-bottom: 4px solid #58cd2f;
  -webkit-border-bottom: 4px solid #58cd2f;
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

.calc__result_value.total_text {
  font-size: 36px;
  font-weight: 600;
}

.calc__result_value.highlight {
  color: #58cd2f;
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
