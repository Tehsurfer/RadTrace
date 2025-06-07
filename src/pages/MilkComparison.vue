<template>
  <div class="milk-comparison">
    <h1>From Farm to Table: Milk Comparison</h1>
    <section>
      <h2>Environmental Impact Comparison</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>
              <el-select v-model="selectedMilk1" placeholder="Select first milk" style="width: 180px;">
                <el-option v-for="milk in milkTypes" :key="milk" :label="milk" :value="milk" />
              </el-select>
            </th>
            <th>
              <el-select v-model="selectedMilk2" placeholder="Select second milk" style="width: 180px;">
                <el-option v-for="milk in milkTypes" :key="milk" :label="milk" :value="milk" />
              </el-select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="metric in metrics" :key="metric.key">
            <td>{{ metric.label }}</td>
            <td>
              <div class="bar-container">
                <div
                  class="bar"
                  :style="{ width: getBarWidth(selectedMilk1, metric.key) + '%', background: metric.color }"
                ></div>
                <span class="bar-label">{{ getValue(selectedMilk1, metric.key) }} {{ metric.unit }}</span>
              </div>
            </td>
            <td>
              <div class="bar-container">
                <div
                  class="bar"
                  :style="{ width: getBarWidth(selectedMilk2, metric.key) + '%', background: metric.color }"
                ></div>
                <span class="bar-label">{{ getValue(selectedMilk2, metric.key) }} {{ metric.unit }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { ElSelect, ElOption } from 'element-plus';
import 'element-plus/dist/index.css';

const milkData = {
  "Cow's Milk":   { co2: 3.2, land: 8.9, water: 628, energy: 5.0 },
  "Almond Milk":  { co2: 0.7, land: 0.5, water: 371, energy: 3.2 },
  "Oat Milk":     { co2: 0.9, land: 0.8, water: 48,  energy: 2.8 },
  "Goat's Milk":  { co2: 2.4, land: 7.0, water: 553, energy: 4.2 }
};

const metrics = [
  { key: 'co2', label: 'CO₂ Emissions', unit: 'kg/L', color: '#4caf50' },
  { key: 'land', label: 'Land Use', unit: 'm²/L', color: '#2196f3' },
  { key: 'water', label: 'Water Use', unit: 'L/L', color: '#00bcd4' },
  { key: 'energy', label: 'Energy Use', unit: 'MJ/L', color: '#ff9800' }
];

export default defineComponent({
  name: 'MilkComparison',
  components: { ElSelect, ElOption },
  setup() {
    const milkTypes = Object.keys(milkData);
    const selectedMilk1 = ref(milkTypes[0]);
    const selectedMilk2 = ref(milkTypes[1]);

    // Find max for each metric for bar scaling
    const maxValues = {};
    metrics.forEach(metric => {
      maxValues[metric.key] = Math.max(...milkTypes.map(milk => milkData[milk][metric.key]));
    });

    function getValue(milk, key) {
      return milkData[milk][key];
    }

    function getBarWidth(milk, key) {
      return (milkData[milk][key] / maxValues[key]) * 100;
    }

    return {
      milkTypes,
      selectedMilk1,
      selectedMilk2,
      metrics,
      getValue,
      getBarWidth
    };
  }
});
</script>

<style scoped>
.milk-comparison {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.comparison-table th,
.comparison-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.bar-container {
  display: flex;
  align-items: center;
}

.bar {
  height: 20px;
  border-radius: 4px;
  margin-right: 10px;
  min-width: 10px;
  transition: width 0.3s;
}

.bar-label {
  font-size: 0.95em;
  color: #333;
}
</style>