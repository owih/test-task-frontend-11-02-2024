<template>
  <label
    class="radio-button"
    :for="id"
  >
    <input
      :id="id"
      :value="props.value"
      class="radio-button__input"
      type="radio"
      :name="props.name"
      :checked="checked"
      @change="onRadioChange"
    >
    <span class="radio-button__text">
      <slot />
    </span>
  </label>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['change']);

const id = ref(null);
const onRadioChange = () => {
  emit('change', props.value);
};

onMounted(() => {
  // Генерация случайного идентификатора
  id.value = 'radioInput_' + Math.random().toString(36).substr(2, 9);
});
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.radio-button {
  display: flex;
  cursor: pointer;
  position: relative;

  &:not(:last-child) {
    margin-bottom: $spacer;
  }

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;

    &:checked + span {
      background-color: mix(#fff, $primary, 84%);

      &:before {
        box-shadow: inset 0 0 0 0.4375em $primary;
      }
    }
  }

  &__text {
    display: flex;
    align-items: center;
    padding: 0.375em 0.75em 0.375em 0.375em;
    border-radius: 99em;
    transition: 0.25s ease;

    &:hover {
      background-color: mix(#fff, $primary, 84%);
    }

    &:before {
      display: flex;
      flex-shrink: 0;
      content: "";
      background-color: #fff;
      width: 1.5em;
      height: 1.5em;
      border-radius: 50%;
      margin-right: 0.375em;
      transition: 0.25s ease;
      box-shadow: inset 0 0 0 0.125em $primary;
    }
  }
}
</style>
