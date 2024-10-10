<template>
    <div>
      <input type="text" v-model="inputValue" />
      <button @click="emitData">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      emitData() {
        this.$emit('sendData', this.inputValue)
      }
    }
  }
  </script>