
// Comprehensive disease database with expanded crop coverage
const diseaseDatabase = {
  'వరి': [
    {
      id: 1,
      teluguName: 'ఆకు పేలుడు',
      englishName: 'Leaf Blast',
      description: 'ఆకులపై గోధుమ రంగు వృత్తాకార మచ్చలు వచ్చే శిలీంధ్ర వ్యాధి',
      symptoms: [
        'Brown spots on leaves with gray center',
        'ఆకులపై గోధుమ రంగు వృత్తాకార మచ్చలు',
        'మచ్చల చుట్టూ పసుపు రంగు కనిపిస్తుంది'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'ట్రైసైక్లాజోల్ 50 WP',
          dosage: '0.6 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో రెండుసార్లు స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'వేపపాకుల సార్ 7 రోజుల చక్రంలో స్ప్రే చేయండి',
        'Neem spray weekly'
      ],
      prevention: [
        'వ్యాధి నిరోధక విత్తనాలు వాడండి',
        'Use resistant varieties, rotate crop',
        'పంట మార్పిడి చేయండి'
      ]
    },
    {
      id: 2,
      teluguName: 'షీథ్ బ్లైట్',
      englishName: 'Sheath Blight',
      description: 'ఆకుల కోసలపై నీరు తేమతో కూడిన మచ్చలు వచ్చే వ్యాధి',
      symptoms: [
        'Lesions on leaf sheath, spreading bands',
        'ఆకుల కోసలపై నీరు తేమతో కూడిన మచ్చలు',
        'మచ్చలు వేగంగా వ్యాపిస్తాయి'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'ప్రోపికోనజోల్ 25 EC',
          dosage: '1 మి.లీ/లీటర్',
          usage: 'లక్షణాలు కనిపించిన వెంటనే స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Improve drainage, remove stubble',
        'సోకిన అవశేషాలను దహనం చేయండి'
      ],
      prevention: [
        'Balanced N application, avoid dense planting',
        'నీటి నిలుపుదల మెరుగుపరచండి',
        'అధిక దట్టమైన సాగు నివారించండి'
      ]
    }
  ],
  'గోధుమ': [
    {
      id: 3,
      teluguName: 'ఆకు‑రస్ట్',
      englishName: 'Leaf Rust',
      description: 'ఆకులపై నారింజ రంగు పుస్ట్యూల్స్ వచ్చే వ్యాధి',
      symptoms: [
        'Orange pustules on upper leaf surfaces',
        'ఆకుల పైభాగంలో నారింజ రంగు పుస్ట్యూల్స్',
        'ఆకులు పసుపురంగులోకి మారతాయి'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'టెబుకోనజోల్ 250 EC',
          dosage: '1 మి.లీ/లీటర్',
          usage: 'లక్షణాలు కనిపించిన వెంటనే స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Balanced fertilization',
        'సమతుల్య ఎరువుల వాడకం'
      ],
      prevention: [
        'Grow resistant cultivars',
        'వ్యాధి నిరోధక రకాలు పండించండి'
      ]
    },
    {
      id: 4,
      teluguName: 'కార్నల్ బంట్',
      englishName: 'Karnal Bunt',
      description: 'గింజలలో నల్లని శిలీంధ్ర గ్రెయిన్స్ వచ్చే వ్యాధి',
      symptoms: [
        'Black fungal grains in spikelets',
        'గింజలలో నల్లని శిలీంధ్ర గ్రెయిన్స్',
        'దుర్వాసన వచ్చడం'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'కార్బెండాజిమ్ 50 WP',
          dosage: '2 గ్రాములు/కిలో విత్తనం',
          usage: 'విత్తన చికిత్స చేయండి'
        }
      ],
      homeRemedies: [
        'Use certified seed, avoid late sowing',
        'ధృవీకరించిన విత్తనాలు వాడండి'
      ],
      prevention: [
        'Clean seed, crop hygiene',
        'పొల పరిశుభ్రత పాటించండి'
      ]
    }
  ],
  'మొక్కజొన్న': [
    {
      id: 5,
      teluguName: 'కాండ శిలీంధ్రం',
      englishName: 'Stem Borer',
      description: 'కాండంలో రంధ్రాలు మరియు ఫ్రాస్ కనిపించే కీట దాడి',
      symptoms: [
        'Holes in stem; frass expelled',
        'కాండంలో రంధ్రాలు',
        'ఫ్రాస్ కనిపించడం'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'క్లోరాంట్రానిలిప్రోల్ 18.5 SC',
          dosage: '0.4 మి.లీ/లీటర్',
          usage: 'ప్రారంభ దశలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Pheromone traps',
        'ఫిరోమోన్ ట్రాప్స్ వాడండి'
      ],
      prevention: [
        'Remove stubble post-harvest',
        'కోత తర్వాత అవశేషాలను నాశనం చేయండి'
      ]
    },
    {
      id: 6,
      teluguName: 'చెవి‑రాడుతనం',
      englishName: 'Ear Rot',
      description: 'చెవిలో నల్ల/గులాబీ రంగు శిలీంధ్రం వచ్చే వ్యాధి',
      symptoms: [
        'Mold on ear; discolored kernels',
        'చెవిలో నల్ల/గులాబీ రంగు శిలీంధ్రం',
        'గింజలు దెబ్బతినడం'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'టెబుకోనజోల్ 250 EC',
          dosage: '1 మి.లీ/లీటర్',
          usage: 'పూల సమయంలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Dry storage, lime-water spray',
        'సున్నం-నీటి స్ప్రే చేయండి'
      ],
      prevention: [
        'Timely harvest',
        'సమయానుకూల కోత'
      ]
    }
  ],
  'పత్తి': [
    {
      id: 7,
      teluguName: 'బోల్ వోర్మ్',
      englishName: 'Bollworm',
      description: 'పత్తి కాయలలో చేదపురుగుల దాడి వల్ల వచ్చే నష్టం',
      symptoms: [
        'Holes in bolls; larvae visible',
        'కాయలలో రంధ్రాలు',
        'లార్వాలు కనిపిస్తాయి'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'ఇమామెక్టిన్ బెంజోయేట్ 5 SG',
          dosage: '0.4 గ్రాములు/లీటర్',
          usage: '10-15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Light traps',
        'రాత్రిపూట లైట్ ట్రాప్ వాడండి'
      ],
      prevention: [
        'Bt cotton, crop rotation',
        'Bt పత్తి సాగు చేయండి'
      ]
    },
    {
      id: 8,
      teluguName: 'పిరిడికోళ్లు',
      englishName: 'Aphid Infestation',
      description: 'ఆకులు వంకరగా మారడం మరియు జిగురు పదార్థం వచ్చే కీట దాడి',
      symptoms: [
        'Curled leaves; sticky residue',
        'ఆకులు వంకరగా మారడం',
        'జిగురు పదార్థం (హనీడ్యూ)'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'ఇమిడాక్లోప్రిడ్ 17.8 SL',
          dosage: '0.3 మి.లీ/లీటర్',
          usage: 'కీటకాలు కనిపించిన వెంటనే స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Soap water spray',
        'సబ్బు నీటితో స్ప్రే చేయండి'
      ],
      prevention: [
        'Introduce ladybugs, intercropping',
        'లేడీబగ్స్ చేపలను ప్రవేశపెట్టండి'
      ]
    }
  ],
  'చెరుకు': [
    {
      id: 9,
      teluguName: 'ఎరుపు రాట్',
      englishName: 'Red Rot',
      description: 'కాండం లోపల ఎరుపు రంగు మచ్చలు వచ్చే వ్యాధి',
      symptoms: [
        'Red lesions in internodes',
        'కాండం లోపల ఎరుపు రంగు మచ్చలు',
        'కాండం వాడిపోవడం'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'కార్బెండాజిమ్ 50 WP',
          dosage: '1 గ్రాము/లీటర్',
          usage: 'మట్టిలో కలిపి నీరు పోయండి'
        }
      ],
      homeRemedies: [
        'Soil treatment',
        'మట్టి చికిత్స చేయండి'
      ],
      prevention: [
        'Use disease-free setts',
        'వ్యాధి రహిత కంది వాడండి'
      ]
    },
    {
      id: 10,
      teluguName: 'నొప్పి',
      englishName: 'Wilt',
      description: 'మొక్క పసుపురంగులోకి మారి వాడిపోవడం',
      symptoms: [
        'Yellowing, plant collapse',
        'మొక్క పసుపురంగులోకి మారడం',
        'మొక్క కూలిపోవడం'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'థయోఫానేట్ మిథైల్',
          dosage: '1 గ్రాము/లీటర్',
          usage: 'మట్టిలో కలిపి నీరు పోయండి'
        }
      ],
      homeRemedies: [
        'Balanced fertilization',
        'సమతుల్య ఎరువుల వాడకం'
      ],
      prevention: [
        'Clean cultivation, good drainage',
        'శుభ్రమైన సాగు, మంచి నీటి నిష్కాసన'
      ]
    }
  ],
  'వేరుసెనగ': [
    {
      id: 11,
      teluguName: 'టిక్కా దద్దుర్లు',
      englishName: 'Tikka Leaf Spot',
      description: 'ఆకులపై గోధుమ రంగు మచ్చలు వచ్చే శిలీంధ్ర వ్యాధి',
      symptoms: [
        'Brown spots on leaves',
        'ఆకులపై గోధుమ రంగు మచ్చలు',
        'మచ్చలు వృత్తాకారంలో ఉంటాయి'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'మాంకోజెబ్ 75 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Neem extract spray',
        'వేపపాకుల కషాయం స్ప్రే చేయండి'
      ],
      prevention: [
        'Crop rotation, maintain soil health',
        'పంట మార్పిడి చేయండి, మట్టి ఆరోగ్యం మెరుగుపరచండి'
      ]
    },
    {
      id: 12,
      teluguName: 'రస్ట్ దద్దుర్లు',
      englishName: 'Rust',
      description: 'ఆకులపై నారింజ రంగు రస్ట్ పుస్ట్యూల్స్ వచ్చే వ్యాధి',
      symptoms: [
        'Orange pustules on leaves',
        'ఆకులపై నారింజ రంగు రస్ట్ పుస్ట్యూల్స్',
        'ఆకుల కింద భాగంలో ఎక్కువగా కనిపిస్తాయి'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'కాపర్ ఆక్సిక్లోరైడ్ 50 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Cow urine spray with jaggery',
        'గోమూత్రంతో గుడ్ కలిపి స్ప్రే చేయండి'
      ],
      prevention: [
        'High potassium nutrition',
        'అధిక K పోషక పదార్థం కలపండి'
      ]
    }
  ],
  'సోయాబీన్': [
    {
      id: 13,
      teluguName: 'దిగువ బెంబె',
      englishName: 'Downy Mildew',
      description: 'ఆకుల కింద భాగంలో దిగువ బెంబె వచ్చే వ్యాధి',
      symptoms: [
        'Gray growth underside',
        'ఆకుల కింద భాగంలో దిగువ బెంబె',
        'ఆకులపై పసుపు మచ్చలు'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'మెటలాక్సిల్ 8 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: 'లక్షణాలు కనిపించిన వెంటనే స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Bordeaux spray',
        'బోర్డెక్స్ మిశ్రమం వాడండి'
      ],
      prevention: [
        'Crop rotation',
        'పంట మార్పిడి చేయండి'
      ]
    },
    {
      id: 14,
      teluguName: 'రస్ట్ దద్దుర్లు',
      englishName: 'Rust',
      description: 'ఆకులపై నారింజ రంగు పుస్ట్యూల్స్ వచ్చే వ్యాధి',
      symptoms: [
        'Orange pustules on leaves',
        'ఆకులపై నారింజ రంగు పుస్ట్యూల్స్',
        'ఆకుల కింద భాగంలో ఎక్కువగా కనిపిస్తాయి'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'కాపర్ ఆక్సిక్లోరైడ్ 50 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Neem dust',
        'వేప పొడిని వాడండి'
      ],
      prevention: [
        'Avoid wet foliage; timely sprays',
        'తేమతో ఆకులు తడవకుండా ఉంచండి'
      ]
    }
  ],
  'ఆవాలు': [
    {
      id: 15,
      teluguName: 'తెలుపు రస్ట్',
      englishName: 'White Rust',
      description: 'ఆకులపై తెల్లని పుస్ట్యూల్స్ వచ్చే వ్యాధి',
      symptoms: [
        'White pustules on leaves',
        'ఆకులపై తెల్లని పుస్ట్యూల్స్',
        'ఆకులు వాడిపోవడం'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'మాంకోజెబ్ 75 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Neem extract spray',
        'వేపపాకుల సార్ స్ప్రే చేయండి'
      ],
      prevention: [
        'Resistant varieties, remove volunteer plants',
        'వ్యాధి నిరోధక రకాలు వాడండి'
      ]
    },
    {
      id: 16,
      teluguName: 'దిగువ బెంబె',
      englishName: 'Downy Mildew',
      description: 'ఆకుల కింద భాగంలో దిగువ బెంబె వచ్చే వ్యాధి',
      symptoms: [
        'Downy growth on leaf underside',
        'ఆకుల కింద భాగంలో దిగువ బెంబె',
        'ఆకులపై పసుపు మచ్చలు'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'మెటలాక్సిల్ 8 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: 'లక్షణాలు కనిపించిన వెంటనే స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Bordeaux mixture',
        'బోర్డెక్స్ మిశ్రమం వాడండి'
      ],
      prevention: [
        'Timely sowing, proper drainage',
        'సమయానుకూల విత్తనం, సరైన నీటి నిష్కాసన'
      ]
    }
  ],
  'పప్పుధాన్యాలు': [
    {
      id: 17,
      teluguName: 'పొడిమొలం బ్లైట్',
      englishName: 'Powdery Mildew',
      description: 'ఆకులపై తెల్లని పొడి పూత వచ్చే శిలీంధ్ర వ్యాధి',
      symptoms: [
        'White powder on leaves/stems',
        'ఆకులపై తెల్లని పొడి పూత',
        'ఆకులు మసకబారడం'
      ],
      severity: 'Low',
      chemical: [
        {
          name: 'గంధకం 80 WG',
          dosage: '2 గ్రాములు/లీటర్',
          usage: 'వారానికి ఒకసారి స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Baking soda spray',
        'బేకింగ్ సోడా స్ప్రే చేయండి'
      ],
      prevention: [
        'Adequate spacing, airflow',
        'సరైన వెంటిలేషన్'
      ]
    },
    {
      id: 18,
      teluguName: 'రస్ట్ దద్దుర్లు',
      englishName: 'Rust',
      description: 'ఆకులపై నారింజ రంగు పుస్ట్యూల్స్ వచ్చే వ్యాధి',
      symptoms: [
        'Orange pustules',
        'ఆకులపై నారింజ రంగు పుస్ట్యూల్స్',
        'ఆకుల కింద భాగంలో ఎక్కువగా కనిపిస్తాయి'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'కాపర్ ఆక్సిక్లోరైడ్ 50 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Neem oil spray',
        'వేప నూనె స్ప్రే చేయండి'
      ],
      prevention: [
        'Resistant varieties, clean fields',
        'వ్యాధి నిరోధక రకాలు వాడండి'
      ]
    }
  ],
  'జనపనార': [
    {
      id: 19,
      teluguName: 'కాండ రాట్',
      englishName: 'Stem Rot',
      description: 'కాండం దిగువ భాగంలో కుళ్ళిపోవడం మరియు మొక్క వాడిపోవడం',
      symptoms: [
        'Soft stem base, wilting',
        'కాండం దిగువ భాగంలో మెత్తబారడం',
        'మొక్క వాడిపోవడం'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'కార్బెండాజిమ్ 50 WP',
          dosage: '1 గ్రాము/లీటర్',
          usage: 'మట్టిలో కలిపి నీరు పోయండి'
        }
      ],
      homeRemedies: [
        'Remove infected plants',
        'సోకిన మొక్కలను తొలగించండి'
      ],
      prevention: [
        'Proper drainage, field sanitation',
        'సరైన నీటి నిష్కాసన, పొల పరిశుభ్రత'
      ]
    },
    {
      id: 20,
      teluguName: 'డషీన్ మాసైక వైరస్',
      englishName: 'Dasheen Mosaic',
      description: 'ఆకులపై మచ్చలు మరియు వైకల్యం వచ్చే వైరస్ వ్యాధి',
      symptoms: [
        'Mottle/patterned leaves',
        'ఆకులపై మచ్చలు',
        'ఆకుల వైకల్యం'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'వైరస్‌కు రసాయన నియంత్రణ లేదు',
          dosage: 'N/A',
          usage: 'వెక్టర్ నియంత్రణపై దృష్టి పెట్టండి'
        }
      ],
      homeRemedies: [
        'Rogue infected plants',
        'సోకిన మొక్కలను తొలగించండి'
      ],
      prevention: [
        'Use virus-free sowing material',
        'వైరస్ రహిత విత్తనాలు వాడండి'
      ]
    }
  ],
  'అరటిపండు': [
    {
      id: 21,
      teluguName: 'పనామా వంపు',
      englishName: 'Panama Wilt',
      description: 'మొక్క పసుపురంగులోకి మారి కూలిపోవడం',
      symptoms: [
        'Yellowing leaves, plant collapse',
        'ఆకులు పసుపురంగులోకి మారడం',
        'మొక్క కూలిపోవడం'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'రసాయన నియంత్రణ లేదు',
          dosage: 'N/A',
          usage: 'సేంద్రియ పద్ధతులు వాడండి'
        }
      ],
      homeRemedies: [
        'Soil solarization',
        'మట్టి సోలారైజేషన్ చేయండి'
      ],
      prevention: [
        'Plant resistant varieties',
        'వ్యాధి నిరోధక రకాలు పండించండి'
      ]
    },
    {
      id: 22,
      teluguName: 'సిగటోకా',
      englishName: 'Sigatoka',
      description: 'ఆకులపై గీతలు మరియు పండ్లపై నల్ల మచ్చలు వచ్చే వ్యాధి',
      symptoms: [
        'Streaks on leaves; black fruit spots',
        'ఆకులపై గీతలు',
        'పండ్లపై నల్ల మచ్చలు'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'కాపర్ ఆక్సిక్లోరైడ్ 50 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Milk sprays weekly',
        'వారానికి పాల స్ప్రే చేయండి'
      ],
      prevention: [
        'Prune old leaves, avoid splashing',
        'పాత ఆకులను కత్తిరించండి'
      ]
    }
  ],
  'మామిడిపండు': [
    {
      id: 23,
      teluguName: 'పొడిమొలం బ్లైట్',
      englishName: 'Powdery Mildew',
      description: 'పువ్వులు మరియు కొత్త ఆకులపై తెల్లని పొడి వచ్చే వ్యాధి',
      symptoms: [
        'White dust on flowers/new leaves',
        'పువ్వులపై తెల్లని పొడి',
        'కొత్త ఆకులపై తెల్లని పూత'
      ],
      severity: 'Low',
      chemical: [
        {
          name: 'గంధకం 80 WG',
          dosage: '2 గ్రాములు/లీటర్',
          usage: 'వారానికి ఒకసారి స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Milk spray 1:9',
        'పాల స్ప్రే (1:9) చేయండి'
      ],
      prevention: [
        'Prune blossoms; improve airflow',
        'పువ్వులను కత్తిరించండి, గాలి ప్రసరణ మెరుగుపరచండి'
      ]
    },
    {
      id: 24,
      teluguName: 'ఆంత్రక్నోస్',
      englishName: 'Anthracnose',
      description: 'పండ్లు మరియు ఆకులపై చీకటి మచ్చలు వచ్చే వ్యాధి',
      symptoms: [
        'Dark spots on fruits/leaves',
        'పండ్లపై చీకటి మచ్చలు',
        'ఆకులపై నల్ల మచ్చలు'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'మాంకోజెబ్ 75 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Fungal cure pastes',
        'శిలీంధ్ర వ్యాధి నిరోధక పేస్ట్‌లు వాడండి'
      ],
      prevention: [
        'Harvest carefully, avoid injuries',
        'జాగ్రత్తగా కోత, గాయాలు నివారించండి'
      ]
    }
  ],
  'టీ': [
    {
      id: 25,
      teluguName: 'బూడిద బ్లైట్',
      englishName: 'Grey Blight',
      description: 'ఆకులపై బూడిద రంగు మచ్చలు మరియు ఆకులు రాలిపోవడం',
      symptoms: [
        'Grey patches on leaves, defoliation',
        'ఆకులపై బూడిద రంగు మచ్చలు',
        'ఆకులు రాలిపోవడం'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'కాపర్ ఆక్సిక్లోరైడ్ 50 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Neem extract spray',
        'వేపపాకుల సార్ స్ప్రే చేయండి'
      ],
      prevention: [
        'Good shade management',
        'మంచి నీడ నిర్వహణ'
      ]
    },
    {
      id: 26,
      teluguName: 'ఎరుపు రస్ట్',
      englishName: 'Red Rust',
      description: 'ఆకుల కింద భాగంలో నారింజ రంగు పుస్ట్యూల్స్ వచ్చే వ్యాధి',
      symptoms: [
        'Orange pustules underside leaves',
        'ఆకుల కింద భాగంలో నారింజ రంగు పుస్ట్యూల్స్',
        'ఆకులు పసుపురంగులోకి మారతాయి'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'టెబుకోనజోల్ 250 EC',
          dosage: '1 మి.లీ/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Remove infested leaf litter',
        'సోకిన ఆకుల చెత్తను తొలగించండి'
      ],
      prevention: [
        'Reduce humidity and prune canopy',
        'తేమ తగ్గించండి మరియు కెనోపీని కత్తిరించండి'
      ]
    }
  ],
  'కాఫీ': [
    {
      id: 27,
      teluguName: 'బెర్రీ వ్యాధి',
      englishName: 'Coffee Berry Disease',
      description: 'కాఫీ పండ్లపై చీకటి మచ్చలు వచ్చే వ్యాధి',
      symptoms: [
        'Dark spots on berries',
        'పండ్లపై చీకటి మచ్చలు',
        'పండ్లు కుళ్ళిపోవడం'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'ట్రైసైక్లాజోల్ 50 WP',
          dosage: '0.6 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Copper spray',
        'కాపర్ స్ప్రే చేయండి'
      ],
      prevention: [
        'Remove infected berries immediately',
        'సోకిన పండ్లను వెంటనే తొలగించండి'
      ]
    },
    {
      id: 28,
      teluguName: 'ఆకు‑రస్ట్',
      englishName: 'Leaf Rust',
      description: 'ఆకుల కింద భాగంలో పసుపు మచ్చలు వచ్చే వ్యాధి',
      symptoms: [
        'Yellow spots underside leaves',
        'ఆకుల కింద భాగంలో పసుపు మచ్చలు',
        'ఆకులు రాలిపోవడం'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'కాపర్ ఆక్సిక్లోరైడ్ 50 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Neem oil spray',
        'వేప నూనె స్ప్రే చేయండి'
      ],
      prevention: [
        'Grow resistant varieties',
        'వ్యాధి నిరోధక రకాలు పండించండి'
      ]
    }
  ],
  'సుగంధ ద్రవ్యాలు': [
    {
      id: 29,
      teluguName: 'ఆకు మచ్చ',
      englishName: 'Turmeric Leaf Spot',
      description: 'పసుపు ఆకులపై వృత్తాకార గోధుమ రంగు మచ్చలు వచ్చే వ్యాధి',
      symptoms: [
        'Circular brown spots on leaves',
        'ఆకులపై వృత్తాకార గోధుమ రంగు మచ్చలు',
        'మచ్చలు క్రమంగా పెరుగుతాయి'
      ],
      severity: 'Moderate',
      chemical: [
        {
          name: 'మాంకోజెబ్ 75 WP',
          dosage: '2 గ్రాములు/లీటర్',
          usage: '15 రోజుల వ్యవధిలో స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Neem extract spray',
        'వేపపాకుల సార్ స్ప్రే చేయండి'
      ],
      prevention: [
        'Ensure good drainage, prune shade',
        'మంచి నీటి నిష్కాసన, నీడ కత్తిరింపు'
      ]
    },
    {
      id: 30,
      teluguName: 'కార్టమం బ్లైట్',
      englishName: 'Cardamom Foorken Blight',
      description: 'కార్టమం కాప్సూల్స్ మరియు ఆకులపై బ్లైట్ వచ్చే వ్యాధి',
      symptoms: [
        'Blight on capsules and leaves',
        'కాప్సూల్స్ మరియు ఆకులపై బ్లైట్',
        'కాప్సూల్స్ కుళ్ళిపోవడం'
      ],
      severity: 'High',
      chemical: [
        {
          name: 'ప్రోపికోనజోల్ 25 EC',
          dosage: '1 మి.లీ/లీటర్',
          usage: 'లక్షణాలు కనిపించిన వెంటనే స్ప్రే చేయండి'
        }
      ],
      homeRemedies: [
        'Leaf litter removal',
        'ఆకుల చెత్తను తొలగించండి'
      ],
      prevention: [
        'Avoid overhead irrigation',
        'తలపై నీరు పోయడం నివారించండి'
      ]
    }
  ]
};

// Mock AI analysis function
export const analyzeCropImage = async (imageFile: File): Promise<any> => {
  // Simulate API processing time
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // For demo purposes, we'll use a simple mock analysis
  // In a real implementation, this would call an AI vision API
  
  const cropTypes = Object.keys(diseaseDatabase);
  const randomCrop = cropTypes[Math.floor(Math.random() * cropTypes.length)];
  const diseases = diseaseDatabase[randomCrop as keyof typeof diseaseDatabase];
  const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
  
  // Simulate different confidence levels based on image quality
  const confidence = Math.random() * 0.4 + 0.6; // Between 0.6 and 1.0
  
  return {
    disease: randomDisease,
    confidence: confidence,
    treatment: {
      chemical: randomDisease.chemical,
      homeRemedies: randomDisease.homeRemedies,
      prevention: randomDisease.prevention
    },
    cropType: randomCrop,
    severity: randomDisease.severity,
    timestamp: new Date().toISOString()
  };
};

// Function to get disease by name (for reference)
export const getDiseaseInfo = (cropType: string, diseaseName: string) => {
  const diseases = diseaseDatabase[cropType as keyof typeof diseaseDatabase];
  if (!diseases) return null;
  
  return diseases.find(disease => 
    disease.teluguName === diseaseName || disease.englishName === diseaseName
  );
};

// Function to get all diseases for a crop
export const getDiseasesByCrop = (cropType: string) => {
  return diseaseDatabase[cropType as keyof typeof diseaseDatabase] || [];
};

// Function to search diseases by symptoms
export const searchDiseasesBySymptoms = (symptoms: string) => {
  const results: any[] = [];
  
  Object.values(diseaseDatabase).flat().forEach(disease => {
    const symptomMatch = disease.symptoms.some(symptom => 
      symptom.toLowerCase().includes(symptoms.toLowerCase()) ||
      symptoms.toLowerCase().includes(symptom.toLowerCase())
    );
    
    if (symptomMatch) {
      results.push(disease);
    }
  });
  
  return results;
};

// Function to get all available crops
export const getAvailableCrops = () => {
  return Object.keys(diseaseDatabase);
};

// Function to get disease statistics
export const getDiseaseStats = () => {
  const stats = {
    totalDiseases: 0,
    cropCount: Object.keys(diseaseDatabase).length,
    severityDistribution: {
      High: 0,
      Moderate: 0,
      Low: 0
    }
  };
  
  Object.values(diseaseDatabase).flat().forEach(disease => {
    stats.totalDiseases++;
    stats.severityDistribution[disease.severity as keyof typeof stats.severityDistribution]++;
  });
  
  return stats;
};
