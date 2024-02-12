<template>
  <div class="coffee-configurator">
    <div class="coffee-configurator__row">
      <div class="coffee-configurator__col">
        <FormContainer @submit="onConfiguratorSubmit">
          <FormItem>
            <FormLabel>
              Размер:
            </FormLabel>
            <RadioButton
              v-for="item in configuratorData.size"
              :key="item.id"
              :value="item.id"
              name="size"
              :checked="configuratorState.sizeId === item.id"
              @change="onSizeChange"
            >
              {{ item.name }}
            </RadioButton>
          </FormItem>
          <FormItem>
            <FormLabel>
              Количество слотов:
            </FormLabel>
            <RadioButton
              v-for="item in configuratorData.slots"
              :key="item.id"
              :value="item.id"
              name="slots"
              :checked="configuratorState.slotsId === item.id"
              @change="onSlotsChange"
            >
              {{ item.name }}
            </RadioButton>
          </FormItem>
          <FormItem>
            <ButtonControl
              :is-loading="coffeeConfiguratorStore.getPending.add"
              type="input"
            >
              Добавить в хранилище
            </ButtonControl>
          </FormItem>
        </FormContainer>
      </div>
      <div class="coffee-configurator__col">
        <img
          v-show="configuratorState.sizeId === 0"
          class="image"
          :src="configuratorData.size[0].previewSrc"
          alt="preview"
        >
        <img
          v-show="configuratorState.sizeId === 1"
          class="image"
          :src="configuratorData.size[1].previewSrc"
          alt="preview"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCoffeeConfiguratorStore } from '@/store/useCoffeeConfiguratorStore';
import FormContainer from '@/components/UI/Form/FormContainer.vue';
import FormItem from '@/components/UI/Form/FormItem.vue';
import ButtonControl from '@/components/UI/Button/ButtonControl.vue';
import RadioButton from '@/components/UI/RadioButton/RadioButton.vue';
import FormLabel from '@/components/UI/Form/FormLabel.vue';
import useConfiguratorData from '@/composibles/useConfiguratorData';

const configuratorData = useConfiguratorData;
const coffeeConfiguratorStore = useCoffeeConfiguratorStore();
const configuratorState = coffeeConfiguratorStore.getCurrentState;

const onSizeChange = (sizeId) => {
  coffeeConfiguratorStore.updateCurrentState('sizeId', sizeId);
};
const onSlotsChange = (slotsId) => {
  coffeeConfiguratorStore.updateCurrentState('slotsId', slotsId);
};
const onConfiguratorSubmit = (e) => {
  e.preventDefault();
  coffeeConfiguratorStore.addConfiguration();
};

</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins";
@import "src/assets/styles/variables";

.coffee-configurator {
  &__row {
    display: flex;
    margin: -16px;
    flex-wrap: wrap;
    align-items: center;

    @include media-breakpoint-up('xl') {
      flex-wrap: nowrap;
    }
  }

  &__col {
    padding: 16px;
    @include media-breakpoint-up('xl') {
      width: 50%;
    }
  }
}
</style>
