import useUrlBackendPaths from '@/composibles/useUrlBackendPaths';
import Api from '@/api/api.js';

const configurationPathUrl = useUrlBackendPaths.configuration;

export const getConfigurationsApi = () => {
  const path = `${configurationPathUrl}/`;
  return Api.request('get', path);
};

export const changeConfigurationCountApi = (configuration, count) => {
  const data = { configuration, count };
  const path = `${configurationPathUrl}/`;
  return Api.request('post', path, data);
};

export const addConfigurationApi = ({ sizeId, slotsId }) => {
  const data = { sizeId, slotsId };
  const path = `${configurationPathUrl}/`;
  return Api.request('put', path, data);
};

export const deleteConfigurationApi = (configuration) => {
  const path = `${configurationPathUrl}?sizeId=${configuration.sizeId}&slotsId=${configuration.slotsId}`;
  return Api.request('delete', path);
};
