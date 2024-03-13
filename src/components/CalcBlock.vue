<template>
  <div class="calc__wrapper">
    <BaseInput
      type="number"
      title="Стоимость 1 тыс м³ газа (₽)"
      v-model="input1"
      :req="input1Req"
    />
    <BaseInput
      type="number"
      title="Количество кустовых площадок (5 скважин)"
      v-model="input2"
      :req="input2Req"
    />
    <BaseInput
      type="number"
      title="Дебит скважины в тыс (м³ / сут)"
      v-model="input3"
      :req="input3Req"
    />
    <BaseInput
      type="number"
      title="Протяжённость дорог (км)"
      v-model="input4"
      :req="input4Req"
    />
    <BaseButton text="Рассчитать" :onclick="calculate" />
  </div>
</template>

<script setup>
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import { ref, watch } from 'vue';
import { useResultsStore } from '@/stores/useResultsStore';

const results = useResultsStore();

const input1 = ref('');
const input1Req = ref(false);
const input2 = ref('');
const input2Req = ref(false);
const input3 = ref('');
const input3Req = ref(false);
const input4 = ref('');
const input4Req = ref(false);

watch(input1, () => {
  input1Req.value = false;
});
watch(input2, () => {
  input2Req.value = false;
});
watch(input3, () => {
  input3Req.value = false;
});
watch(input4, () => {
  input4Req.value = false;
});

function calculate() {
  if (!input1.value) {
    input1Req.value = true;
  }
  if (!input2.value) {
    input2Req.value = true;
  }
  if (!input3.value) {
    input3Req.value = true;
  }
  if (!input4.value) {
    input4Req.value = true;
  }
  if (input1.value && input2.value && input3.value && input4.value) {
    results.calculateProfit(
      input1.value,
      input2.value,
      input3.value,
      input4.value,
    );
  }
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
@/stores/useResultsStore
