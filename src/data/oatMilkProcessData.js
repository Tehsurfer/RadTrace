export default [
  {
    step: "Used for cultivating oats—typically rainfed but requires soil prep, crop rotation, and harvesting",
    image: "oat-1.png",
    waterUse: 30,
    electricityUse: 0.1,
    emissions: 0.05,
    landUse: 0.8,
    harmfulToxins: "Low–Medium – Fertilizer and pesticide runoff can contaminate waterways and affect local biodiversity if not well-managed. Herbicides are sometimes used in non-organic oat farms."
  },
  {
    step: "Cultivation Sowing > Growing → Harvesting oats",
    image: "oat-2.png",
    waterUse: 15,
    electricityUse: 0.05,
    emissions: 0.03,
    landUse: 0.5,
    harmfulToxins: "Low – Diesel emissions and soil compaction from tractors can affect air quality and soil health. However, much lower than animal farming."
  },
  {
    step: "Post-Harvest Drying and storage of whole oat grains",
    image: "oat-3.png",
    waterUse: 5,
    electricityUse: 0.2,
    emissions: 0.01,
    landUse: 0.01,
    harmfulToxins: "Very Low – Minimal risk. Some energy sources may generate emissions, but toxins are not typically released unless there’s mold in poorly ventilated silos."
  },
  {
    step: "Pre-processing Oats are cleaned, dehulled, and rolled or milled",
    image: "oat-4.png",
    waterUse: 2,
    electricityUse: 0.15,
    emissions: 0.02,
    landUse: 0.005,
    harmfulToxins: "Low – Uses detergents and water for equipment cleaning. Wastewater may carry trace residues but is usually treated."
  },
  {
    step: "Mechanical and Enzymatic",
    image: "oat-5.png",
    waterUse: 1,
    electricityUse: 0.25,
    emissions: 0.03,
    landUse: 0.002,
    harmfulToxins: "Low – Enzymes are food-grade and safe. Risk comes from wastewater containing organic residues if discharged untreated."
  },
  {
    step: "Homogenization Stabilizes emulsion (to stop oat particles from separating)",
    image: "oat-6.png",
    waterUse: 0,
    electricityUse: 0.1,
    emissions: 0.01,
    landUse: 0,
    harmfulToxins: "Very Low – No harmful substances directly used. Energy-related emissions may occur, but the process itself is clean."
  },
  {
    step: "Pasteurization Heat treatment to kill microbes and extend shelf-life",
    image: "oat-7.png",
    waterUse: 0,
    electricityUse: 0.2,
    emissions: 0.02,
    landUse: 0,
    harmfulToxins: "Very Low – Heat-based. No added chemicals. Just energy consumption; little to no toxin risk."
  },
  {
    step: "Fortification Nutrients (e.g. calcium, vitamin B12, D) added to match dairy profiles",
    image: "oat-8.png",
    waterUse: 0,
    electricityUse: 0.05,
    emissions: 0.01,
    landUse: 0,
    harmfulToxins: "Low – Nutrient additives (e.g., calcium, B12) are regulated for food safety. Risk lies in sourcing and overuse of synthetic versions."
  },
  {
    step: "Additives May include salt, oil (e.g. rapeseed), stabilizers, natural flavors.",
    image: "oat-9.png",
    waterUse: 0.1,
    electricityUse: 0.05,
    emissions: 0.01,
    landUse: 0,
    harmfulToxins: "Medium – Some emulsifiers, stabilizers, and flavorings may be ultra-processed or allergenic. Potential sensitivity concerns; oil (e.g., rapeseed) can be industrially refined."
  },
  {
    step: "Filtration Removes insoluble fiber and ensures smooth texture",
    image: "oat-10.png",
    waterUse: 0.5,
    electricityUse: 0.1,
    emissions: 0.005,
    landUse: 0,
    harmfulToxins: "Low – Uses physical filters; minor risk from disposal of micro-filter materials if not biodegradable."
  },
  {
    step: "Bottling Into aseptic tetra pack cartons",
    image: "oat-11.png",
    waterUse: 0.5,
    electricityUse: 0.3,
    emissions: 0.02,
    landUse: 0.01,
    harmfulToxins: "Medium – Aseptic Tetra Pak cartons are lined with plastics and aluminum. Microplastics can enter the waste stream, and packaging waste is a key issue if not recycled."
  },
  {
    step: "Distribution Via ambient supply chain",
    image: "oat-12.png",
    waterUse: 1,
    electricityUse: 0.4,
    emissions: 0.04,
    landUse: 0.01,
    harmfulToxins: "Medium – Long-distance transport can lead to fuel leaks, brake/tire particulate pollution, and refrigerant emissions if chilled logistics are used."
  }
];
