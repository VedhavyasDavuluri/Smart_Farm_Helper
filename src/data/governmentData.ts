
export interface GovernmentScheme {
  name: string;
  teluguName: string;
  description: string;
  benefit: string;
  eligibility?: string;
  coverage: string;
  website?: string;
}

export interface Helpline {
  department: string;
  teluguName: string;
  phoneNumber: string;
  language: string;
  coverage: string;
}

export const governmentSchemes: GovernmentScheme[] = [
  {
    name: "PM-Kisan",
    teluguName: "ప్రధానమంత్రి కిసాన్",
    description: "₹6,000/year income support",
    benefit: "₹2,000 every 4 months to farmer families",
    eligibility: "Small and marginal farmers",
    coverage: "All India",
    website: "https://pmkisan.gov.in"
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana",
    teluguName: "ప్రధానమంత్రి ఫసల్ బీమా యోజన",
    description: "Crop insurance scheme",
    benefit: "Insurance coverage for crop losses",
    eligibility: "All farmers",
    coverage: "All India",
    website: "https://pmfby.gov.in"
  },
  {
    name: "Kisan Credit Card",
    teluguName: "కిసాన్ క్రెడిట్ కార్డ్",
    description: "Easy loan access",
    benefit: "Credit up to ₹3 lakh at 7% interest",
    eligibility: "Farmers with land documents",
    coverage: "All India",
    website: "https://pmkisan.gov.in/Rpt_BeneficiaryStatus_pub.aspx"
  },
  {
    name: "PM Kisan Maan Dhan Yojana",
    teluguName: "ప్రధానమంత్రి కిసాన్ మాన్ ధన్ యోజన",
    description: "Pension scheme for farmers",
    benefit: "₹3,000 monthly pension after 60 years",
    eligibility: "Small and marginal farmers aged 18-40",
    coverage: "All India",
    website: "https://maandhan.in"
  },
  {
    name: "Soil Health Card",
    teluguName: "మట్టి ఆరోగ్య కార్డ్",
    description: "Soil testing and recommendations",
    benefit: "Free soil analysis and fertilizer recommendations",
    eligibility: "All farmers",
    coverage: "All India",
    website: "https://soilhealth.dac.gov.in"
  },
  {
    name: "e-NAM",
    teluguName: "ఇ-నామ్",
    description: "National Agriculture Market",
    benefit: "Online trading platform for better prices",
    eligibility: "All farmers and traders",
    coverage: "All India",
    website: "https://enam.gov.in"
  }
];

export const helplineNumbers: Helpline[] = [
  {
    department: "Kisan Call Centre",
    teluguName: "కిసాన్ కాల్ సెంటర్",
    phoneNumber: "1800-180-1551",
    language: "All regional languages",
    coverage: "All India"
  },
  {
    department: "PM-Kisan Helpline",
    teluguName: "పిఎం-కిసాన్ హెల్ప్‌లైన్",
    phoneNumber: "155261",
    language: "Hindi/English",
    coverage: "All India"
  },
  {
    department: "Crop Insurance Helpline",
    teluguName: "పంట బీమా హెల్ప్‌లైన్",
    phoneNumber: "1800-200-7710",
    language: "Multiple languages",
    coverage: "All India"
  },
  {
    department: "Fertilizer Quality Control",
    teluguName: "ఎరువుల నాణ్యత నియంత్రణ",
    phoneNumber: "1800-180-1551",
    language: "Regional languages",
    coverage: "All India"
  }
];
