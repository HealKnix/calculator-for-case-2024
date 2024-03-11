<template>
  <div class="wrapper">
    <div class="calc__wrapper">
      <BaseRadioForm :items="items" @change="setType" />
      <BaseInput type="number" title="Цена за тыс. м3 (₽)" />
      <BaseInput type="number" title="Рыночная стоимость газа ($)" />
      <BaseButton text="Рассчитать" />
    </div>

    <div class="calc__results">
      <div class="calc__result">
        <span class="calc__result_title">Затраты на скважину</span>
        <span class="calc__result_result">347000000 <span>₽</span></span>
      </div>

      <div class="calc__result">
        <span class="calc__result_title">Прибыль от скважины</span>
        <span class="calc__result_result">2344922195 <span>₽</span></span>
      </div>

      <div class="calc__result">
        <span class="calc__result_title">Срок окупаемости скважины</span>
        <span class="calc__result_result">206 <span>суток</span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseRadioForm from '@/components/BaseRadioForm.vue';
import { ref } from 'vue';

const type = ref(0);

const setType = (item) => {
  type.value = item;
};

const items = [
  {
    id: 0,
    text: 'Новая',
    checked: true,
  },
  {
    id: 1,
    text: 'Старая',
    checked: false,
  },
];
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  max-width: 850px;
  padding: 15px;
  color: #333;
}

.calc__wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 330px;
}

.calc__result {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.25);
}

.calc__result:not(:first-child) {
  margin-top: 20px;
}

.calc__result_title {
  font-size: 32px;
}

.calc__result_result {
  font-size: 36px;
  font-weight: bold;
}
</style>
