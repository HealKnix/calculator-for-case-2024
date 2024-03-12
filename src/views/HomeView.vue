<template>
  <HeaderView />

  <div class="wrapper">
    <CalcBlock />
    <ResultBlock />
  </div>
</template>

<script setup>
import HeaderView from './HeaderView.vue';
import CalcBlock from '@/components/CalcBlock.vue';
import ResultBlock from '@/components/ResultBlock.vue';
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 45px;
  color: #333;
}

@media (width < 865px) {
  .wrapper {
    justify-content: center;
  }
}
</style>
