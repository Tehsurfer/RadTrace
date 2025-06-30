<template>
  <header>
    <nav>
      <button class="menu-toggle" @click="showMenu = !showMenu">
        <span v-if="!showMenu">&#9776;</span>
        <span v-else>&#10005;</span>
      </button>
      <ul :class="{ open: showMenu }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/milk-comparison">Milk Comparison</router-link></li>
        <li><router-link to="/milk-path-map">Milk Journey Map</router-link></li>
        <li><router-link to="/farm-to-plate-breakdown">Farm to Plate Breakdown</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const showMenu = ref(false);
    return { showMenu };
  }
});
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
}

nav {
  position: relative;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 2;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline;
  margin-right: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: #007bff;
}

nav ul li a:hover {
  text-decoration: underline;
}

/* Mobile styles */
@media (max-width: 600px) {
  .menu-toggle {
    display: block;
    position: absolute;
    right: 0.5rem;
    top: -1.5rem;
    z-index: 2;
  }
  nav ul {
    display: none;
    flex-direction: column;
    background: #f8f9fa;
    position: absolute;
    top: 3.2rem;
    left: 0;
    width: 100%;
    border-top: 1px solid #e0e0e0;
    z-index: 1;
  }
  nav ul.open {
    display: flex;
  }
  nav ul li {
    display: block;
    margin: 1rem 0;
    text-align: left;
    margin-left: 1.5rem;
  }
}
</style>