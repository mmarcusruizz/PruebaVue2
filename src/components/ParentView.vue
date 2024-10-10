<template>
    <div>
      <Child @sendData="receiveData" />
      <p>Dato recibido: {{ receivedData }}</p>
    </div>
  </template>
  
  <script>
  import Child from './ChildView.vue'
  
  export default {
    components: {
      Child
    },
    data() {
      return {
        receivedData: ''
      }
    },
    methods: {
      receiveData(data) {
        this.receivedData = data
      }
    }
  }
  </script>