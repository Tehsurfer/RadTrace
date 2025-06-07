<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>