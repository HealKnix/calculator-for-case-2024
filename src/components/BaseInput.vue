import { ref } from 'vue';
<template>
  <label :for="`input_${title}`" class="input__wrapper">
    <span class="input_title">
      {{ title }}
    </span>
    <input
      :type="type"
      :id="`input_${title}`"
      step="0.1"
      min="0"
      v-model="inputValue"
      :class="{ required: req }"
      @input="$emit('update:modelValue', inputValue)"
    />
    <span v-if="req" class="required">{{ requiredText }}</span>
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
  req: {
    required: false,
    default: false,
    type: Boolean,
  },
});

const inputValue = ref('');
const requiredText = ref('Обязательный ввод');
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

.input__wrapper > input.required {
  box-shadow: 0 0 0 2px #ff647c;
}

span.required {
  line-height: 15px;
  color: #ff647c;
  animation: opac 0.5s ease-in-out;
}

@keyframes opac {
  from {
    margin-top: -5px;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
}
</style>
