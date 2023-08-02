<template>
  <div id="app">
    <nav>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/content">Content</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Aquí puedes agregar estilos CSS globales para tu aplicación */
</style>
