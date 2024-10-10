import { shallowMount } from '@vue/test-utils';
import ContadorView from '@/components/ContadorView.vue';
import { createStore } from 'vuex'; // Asegúrate de importar createStore

console.log(require.resolve('@/components/ContadorView.vue')) 

describe('ContadorView.vue', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state: { contador: 0 },
      getters: { contador: (state) => state.contador },
      mutations: {
        incrementar: (state) => state.contador++,
        decrementar: (state) => {
          if (state.contador > 0) state.contador--;
        },
      },
      actions: {
        incrementar: jest.fn(), // Simula la acción incrementar
        decrementar: jest.fn(), // Simula la acción decrementar
      },
    });

    // Simula el método dispatch
    store.dispatch = jest.fn();
  });

  it('recibe valor inicial en el contador', () => {
    const wrapper = shallowMount(ContadorView, { global: { plugins: [store] } });
    expect(wrapper.text()).toContain('Contador: 0');
  });

  it('incrementa el contador', async () => {
    const wrapper = shallowMount(ContadorView, { global: { plugins: [store] } });
    
    // Simula el click en el botón de incrementar
    await wrapper.find('button.incrementar').trigger('click');

    // Verifica que dispatch haya sido llamado con la acción correcta
    expect(store.dispatch).toHaveBeenCalledWith('incrementar');
  });

  it('no disminuye el contador por debajo de 0', async () => {
    const wrapper = shallowMount(ContadorView, { global: { plugins: [store] } });

    // Simula el click en el botón de decrementar
    await wrapper.find('button.decrementar').trigger('click');

    // Verifica que dispatch haya sido llamado con la acción correcta
    expect(store.dispatch).toHaveBeenCalledWith('decrementar');
    expect(store.state.contador).toBe(0); // Verifica que el estado del contador no baje de 0
  });
});