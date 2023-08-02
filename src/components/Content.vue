<template>
  <header class="header">
    <label for="pokemonInput">
      Type pokemon name or ID:
      <input type="text" id="pokemonInput" v-model="pokemonID">
    </label>
    <button class="searchButton" @click="searchPokemon">Search pokemon!</button>
  </header>

  <main class="main" v-if="Object.entries(pokemonData).length > 0">
    <section class="pokemonCard">
      <div class="nameImage">
        <h1 class="pokemonName">{{ pokemonData.name }}</h1>
        <img :src="pokemonData.sprites.front_default" :alt="pokemonData.name">
      </div>
      <ul class="type">
        <h2>Type:</h2>
        <li v-for="(type, key) in pokemonData.types" :key="key" :class="type.type.name">
          <span>{{ type.type.name }}</span>
        </li>
      </ul>
      <ul class="stats">
        <h2>Stats:</h2>
        <li v-for="(stat, key) in pokemonData.stats" :key="key">
          <span>{{ stat.stat.name}} -> {{stat.base_stat }}</span>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      pokemonData: {},
      pokemonID: '',
      pokeapi: 'https://pokeapi.co/api/v2/pokemon',
    }
  },
  methods: {
    async searchPokemon () {
      try {
        const response = await fetch(`${this.pokeapi}/${this.pokemonID}`)
        const data = await response.json()
        this.pokemonData = data
      } catch (error) {
        alert('Pokemon not found!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Changa:wght@400;700&display=swap');

.header, .main, input[type="text"], .searchButton {
  font-family: 'Changa', sans-serif;
}

.header, input[type="text"], .searchButton {
  font-size: 1.5rem;
}

.main {
  font-size: 1.2rem;
  background-color: #9ee0c9;

}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #d29387;
  color: white;

  & .searchButton {
  background-color: #1cb02b;
  color: white;
  border: none;
  margin-left: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #1c8b0a;
  }
}

  & input[type="text"] {
    border-radius: 10px;
    outline: none;
    border: none;
  }
}


.pokemonCard {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;

  & .nameImage, & .type, & .stats {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  & .nameImage {
    & .pokemonName {
      text-transform: capitalize;
    }

    & img {
      width: 200px;
      background-color: #7db0ea;
      border-radius: 50%;
    }
  }

  & .type li {
    width: 90%;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 20px;
  }

  & .stats li {
    align-self: flex-start;
  }
}

ul {
  padding: 0;
}

.type {
  & li {
    list-style: none;
    color: white;
    text-transform: uppercase;
  }
}

.stats {
  color: black;

  & li {
    list-style: none;
    text-transform: uppercase;
  }
}

.normal {
  background-color: #fdfcfc
}
.fire {
  background-color: #ff2a00
}
.water {
  background-color: #0a5cff
}
.grass {
  background-color: #e5ff00
}
.electric {
  background-color: #ffea00
}
.ice {
  background-color: #00ffea
}
.fighting {
  background-color: #bf2f27
}
.poison {
  background-color: #a040a0
}
.ground {
  background-color: #e0c068
}
.flying {
  background-color: #a890f0
}
.psychic {
  background-color: #f85888
}
.bug {
  background-color: #a8b820
}
.rock {
  background-color: #b8a038
}
.ghost {
  background-color: #705898
}
.dark {
  background-color: #705848
}
.dragon {
  background-color: c#7038f8
}
.steel {
  background-color: #b8b8d0
}
.fairy {
  background-color:  #f0b5bb
}

@media screen and (max-width: 820px) {

  .header {
    flex-direction: column;
    height: 120px;

    & .searchButton {
      width: 70%;
      margin-top: 10px;
    }
  }
  .pokemonCard {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 600px) {
  .header {
    font-size: 1rem;

    & input[type="text"] {
      font-size: 1rem;
    }

    & .searchButton {
      font-size: 1rem;
    }
  }

  .pokemonCard {
    & .stats {
      width: 90%;
    }
  }
}

@media screen and (max-width: 400px) {
  .header {
    & label {
      text-align: center;
    }
  }
}
</style>