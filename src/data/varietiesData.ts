
export interface SeedVariety {
  crop: string;
  teluguName: string;
  variety: string;
  duration: string;
  resistantTo: string;
}

export interface OrganicSolution {
  solution: string;
  teluguName: string;
  use: string;
  ingredients: string;
  howToMake: string;
}

export const seedVarieties: SeedVariety[] = [
  {
    crop: "Paddy",
    teluguName: "వరి",
    variety: "BPT 5204",
    duration: "135–140 days",
    resistantTo: "Lodging, moderate pests"
  },
  {
    crop: "Cotton",
    teluguName: "పత్తి",
    variety: "NCS 145",
    duration: "160–180 days",
    resistantTo: "Bollworm (Bt hybrid)"
  },
  {
    crop: "Groundnut",
    teluguName: "వేరుసెనగ",
    variety: "K6",
    duration: "100–110 days",
    resistantTo: "Leaf spot"
  },
  {
    crop: "Maize",
    teluguName: "మొక్కజొన్న",
    variety: "DHM 117",
    duration: "95–105 days",
    resistantTo: "Drought"
  },
  {
    crop: "Chilli",
    teluguName: "మిరపకాయలు",
    variety: "LCA 334",
    duration: "180–200 days",
    resistantTo: "Mosaic, wilt"
  }
];

export const organicSolutions: OrganicSolution[] = [
  {
    solution: "Jeevamrutam",
    teluguName: "జీవామృతం",
    use: "Growth booster",
    ingredients: "Cow dung, urine, jaggery",
    howToMake: "Mix all & ferment for 7 days"
  },
  {
    solution: "Neem Oil Spray",
    teluguName: "వేప నూనె స్ప్రే",
    use: "Pest control",
    ingredients: "Neem oil, soap",
    howToMake: "Mix 50ml neem oil with 1L water & soap"
  },
  {
    solution: "Buttermilk Spray",
    teluguName: "మజ్జిగ స్ప్రే",
    use: "Fungal control",
    ingredients: "Buttermilk, water",
    howToMake: "1:4 ratio spray after sunset"
  },
  {
    solution: "Panchagavya",
    teluguName: "పంచగవ్య",
    use: "Immunity booster",
    ingredients: "5 cow-based items + banana & jaggery",
    howToMake: "Ferment for 15 days"
  }
];
