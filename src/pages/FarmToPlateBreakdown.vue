<template>
  <div class="farm-to-plate-breakdown">
    <h1>Farm to Plate Breakdown</h1>
    <el-select v-model="selectedMilk" placeholder="Select milk type" style="width: 220px; margin-bottom: 24px;">
      <el-option v-for="milk in milkTypes" :key="milk" :label="milk" :value="milk" />
    </el-select>
    <div v-if="selectedMilk">
      <h2>{{ selectedMilk }}</h2>
      <el-carousel
        height="400px"
        indicator-position="outside"
        style="margin-bottom: 32px;"
        @change="onSlideChange"
        ref="carouselRef"
      >
        <el-carousel-item v-for="(step, idx) in steps[selectedMilk]" :key="idx">
          <div class="carousel-content">
            <img
              :src="getImagePath(selectedMilk, idx)"
              :alt="step.name"
              class="step-image"
            />
            <div class="step-caption">
              <strong>{{ step.name }}</strong>
              <div>{{ step.description }}</div>
              <div class="step-metrics">
                <div v-for="metric in metrics" :key="metric.key" class="step-metric-row">
                  <span class="step-metric-label">{{ metric.label }}:</span>
                  <span class="step-metric-value" :style="{ color: metric.color }">
                    {{ formatValue(step[metric.key]) }} {{ metric.unit }}
                  </span>
                </div>
                <div v-if="step.harmfulToxins" class="step-metric-row">
                  <span class="step-metric-label">Harmful Toxins:</span>
                  <span class="step-metric-value" style="color:#888">{{ step.harmfulToxins }}</span>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="cumulative-bars" v-if="cumulative && metrics.length">
        <div v-for="metric in metrics" :key="metric.key" class="bar-row">
          <span class="bar-label">{{ metric.label }}:</span>
          <div class="bar-outer">
            <div
              class="bar-inner"
              :style="{
                width: getBarWidth(metric.key) + '%',
                background: metric.color
              }"
            ></div>
          </div>
          <span class="bar-value">
            {{ formatValue(cumulative[metric.key]) }} {{ metric.unit }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, watch, nextTick } from 'vue';
import { ElSelect, ElOption, ElCarousel, ElCarouselItem } from 'element-plus';
import cowsMilkProcessData from '../data/cowsMilkProcessData';
import oatMilkProcessData from '../data/oatMilkProcessData';

// Use imported data for steps
const steps = {
  "Cow's Milk": cowsMilkProcessData,
  "Oat Milk": oatMilkProcessData
};

const metrics = [
  { key: 'waterUse', label: 'Water Use', unit: 'L/kg', color: '#2196f3' },
  { key: 'electricityUse', label: 'Electricity Use', unit: 'kWh/kg', color: '#ff9800' },
  { key: 'emissions', label: 'Emissions', unit: 'kg CO₂e/kg', color: '#e91e63' },
  { key: 'landUse', label: 'Land Use', unit: 'm²/kg', color: '#4caf50' }
];

export default defineComponent({
  name: 'FarmToPlateBreakdown',
  components: { ElSelect, ElOption, ElCarousel, ElCarouselItem },
  setup() {
    const milkTypes = Object.keys(steps);
    const selectedMilk = ref(milkTypes[0]);
    const currentStep = ref(0);
    const carouselRef = ref(null);

    // Precompute totals for each metric for each milk type
    const totals = {};
    for (const milk of milkTypes) {
      const stepList = steps[milk];
      totals[milk] = {};
      metrics.forEach(metric => {
        totals[milk][metric.key] = stepList.reduce((sum, s) => sum + (s[metric.key] || 0), 0);
      });
    }

    watch(selectedMilk, () => {
      currentStep.value = 0;
      nextTick(() => {
        if (carouselRef.value && carouselRef.value.setActiveItem) {
          carouselRef.value.setActiveItem(0);
        }
      });
    });

    function onSlideChange(idx) {
      // If at the end, reset to 0 (loop)
      if (idx === 0 && currentStep.value === steps[selectedMilk.value].length - 1) {
        currentStep.value = 0;
      } else {
        currentStep.value = idx;
      }
    }

    function getImagePath(milk, idx) {
      const folder = milkTypeToFolder(milk);
      const stepList = steps[milk];
      const step = stepList && stepList[idx];
      const fallback = require('@/images/placeholder.png');
      if (!step || !step.image) {
        return fallback;
      }
      const imageFile = step.image;
      try {
        return require(`@/images/${folder}/${imageFile}`);
      } catch (e) {
        return fallback;
      }
    }

    function milkTypeToFolder(milkType) {
      return milkType.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-');
    }

    // Compute cumulative values up to current step, show first step's values if at first step
    const cumulative = computed(() => {
      const stepList = steps[selectedMilk.value];
      if (!stepList || !stepList.length) return {};
      // If at first step, show only first step's values
      if (currentStep.value === 0) {
        const s = stepList[0];
        return {
          waterUse: s.waterUse || 0,
          electricityUse: s.electricityUse || 0,
          emissions: s.emissions || 0,
          landUse: s.landUse || 0
        };
      }
      let water = 0, land = 0, elec = 0, emis = 0;
      for (let i = 0; i <= currentStep.value && i < stepList.length; i++) {
        const s = stepList[i];
        water += s.waterUse || 0;
        land += s.landUse || 0;
        elec += s.electricityUse || 0;
        emis += s.emissions || 0;
      }
      return {
        waterUse: water,
        electricityUse: elec,
        emissions: emis,
        landUse: land
      };
    });

    // Use precomputed totals for bar scaling
    function getBarWidth(key) {
      const total = totals[selectedMilk.value][key] || 1;
      const val = cumulative.value[key] || 0;
      return Math.min((val / total) * 100, 100);
    }

    function formatValue(val) {
      if (val === null || val === undefined || val === '—') return '—';
      if (typeof val === 'number') return val % 1 === 0 ? val : val.toFixed(2);
      return val;
    }

    return {
      milkTypes,
      selectedMilk,
      steps,
      getImagePath,
      currentStep,
      onSlideChange,
      metrics,
      cumulative,
      getBarWidth,
      formatValue,
      carouselRef
    };
  }
});
</script>

<style scoped>
.farm-to-plate-breakdown {
  padding: 24px;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 18px;
}

.steps-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 28px;
}

.steps-table th,
.steps-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.steps-table th {
  background: #f5f5f5;
}

.steps-table tr:nth-child(even) {
  background: #fafafa;
}

.carousel-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
}

.step-image {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.step-caption {
  text-align: center;
  font-size: 1.1em;
}

.step-metrics {
  margin-top: 10px;
  text-align: left;
}
.step-metric-row {
  display: flex;
  align-items: center;
  margin-bottom: 2px;
}
.step-metric-label {
  width: 130px;
  font-size: 0.98em;
  font-weight: 500;
}
.step-metric-value {
  font-size: 0.98em;
  margin-left: 6px;
}

.cumulative-bars {
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.bar-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.bar-label {
  width: 140px;
  font-weight: bold;
  font-size: 1em;
}
.bar-outer {
  flex: 1;
  background: #eee;
  border-radius: 6px;
  height: 22px;
  margin: 0 12px;
  overflow: hidden;
}
.bar-inner {
  height: 100%;
  border-radius: 6px;
  transition: width 0.4s;
}
.bar-value {
  width: 80px;
  text-align: right;
  font-size: 1em;
}
</style>
