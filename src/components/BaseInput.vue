import { ref } from 'vue';
<template>
  <label :for="`input_${title}`" class="input__wrapper">
    <span class="input_title">
      {{ title }}
    </span>
    <input
      :type="type"
      :id="`input_${title}`"
      placeholder="Введите..."
      step="0.1"
      min="0"
      v-model="inputValue"
      @input="$emit('update:modelValue', inputValue)"
    />
  </label>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    require: false,
    default: '',
    type: String,
  },
  type: {
    required: false,
    default: 'text',
    type: String,
  },
});

const inputValue = ref('');
</script>

<style scoped>
.input__wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input_title {
  font-size: 20px;
}

.input__wrapper > input {
  border: none;
  outline: none;
  box-shadow: 0 0 0 1px #616161;
  border-radius: 7px;
  height: 44px;
  padding: 13px 10px;
  font-size: 20px;
  transition: box-shadow 0.15s ease-in-out;
}

.input__wrapper > input:focus {
  box-shadow: 0 0 0 2px var(--accent-color-1);
}

.input__wrapper > input::placeholder {
  color: #6161615f;
}
</style>
