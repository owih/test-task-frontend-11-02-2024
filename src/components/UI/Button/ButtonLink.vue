<template>
  <router-link
    :to="props.to"
    class="button-link"
  >
    <slot />
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.button-link {
  position: relative;
  padding: 10px 20px;
  color: #fff;
  background-color: $primary;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: $transition-background;

  &:hover {
    background-color: $secondary;
  }

  &:active {
    background-color: $active;
  }
}
</style>
