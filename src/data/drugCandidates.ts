import { DrugCandidate } from "@/lib/types";

export const drugCandidates: DrugCandidate[] = [
  {
    id: "1",
    name: "Nexavir",
    status: "In Development",
    description:
      "A novel antiviral medication targeting persistent viral infections through a unique viral replication inhibition mechanism.",
    mechanismOfAction:
      "Nexavir operates by selectively inhibiting viral RNA polymerase, effectively disrupting the viral replication cycle. This targeted approach minimizes off-target effects on host cellular processes, thereby enhancing therapeutic efficacy while reducing potential side effects associated with traditional antiviral treatments.",
    sideEffects: [
      "Mild nausea",
      "Headache",
      "Temporary elevation in liver enzymes",
    ],
    developmentPhase: 3,
    lastUpdated: "2023-11-15",
  },
  {
    id: "2",
    name: "Cardiostat",
    status: "Approved",
    description:
      "A breakthrough medication for treatment of chronic heart failure with reduced ejection fraction.",
    mechanismOfAction:
      "Cardiostat functions by modulating cardiac sodium-potassium channels, which leads to improved myocardial contractility. This mechanism enhances electrical stability in the heart, thereby reducing the risk of arrhythmias and improving overall cardiac function in patients with chronic heart failure.",
    sideEffects: ["Dizziness", "Mild edema", "Dry mouth"],
    developmentPhase: 4,
    lastUpdated: "2023-08-22",
  },
  {
    id: "3",
    name: "Neurozen",
    status: "In Development",
    description:
      "A promising neurological agent designed to slow progression of neurodegenerative disorders.",
    mechanismOfAction:
      "Neurozen's mechanism involves the inhibition of tau protein aggregation, a key factor in neurodegenerative diseases. By enhancing autophagy, it facilitates the clearance of toxic protein deposits in neural tissues, potentially slowing disease progression and improving cognitive function.",
    sideEffects: ["Insomnia", "Mild anxiety", "Reduced appetite"],
    developmentPhase: 2,
    lastUpdated: "2024-01-05",
  },
  {
    id: "4",
    name: "Immunoboost",
    status: "Discontinued",
    description:
      "An immunotherapy approach that was under investigation for treatment of certain solid tumors.",
    mechanismOfAction:
      "Immunoboost employs a novel approach to activate tumor-specific T-cells through checkpoint inhibition pathways. This mechanism enhances the immune response against solid tumors, promoting targeted destruction of cancer cells while preserving healthy tissue, thereby improving patient outcomes in immunotherapy.",
    sideEffects: [
      "Severe fatigue",
      "Immune-related adverse events",
      "Pneumonitis",
    ],
    developmentPhase: 2,
    lastUpdated: "2023-06-30",
  },
  {
    id: "5",
    name: "Gluconorm",
    status: "Approved",
    description:
      "A next-generation oral antidiabetic medication for type 2 diabetes with additional cardiovascular benefits.",
    mechanismOfAction:
      "Gluconorm acts through dual mechanisms: it stimulates pancreatic beta cells to increase insulin secretion while simultaneously enhancing peripheral insulin sensitivity. This comprehensive approach not only regulates blood glucose levels but also provides cardiovascular protection, making it a valuable treatment for type 2 diabetes.",
    sideEffects: [
      "Hypoglycemia risk",
      "Gastrointestinal discomfort",
      "Vitamin B12 deficiency with long-term use",
    ],
    developmentPhase: 4,
    lastUpdated: "2023-09-10",
  },
  {
    id: "6",
    name: "Pulmorelief",
    status: "In Development",
    description:
      "A novel bronchodilator with anti-inflammatory properties for treatment of severe asthma and COPD.",
    mechanismOfAction:
      "Pulmorelief works by selectively activating beta-2 adrenergic receptors, leading to bronchodilation. Additionally, it exerts targeted anti-inflammatory effects in bronchial tissues, reducing airway inflammation and improving respiratory function in patients with asthma and COPD.",
    sideEffects: ["Tachycardia", "Tremor", "Hypokalemia"],
    developmentPhase: 3,
    lastUpdated: "2024-02-18",
  },
  {
    id: "7",
    name: "Osteogen",
    status: "In Development",
    description:
      "An innovative anabolic agent for treatment of severe osteoporosis and fragility fractures.",
    mechanismOfAction:
      "Osteogen stimulates osteoblast activity while simultaneously inhibiting osteoclast-mediated bone resorption. This dual action promotes bone formation and density, significantly reducing the risk of fractures in patients with osteoporosis.",
    sideEffects: [
      "Joint pain",
      "Hypercalcemia",
      "Increased risk of osteosarcoma in animal studies",
    ],
    developmentPhase: 2,
    lastUpdated: "2023-12-05",
  },
  {
    id: "8",
    name: "Renalcare",
    status: "Approved",
    description:
      "A nephroprotective agent for management of chronic kidney disease in diabetic and hypertensive patients.",
    mechanismOfAction:
      "Renalcare functions by inhibiting the formation of advanced glycation end-products and modulating renal sodium transport channels. This mechanism helps to protect kidney function and reduce the progression of chronic kidney disease in at-risk populations.",
    sideEffects: [
      "Hyperkalemia",
      "Orthostatic hypotension",
      "Acute kidney injury risk in dehydrated patients",
    ],
    developmentPhase: 4,
    lastUpdated: "2023-07-12",
  },
  {
    id: "9",
    name: "PainReliefX",
    status: "In Development",
    description:
      "A novel analgesic designed to provide rapid pain relief with minimal side effects.",
    mechanismOfAction:
      "PainReliefX targets specific pain pathways by inhibiting the release of pro-inflammatory mediators, thus reducing pain perception without affecting normal sensory functions.",
    sideEffects: ["Drowsiness", "Nausea", "Dizziness"],
    developmentPhase: 2,
    lastUpdated: "2024-03-01",
  },
  {
    id: "10",
    name: "Cholestab",
    status: "Approved",
    description:
      "A cholesterol-lowering medication that effectively reduces LDL levels.",
    mechanismOfAction:
      "Cholestab works by inhibiting the absorption of cholesterol in the intestines, leading to decreased LDL cholesterol levels and improved cardiovascular health.",
    sideEffects: ["Abdominal pain", "Diarrhea", "Flatulence"],
    developmentPhase: 4,
    lastUpdated: "2023-05-15",
  },
  {
    id: "11",
    name: "Asthmax",
    status: "In Development",
    description:
      "A targeted therapy for asthma patients to improve lung function.",
    mechanismOfAction:
      "Asthmax acts as a dual-action bronchodilator, relaxing airway muscles and reducing inflammation, thus enhancing airflow and alleviating asthma symptoms.",
    sideEffects: ["Headache", "Palpitations", "Cough"],
    developmentPhase: 3,
    lastUpdated: "2024-04-10",
  },
  {
    id: "12",
    name: "Diabex",
    status: "Approved",
    description:
      "An innovative treatment for type 2 diabetes that improves glycemic control.",
    mechanismOfAction:
      "Diabex enhances insulin sensitivity and promotes glucose uptake in peripheral tissues, effectively lowering blood sugar levels and improving metabolic health.",
    sideEffects: ["Weight gain", "Edema", "Hypoglycemia"],
    developmentPhase: 4,
    lastUpdated: "2023-09-20",
  },
  {
    id: "13",
    name: "CardioGuard",
    status: "In Development",
    description:
      "A medication aimed at reducing the risk of cardiovascular events in high-risk patients.",
    mechanismOfAction:
      "CardioGuard inhibits platelet aggregation and improves endothelial function, thereby reducing the risk of thrombotic events and enhancing overall cardiovascular health.",
    sideEffects: ["Bleeding", "Gastrointestinal upset", "Allergic reactions"],
    developmentPhase: 2,
    lastUpdated: "2024-01-15",
  },
  {
    id: "14",
    name: "Neuroprotect",
    status: "Approved",
    description:
      "A neuroprotective agent designed to slow the progression of neurodegenerative diseases.",
    mechanismOfAction:
      "Neuroprotect enhances neuronal survival by reducing oxidative stress and inflammation, thereby preserving cognitive function in patients with neurodegenerative disorders.",
    sideEffects: ["Fatigue", "Nausea", "Headache"],
    developmentPhase: 4,
    lastUpdated: "2023-10-05",
  },
  {
    id: "15",
    name: "ImmunoX",
    status: "In Development",
    description:
      "An immunomodulator that enhances the body's immune response against infections.",
    mechanismOfAction:
      "ImmunoX stimulates the production of cytokines and enhances T-cell activity, thereby improving the immune response to various pathogens.",
    sideEffects: ["Fever", "Chills", "Injection site reactions"],
    developmentPhase: 3,
    lastUpdated: "2024-02-20",
  },
  {
    id: "16",
    name: "OncoCure",
    status: "Approved",
    description:
      "A targeted therapy for specific types of cancer, improving survival rates.",
    mechanismOfAction:
      "OncoCure selectively targets cancer cells by inhibiting key signaling pathways, leading to reduced tumor growth and improved patient outcomes.",
    sideEffects: ["Fatigue", "Nausea", "Hair loss"],
    developmentPhase: 4,
    lastUpdated: "2023-11-01",
  },
  {
    id: "17",
    name: "SleepWell",
    status: "In Development",
    description:
      "A sleep aid designed to improve sleep quality without dependency.",
    mechanismOfAction:
      "SleepWell modulates neurotransmitter levels to promote relaxation and improve sleep onset, ensuring restorative sleep without the risk of dependency.",
    sideEffects: ["Drowsiness", "Dry mouth", "Dizziness"],
    developmentPhase: 2,
    lastUpdated: "2024-03-15",
  },
  {
    id: "18",
    name: "SkinClear",
    status: "Approved",
    description:
      "A topical treatment for acne that reduces inflammation and clears breakouts.",
    mechanismOfAction:
      "SkinClear works by reducing sebum production and targeting acne-causing bacteria, leading to clearer skin and reduced inflammation.",
    sideEffects: ["Dryness", "Irritation", "Redness"],
    developmentPhase: 4,
    lastUpdated: "2023-08-30",
  },
  {
    id: "19",
    name: "AllerFree",
    status: "In Development",
    description:
      "An antihistamine designed to relieve allergy symptoms effectively.",
    mechanismOfAction:
      "AllerFree blocks histamine receptors, reducing allergy symptoms such as sneezing, itching, and runny nose, providing quick relief for allergy sufferers.",
    sideEffects: ["Drowsiness", "Dry mouth", "Dizziness"],
    developmentPhase: 3,
    lastUpdated: "2024-05-01",
  },
  {
    id: "20",
    name: "GastroEase",
    status: "Approved",
    description:
      "A medication for managing gastrointestinal disorders and improving gut health.",
    mechanismOfAction:
      "GastroEase enhances gut motility and reduces inflammation, promoting digestive health and alleviating symptoms of gastrointestinal disorders.",
    sideEffects: ["Nausea", "Diarrhea", "Abdominal pain"],
    developmentPhase: 4,
    lastUpdated: "2023-09-25",
  },
  {
    id: "21",
    name: "FertilityBoost",
    status: "In Development",
    description:
      "A fertility treatment aimed at improving reproductive health.",
    mechanismOfAction:
      "FertilityBoost enhances hormonal balance and improves ovarian function, thereby increasing the chances of conception in women facing fertility challenges.",
    sideEffects: ["Mood swings", "Headaches", "Nausea"],
    developmentPhase: 2,
    lastUpdated: "2024-04-12",
  },
  {
    id: "22",
    name: "WeightControl",
    status: "Approved",
    description:
      "A weight management medication that aids in reducing body weight.",
    mechanismOfAction:
      "WeightControl suppresses appetite and enhances metabolic rate, helping individuals achieve and maintain a healthy weight.",
    sideEffects: ["Nausea", "Insomnia", "Dry mouth"],
    developmentPhase: 4,
    lastUpdated: "2023-10-10",
  },
  {
    id: "23",
    name: "MigraRelief",
    status: "In Development",
    description:
      "A medication designed to alleviate migraine symptoms effectively.",
    mechanismOfAction:
      "MigraRelief targets specific neurotransmitter pathways to reduce the frequency and severity of migraine attacks, providing relief for chronic sufferers.",
    sideEffects: ["Dizziness", "Nausea", "Fatigue"],
    developmentPhase: 3,
    lastUpdated: "2024-01-30",
  },
  {
    id: "24",
    name: "ThyroBalance",
    status: "Approved",
    description:
      "A treatment for thyroid disorders that helps regulate hormone levels.",
    mechanismOfAction:
      "ThyroBalance normalizes thyroid hormone levels, improving metabolic function and alleviating symptoms associated with thyroid imbalances.",
    sideEffects: ["Weight changes", "Fatigue", "Nervousness"],
    developmentPhase: 4,
    lastUpdated: "2023-11-20",
  },
  {
    id: "25",
    name: "CoughRelief",
    status: "In Development",
    description:
      "A cough suppressant that provides quick relief from persistent cough.",
    mechanismOfAction:
      "CoughRelief acts on the cough reflex center in the brain, reducing the urge to cough and providing symptomatic relief.",
    sideEffects: ["Drowsiness", "Nausea", "Dry mouth"],
    developmentPhase: 2,
    lastUpdated: "2024-02-28",
  },
  {
    id: "26",
    name: "VisionCare",
    status: "Approved",
    description:
      "A supplement designed to support eye health and improve vision.",
    mechanismOfAction:
      "VisionCare contains antioxidants that protect retinal cells from oxidative damage, promoting overall eye health and potentially improving visual acuity.",
    sideEffects: ["Nausea", "Headache", "Blurred vision"],
    developmentPhase: 4,
    lastUpdated: "2023-09-05",
  },
  {
    id: "27",
    name: "BoneStrength",
    status: "In Development",
    description: "A supplement aimed at improving bone density and strength.",
    mechanismOfAction:
      "BoneStrength enhances calcium absorption and promotes osteoblast activity, leading to increased bone density and reduced fracture risk.",
    sideEffects: ["Constipation", "Nausea", "Abdominal discomfort"],
    developmentPhase: 3,
    lastUpdated: "2024-03-22",
  },
  {
    id: "28",
    name: "MoodLift",
    status: "Approved",
    description: "A mood stabilizer designed to improve emotional well-being.",
    mechanismOfAction:
      "MoodLift modulates neurotransmitter levels, enhancing serotonin and dopamine activity to improve mood and reduce symptoms of depression.",
    sideEffects: ["Drowsiness", "Weight gain", "Dry mouth"],
    developmentPhase: 4,
    lastUpdated: "2023-10-15",
  },
  {
    id: "29",
    name: "AntiInflamX",
    status: "In Development",
    description:
      "An anti-inflammatory medication aimed at reducing chronic inflammation.",
    mechanismOfAction:
      "AntiInflamX inhibits pro-inflammatory cytokines, reducing inflammation and alleviating symptoms associated with chronic inflammatory conditions.",
    sideEffects: ["Nausea", "Fatigue", "Headache"],
    developmentPhase: 2,
    lastUpdated: "2024-01-10",
  },
  {
    id: "30",
    name: "RespiraCare",
    status: "Approved",
    description: "A medication for managing chronic respiratory conditions.",
    mechanismOfAction:
      "RespiraCare opens airways and reduces inflammation, improving lung function and providing relief for patients with chronic respiratory diseases.",
    sideEffects: ["Tachycardia", "Nausea", "Cough"],
    developmentPhase: 4,
    lastUpdated: "2023-11-05",
  },
  {
    id: "31",
    name: "NeuroFlex",
    status: "In Development",
    description:
      "A novel treatment aimed at enhancing cognitive function in patients with early-stage Alzheimer's disease.",
    mechanismOfAction:
      "NeuroFlex works by modulating neurotransmitter levels and promoting neurogenesis, which may help improve memory and cognitive function in affected individuals.",
    sideEffects: ["Headache", "Nausea", "Fatigue"],
    developmentPhase: 1,
    lastUpdated: "2024-01-10",
  },
  {
    id: "32",
    name: "CardioShield",
    status: "In Development",
    description:
      "A cardiovascular agent designed to improve heart health and reduce the risk of heart disease.",
    mechanismOfAction:
      "CardioShield enhances endothelial function and reduces arterial stiffness, potentially lowering blood pressure and improving overall cardiovascular health.",
    sideEffects: ["Dizziness", "Palpitations", "Fatigue"],
    developmentPhase: 1,
    lastUpdated: "2024-02-15",
  },
  {
    id: "33",
    name: "OncoVax",
    status: "In Development",
    description:
      "An experimental vaccine aimed at preventing recurrence in patients with early-stage breast cancer.",
    mechanismOfAction:
      "OncoVax stimulates the immune system to recognize and attack cancer cells, potentially preventing recurrence after initial treatment.",
    sideEffects: ["Injection site reactions", "Fatigue", "Mild fever"],
    developmentPhase: 1,
    lastUpdated: "2024-03-05",
  },
];
