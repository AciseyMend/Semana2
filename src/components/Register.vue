
<template>
    <div class="container">
      <form @submit.prevent="register">
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" v-model="user.name">
        </div>
        <div class="mb-3">
          <label class="form-label">Apellido</label>
          <input type="text" class="form-control" v-model="user.surname">
        </div>
        <div class="mb-3">
          <label class="form-label">Edad</label>
          <input type="number" class="form-control" v-model="user.age">
        </div>
        <div class="mb-3">
          <label class="form-label">Correo</label>
          <input type="email" class="form-control" v-model="user.email">
        </div>
        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input type="password" class="form-control" v-model="user.password">
        </div>
        <div class="mb-3">
          <label class="form-label">Actividades</label>
          <div class="form-check" v-for="activity in activities" :key="activity">
            <input class="form-check-input" type="checkbox" :value="activity" v-model="user.activities">
            <label class="form-check-label">{{ activity }}</label>
          </div>
        </div>
        <div class="mb-3 form-check">
          <input class="form-check-input" type="checkbox" v-model="user.isAdmin">
          <label class="form-check-label">Es admin</label>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
        <button type="button" class="btn btn-secondary" @click="reset">Borrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue'
  
  export default {
    setup() {
      const user = reactive({ 
        name: '', 
        surname: '',
        age: '',
        email: '',
        password: '',
        activities: [],
        isAdmin: false
      })
  
      const activities = ['Nadar', 'Correr', 'Leer', 'Escribir']
  
      const register = () => {
        const users = JSON.parse(localStorage.getItem('users')) || []
        if (users.some(existingUser => existingUser.email === user.email)) {
        alert('Ya existe un usuario con ese correo electrónico.')
      } else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        reset()
        alert('Usuario registrado exitosamente!')
      }
      }
  
      const reset = () => {
        user.name = ''
        user.surname = ''
        user.age = ''
        user.email = ''
        user.password = ''
        user.activities = []
        user.isAdmin = false
      }
  
      return { user, activities, register, reset }
    }
  }
  </script>
  