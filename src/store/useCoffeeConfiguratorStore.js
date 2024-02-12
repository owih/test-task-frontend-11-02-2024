import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import {
  addConfigurationApi, changeConfigurationCountApi, deleteConfigurationApi, getConfigurationsApi,
} from '@/api/useConfigurationApi.js';

export const useCoffeeConfiguratorStore = defineStore('configuration-store', () => {
  const currentState = reactive({
    sizeId: 0,
    slotsId: 0,
  });
  const configurationsList = ref([]);
  const pending = reactive({
    get: false,
    add: false,
    delete: false,
    count: false,
  });


  const getCurrentState = computed(() => currentState);
  const getConfigurationsList = computed(() => configurationsList.value);
  const getPending = computed(() => pending);

  const updateCurrentState = (updateParam, updateValue) => {
    currentState[updateParam] = updateValue;
  };

  const getConfigurations = async () => {
    try {
      pending.get = true;

      const { data } = await getConfigurationsApi();
      configurationsList.value = data.data;

      console.log('success');
    } catch (e) {
      console.log(e, 'error');
    } finally {
      pending.get = false;
    }
  };

  const addConfiguration = async () => {
    try {
      pending.add = true;

      await addConfigurationApi(currentState);

      console.log('success');
    } catch (e) {
      console.log(e, 'error');
    } finally {
      pending.add = false;
    }
  };

  const deleteConfiguration = async (configuration) => {
    try {
      pending.delete = true;

      await deleteConfigurationApi(configuration);
      configurationsList.value = configurationsList.value.filter((item) => item.id !== configuration.id);


      console.log('success');
    } catch (e) {
      console.log(e, 'error');
    } finally {
      pending.delete = false;
    }
  };

  const changeConfigurationCount = async (configuration, count) => {
    try {
      pending.count = true;

      const { data } = await changeConfigurationCountApi(configuration, count);
      const updatedItemIndex = configurationsList.value.findIndex((item) => item.id === configuration.id);

      if (data.data) {
        configurationsList.value.splice(updatedItemIndex, 1, data.data);
      }

      if (!data.data) {
        configurationsList.value.splice(updatedItemIndex, 1);
      }

      console.log('success');
    } catch (e) {
      console.log(e, 'error');
    } finally {
      pending.count = false;
    }
  };

  return {
    getCurrentState,
    getPending,
    getConfigurationsList,
    updateCurrentState,
    addConfiguration,
    deleteConfiguration,
    getConfigurations,
    changeConfigurationCount,
  };
});
