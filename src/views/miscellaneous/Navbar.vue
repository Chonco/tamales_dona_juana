<template>
  <div class="navbar">
    <img
      src="../../assets/logo.jpg"
      alt="Logo Tamales Doña Juana"
      class="logo navbar-item"
      @click="toHome"
    />
    <div class="navbar-items">
      <span class="navbar-item link" @click="toAbout"> Acerca de </span>
      <CartIcon class="navbar-item cart-icon" />
    </div>
  </div>
</template>

<script>
import CartIcon from "./CartIcon.vue";

export default {
  components: {
    CartIcon,
  },
  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    },
    toAbout() {
      this.$router.push({ name: "About" });
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  height: 150px;
}
.navbar-items {
  display: flex;
  align-items: center;
}
.navbar-item {
  cursor: pointer;
  transition: all 0.5s;
  margin-right: 10px;
}
.navbar-item:last-child {
  margin-right: 0;
}
.navbar-item.link {
  padding: 0.5rem;
  border-radius: 8px;
}
.navbar-item.link:hover {
  background-color: #fca311;
  color: #14213d;
}
.cart-icon:hover {
  fill: #fca311;
}
</style>