<template>
  <form @submit="onFormSubmit">
    <slot />
  </form>
</template>

<script setup>
const emit = defineEmits(['submit']);
const onFormSubmit = (e) => {
  emit('submit', e);
};
</script>

<style lang="scss" scoped>

</style>
