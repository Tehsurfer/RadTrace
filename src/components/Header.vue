<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/milk-comparison">Milk Comparison</router-link></li>
        <li><router-link to="/milk-path-map">Milk Journey Map</router-link></li>
        <li><router-link to="/farm-to-plate-breakdown">Farm to Plate Breakdown</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
}

nav ul {
  list-style-type: none;
  padding: 0;
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
</style>