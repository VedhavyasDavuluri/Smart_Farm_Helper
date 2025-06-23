
export interface MonthlyAdvice {
  month: string;
  climate: string;
  advice: string;
}

export const weatherAdviceByMonth: MonthlyAdvice[] = [
  {
    month: "జూన్",
    climate: "Monsoon begins",
    advice: "Start paddy nursery; rain-fed sowing"
  },
  {
    month: "జూలై",
    climate: "Heavy rains",
    advice: "Drainage check; watch for pests"
  },
  {
    month: "ఆగస్ట్",
    climate: "Stable rain",
    advice: "Fertilizer application time"
  },
  {
    month: "అక్టోబర్",
    climate: "Rain ends",
    advice: "Start harvesting early Kharif crops"
  },
  {
    month: "డిసెంబర్",
    climate: "Cool, dry",
    advice: "Good for Rabi sowing (chilli, sunflower)"
  }
];
