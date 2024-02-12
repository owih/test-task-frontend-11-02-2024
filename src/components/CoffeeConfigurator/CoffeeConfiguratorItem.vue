<template>
  <div class="coffee-configuration-item">
    <div class="coffee-configuration-item__info">
      <div>
        Размер: {{ useConfiguratorData.size[props.configuration.sizeId].name }}
      </div>
      <div>
        Количество напитков: {{ useConfiguratorData.slots[props.configuration.slotsId].name }}
      </div>
      <div>
        Число в хранилище: {{ props.configuration.count }}
      </div>
    </div>
    <div class="row">
      <ButtonControl
        :is-loading="coffeeConfiguratorStore.getPending.count"
        @click="onIncreaseClick"
      >
        Увеличить количество
      </ButtonControl>
      <ButtonControl
        :is-loading="coffeeConfiguratorStore.getPending.count"
        @click="onDecreaseClick"
      >
        Уменьшить количество
      </ButtonControl>
      <ButtonControl
        :is-loading="coffeeConfiguratorStore.getPending.delete"
        @click="onDeleteClick"
      >
        Удалить
      </ButtonControl>
    </div>
  </div>
</template>

<script setup>
import useConfiguratorData from '../../composibles/useConfiguratorData';
import ButtonControl from '@/components/UI/Button/ButtonControl.vue';
import { useCoffeeConfiguratorStore } from '@/store/useCoffeeConfiguratorStore';

const props = defineProps({
  configuration: {
    type: Object,
    required: true,
  },
});

const coffeeConfiguratorStore = useCoffeeConfiguratorStore();

const onIncreaseClick = () => {
  coffeeConfiguratorStore.changeConfigurationCount(props.configuration, props.configuration.count + 1);
};
const onDecreaseClick = () => {
  coffeeConfiguratorStore.changeConfigurationCount(props.configuration, props.configuration.count - 1);
};
const onDeleteClick = () => {
  coffeeConfiguratorStore.deleteConfiguration(props.configuration);
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.coffee-configuration-item {
  background-color: #fff;
  padding: calc($spacer * 2);
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &__info {
    margin-bottom: calc($spacer * 2);
  }
}
</style>
