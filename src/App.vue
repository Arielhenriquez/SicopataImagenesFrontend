<script setup>
</script>

<template>
  <header>
    <h3> Sicopata imagenes</h3>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Upload image</router-link> |
      <router-link to="/about" class="navbar-brand">Get image</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

header {
  background: rgb(5, 37, 91);
  color: #fff;
  padding: 8px;
  text-align: left;
  font-size: 16px;
}
</style>
