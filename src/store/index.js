import { createStore } from 'vuex';
import ContadorView from '@/components/ContadorView.vue';

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

