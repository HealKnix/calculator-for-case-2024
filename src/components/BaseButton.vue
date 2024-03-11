<template>
  <button>
    <span class="btn_text">
      {{ text }}
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    require: true,
    default: '',
    type: String,
  },
});
</script>

<style scoped>
button {
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 7px;
  margin-top: 15px;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background-color: var(--accent-color-1);
}

button:hover {
  background-color: #2c4eb5;
}

button:focus {
  outline: 2px solid #333;
}
</style>
