
export interface CropRecommendationData {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
  label: string;
}

export const cropRecommendationDataset: CropRecommendationData[] = [
  { nitrogen: 90, phosphorus: 42, potassium: 43, temperature: 20.87974371, humidity: 82.00274423, ph: 6.502985292000001, rainfall: 202.9355362, label: "rice" },
  { nitrogen: 85, phosphorus: 58, potassium: 41, temperature: 21.77046169, humidity: 80.31964408, ph: 7.038096361, rainfall: 226.6555374, label: "rice" },
  { nitrogen: 60, phosphorus: 55, potassium: 44, temperature: 23.00445915, humidity: 82.3207629, ph: 7.840207144, rainfall: 263.9642476, label: "rice" },
  { nitrogen: 74, phosphorus: 35, potassium: 40, temperature: 26.49109635, humidity: 80.15836264, ph: 6.980400905, rainfall: 242.8640342, label: "rice" },
  { nitrogen: 78, phosphorus: 42, potassium: 42, temperature: 20.13017482, humidity: 81.60487287, ph: 7.628472891, rainfall: 262.7173405, label: "rice" },
  { nitrogen: 69, phosphorus: 37, potassium: 42, temperature: 23.05804872, humidity: 83.37011772, ph: 7.073453503, rainfall: 251.0549998, label: "rice" },
  { nitrogen: 69, phosphorus: 55, potassium: 38, temperature: 22.70883798, humidity: 82.63941394, ph: 5.70080568, rainfall: 271.3248604, label: "rice" },
  { nitrogen: 94, phosphorus: 53, potassium: 40, temperature: 20.27774362, humidity: 82.89408619, ph: 5.718627177999999, rainfall: 241.9741949, label: "rice" },
  { nitrogen: 89, phosphorus: 54, potassium: 38, temperature: 24.51588066, humidity: 83.53521629999999, ph: 6.685346424, rainfall: 230.4462359, label: "rice" },
  { nitrogen: 68, phosphorus: 58, potassium: 38, temperature: 23.22397386, humidity: 83.03322691, ph: 6.336253525, rainfall: 221.2091958, label: "rice" },
  { nitrogen: 91, phosphorus: 53, potassium: 40, temperature: 26.52723513, humidity: 81.41753846, ph: 5.386167788, rainfall: 264.6148697, label: "rice" },
  { nitrogen: 90, phosphorus: 46, potassium: 42, temperature: 23.97898217, humidity: 81.45061596, ph: 7.50283396, rainfall: 250.0832336, label: "rice" },
  { nitrogen: 78, phosphorus: 58, potassium: 44, temperature: 26.80079604, humidity: 80.88684822, ph: 5.108681786, rainfall: 284.4364567, label: "rice" },
  { nitrogen: 93, phosphorus: 56, potassium: 36, temperature: 24.01497622, humidity: 82.05687182, ph: 6.98435366, rainfall: 185.2773389, label: "rice" },
  { nitrogen: 94, phosphorus: 50, potassium: 37, temperature: 25.66585205, humidity: 80.66385045, ph: 6.94801983, rainfall: 209.5869708, label: "rice" },
  { nitrogen: 60, phosphorus: 48, potassium: 39, temperature: 24.28209415, humidity: 80.30025587, ph: 7.0422990689999985, rainfall: 231.0863347, label: "rice" },
  { nitrogen: 85, phosphorus: 38, potassium: 41, temperature: 21.58711777, humidity: 82.7883708, ph: 6.2490506560000005, rainfall: 276.65524589999995, label: "rice" },
  { nitrogen: 91, phosphorus: 35, potassium: 39, temperature: 23.79391957, humidity: 80.41817957, ph: 6.970859754, rainfall: 206.2611855, label: "rice" },
  { nitrogen: 77, phosphorus: 38, potassium: 36, temperature: 21.8652524, humidity: 80.1923008, ph: 5.953933276, rainfall: 224.55501690000003, label: "rice" },
  { nitrogen: 88, phosphorus: 35, potassium: 40, temperature: 23.57943626, humidity: 83.58760316, ph: 5.85393208, rainfall: 291.2986618000001, label: "rice" },
  { nitrogen: 89, phosphorus: 45, potassium: 36, temperature: 21.32504158, humidity: 80.47476396, ph: 6.442475375, rainfall: 185.4974732, label: "rice" },
  { nitrogen: 76, phosphorus: 40, potassium: 43, temperature: 25.15745531, humidity: 83.11713476, ph: 5.070175667, rainfall: 231.3843163, label: "rice" },
  { nitrogen: 67, phosphorus: 59, potassium: 41, temperature: 21.94766735, humidity: 80.97384195, ph: 6.012632591, rainfall: 213.3560921, label: "rice" },
  { nitrogen: 83, phosphorus: 41, potassium: 43, temperature: 21.0525355, humidity: 82.67839517, ph: 6.254028451, rainfall: 233.1075816, label: "rice" },
  { nitrogen: 98, phosphorus: 47, potassium: 37, temperature: 23.48381344, humidity: 81.33265073, ph: 7.375482851, rainfall: 224.0581164, label: "rice" },
  { nitrogen: 66, phosphorus: 53, potassium: 41, temperature: 25.0756354, humidity: 80.52389148, ph: 7.778915154, rainfall: 257.0038865, label: "rice" },
  { nitrogen: 97, phosphorus: 59, potassium: 43, temperature: 26.35927159, humidity: 84.04403589, ph: 6.2865001760000006, rainfall: 271.35861370000003, label: "rice" },
  { nitrogen: 97, phosphorus: 50, potassium: 41, temperature: 24.52922681, humidity: 80.54498576, ph: 7.070959995, rainfall: 260.2634026, label: "rice" },
  { nitrogen: 60, phosphorus: 49, potassium: 44, temperature: 20.77576147, humidity: 84.49774397, ph: 6.244841491, rainfall: 240.0810647, label: "rice" },
  { nitrogen: 84, phosphorus: 51, potassium: 35, temperature: 22.30157427, humidity: 80.64416466, ph: 6.043304899, rainfall: 197.9791215, label: "rice" },
  { nitrogen: 73, phosphorus: 57, potassium: 41, temperature: 21.44653958, humidity: 84.94375962, ph: 5.824709117, rainfall: 272.2017204, label: "rice" },
  { nitrogen: 92, phosphorus: 35, potassium: 40, temperature: 22.17931888, humidity: 80.33127223, ph: 6.3573893660000005, rainfall: 200.0882787, label: "rice" },
  { nitrogen: 85, phosphorus: 37, potassium: 39, temperature: 24.52783742, humidity: 82.73685569, ph: 6.364134967999999, rainfall: 224.67572310000003, label: "rice" },
  { nitrogen: 98, phosphorus: 53, potassium: 38, temperature: 20.26707606, humidity: 81.63895217, ph: 5.01450727, rainfall: 270.4417274, label: "rice" },
  { nitrogen: 88, phosphorus: 54, potassium: 44, temperature: 25.7354293, humidity: 83.88266234, ph: 6.149410611, rainfall: 233.1321372, label: "rice" },
  { nitrogen: 95, phosphorus: 55, potassium: 42, temperature: 26.79533926, humidity: 82.1480873, ph: 5.950660556, rainfall: 193.3473987, label: "rice" },
  { nitrogen: 99, phosphorus: 57, potassium: 35, temperature: 26.75754171, humidity: 81.17734011, ph: 5.960370061, rainfall: 272.29990560000005, label: "rice" },
  { nitrogen: 95, phosphorus: 39, potassium: 36, temperature: 23.86330467, humidity: 83.15250801, ph: 5.561398642, rainfall: 285.2493645, label: "rice" },
  { nitrogen: 60, phosphorus: 43, potassium: 44, temperature: 21.01944696, humidity: 82.95221726, ph: 7.416245107000001, rainfall: 298.40184710000005, label: "rice" },
  { nitrogen: 63, phosphorus: 44, potassium: 41, temperature: 24.17298839, humidity: 83.7287574, ph: 5.583370042, rainfall: 257.0343554, label: "rice" },
  { nitrogen: 62, phosphorus: 42, potassium: 36, temperature: 22.78133816, humidity: 82.06719137, ph: 6.430010215, rainfall: 248.7183228, label: "rice" },
  { nitrogen: 64, phosphorus: 45, potassium: 43, temperature: 25.62980105, humidity: 83.52842314, ph: 5.534878156, rainfall: 209.9001977, label: "rice" },
  { nitrogen: 83, phosphorus: 60, potassium: 36, temperature: 25.59704938, humidity: 80.14509262, ph: 6.903985986, rainfall: 200.834898, label: "rice" },
  { nitrogen: 82, phosphorus: 40, potassium: 40, temperature: 23.83067496, humidity: 84.81360127, ph: 6.271478837999999, rainfall: 298.5601175, label: "rice" },
  { nitrogen: 85, phosphorus: 52, potassium: 45, temperature: 26.31355498, humidity: 82.36698992, ph: 7.224285503, rainfall: 265.5355937, label: "rice" },
  { nitrogen: 91, phosphorus: 35, potassium: 38, temperature: 24.8972823, humidity: 80.52586088, ph: 6.13428721, rainfall: 183.6793207, label: "rice" },
  { nitrogen: 76, phosphorus: 49, potassium: 42, temperature: 24.958779, humidity: 84.47963372, ph: 5.206373153, rainfall: 196.95600080000003, label: "rice" },
  { nitrogen: 74, phosphorus: 39, potassium: 38, temperature: 23.24113501, humidity: 84.59201843, ph: 7.782051312999999, rainfall: 233.0453455, label: "rice" },
  { nitrogen: 79, phosphorus: 43, potassium: 39, temperature: 21.66628296, humidity: 80.70960551, ph: 7.062779015, rainfall: 210.8142087, label: "rice" },
  { nitrogen: 88, phosphorus: 55, potassium: 45, temperature: 24.63544858, humidity: 80.41363018, ph: 7.730367824, rainfall: 253.7202781, label: "rice" },
  { nitrogen: 60, phosphorus: 36, potassium: 43, temperature: 23.43121862, humidity: 83.06310136, ph: 5.286203711000001, rainfall: 219.9048349, label: "rice" },
  { nitrogen: 76, phosphorus: 60, potassium: 39, temperature: 20.0454142, humidity: 80.3477562, ph: 6.766240045, rainfall: 208.5810155, label: "rice" },
  { nitrogen: 93, phosphorus: 56, potassium: 42, temperature: 23.85724032, humidity: 82.22572988, ph: 7.382762603, rainfall: 195.0948311, label: "rice" },
  { nitrogen: 65, phosphorus: 60, potassium: 43, temperature: 21.97199397, humidity: 81.89918197, ph: 5.658169482000001, rainfall: 227.3637009, label: "rice" },
  { nitrogen: 95, phosphorus: 52, potassium: 36, temperature: 26.22916897, humidity: 83.83625819, ph: 5.543360237999999, rainfall: 286.5083725, label: "rice" },
  { nitrogen: 75, phosphorus: 38, potassium: 39, temperature: 23.44676801, humidity: 84.79352417, ph: 6.215109715, rainfall: 283.9338466, label: "rice" },
  { nitrogen: 74, phosphorus: 54, potassium: 38, temperature: 25.65553461, humidity: 83.47021081, ph: 7.120272972, rainfall: 217.3788583, label: "rice" },
  { nitrogen: 91, phosphorus: 36, potassium: 45, temperature: 24.44345477, humidity: 82.45432595, ph: 5.950647577000001, rainfall: 267.97619480000003, label: "rice" },
  { nitrogen: 71, phosphorus: 46, potassium: 40, temperature: 20.2801937, humidity: 82.1235421, ph: 7.236705436, rainfall: 191.9535738, label: "rice" },
  { nitrogen: 99, phosphorus: 55, potassium: 35, temperature: 21.7238313, humidity: 80.2389895, ph: 6.501697816, rainfall: 277.9626192, label: "rice" },
  { nitrogen: 72, phosphorus: 40, potassium: 38, temperature: 20.41447029, humidity: 82.20802629, ph: 7.592490617, rainfall: 245.1511304, label: "rice" },
  { nitrogen: 83, phosphorus: 58, potassium: 45, temperature: 25.75528612, humidity: 83.51827127, ph: 5.875345751, rainfall: 245.6626799, label: "rice" },
  { nitrogen: 93, phosphorus: 58, potassium: 38, temperature: 20.61521424, humidity: 83.77345559, ph: 6.932400225, rainfall: 279.5451717, label: "rice" },
  { nitrogen: 70, phosphorus: 36, potassium: 42, temperature: 21.84106875, humidity: 80.72886384, ph: 6.9462098810000015, rainfall: 202.3838319, label: "rice" },
  { nitrogen: 76, phosphorus: 47, potassium: 42, temperature: 20.08369642, humidity: 83.29114712, ph: 5.739175027000001, rainfall: 263.6372176, label: "rice" },
  { nitrogen: 99, phosphorus: 41, potassium: 36, temperature: 24.45802087, humidity: 82.74835604, ph: 6.738652179, rainfall: 182.5616319, label: "rice" },
  { nitrogen: 99, phosphorus: 54, potassium: 37, temperature: 21.14347496, humidity: 80.33502926, ph: 5.5948196260000005, rainfall: 198.6730942, label: "rice" },
  { nitrogen: 86, phosphorus: 59, potassium: 35, temperature: 25.78720567, humidity: 82.11124033, ph: 6.946636369, rainfall: 243.5120414, label: "rice" },
  { nitrogen: 69, phosphorus: 46, potassium: 41, temperature: 23.64124821, humidity: 80.28597873, ph: 5.012139669, rainfall: 263.1103304, label: "rice" },
  { nitrogen: 91, phosphorus: 56, potassium: 37, temperature: 23.43191632, humidity: 80.56887849, ph: 6.363472207999999, rainfall: 269.5039162, label: "rice" },
  { nitrogen: 61, phosphorus: 52, potassium: 41, temperature: 24.97669518, humidity: 83.891805, ph: 6.880431223, rainfall: 204.8001847, label: "rice" },
  { nitrogen: 67, phosphorus: 45, potassium: 38, temperature: 22.72791041, humidity: 82.17068809999998, ph: 7.300410836, rainfall: 260.8875056, label: "rice" },
  { nitrogen: 79, phosphorus: 42, potassium: 37, temperature: 24.87300744, humidity: 82.84022551, ph: 6.587918707999999, rainfall: 295.6094492000001, label: "rice" },
  { nitrogen: 78, phosphorus: 43, potassium: 42, temperature: 21.32376327, humidity: 83.00320459, ph: 7.283736617000001, rainfall: 192.3197536, label: "rice" },
  { nitrogen: 75, phosphorus: 54, potassium: 36, temperature: 26.29465461, humidity: 84.56919326, ph: 7.023936392, rainfall: 257.4914906, label: "rice" },
  { nitrogen: 97, phosphorus: 36, potassium: 45, temperature: 22.2286982, humidity: 81.85872947, ph: 6.939083505, rainfall: 278.0791793, label: "rice" },
  { nitrogen: 67, phosphorus: 47, potassium: 44, temperature: 26.73072391, humidity: 81.78596776, ph: 7.868474653, rainfall: 280.4044392, label: "rice" },
  { nitrogen: 73, phosphorus: 35, potassium: 38, temperature: 24.88921174, humidity: 81.97927117, ph: 5.005306977, rainfall: 185.9461429, label: "rice" },
  { nitrogen: 77, phosphorus: 36, potassium: 37, temperature: 26.88444878, humidity: 81.46033732, ph: 6.136131869, rainfall: 194.5766559, label: "rice" },
  { nitrogen: 81, phosphorus: 41, potassium: 38, temperature: 22.67846116, humidity: 83.72874389, ph: 7.5240800760000015, rainfall: 200.9133156, label: "rice" },
  { nitrogen: 68, phosphorus: 57, potassium: 43, temperature: 26.08867875, humidity: 80.37979919, ph: 5.706943251, rainfall: 182.9043504, label: "rice" },
  { nitrogen: 72, phosphorus: 45, potassium: 35, temperature: 25.42977518, humidity: 82.94682591, ph: 5.758506323, rainfall: 195.3574542, label: "rice" },
  { nitrogen: 61, phosphorus: 53, potassium: 43, temperature: 26.40323239, humidity: 81.05635517, ph: 6.349606327, rainfall: 223.3671883, label: "rice" },
  { nitrogen: 67, phosphorus: 43, potassium: 39, temperature: 26.04371967, humidity: 84.96907151, ph: 5.9999690260000005, rainfall: 186.7536773, label: "rice" },
  { nitrogen: 67, phosphorus: 58, potassium: 39, temperature: 25.2827223, humidity: 80.54372813, ph: 5.453592032, rainfall: 220.1156708, label: "rice" },
  { nitrogen: 66, phosphorus: 60, potassium: 38, temperature: 22.08576562, humidity: 83.47038318, ph: 6.372576327000001, rainfall: 231.7364957, label: "rice" },
  { nitrogen: 82, phosphorus: 43, potassium: 38, temperature: 23.28617173, humidity: 81.43321641, ph: 5.105588355, rainfall: 242.3170629, label: "rice" },
  { nitrogen: 84, phosphorus: 50, potassium: 44, temperature: 25.48591986, humidity: 81.40633547, ph: 5.9353444060000005, rainfall: 182.6549356, label: "rice" },
  { nitrogen: 81, phosphorus: 53, potassium: 42, temperature: 23.67575393, humidity: 81.03569343, ph: 5.17782304, rainfall: 233.7034975, label: "rice" },
  { nitrogen: 91, phosphorus: 50, potassium: 40, temperature: 20.82477109, humidity: 84.1341879, ph: 6.462391607000001, rainfall: 230.22422230000004, label: "rice" },
  { nitrogen: 93, phosphorus: 53, potassium: 38, temperature: 26.92995077, humidity: 81.91411159, ph: 7.069172227, rainfall: 290.67937830000005, label: "rice" },
  { nitrogen: 90, phosphorus: 44, potassium: 38, temperature: 23.83509503, humidity: 83.88387074, ph: 7.473134377, rainfall: 241.20135130000003, label: "rice" },
  { nitrogen: 81, phosphorus: 45, potassium: 35, temperature: 26.52872817, humidity: 80.12267476, ph: 6.158376967000001, rainfall: 218.9163567, label: "rice" },
  { nitrogen: 78, phosphorus: 40, potassium: 38, temperature: 26.46428311, humidity: 83.85642678, ph: 7.549873681, rainfall: 248.2256491, label: "rice" },
  { nitrogen: 60, phosphorus: 51, potassium: 36, temperature: 22.69657794, humidity: 82.81088865, ph: 6.028321557999999, rainfall: 256.9964761, label: "rice" },
  { nitrogen: 88, phosphorus: 46, potassium: 42, temperature: 22.68319059, humidity: 83.46358271, ph: 6.604993475, rainfall: 194.2651719, label: "rice" },
  { nitrogen: 93, phosphorus: 47, potassium: 37, temperature: 21.53346343, humidity: 82.14004101, ph: 6.500343222000001, rainfall: 295.9248796, label: "rice" },
  { nitrogen: 60, phosphorus: 55, potassium: 45, temperature: 21.40865769, humidity: 83.32931909999998, ph: 5.935745417000001, rainfall: 287.5766935000001, label: "rice" },
  { nitrogen: 78, phosphorus: 35, potassium: 44, temperature: 26.54348085, humidity: 84.67353597, ph: 7.072655622, rainfall: 183.6222657, label: "rice" },
  { nitrogen: 65, phosphorus: 37, potassium: 40, temperature: 23.35905428, humidity: 83.59512273, ph: 5.333322606, rainfall: 188.413665, label: "rice" }
];

