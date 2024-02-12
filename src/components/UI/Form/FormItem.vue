<template>
  <div class="form-item">
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.form-item {
  &:not(:last-child) {
    margin-bottom: calc($spacer * 2);
  }
}
</style>
