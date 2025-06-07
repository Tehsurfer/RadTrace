<template>
  <div class="landing-page">
    <main>
      <h1>Welcome to the Milk Journey App</h1>
      <p>Discover the fascinating journey of milk from farm to table.</p>
      <router-link to="/milk-comparison" class="btn">Compare Milk Paths</router-link>
      <router-link to="/milk-path-map" class="btn" style="margin-left: 10px;">View Milk Journey Map</router-link>
      <router-link to="/farm-to-plate-breakdown" class="btn" style="margin-left: 10px;">View Farm to Plate Breakdown</router-link>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandingPage',
});
</script>

<style scoped>
.landing-page {
  text-align: center;
  padding: 20px;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>