// Helper function to get crop name in Telugu
export const getCropNameInTelugu = (englishName: string): string => {
  const cropNames: { [key: string]: string } = {
    'rice': 'వరి',
    'wheat': 'గోధుమ',
    'maize': 'మొక్కజొన్న',
    'cotton': 'పత్తి',
    'sugarcane': 'చెరకు',
    'groundnut': 'వేరుసెనగ',
    'banana': 'అరటి',
    'mango': 'మామిడి',
    'coconut': 'కొబ్బరి',
    'tomato': 'టమాట',
    'onion': 'ఉల్లిపాయ',
    'potato': 'బంగాళాదుంప',
    'chilli': 'మిరపకాయ',
    'turmeric': 'పసుపు',
    'ginger': 'అల్లం'
  };
  return cropNames[englishName.toLowerCase()] || englishName;
};

// Helper function to calculate similarity between two data points
export const calculateSimilarity = (input: Omit<CropRecommendationData, 'label'>, reference: CropRecommendationData): number => {
  const weights = {
    nitrogen: 0.2,
    phosphorus: 0.2,
    potassium: 0.2,
    temperature: 0.15,
    humidity: 0.1,
    ph: 0.1,
    rainfall: 0.05
  };

  const normalizedDifferences = {
    nitrogen: Math.abs(input.nitrogen - reference.nitrogen) / 100,
    phosphorus: Math.abs(input.phosphorus - reference.phosphorus) / 100,
    potassium: Math.abs(input.potassium - reference.potassium) / 100,
    temperature: Math.abs(input.temperature - reference.temperature) / 40,
    humidity: Math.abs(input.humidity - reference.humidity) / 100,
    ph: Math.abs(input.ph - reference.ph) / 14,
    rainfall: Math.abs(input.rainfall - reference.rainfall) / 300
  };

  const weightedSum = Object.entries(normalizedDifferences).reduce((sum, [key, diff]) => {
    return sum + (weights[key as keyof typeof weights] * diff);
  }, 0);

  return 1 - weightedSum; // Higher score means more similar
};

// Function to recommend crops based on input conditions
export const recommendCrops = (inputConditions: Omit<CropRecommendationData, 'label'>): Array<{ crop: string, teluguName: string, similarity: number }> => {
  const similarities = cropRecommendationDataset.map(dataPoint => ({
    crop: dataPoint.label,
    teluguName: getCropNameInTelugu(dataPoint.label),
    similarity: calculateSimilarity(inputConditions, dataPoint)
  }));

  // Group by crop and get the best similarity for each crop
  const cropGroups: { [key: string]: { crop: string, teluguName: string, similarity: number } } = {};
  
  similarities.forEach(item => {
    if (!cropGroups[item.crop] || cropGroups[item.crop].similarity < item.similarity) {
      cropGroups[item.crop] = item;
    }
  });

  // Return top recommendations sorted by similarity
  return Object.values(cropGroups)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 5);
};
