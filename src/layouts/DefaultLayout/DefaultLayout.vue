<template>
  <div class="container">
    <div class="row">
      <ButtonLink :to="useUrlPages.coffeeConfigurationPage">
        Конфигуратор
      </ButtonLink>
      <ButtonLink :to="useUrlPages.coffeeConfigurationListPage">
        Хранилище
      </ButtonLink>
    </div>
    <slot />
  </div>
</template>

<script setup>
import ButtonLink from '@/components/UI/Button/ButtonLink.vue';
import useUrlPages from '@/composibles/useUrlPages';
</script>

<style lang="scss" scoped>
</style>
