export default [
  {
    step: "Grazing pastures or feedlots for dairy cows",
    image: "cow-1.png",
    waterUse: 850,
    cumulativeWaterUse: 850,
    electricityUse: 0.5,
    emissions: 2.4,
    landUse: 1.2,
    harmfulToxins: "Medium (manure runoff, antibiotics)"
  },
  {
    step: "Extract milk from cows",
    image: "cow-2.png",
    waterUse: 6,
    cumulativeWaterUse: 856,
    electricityUse: 0.15,
    emissions: 0.1,
    landUse: 0.01,
    harmfulToxins: "Low (detergents for cleaning)"
  },
  {
    step: "Heat treatment (~72°C for 15 sec) to kill pathogens",
    image: "cow-3.png",
    waterUse: 1,
    cumulativeWaterUse: 857,
    electricityUse: 0.05,
    emissions: 0.02,
    landUse: 0,
    harmfulToxins: "Low"
  },
  {
    step: "Homogenization Breaks fat molecules for smooth texture",
    image: "cow-4.png",
    waterUse: 0.2,
    cumulativeWaterUse: 857.2,
    electricityUse: 0.02,
    emissions: 0.01,
    landUse: 0,
    harmfulToxins: "Very Low"
  },
  {
    step: "Filtration May include microfiltration or reverse osmosis to extend shelf life or standardize fat:protein content",
    image: "cow-5.png",
    waterUse: 5,
    cumulativeWaterUse: 862.2,
    electricityUse: 0.3,
    emissions: 0.03,
    landUse: 0,
    harmfulToxins: "Low (filter disposal)"
  },
  {
    step: "Bottling Done at processing plant into plastic",
    image: "cow-6.png",
    waterUse: 3,
    cumulativeWaterUse: 865.2,
    electricityUse: 0.2,
    emissions: 0.08,
    landUse: 0.005,
    harmfulToxins: "Medium (microplastics, packaging waste)"
  },
  {
    step: "Bottling Done at processing plant into plastic",
    image: "cow-7.png",
    waterUse: 0,
    cumulativeWaterUse: 865.2,
    electricityUse: null,
    emissions: null,
    landUse: null,
    harmfulToxins: null
  },
  {
    step: "Cold Chain Logistics Refrigerated trucks deliver to distribution centers, retailers, and supermarkets",
    image: "cow-8.png",
    waterUse: 1,
    cumulativeWaterUse: 866.2,
    electricityUse: 0.5,
    emissions: 0.3,
    landUse: 0.01,
    harmfulToxins: "Medium (coolants, fuel leaks)"
  }
];
