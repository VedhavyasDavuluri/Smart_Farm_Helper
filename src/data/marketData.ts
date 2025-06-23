
export interface MarketPrice {
  crop: string;
  teluguName: string;
  state: string;
  market: string;
  price: string;
  change?: string;
  trend?: 'up' | 'down' | 'stable';
}

export const currentMarketPrices: MarketPrice[] = [
  // Andhra Pradesh
  {
    crop: "Paddy",
    teluguName: "వరి",
    state: "Andhra Pradesh",
    market: "Guntur Market Yard",
    price: "₹1,800–₹2,000",
    change: "+5%",
    trend: "up"
  },
  {
    crop: "Groundnut",
    teluguName: "వేరుసెనగ",
    state: "Andhra Pradesh",
    market: "Anantapur Market",
    price: "₹4,500–₹5,200",
    change: "+3%",
    trend: "up"
  },
  {
    crop: "Chilli",
    teluguName: "మిరపకాయలు",
    state: "Andhra Pradesh",
    market: "Guntur Spice Market",
    price: "₹10,000–₹12,000",
    change: "+12%",
    trend: "up"
  },
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    state: "Andhra Pradesh",
    market: "Kurnool Market",
    price: "₹6,200–₹6,800",
    change: "-2%",
    trend: "down"
  },
  {
    crop: "Turmeric",
    teluguName: "పసుపు",
    state: "Andhra Pradesh",
    market: "Erode Market",
    price: "₹6,800–₹8,200",
    change: "+8%",
    trend: "up"
  },
  {
    crop: "Coconut",
    teluguName: "కొబ్బరికాయ",
    state: "Andhra Pradesh",
    market: "Vijayawada Market",
    price: "₹18–₹25/nut",
    change: "+4%",
    trend: "up"
  },

  // Punjab
  {
    crop: "Paddy",
    teluguName: "వరి",
    state: "Punjab",
    market: "Amritsar Market",
    price: "₹2,100–₹2,300",
    change: "+5%",
    trend: "up"
  },
  {
    crop: "Wheat",
    teluguName: "గోధుమలు",
    state: "Punjab",
    market: "Ludhiana Market",
    price: "₹2,200–₹2,400",
    change: "+3%",
    trend: "up"
  },

  // Gujarat
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    state: "Gujarat",
    market: "Rajkot Market",
    price: "₹6,500–₹7,000",
    change: "-1%",
    trend: "down"
  },
  {
    crop: "Groundnut",
    teluguName: "వేరుసెనగ",
    state: "Gujarat",
    market: "Junagadh Market",
    price: "₹4,800–₹5,300",
    change: "+4%",
    trend: "up"
  },
  {
    crop: "Chilli",
    teluguName: "మిరపకాయలు",
    state: "Gujarat",
    market: "Mehsana Market",
    price: "₹9,500–₹11,500",
    change: "+6%",
    trend: "up"
  },

  // Maharashtra
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    state: "Maharashtra",
    market: "Nagpur Market",
    price: "₹6,300–₹6,900",
    change: "+2%",
    trend: "up"
  },
  {
    crop: "Sugarcane",
    teluguName: "చెరకు",
    state: "Maharashtra",
    market: "Pune Market",
    price: "₹3,400–₹3,800",
    change: "+7%",
    trend: "up"
  },
  {
    crop: "Soybean",
    teluguName: "సోయాబీన్",
    state: "Maharashtra",
    market: "Latur Market",
    price: "₹4,200–₹4,600",
    change: "+5%",
    trend: "up"
  },
  {
    crop: "Banana",
    teluguName: "అరటికాయ",
    state: "Maharashtra",
    market: "Jalgaon Market",
    price: "₹12,000–₹16,000",
    change: "+3%",
    trend: "up"
  },
  {
    crop: "Mango",
    teluguName: "మామిడికాయ",
    state: "Maharashtra",
    market: "Ratnagiri Market",
    price: "₹25,000–₹40,000",
    change: "+15%",
    trend: "up"
  },

  // Karnataka
  {
    crop: "Maize",
    teluguName: "మొక్కజొన్న",
    state: "Karnataka",
    market: "Bangalore Market",
    price: "₹1,800–₹2,100",
    change: "-1%",
    trend: "down"
  },
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    state: "Karnataka",
    market: "Hubli Market",
    price: "₹6,100–₹6,700",
    change: "+1%",
    trend: "up"
  },
  {
    crop: "Sugarcane",
    teluguName: "చెరకు",
    state: "Karnataka",
    market: "Mandya Market",
    price: "₹3,200–₹3,600",
    change: "+4%",
    trend: "up"
  },
  {
    crop: "Coffee",
    teluguName: "కాఫీ",
    state: "Karnataka",
    market: "Chikmagalur Market",
    price: "₹160–₹220/kg",
    change: "+8%",
    trend: "up"
  },
  {
    crop: "Turmeric",
    teluguName: "పసుపు",
    state: "Karnataka",
    market: "Bangalore Market",
    price: "₹6,500–₹7,800",
    change: "+6%",
    trend: "up"
  },
  {
    crop: "Cardamom",
    teluguName: "ఏలకులు",
    state: "Karnataka",
    market: "Kumily Market",
    price: "₹1,200–₹1,500/kg",
    change: "+10%",
    trend: "up"
  },
  {
    crop: "Black Pepper",
    teluguName: "మిరియాలు",
    state: "Karnataka",
    market: "Sirsi Market",
    price: "₹450–₹600/kg",
    change: "+7%",
    trend: "up"
  },
  {
    crop: "Coconut",
    teluguName: "కొబ్బరికాయ",
    state: "Karnataka",
    market: "Tumkur Market",
    price: "₹16–₹24/nut",
    change: "+2%",
    trend: "up"
  },
  {
    crop: "Areca Nut",
    teluguName: "అడక",
    state: "Karnataka",
    market: "Shimoga Market",
    price: "₹350–₹500/kg",
    change: "+5%",
    trend: "up"
  },

  // Tamil Nadu
  {
    crop: "Paddy",
    teluguName: "వరి",
    state: "Tamil Nadu",
    market: "Thanjavur Market",
    price: "₹1,900–₹2,200",
    change: "+4%",
    trend: "up"
  },
  {
    crop: "Groundnut",
    teluguName: "వేరుసెనగ",
    state: "Tamil Nadu",
    market: "Tindivanam Market",
    price: "₹4,400–₹5,100",
    change: "+2%",
    trend: "up"
  },
  {
    crop: "Banana",
    teluguName: "అరటికాయ",
    state: "Tamil Nadu",
    market: "Theni Market",
    price: "₹13,000–₹17,000",
    change: "+8%",
    trend: "up"
  },
  {
    crop: "Turmeric",
    teluguName: "పసుపు",
    state: "Tamil Nadu",
    market: "Erode Market",
    price: "₹7,200–₹8,500",
    change: "+12%",
    trend: "up"
  },
  {
    crop: "Coconut",
    teluguName: "కొబ్బరికాయ",
    state: "Tamil Nadu",
    market: "Pollachi Market",
    price: "₹17–₹23/nut",
    change: "+3%",
    trend: "up"
  },
  {
    crop: "Coffee",
    teluguName: "కాఫీ",
    state: "Tamil Nadu",
    market: "Nilgiris Market",
    price: "₹170–₹230/kg",
    change: "+6%",
    trend: "up"
  },

  // Kerala
  {
    crop: "Coconut",
    teluguName: "కొబ్బరికాయ",
    state: "Kerala",
    market: "Kozhikode Market",
    price: "₹19–₹26/nut",
    change: "+5%",
    trend: "up"
  },
  {
    crop: "Rubber",
    teluguName: "రబ్బర్",
    state: "Kerala",
    market: "Kottayam Market",
    price: "₹150–₹180/kg",
    change: "+3%",
    trend: "up"
  },
  {
    crop: "Tea",
    teluguName: "తేనీరు",
    state: "Kerala",
    market: "Munnar Market",
    price: "₹150–₹200/kg",
    change: "+4%",
    trend: "up"
  },
  {
    crop: "Coffee",
    teluguName: "కాఫీ",
    state: "Kerala",
    market: "Wayanad Market",
    price: "₹165–₹215/kg",
    change: "+5%",
    trend: "up"
  },
  {
    crop: "Cardamom",
    teluguName: "ఏలకులు",
    state: "Kerala",
    market: "Kumily Market",
    price: "₹1,100–₹1,400/kg",
    change: "+15%",
    trend: "up"
  },
  {
    crop: "Black Pepper",
    teluguName: "మిరియాలు",
    state: "Kerala",
    market: "Kochi Market",
    price: "₹400–₹580/kg",
    change: "+8%",
    trend: "up"
  },

  // Uttar Pradesh
  {
    crop: "Wheat",
    teluguName: "గోధుమలు",
    state: "Uttar Pradesh",
    market: "Kanpur Market",
    price: "₹2,000–₹2,350",
    change: "+3%",
    trend: "up"
  },
  {
    crop: "Sugarcane",
    teluguName: "చెరకు",
    state: "Uttar Pradesh",
    market: "Meerut Market",
    price: "₹3,300–₹3,700",
    change: "+6%",
    trend: "up"
  },
  {
    crop: "Mango",
    teluguName: "మామిడికాయ",
    state: "Uttar Pradesh",
    market: "Lucknow Market",
    price: "₹20,000–₹35,000",
    change: "+10%",
    trend: "up"
  },
  {
    crop: "Mustard",
    teluguName: "ఆవాలు",
    state: "Uttar Pradesh",
    market: "Agra Market",
    price: "₹4,600–₹5,400",
    change: "+4%",
    trend: "up"
  },

  // Madhya Pradesh
  {
    crop: "Soybean",
    teluguName: "సోయాబీన్",
    state: "Madhya Pradesh",
    market: "Indore Market",
    price: "₹4,100–₹4,700",
    change: "+8%",
    trend: "up"
  },
  {
    crop: "Wheat",
    teluguName: "గోధుమలు",
    state: "Madhya Pradesh",
    market: "Bhopal Market",
    price: "₹2,050–₹2,400",
    change: "+2%",
    trend: "up"
  },
  {
    crop: "Mustard",
    teluguName: "ఆవాలు",
    state: "Madhya Pradesh",
    market: "Ujjain Market",
    price: "₹4,700–₹5,300",
    change: "+6%",
    trend: "up"
  },

  // Rajasthan
  {
    crop: "Mustard",
    teluguName: "ఆవాలు",
    state: "Rajasthan",
    market: "Bharatpur Market",
    price: "₹4,800–₹5,600",
    change: "+7%",
    trend: "up"
  },
  {
    crop: "Soybean",
    teluguName: "సోయాబీన్",
    state: "Rajasthan",
    market: "Kota Market",
    price: "₹4,000–₹4,500",
    change: "+3%",
    trend: "up"
  },

  // Haryana
  {
    crop: "Wheat",
    teluguName: "గోధుమలు",
    state: "Haryana",
    market: "Karnal Market",
    price: "₹2,150–₹2,450",
    change: "+4%",
    trend: "up"
  },
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    state: "Haryana",
    market: "Sirsa Market",
    price: "₹6,400–₹7,100",
    change: "+3%",
    trend: "up"
  },
  {
    crop: "Mustard",
    teluguName: "ఆవాలు",
    state: "Haryana",
    market: "Hisar Market",
    price: "₹4,650–₹5,250",
    change: "+5%",
    trend: "up"
  },

  // West Bengal
  {
    crop: "Paddy",
    teluguName: "వరి",
    state: "West Bengal",
    market: "Kolkata Market",
    price: "₹1,750–₹2,050",
    change: "+6%",
    trend: "up"
  },
  {
    crop: "Jute",
    teluguName: "జనపనార",
    state: "West Bengal",
    market: "Barrackpore Market",
    price: "₹2,200–₹2,800/quintal",
    change: "+8%",
    trend: "up"
  },
  {
    crop: "Tea",
    teluguName: "తేనీరు",
    state: "West Bengal",
    market: "Darjeeling Market",
    price: "₹180–₹220/kg",
    change: "+12%",
    trend: "up"
  },
  {
    crop: "Turmeric",
    teluguName: "పసుపు",
    state: "West Bengal",
    market: "Kolkata Spice Market",
    price: "₹6,200–₹7,500",
    change: "+9%",
    trend: "up"
  },
  {
    crop: "Areca Nut",
    teluguName: "అడక",
    state: "West Bengal",
    market: "Cooch Behar Market",
    price: "₹320–₹480/kg",
    change: "+7%",
    trend: "up"
  },

  // Bihar
  {
    crop: "Maize",
    teluguName: "మొక్కజొన్న",
    state: "Bihar",
    market: "Patna Market",
    price: "₹1,700–₹2,000",
    change: "+2%",
    trend: "up"
  },
  {
    crop: "Jute",
    teluguName: "జనపనార",
    state: "Bihar",
    market: "Darbhanga Market",
    price: "₹2,100–₹2,700/quintal",
    change: "+5%",
    trend: "up"
  },

  // Telangana
  {
    crop: "Maize",
    teluguName: "మొక్కజొన్న",
    state: "Telangana",
    market: "Hyderabad Market",
    price: "₹1,900–₹2,200",
    change: "+1%",
    trend: "up"
  },
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    state: "Telangana",
    market: "Warangal Market",
    price: "₹6,000–₹6,600",
    change: "-1%",
    trend: "down"
  },

  // Odisha
  {
    crop: "Paddy",
    teluguName: "వరి",
    state: "Odisha",
    market: "Bhubaneswar Market",
    price: "₹1,850–₹2,150",
    change: "+3%",
    trend: "up"
  },
  {
    crop: "Jute",
    teluguName: "జనపనార",
    state: "Odisha",
    market: "Cuttack Market",
    price: "₹2,300–₹2,900/quintal",
    change: "+6%",
    trend: "up"
  },
  {
    crop: "Turmeric",
    teluguName: "పసుపు",
    state: "Odisha",
    market: "Berhampur Market",
    price: "₹6,000–₹7,200",
    change: "+4%",
    trend: "up"
  },
  {
    crop: "Coconut",
    teluguName: "కొబ్బరికాయ",
    state: "Odisha",
    market: "Puri Market",
    price: "₹14–₹22/nut",
    change: "+1%",
    trend: "up"
  },

  // Assam
  {
    crop: "Tea",
    teluguName: "తేనీరు",
    state: "Assam",
    market: "Guwahati Market",
    price: "₹140–₹190/kg",
    change: "+7%",
    trend: "up"
  },
  {
    crop: "Jute",
    teluguName: "జనపనార",
    state: "Assam",
    market: "Silchar Market",
    price: "₹2,000–₹2,600/quintal",
    change: "+4%",
    trend: "up"
  },
  {
    crop: "Areca Nut",
    teluguName: "అడక",
    state: "Assam",
    market: "Nagaon Market",
    price: "₹300–₹450/kg",
    change: "+6%",
    trend: "up"
  }
];
