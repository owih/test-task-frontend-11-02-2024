<template>
  <div class="form-label">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.form-label {
  &:not(:last-child) {
    margin-bottom: calc($spacer / 2);
  }
}
</style>
