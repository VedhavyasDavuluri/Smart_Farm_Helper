
export interface CultivationTimeline {
  crop: string;
  teluguName: string;
  daysToMaturity: string;
  idealSoil: string;
  intercroppingOption: string;
  rainfallNeeded: string;
  sowingDepth: string;
}

export interface IrrigationTip {
  crop: string;
  teluguName: string;
  frequency: string;
  stageToIrrigate: string;
  notes: string;
}

export interface CostAnalysis {
  crop: string;
  teluguName: string;
  cost: string;
  avgYield: string;
  marketPrice: string;
  netProfit: string;
}

export interface SeasonalTask {
  task: string;
  kharif: string;
  rabi: string;
}

export const cultivationTimelines: CultivationTimeline[] = [
  {
    crop: "Paddy",
    teluguName: "వరి",
    daysToMaturity: "120–150",
    idealSoil: "Clay loam",
    intercroppingOption: "None",
    rainfallNeeded: "1000–2000 mm",
    sowingDepth: "2–3 cm"
  },
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    daysToMaturity: "150–180",
    idealSoil: "Black soil",
    intercroppingOption: "Red gram",
    rainfallNeeded: "700–1200 mm",
    sowingDepth: "3–5 cm"
  },
  {
    crop: "Groundnut",
    teluguName: "వేరుసెనగ",
    daysToMaturity: "100–110",
    idealSoil: "Sandy loam",
    intercroppingOption: "Castor",
    rainfallNeeded: "500–800 mm",
    sowingDepth: "4–6 cm"
  },
  {
    crop: "Millets",
    teluguName: "మిల్లెట్స్",
    daysToMaturity: "70–90",
    idealSoil: "Red sandy",
    intercroppingOption: "Pulses",
    rainfallNeeded: "400–600 mm",
    sowingDepth: "2–3 cm"
  },
  {
    crop: "Chilli",
    teluguName: "మిరపకాయలు",
    daysToMaturity: "180–200",
    idealSoil: "Loamy",
    intercroppingOption: "Onion",
    rainfallNeeded: "600–800 mm",
    sowingDepth: "Transplanting"
  }
];

export const irrigationTips: IrrigationTip[] = [
  {
    crop: "Paddy",
    teluguName: "వరి",
    frequency: "Weekly (flood)",
    stageToIrrigate: "Tillering, flowering",
    notes: "Keep 3–5 cm standing water"
  },
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    frequency: "10–15 days",
    stageToIrrigate: "Squaring, boll formation",
    notes: "Avoid water stress"
  },
  {
    crop: "Groundnut",
    teluguName: "వేరుసెనగ",
    frequency: "7–10 days",
    stageToIrrigate: "Flowering to pod development",
    notes: "Use drip for best results"
  },
  {
    crop: "Maize",
    teluguName: "మొక్కజొన్న",
    frequency: "7–8 days",
    stageToIrrigate: "Tasseling, grain filling",
    notes: "Ensure no standing water"
  },
  {
    crop: "Chilli",
    teluguName: "మిరపకాయలు",
    frequency: "7–10 days",
    stageToIrrigate: "Flowering, fruiting",
    notes: "Avoid overwatering (disease risk)"
  }
];

export const costAnalysis: CostAnalysis[] = [
  {
    crop: "Paddy",
    teluguName: "వరి",
    cost: "₹25,000",
    avgYield: "18–20 quintals",
    marketPrice: "₹1800–₹2000",
    netProfit: "₹10,000–₹15,000"
  },
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    cost: "₹35,000",
    avgYield: "10–12 quintals",
    marketPrice: "₹6000–₹7000",
    netProfit: "₹25,000–₹40,000"
  },
  {
    crop: "Chilli",
    teluguName: "మిరపకాయలు",
    cost: "₹60,000",
    avgYield: "8–10 quintals",
    marketPrice: "₹10,000–₹12,000",
    netProfit: "₹30,000–₹50,000"
  },
  {
    crop: "Groundnut",
    teluguName: "వేరుసెనగ",
    cost: "₹20,000",
    avgYield: "8–10 quintals",
    marketPrice: "₹4500–₹5000",
    netProfit: "₹15,000–₹25,000"
  }
];

export const seasonalTasks: SeasonalTask[] = [
  {
    task: "విత్తన ఎంపిక",
    kharif: "Paddy, Cotton",
    rabi: "Chilli, Sunflower"
  },
  {
    task: "భూ తయారీ",
    kharif: "Plough before rain",
    rabi: "Deep till after harvest"
  },
  {
    task: "విత్తనాలు",
    kharif: "With first showers",
    rabi: "After Diwali"
  },
  {
    task: "కలుపు నియంత్రణ",
    kharif: "15–25 days after sowing",
    rabi: "30 days"
  },
  {
    task: "కోత",
    kharif: "Before deep winter",
    rabi: "Before summer"
  }
];
