<template>
  <div class="form__wrapper">
    <span class="form_title"> Тип скважины </span>
    <div class="radio_form">
      <label
        v-for="(item, index) in items"
        :key="item.id"
        :for="`radio_input_${index}`"
        class="input__wrapper"
        v-on:click="emits('change', item.id)"
      >
        <span class="radio_btn_text">
          {{ item.text }}
        </span>
        <input
          type="radio"
          name="radio_choice"
          :id="`radio_input_${index}`"
          :checked="item.checked"
          :value="item.id"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    require: true,
    default: new Array(),
    type: Array,
  },
});

const emits = defineEmits(['change']);
</script>

<style scoped>
.form__wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form_title {
  font-size: 20px;
}

.radio_form {
  display: flex;
  flex-direction: column;
  text-align: center;
}

input {
  width: 0;
  opacity: 0;
}

.radio_form {
  border-radius: 7px;
  font-size: 20px;
  color: #333;
  border: 1px solid #616161;
  overflow: hidden;
}

.input__wrapper {
  cursor: pointer;
  font-weight: 500;
  padding: 15px 25px;
  background-color: white;
}

.input__wrapper:hover {
  background-color: #3d69ed1f;
}

.input__wrapper:first-child {
  border-radius: 7px 7px 0 0;
}

.input__wrapper:last-child {
  border-radius: 0 0 7px 7px;
}

.input__wrapper:has(input[type='radio']:checked) {
  color: white;
  background-color: var(--accent-color-1);
}

.input__wrapper:has(input[type='radio']:focus) {
  box-shadow: inset 0 0 0 1px #333;
}
</style>
