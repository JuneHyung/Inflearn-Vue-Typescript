import store from '../../store';

function setRequestOptions(instance: any) {
  instance.interceptors.request.use(
    (config: any) => {
      const token = store.getters['auth/token'];
      config.headers.Authorization = token;
      return config;
    },
    (error: any) => {
      const token = error.response.headers.authorization;
      store.commit('SET_TOKEN', token);
      return Promise.reject(error.response);
    }
  );
}

function setResponseOptions(instance: any) {
  instance.interceptors.response.use(
    (config: any) => {
      const token = config.headers.authorization;
      store.commit('SET_TOKEN', token);
      return config;
    },
    (error: any) => {
      const token = error.response.headers.authorization;
      store.commit('SET_TOKEN', token);
      return Promise.reject(error.response);
    }
  );
}

export { setRequestOptions, setResponseOptions };
