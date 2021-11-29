<template>
  <post-template :edit="true" :prueba="metodoPrueba()"/>
</template>

<script>
import PostTemplate from "./PostTemplate.vue";

export default {
  components: {
    PostTemplate,
  },
  data() {
    return {
      pruebas: "Pruebas de valor."
    }
  },
  methods: {
    metodoPrueba() {
      return 'Prueba de método.';
    }
  }
};
</script>

<style>
</style>