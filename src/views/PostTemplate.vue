<template>
  <section>
    <h3 v-if="edit">Editar</h3>
    <h3 v-else>Crear</h3>
  </section>
</template>

<script>
export default {
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>