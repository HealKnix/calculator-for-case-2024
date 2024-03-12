<template>
  <div class="calc__wrapper">
    <!--
      <BaseRadioForm name="well_type" :items="items" v-model="wellType" />
      -->
    <BaseInput
      type="number"
      title="Стоимость 1 тыс. м3 газа (₽)"
      v-model="input1"
    />
    <BaseInput
      type="number"
      title="Количество кустовых площадок (5 скважин)"
      v-model="input2"
    />
    <BaseInput
      type="number"
      title="Дебит скважины (м3 / сут)"
      v-model="input3"
    />
    <BaseInput
      type="number"
      title="Протяжённость дорог (км)"
      v-model="input4"
    />
    <BaseButton text="Рассчитать" :onclick="calculate" />
  </div>
</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import { ref } from 'vue';

// const items = [
//   {
//     id: 0,
//     text: 'Новая',
//     checked: true,
//   },
//   {
//     id: 1,
//     text: 'Старая',
//     checked: false,
//   },
// ];

const wellType = ref(0);

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');

function calculate() {
  console.log(wellType.value);
  console.log(input1.value);
  console.log(input2.value);
  console.log(input3.value);
  console.log(input4.value);
}
</script>

<style scoped>
.calc__wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 330px;
}

@media (width < 865px) {
  .calc__wrapper {
    width: 100%;
    max-width: 450px;
  }
}
</style>
