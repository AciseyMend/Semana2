<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="submit">
        <div>
          <label for="email">Correo Electrónico:</label>
          <input id="email" v-model="email" type="email" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input id="password" v-model="password" type="password" required>
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </template>
  
  <script>
  import router from '@/router'
import { ref } from 'vue'
  
  export default {
    setup() {
      const email = ref('')
      const password = ref('')
  
      const submit = () => {
        const users = JSON.parse(localStorage.getItem('users')) || []
        const user = users.find(user => user.email === email.value && user.password === password.value)
        if (user) {
          alert('Inicio de sesión exitoso')
          router.push('/content')
          // Aquí puedes redirigir al usuario o hacer cualquier otra acción
        } else {
          alert('Correo o contraseña incorrecta')
        }
      }
  
      return { email, password, submit }
    }
  }
  </script>
  