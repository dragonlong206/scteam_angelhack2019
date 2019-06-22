import axios from 'axios';
import config from '../../config/index';
import i18n from '../../languages/i18n';
// import Config from 'react-native-config'

// config default for axios fetch api
axios.defaults.baseURL = config.rootUrlApi;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.response.use(undefined, function(err) {
  return new Promise(function(resolve, reject) {
    if (err.response) {
      throw err.response.data;
    } else if (err.request) {
      const error = new Error(i18n.t('app_network_disconnect'));
      throw error;
    }
  });
});

export const checkStatus = response => {
  if (response.status >= 200 && response.status <= 400) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

export const parseJSON = response => {
  return response.data;
};
