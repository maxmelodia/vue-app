<template>
  <div id="app">
    <Cabecalho/>
    <img src="./assets/pucminas.jpg">
    <router-view/>
    <Rodape/>
  </div>
</template>

<script>
import Cabecalho from "@/components/Cabecalho.vue";
import Rodape from "@/components/Rodape.vue";

export default {
  name: 'App',
  components: { Cabecalho, Rodape }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, FontAwesome;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00060c;
  margin-top: 60px;
}
</style>
