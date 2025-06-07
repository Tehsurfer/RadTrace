<template>
  <div class="milk-path-map">
    <h2>Milk Journey Map (NZ)</h2>
    <div id="map" style="height: 500px;"></div>
    <router-link to="/" class="btn">Back to Home</router-link>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon paths
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default {
  name: 'MilkPathMap',
  setup() {
    let map = null;
    let polyline = null;

    onMounted(async () => {

      // Center on New Zealand
      map = L.map('map').setView([-41.2, 174.7], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Example: Path from a farm to a city (Hamilton to Auckland)
      const path = [
        [-37.7833, 175.2833], // Hamilton (farm)
        [-40.3523, 175.6082], // Palmerston North (processing plant)
        [-36.8485, 174.7633], // Auckland (customer)
      ];
      polyline = L.polyline(path, { color: 'blue' }).addTo(map);

      // Add markers
      L.marker(path[0]).addTo(map).bindPopup('Farm (Hamilton)').openPopup();
      L.marker(path[1]).addTo(map).bindPopup('Processing Plant (Palmerston North)').openPopup();
      L.marker(path[2]).addTo(map).bindPopup('Customer (Auckland)').openPopup();
    });

    onBeforeUnmount(() => {
      if (map) {
        map.remove();
      }
    });
  }
};
</script>

<style scoped>
.milk-path-map {
  text-align: center;
  padding: 20px;
}
#map {
  width: 100%;
  max-width: 800px;
  margin: 0 auto 20px auto;
  border: 2px solid #4CAF50;
  border-radius: 8px;
}
.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
