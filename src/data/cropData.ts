
export interface CropInfo {
  name: string;
  teluguName: string;
  mainRegions: string[];
  seasons: string;
  plantToHarvest: string;
  soilType: string;
  yieldPerHa: string;
  avgPrice: string;
  waterNeeds: string;
  notes: string;
  basalFertilizer?: string;
  topDressing?: string;
  fertilizerNotes?: string;
  commonPests?: {
    problem: string;
    telugu: string;
    solution: string;
  }[];
}

export const cropDatabase: CropInfo[] = [
  {
    name: "Rice (Paddy)",
    teluguName: "వరి",
    mainRegions: ["Punjab", "West Bengal", "Andhra Pradesh", "Tamil Nadu", "Odisha"],
    seasons: "Kharif",
    plantToHarvest: "June → November",
    soilType: "Clay/Loam",
    yieldPerHa: "50–70 quintal/ha",
    avgPrice: "₹1,800–2,200/quintal",
    waterNeeds: "High",
    notes: "Double or triple cropping possible",
    basalFertilizer: "DAP + Urea",
    topDressing: "Urea after 25 days",
    fertilizerNotes: "Check for yellowing leaves",
    commonPests: [
      {
        problem: "Brown Plant Hopper",
        telugu: "గోధుమ రంగు మొక్క దుమ్మి",
        solution: "Imidacloprid spray"
      },
      {
        problem: "Stem Borer",
        telugu: "కాండ శిలీంధ్రం",
        solution: "Neem spray / Chlorpyrifos"
      }
    ]
  },
  {
    name: "Wheat",
    teluguName: "గోధుమలు",
    mainRegions: ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan"],
    seasons: "Rabi",
    plantToHarvest: "November → April",
    soilType: "Loam",
    yieldPerHa: "45–60 quintal/ha",
    avgPrice: "₹2,000–2,400/quintal",
    waterNeeds: "Medium",
    notes: "Requires timely irrigation",
    basalFertilizer: "DAP + Urea",
    topDressing: "Urea at tillering stage",
    fertilizerNotes: "Apply nitrogen in split doses",
    commonPests: [
      {
        problem: "Aphids",
        telugu: "లేతుకీటకాలు",
        solution: "Dimethoate spray"
      }
    ]
  },
  {
    name: "Maize",
    teluguName: "మొక్కజొన్న",
    mainRegions: ["Karnataka", "Telangana", "Bihar", "Uttar Pradesh", "Rajasthan"],
    seasons: "Kharif/Rabi",
    plantToHarvest: "June → October",
    soilType: "Loam/Sandy loam",
    yieldPerHa: "40–50 quintal/ha",
    avgPrice: "₹1,500–1,900/quintal",
    waterNeeds: "Medium",
    notes: "For food, fodder, or industry",
    basalFertilizer: "NPK 15-15-15",
    topDressing: "Urea at tasseling stage",
    fertilizerNotes: "Requires good drainage",
    commonPests: [
      {
        problem: "Fall Armyworm",
        telugu: "పతన సైనిక పురుగు",
        solution: "Spinetoram spray"
      }
    ]
  },
  {
    name: "Cotton",
    teluguName: "పత్తి",
    mainRegions: ["Maharashtra", "Gujarat", "Telangana", "Karnataka", "Haryana"],
    seasons: "Kharif",
    plantToHarvest: "June → January",
    soilType: "Black/Loam",
    yieldPerHa: "20–25 quintal/ha (seed cotton)",
    avgPrice: "₹5,500–6,500/quintal",
    waterNeeds: "Medium",
    notes: "Bt hybrids common",
    basalFertilizer: "NPK 20-20-0",
    topDressing: "Urea split in 2 doses",
    fertilizerNotes: "Add micronutrients if leaf curl",
    commonPests: [
      {
        problem: "Bollworm",
        telugu: "గుచ్చే పురుగు",
        solution: "Bt cotton / Spinosad"
      }
    ]
  },
  {
    name: "Sugarcane",
    teluguName: "చెరకు",
    mainRegions: ["Uttar Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    seasons: "Annual",
    plantToHarvest: "October → January",
    soilType: "Loam/Clay",
    yieldPerHa: "800–1,000 quintal/ha",
    avgPrice: "₹3,400–4,200/quintal",
    waterNeeds: "Very High",
    notes: "Perennial, long-duration crop",
    basalFertilizer: "NPK + FYM",
    topDressing: "Urea in 2-3 splits",
    fertilizerNotes: "Heavy feeder, requires organic matter",
    commonPests: [
      {
        problem: "Shoot Borer",
        telugu: "చిగురు తొలుచు పురుగు",
        solution: "Chlorpyrifos application"
      }
    ]
  },
  {
    name: "Groundnut",
    teluguName: "వేరుసెనగ",
    mainRegions: ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Karnataka", "Rajasthan"],
    seasons: "Kharif",
    plantToHarvest: "June → November",
    soilType: "Sandy/Loam",
    yieldPerHa: "18–22 quintal/ha",
    avgPrice: "₹4,200–5,200/quintal",
    waterNeeds: "Low–Medium",
    notes: "Rainfed or irrigated",
    basalFertilizer: "DAP + Potash",
    topDressing: "Usually not required",
    fertilizerNotes: "Fix nitrogen naturally, avoid excess N",
    commonPests: [
      {
        problem: "Tikka Leaf Spot",
        telugu: "టిక్కా దద్దుర్లు",
        solution: "Mancozeb spray"
      }
    ]
  },
  {
    name: "Pulses (Tur, Moong, Chana)",
    teluguName: "పప్పుధాన్యాలు",
    mainRegions: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Karnataka", "Uttar Pradesh"],
    seasons: "Rabi/Kharif",
    plantToHarvest: "Varies by type",
    soilType: "Light to Loam",
    yieldPerHa: "8–12 quintal/ha",
    avgPrice: "₹5,000–6,500/quintal",
    waterNeeds: "Low",
    notes: "Drought-tolerant; fix nitrogen",
    basalFertilizer: "DAP + Potash",
    topDressing: "Usually not required",
    fertilizerNotes: "Minimal nitrogen needed",
    commonPests: [
      {
        problem: "Pod Borer",
        telugu: "కాయల తొలుచు పురుగు",
        solution: "Quinalphos spray"
      }
    ]
  },
  {
    name: "Soybean",
    teluguName: "సోయాబీన్",
    mainRegions: ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Karnataka"],
    seasons: "Kharif",
    plantToHarvest: "June → October",
    soilType: "Loam",
    yieldPerHa: "12–15 quintal/ha",
    avgPrice: "₹3,800–4,800/quintal",
    waterNeeds: "Medium",
    notes: "Key oilseed crop",
    basalFertilizer: "DAP + Potash",
    topDressing: "Usually not required",
    fertilizerNotes: "Fix nitrogen naturally, avoid excess N",
    commonPests: [
      {
        problem: "Pod Borer",
        telugu: "కాయల తొలుచు పురుగు",
        solution: "Quinalphos spray"
      }
    ]
  },
  {
    name: "Mustard",
    teluguName: "ఆవాలు",
    mainRegions: ["Rajasthan", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    seasons: "Rabi",
    plantToHarvest: "October → February",
    soilType: "Loam",
    yieldPerHa: "12–15 quintal/ha",
    avgPrice: "₹4,500–5,500/quintal",
    waterNeeds: "Low–Medium",
    notes: "Relatively hardy crop",
    basalFertilizer: "NPK 18-46-0",
    topDressing: "Urea at flowering",
    fertilizerNotes: "Responds well to sulphur",
    commonPests: [
      {
        problem: "Aphids",
        telugu: "లేతుకీటకాలు",
        solution: "Dimethoate spray"
      }
    ]
  },
  {
    name: "Jute",
    teluguName: "జనపనార",
    mainRegions: ["West Bengal", "Assam", "Bihar", "Odisha"],
    seasons: "Kharif",
    plantToHarvest: "June → November",
    soilType: "Heavy loam",
    yieldPerHa: "15–18 bales/ha",
    avgPrice: "₹2,200–2,800/quintal",
    waterNeeds: "High",
    notes: "Fiber crop for sacks and textiles",
    basalFertilizer: "Urea + SSP",
    topDressing: "Urea in splits",
    fertilizerNotes: "Requires high moisture",
    commonPests: [
      {
        problem: "Stem Weevil",
        telugu: "కాండ తొలుచు పురుగు",
        solution: "Endosulfan spray"
      }
    ]
  },
  {
    name: "Mango",
    teluguName: "మామిడికాయ",
    mainRegions: ["Uttar Pradesh", "Andhra Pradesh", "Maharashtra", "Karnataka", "Gujarat"],
    seasons: "Mono-seasonal",
    plantToHarvest: "February → June",
    soilType: "Well-drained loam",
    yieldPerHa: "10–20 tonnes/ha",
    avgPrice: "Quality-dependent",
    waterNeeds: "Low–Medium",
    notes: "Many local cultivars available",
    basalFertilizer: "FYM + NPK",
    topDressing: "Seasonal application",
    fertilizerNotes: "Organic matter important",
    commonPests: [
      {
        problem: "Fruit Fly",
        telugu: "పండ్ల ఈగ",
        solution: "Pheromone traps + spraying"
      }
    ]
  },
  {
    name: "Banana",
    teluguName: "అరటికాయ",
    mainRegions: ["Tamil Nadu", "Maharashtra", "Andhra Pradesh", "Gujarat", "Karnataka"],
    seasons: "Year-round",
    plantToHarvest: "9–12 months",
    soilType: "Rich loam",
    yieldPerHa: "20–30 tonnes/ha",
    avgPrice: "₹12,000–16,000/quintal",
    waterNeeds: "High",
    notes: "Continuous harvest possible",
    basalFertilizer: "FYM + NPK",
    topDressing: "Monthly fertilization",
    fertilizerNotes: "High potassium requirement",
    commonPests: [
      {
        problem: "Nematodes",
        telugu: "వేర్ల కృమి",
        solution: "Carbofuran application"
      }
    ]
  },
  {
    name: "Tea",
    teluguName: "తేనీరు",
    mainRegions: ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    seasons: "Perennial",
    plantToHarvest: "Continuous plucking",
    soilType: "Acidic loam",
    yieldPerHa: "1.5–2 tonnes/ha (leaf yield)",
    avgPrice: "₹150–200/kg",
    waterNeeds: "High",
    notes: "Shaded plantations preferred",
    basalFertilizer: "Organic compost",
    topDressing: "Regular feeding",
    fertilizerNotes: "Acidic soil maintenance",
    commonPests: [
      {
        problem: "Tea Mosquito Bug",
        telugu: "తేనీరు దోమ కీటకం",
        solution: "Imidacloprid spray"
      }
    ]
  },
  {
    name: "Coffee",
    teluguName: "కాఫీ",
    mainRegions: ["Karnataka", "Kerala", "Tamil Nadu"],
    seasons: "Perennial",
    plantToHarvest: "Seasonal harvest",
    soilType: "Rich loam",
    yieldPerHa: "5–7 tonnes/ha (cherry)",
    avgPrice: "₹160–220/kg",
    waterNeeds: "Medium",
    notes: "Shade-grown cultivation",
    basalFertilizer: "Organic matter + NPK",
    topDressing: "Seasonal application",
    fertilizerNotes: "Well-drained soil essential",
    commonPests: [
      {
        problem: "White Stem Borer",
        telugu: "తెల్ల కాండ తొలుచు పురుగు",
        solution: "Chlorpyrifos treatment"
      }
    ]
  },
  {
    name: "Chilli",
    teluguName: "మిరపకాయలు",
    mainRegions: ["Tamil Nadu", "Karnataka", "Gujarat", "Andhra Pradesh", "Maharashtra"],
    seasons: "Varies",
    plantToHarvest: "6–12 months",
    soilType: "Loam/Clay",
    yieldPerHa: "Crop specific",
    avgPrice: "Market-driven",
    waterNeeds: "Medium",
    notes: "High-value niche crop",
    basalFertilizer: "FYM + NPK",
    topDressing: "Split application",
    fertilizerNotes: "Avoid overwatering",
    commonPests: [
      {
        problem: "Thrips",
        telugu: "త్రిప్స్ పురుగు",
        solution: "Spinosad or NSKE spray"
      }
    ]
  },
  {
    name: "Turmeric",
    teluguName: "పసుపు",
    mainRegions: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Odisha", "West Bengal"],
    seasons: "Annual",
    plantToHarvest: "June → February (8-10 months)",
    soilType: "Rich loam/Clay loam",
    yieldPerHa: "20–25 quintal/ha",
    avgPrice: "₹6,000–8,000/quintal",
    waterNeeds: "Medium",
    notes: "High-value spice crop",
    basalFertilizer: "FYM + NPK",
    topDressing: "Split application of NPK",
    fertilizerNotes: "Organic matter essential",
    commonPests: [
      {
        problem: "Rhizome Rot",
        telugu: "వేరు కుళ్ళు వ్యాధి",
        solution: "Bordeaux mixture spray"
      }
    ]
  },
  {
    name: "Cardamom",
    teluguName: "ఏలకులు",
    mainRegions: ["Kerala", "Karnataka", "Tamil Nadu"],
    seasons: "Perennial",
    plantToHarvest: "June → February",
    soilType: "Well-drained forest loam",
    yieldPerHa: "50–150 kg/ha",
    avgPrice: "₹1,000–1,500/kg",
    waterNeeds: "High",
    notes: "Shade-grown spice, high altitude",
    basalFertilizer: "Organic compost + NPK",
    topDressing: "Regular organic feeding",
    fertilizerNotes: "Shade and moisture critical",
    commonPests: [
      {
        problem: "Thrips",
        telugu: "త్రిప్స్ పురుగు",
        solution: "Quinalphos spray"
      }
    ]
  },
  {
    name: "Black Pepper",
    teluguName: "మిరియాలు",
    mainRegions: ["Kerala", "Karnataka", "Tamil Nadu"],
    seasons: "Perennial",
    plantToHarvest: "May → July",
    soilType: "Well-drained laterite",
    yieldPerHa: "1–3 quintal/ha",
    avgPrice: "₹400–600/kg",
    waterNeeds: "High",
    notes: "Climbing vine, needs support",
    basalFertilizer: "Organic compost + NPK",
    topDressing: "Regular feeding",
    fertilizerNotes: "High organic matter requirement",
    commonPests: [
      {
        problem: "Pollu Beetle",
        telugu: "పొల్లు బీటిల్",
        solution: "Quinalphos spray"
      }
    ]
  },
  {
    name: "Coconut",
    teluguName: "కొబ్బరికాయ",
    mainRegions: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Odisha"],
    seasons: "Perennial",
    plantToHarvest: "Year-round harvest",
    soilType: "Sandy/Coastal loam",
    yieldPerHa: "8,000–12,000 nuts/ha/year",
    avgPrice: "₹15–25/nut",
    waterNeeds: "High",
    notes: "Coastal cultivation preferred",
    basalFertilizer: "Organic compost + NPK",
    topDressing: "Regular fertilization",
    fertilizerNotes: "Salt-tolerant, needs potassium",
    commonPests: [
      {
        problem: "Red Palm Weevil",
        telugu: "ఎర్రటి తాటి దురద",
        solution: "Chlorpyrifos injection"
      }
    ]
  },
  {
    name: "Rubber",
    teluguName: "రబ్బర్",
    mainRegions: ["Kerala", "Tamil Nadu", "Karnataka"],
    seasons: "Perennial",
    plantToHarvest: "Daily tapping after 6-7 years",
    soilType: "Well-drained laterite",
    yieldPerHa: "1,500–2,500 kg/ha/year",
    avgPrice: "₹150–180/kg",
    waterNeeds: "High",
    notes: "Tropical plantation crop",
    basalFertilizer: "Organic matter + NPK",
    topDressing: "Annual fertilization",
    fertilizerNotes: "High rainfall areas preferred",
    commonPests: [
      {
        problem: "Pink Disease",
        telugu: "గులాబీ వ్యాధి",
        solution: "Copper fungicide spray"
      }
    ]
  },
  {
    name: "Areca Nut",
    teluguName: "అడక",
    mainRegions: ["Karnataka", "Kerala", "Assam", "West Bengal"],
    seasons: "Perennial",
    plantToHarvest: "August → February",
    soilType: "Well-drained loam",
    yieldPerHa: "1,500–2,500 kg/ha",
    avgPrice: "₹300–500/kg",
    waterNeeds: "High",
    notes: "Shade and high humidity required",
    basalFertilizer: "Organic compost + NPK",
    topDressing: "Split application",
    fertilizerNotes: "Regular irrigation essential",
    commonPests: [
      {
        problem: "Spindle Bug",
        telugu: "కుదురు బగ్",
        solution: "Malathion spray"
      }
    ]
  }
];
