<template>
  <button
    :class="getBlockClass"
    :type="props.type"
    @click="onButtonClick"
  >
    <span class="button-control__text">
      <slot />
    </span>
    <span class="button-control__loader">
      <LoaderCircle />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import LoaderCircle from '@/components/UI/LoaderCircle/LoaderCircle.vue';

const emit = defineEmits(['click']);
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
const onButtonClick = () => {
  emit('click');
};

const getBlockClass = computed(() => {
  return {
    'button-control': true,
    'button-control_loading': props.isLoading
  };
});
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.button-control {
  position: relative;
  padding: 10px 20px;
  color: #fff;
  background-color: $primary;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: $transition-background;

  &_loading {
    pointer-events: none;
  }

  &_loading & {
    &__text {
      opacity: 0;
    }

    &__loader {
      display: block;
    }
  }

  &__loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  &:hover {
    background-color: $secondary;
  }

  &:active {
    background-color: $active;
  }
}
</style>
