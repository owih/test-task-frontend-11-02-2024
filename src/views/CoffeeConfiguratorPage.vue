<template>
  <div>
    <h1>
      {{ getCurrentConfigurationTitle }}
    </h1>
    <CoffeeConfiguratorForm />
  </div>
</template>

<script setup>
import CoffeeConfiguratorForm from '@/components/CoffeeConfigurator/CoffeeConfiguratorForm.vue';
import { computed } from 'vue';
import { useCoffeeConfiguratorStore } from '@/store/useCoffeeConfiguratorStore';
import useConfiguratorData from '@/composibles/useConfiguratorData';

const coffeeConfiguratorStore = useCoffeeConfiguratorStore();
const configuratorState = coffeeConfiguratorStore.getCurrentState;
const configuratorData = useConfiguratorData;

const getCurrentConfigurationTitle = computed(() => {
  return `Кофемашина: размер ${configuratorData['size'][configuratorState.sizeId].name}, количество напитков ${configuratorData['slots'][configuratorState.slotsId].name}`;
});
</script>
