<template>
  <div class="landing-page">
    <main>
      <div class="welcome-box">
        <h1>Welcome to the Milk Journey App</h1>
        <p>Do you know where your food comes from? Let's find out!</p>
        <p>Discover the fascinating journey of milk from farm to table.</p>
        <div class="btn-group">
          <router-link to="/milk-comparison" class="btn">Compare Milk Paths</router-link>
          <router-link to="/milk-path-map" class="btn">View Milk Journey Map</router-link>
          <router-link to="/farm-to-plate-breakdown" class="btn">View Farm to Plate Breakdown</router-link>
        </div>
      </div>
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

.welcome-box {
  display: inline-block;
  background: #f5f7fa;
  border: 1px solid #dbeafe;
  border-radius: 12px;
  padding: 32px 28px 24px 28px;
  margin-top: 40px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  max-width: 420px;
}

.btn-group {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  display: block;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background 0.2s;
}

.btn:hover {
  background-color: #388e3c;
}
</style>