import Vue from 'vue';
import Vuex from 'vuex';
import {state} from './state'
// import getters from './getters.js';
// import mutations from './mutations.js';
// import actions from './actions.js';

Vue.use(Vuex);

const store = {
  state: state,
}

export default new Vuex.Store(store);


// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: []
//   },
//   getters,
//   mutations,
//   actions
// });
