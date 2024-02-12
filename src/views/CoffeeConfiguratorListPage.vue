<template>
  <div>
    <h1>
      Список конфигураций
    </h1>
    <div class="row row_column">
      <div v-if="coffeeConfiguratorStore.getPending.get">
        <LoaderCircle />
      </div>
      <div
        v-if="coffeeConfiguratorStore.getConfigurationsList.length && !coffeeConfiguratorStore.getPending.get"
        class="row row_column"
      >
        <CoffeeConfiguratorItem
          v-for="configuration in coffeeConfiguratorStore.getConfigurationsList"
          :key="configuration.id"
          :configuration="configuration"
        />
      </div>
      <div v-if="!coffeeConfiguratorStore.getConfigurationsList.length && !coffeeConfiguratorStore.getPending.get">
        Список пуст
      </div>
      <div>
        Для добавления конфигурации в список вы можете перейти на страницу с формой создания конфигурации
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCoffeeConfiguratorStore } from '@/store/useCoffeeConfiguratorStore';
import CoffeeConfiguratorItem from '@/components/CoffeeConfigurator/CoffeeConfiguratorItem.vue';
import { onMounted } from 'vue';
import LoaderCircle from '@/components/UI/LoaderCircle/LoaderCircle.vue';

const coffeeConfiguratorStore = useCoffeeConfiguratorStore();

onMounted(() => {
  coffeeConfiguratorStore.getConfigurations();
});
</script>
