
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'te' | 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  hi: {
    // App Title and Navigation
    appTitle: 'स्मार्ट किसान सहायक',
    appSubtitle: 'आपका कृषि साझीदार',
    dashboard: 'डैशबोर्ड',
    
    // Main Navigation
    weather: 'मौसम',
    marketPrices: 'बाजार दर',
    profitCalculator: 'लाभ गणना',
    farmingTips: 'खेती की युक्तियां',
    crops: 'फसलें',
    cultivation: 'खेती के तरीके',
    market: 'बाजार',
    calculator: 'गणना',
    organic: 'जैविक खेती',
    help: 'सहायता',
    
    // Disease Detection
    diseaseDetection: 'रोग पहचान',
    uploadImage: 'चित्र अपलोड करें',
    analyzeImage: 'चित्र का विश्लेषण करें',
    diseaseIdentified: 'रोग की पहचान',
    confidence: 'विश्वसनीयता',
    severity: 'गंभीरता',
    treatment: 'उपचार',
    chemicalTreatment: 'रासायनिक उपचार',
    organicTreatment: 'जैविक उपचार',
    homeRemedies: 'घरेलू उपाय',
    prevention: 'रोकथाम के उपाय',
    
    // Voice Assistant
    voiceAssistant: 'आवाज सहायक',
    listening: 'आपकी बात सुन रहा हूं...',
    speakNow: 'माइक बटन दबाकर बोलें',
    
    // Weather
    temperature: 'तापमान',
    humidity: 'नमी',
    rainfall: 'वर्षा',
    currentCondition: 'वर्तमान स्थिति',
    forecast: '3-दिन का पूर्वानुमान',
    realTimeWeather: 'वर्तमान मौसम',
    windSpeed: 'हवा की गति',
    pressure: 'दबाव',
    
    // Market Prices
    pricePerQuintal: 'दर (प्रति क्विंटल)',
    marketYard: 'मंडी',
    district: 'जिला',
    todayPrice: 'आज की दर',
    yesterdayPrice: 'कल की दर',
    priceChange: 'दर में बदलाव',
    
    // Crop Information
    cropName: 'फसल का नाम',
    season: 'मौसम',
    sowingTime: 'बुआई का समय',
    harvestTime: 'कटाई का समय',
    idealTemp: 'आदर्श तापमान',
    waterNeeds: 'पानी की आवश्यकता',
    profitPerAcre: 'प्रति एकड़ लाभ',
    
    // Seasons
    kharif: 'खरीफ',
    rabi: 'रबी',
    summer: 'गर्मी',
    
    // Fertilizers
    fertilizer: 'उर्वरक',
    basalFertilizer: 'आधार उर्वरक',
    topDressing: 'टॉप ड्रेसिंग',
    nitrogen: 'नाइट्रोजन',
    phosphorus: 'फास्फोरस',
    potassium: 'पोटेशियम',
    
    // Pests and Diseases
    pest: 'कीट',
    disease: 'रोग',
    symptom: 'लक्षण',
    solution: 'समाधान',
    pesticide: 'कीटनाशक',
    fungicide: 'फफूंदनाशक',
    
    // Government Schemes
    governmentSchemes: 'सरकारी योजनाएं',
    rythuBharosa: 'रैथु भरोसा',
    pmKisan: 'पीएम किसान',
    kisanCreditCard: 'किसान क्रेडिट कार्ड',
    cropInsurance: 'फसल बीमा',
    
    // Common Terms
    loading: 'लोड हो रहा है...',
    retry: 'पुनः प्रयास करें',
    error: 'त्रुटि',
    success: 'सफलता',
    submit: 'जमा करें',
    cancel: 'रद्द करें',
    save: 'सहेजें',
    delete: 'हटाएं',
    edit: 'संपादित करें',
    view: 'देखें',
    close: 'बंद करें',
    
    // Quantities and Units
    kg: 'किलो',
    quintal: 'क्विंटल',
    acre: 'एकड़',
    hectare: 'हेक्टेयर',
    liter: 'लीटर',
    gram: 'ग्राम',
    rupees: 'रुपये',
    
    // Quality Terms
    high: 'उच्च',
    medium: 'मध्यम',
    low: 'कम',
    good: 'अच्छा',
    bad: 'खराब',
    excellent: 'उत्कृष्ट',
    
    // Helpline
    helpline: 'हेल्पलाइन',
    contactNumber: 'संपर्क नंबर',
    
    // No data messages
    noWeatherData: 'मौसम की जानकारी उपलब्ध नहीं',
    noMarketData: 'बाजार की जानकारी उपलब्ध नहीं',
    noCropData: 'फसल की जानकारी उपलब्ध नहीं',
    
    // Authentication
    login: 'लॉगिन',
    signup: 'साइन अप',
    logout: 'लॉगआउट',
    email: 'ईमेल',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    fullName: 'पूरा नाम',
    
    // Form Validation
    emailRequired: 'ईमेल आवश्यक है',
    passwordRequired: 'पासवर्ड आवश्यक है',
    nameRequired: 'नाम आवश्यक है',
    invalidEmail: 'गलत ईमेल',
    passwordTooShort: 'पासवर्ड बहुत छोटा है',
    passwordsDoNotMatch: 'पासवर्ड मेल नहीं खाते'
  },
  te: {
    // App Title and Navigation
    appTitle: 'స్మార్ట్ రైతు సహాయకుడు',
    appSubtitle: 'మీ వ్యవసాయ భాగస్వామి',
    dashboard: 'డాష్‌బోర్డ్',
    
    // Main Navigation
    weather: 'వాతావరణం',
    marketPrices: 'మార్కెట్ ధరలు',
    profitCalculator: 'లాభ లెక్కలు',
    farmingTips: 'వ్యవసాయ చిట్కాలు',
    crops: 'పంటలు',
    cultivation: 'సాగు పద్ధతులు',
    market: 'మార్కెట్',
    calculator: 'లెక్కలు',
    organic: 'జైవిక వ్యవసాయం',
    help: 'సహాయం',
    
    // Disease Detection
    diseaseDetection: 'వ్యాధి గుర్తింపు',
    uploadImage: 'చిత్రం అప్‌లోడ్ చేయండి',
    analyzeImage: 'చిత్రం విశ్లేషించండి',
    diseaseIdentified: 'వ్యాధి గుర్తించబడింది',
    confidence: 'నమ్మకత్వం',
    severity: 'తీవ్రత',
    treatment: 'చికిత్స',
    chemicalTreatment: 'రసాయన చికిత్స',
    organicTreatment: 'జైవిక చికిత్స',
    homeRemedies: 'ఇంటి వైద్యం',
    prevention: 'నివారణ చర్యలు',
    
    // Voice Assistant
    voiceAssistant: 'వాయిస్ అసిస్టెంట్',
    listening: 'మీ మాట వింటున్నాను...',
    speakNow: 'మైక్ బటన్ నొక్కి మాట్లాడండి',
    
    // Weather
    temperature: 'ఉష్ణోగ్రత',
    humidity: 'తేమ శాతం',
    rainfall: 'వర్షపాతం',
    currentCondition: 'ప్రస్తుత వాతావరణ పరిస్థితి',
    forecast: '3-రోజుల వాతావరణ సూచన',
    realTimeWeather: 'ప్రస్తుత వాతావరణం',
    windSpeed: 'గాలి వేగం',
    pressure: 'వాయుపీడనం',
    
    // Market Prices
    pricePerQuintal: 'ధర (క్వింటల్‌కు)',
    marketYard: 'మార్కెట్ యార్డ్',
    district: 'జిల్లా',
    todayPrice: 'నేటి ధర',
    yesterdayPrice: 'నిన్నటి ధర',
    priceChange: 'ధర మార్పు',
    
    // Crop Information
    cropName: 'పంట పేరు',
    season: 'సీజన్',
    sowingTime: 'విత్తన సమయం',
    harvestTime: 'కోత సమయం',
    idealTemp: 'అనుకూల ఉష్ణోగ్రత',
    waterNeeds: 'నీటి అవసరం',
    profitPerAcre: 'ఎకరుకు లాభం',
    
    // Seasons
    kharif: 'ఖరీఫ్',
    rabi: 'రబీ',
    summer: 'వేసవి',
    
    // Fertilizers
    fertilizer: 'ఎరువులు',
    basalFertilizer: 'బేసల్ ఎరువు',
    topDressing: 'టాప్ డ్రెసింగ్',
    nitrogen: 'నత్రజని',
    phosphorus: 'భాస్వరం',
    potassium: 'పొటాషియం',
    
    // Pests and Diseases
    pest: 'కీటకాలు',
    disease: 'వ్యాధులు',
    symptom: 'లక్షణం',
    solution: 'పరిష్కారం',
    pesticide: 'కీటకనాశకం',
    fungicide: 'శిలీంధ్రనాశకం',
    
    // Government Schemes
    governmentSchemes: 'ప్రభుత్వ పథకాలు',
    rythuBharosa: 'రైతు భరోసా',
    pmKisan: 'పిఎం కిసాన్',
    kisanCreditCard: 'కిసాన్ క్రెడిట్ కార్డ్',
    cropInsurance: 'పంట బీమా',
    
    // Common Terms
    loading: 'లోడవుతోంది...',
    retry: 'మళ్ళీ ప్రయత్నించండి',
    error: 'లోపం',
    success: 'విజయవంతం',
    submit: 'సమర్పించండి',
    cancel: 'రద్దు చేయండి',
    save: 'దాచండి',
    delete: 'తొలగించండి',
    edit: 'సవరించండి',
    view: 'చూడండి',
    close: 'మూసివేయండి',
    
    // Quantities and Units
    kg: 'కిలోలు',
    quintal: 'క్వింటల్',
    acre: 'ఎకరు',
    hectare: 'హెక్టారు',
    liter: 'లీటర్',
    gram: 'గ్రాము',
    rupees: 'రూపాయలు',
    
    // Quality Terms
    high: 'అధిక',
    medium: 'మధ్యమ',
    low: 'తక్కువ',
    good: 'మంచి',
    bad: 'చెడు',
    excellent: 'అద్భుతమైన',
    
    // Helpline
    helpline: 'హెల్ప్‌లైన్',
    contactNumber: 'సంప్రదింపు నంబర్',
    
    // No data messages
    noWeatherData: 'వాతావరణ సమాచారం లభించలేదు',
    noMarketData: 'మార్కెట్ సమాచారం లభించలేదు',
    noCropData: 'పంట సమాచారం లభించలేదు',
    
    // Authentication
    login: 'లాగిన్',
    signup: 'సైన్ అప్',
    logout: 'లాగౌట్',
    email: 'ఇమెయిల్',
    password: 'పాస్‌వర్డ్',
    confirmPassword: 'పాస్‌వర్డ్ నిర్ధారించండి',
    fullName: 'పూర్తి పేరు',
    
    // Form Validation
    emailRequired: 'ఇమెయిల్ అవసరం',
    passwordRequired: 'పాస్‌వర్డ్ అవసరం',
    nameRequired: 'పేరు అవసరం',
    invalidEmail: 'చెల్లని ఇమెయిల్',
    passwordTooShort: 'పాస్‌వర్డ్ చాలా చిన్నది',
    passwordsDoNotMatch: 'పాస్‌వర్డ్‌లు సరిపోలలేదు'
  },
  en: {
    // App Title and Navigation
    appTitle: 'Smart Farmer Assistant',
    appSubtitle: 'Your Agricultural Partner',
    dashboard: 'Dashboard',
    
    // Main Navigation
    weather: 'Weather',
    marketPrices: 'Market Prices',
    profitCalculator: 'Profit Calculator',
    farmingTips: 'Farming Tips',
    crops: 'Crops',
    cultivation: 'Cultivation Methods',
    market: 'Market',
    calculator: 'Calculator',
    organic: 'Organic Farming',
    help: 'Help',
    
    // Disease Detection
    diseaseDetection: 'Disease Detection',
    uploadImage: 'Upload Image',
    analyzeImage: 'Analyze Image',
    diseaseIdentified: 'Disease Identified',
    confidence: 'Confidence',
    severity: 'Severity',
    treatment: 'Treatment',
    chemicalTreatment: 'Chemical Treatment',
    organicTreatment: 'Organic Treatment',
    homeRemedies: 'Home Remedies',
    prevention: 'Prevention Measures',
    
    // Voice Assistant
    voiceAssistant: 'Voice Assistant',
    listening: 'Listening to you...',
    speakNow: 'Press mic button to speak',
    
    // Weather
    temperature: 'Temperature',
    humidity: 'Humidity',
    rainfall: 'Rainfall',
    currentCondition: 'Current Condition',
    forecast: '3-Day Forecast',
    realTimeWeather: 'Real-Time Weather',
    windSpeed: 'Wind Speed',
    pressure: 'Pressure',
    
    // Market Prices
    pricePerQuintal: 'Price (per Quintal)',
    marketYard: 'Market Yard',
    district: 'District',
    todayPrice: 'Today\'s Price',
    yesterdayPrice: 'Yesterday\'s Price',
    priceChange: 'Price Change',
    
    // Crop Information
    cropName: 'Crop Name',
    season: 'Season',
    sowingTime: 'Sowing Time',
    harvestTime: 'Harvest Time',
    idealTemp: 'Ideal Temperature',
    waterNeeds: 'Water Requirements',
    profitPerAcre: 'Profit per Acre',
    
    // Seasons
    kharif: 'Kharif',
    rabi: 'Rabi',
    summer: 'Summer',
    
    // Fertilizers
    fertilizer: 'Fertilizers',
    basalFertilizer: 'Basal Fertilizer',
    topDressing: 'Top Dressing',
    nitrogen: 'Nitrogen',
    phosphorus: 'Phosphorus',
    potassium: 'Potassium',
    
    // Pests and Diseases
    pest: 'Pests',
    disease: 'Diseases',
    symptom: 'Symptom',
    solution: 'Solution',
    pesticide: 'Pesticide',
    fungicide: 'Fungicide',
    
    // Government Schemes
    governmentSchemes: 'Government Schemes',
    rythuBharosa: 'Rythu Bharosa',
    pmKisan: 'PM-Kisan',
    kisanCreditCard: 'Kisan Credit Card',
    cropInsurance: 'Crop Insurance',
    
    // Common Terms
    loading: 'Loading...',
    retry: 'Retry',
    error: 'Error',
    success: 'Success',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    close: 'Close',
    
    // Quantities and Units
    kg: 'Kg',
    quintal: 'Quintal',
    acre: 'Acre',
    hectare: 'Hectare',
    liter: 'Liter',
    gram: 'Gram',
    rupees: 'Rupees',
    
    // Quality Terms
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    good: 'Good',
    bad: 'Bad',
    excellent: 'Excellent',
    
    // Helpline
    helpline: 'Helpline',
    contactNumber: 'Contact Number',
    
    // No data messages
    noWeatherData: 'No weather data available',
    noMarketData: 'No market data available',
    noCropData: 'No crop data available',
    
    // Authentication
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullName: 'Full Name',
    
    // Form Validation
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    nameRequired: 'Name is required',
    invalidEmail: 'Invalid email',
    passwordTooShort: 'Password too short',
    passwordsDoNotMatch: 'Passwords do not match'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.te] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
