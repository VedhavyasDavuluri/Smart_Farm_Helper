
export interface WeatherAlert {
  weatherEvent: string;
  teluguMessage: string;
  suggestedAction: string;
  severity: 'low' | 'medium' | 'high';
}

export interface InputDealer {
  dealerName: string;
  location: string;
  type: string;
  contact: string;
}

export const weatherAlerts: WeatherAlert[] = [
  {
    weatherEvent: "Heavy Rain Warning",
    teluguMessage: "ఈరోజు భారీ వర్షాలు ఉన్న అవకాశం ఉంది.",
    suggestedAction: "Delay sowing, check drainage",
    severity: "high"
  },
  {
    weatherEvent: "Heatwave",
    teluguMessage: "చాలా ఎండలు ఉంటాయి, నీటి జాగ్రత్తలు తీసుకోండి.",
    suggestedAction: "Mulching or shading needed",
    severity: "medium"
  },
  {
    weatherEvent: "Cyclone Alert",
    teluguMessage: "తుఫాను హెచ్చరిక: దిగుబడి నష్టం నివారించండి.",
    suggestedAction: "Cover sensitive crops, secure sheds",
    severity: "high"
  },
  {
    weatherEvent: "Cold Wave",
    teluguMessage: "చలి తీవ్రంగా ఉంటుంది.",
    suggestedAction: "Use plastic tunnels or crop covers",
    severity: "medium"
  }
];

export const inputDealers: InputDealer[] = [
  {
    dealerName: "Sri Raghavendra Seeds",
    location: "Gollapudi",
    type: "Seeds/Fertilizer",
    contact: "+91 98XXXXXX12"
  },
  {
    dealerName: "Kisan Agro Mart",
    location: "Benz Circle",
    type: "All-in-One",
    contact: "+91 96XXXXXX34"
  },
  {
    dealerName: "Krishi Vikas Kendram",
    location: "Ibrahimpatnam",
    type: "Govt. Advisory",
    contact: "+91 8678XXXX"
  }
];
