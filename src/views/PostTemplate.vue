<template>
  <section>
    <h3 v-if="edit">Editar</h3>
    <h3 v-else>Crear</h3>

    <span> {{ prueba }} </span>
  </section>
</template>

<script>
export default {
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
    prueba: {
      type: String,
      default: "hola",
    },
  },
};
</script>

<style>
</style>