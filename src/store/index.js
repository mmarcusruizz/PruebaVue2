import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      contador: 0,
    };
  },
  mutations: {
    incrementar(state) {
      state.contador++;
    },
    decrementar(state) {
      state.contador--;
    },
  },
});

