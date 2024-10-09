<template>
  <div class="contenedor-contador">
    <p>Contador: {{ contador }}</p>
    <button class="incrementar" @click="incrementar">Incrementar</button>
    <button class="decrementar" @click="decrementar">Disminuir</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import store from '../store/index.js'; // Importa el store

export default {
  name: "ContadorView",
  computed: {
    contador() {
      return store.state.contador; // Accede al contador del store
    }
  },
  methods: {
    ...mapMutations(['incrementar', 'decrementar']), // Conecta las mutaciones
  },
};
</script>

<style>
p {
  font-size: 30px;
  color: rgb(0, 208, 255);
}
.incrementar {
  background-color: rgb(100, 0, 128);
  padding: 10px;
  border-radius: 15px;
  margin-right: 30px;
  color: white;
}
.decrementar {
  background-color: red;
  padding: 10px;
  border-radius: 15px;
  margin-left: 30px;
  color: white;
}
</style>
