
import { DrugCandidate } from "@/lib/types";

export const drugCandidates: DrugCandidate[] = [
  {
    id: "1",
    name: "Nexavir",
    status: "In Development",
    description: "A novel antiviral medication targeting persistent viral infections through a unique viral replication inhibition mechanism.",
    mechanismOfAction: "Selective inhibition of viral RNA polymerase, preventing viral genome replication without affecting host cell functions.",
    sideEffects: ["Mild nausea", "Headache", "Temporary elevation in liver enzymes"],
    developmentPhase: 3,
    lastUpdated: "2023-11-15"
  },
  {
    id: "2",
    name: "Cardiostat",
    status: "Approved",
    description: "A breakthrough medication for treatment of chronic heart failure with reduced ejection fraction.",
    mechanismOfAction: "Selective modulation of cardiac sodium-potassium channels, improving myocardial contractility and electrical stability.",
    sideEffects: ["Dizziness", "Mild edema", "Dry mouth"],
    developmentPhase: 4,
    lastUpdated: "2023-08-22"
  },
  {
    id: "3",
    name: "Neurozen",
    status: "In Development",
    description: "A promising neurological agent designed to slow progression of neurodegenerative disorders.",
    mechanismOfAction: "Inhibition of tau protein aggregation and enhancement of autophagy to clear protein deposits in neural tissues.",
    sideEffects: ["Insomnia", "Mild anxiety", "Reduced appetite"],
    developmentPhase: 2,
    lastUpdated: "2024-01-05"
  },
  {
    id: "4",
    name: "Immunoboost",
    status: "Discontinued",
    description: "An immunotherapy approach that was under investigation for treatment of certain solid tumors.",
    mechanismOfAction: "Targeted activation of tumor-specific T-cells through novel checkpoint inhibition pathways.",
    sideEffects: ["Severe fatigue", "Immune-related adverse events", "Pneumonitis"],
    developmentPhase: 2,
    lastUpdated: "2023-06-30"
  },
  {
    id: "5",
    name: "Gluconorm",
    status: "Approved",
    description: "A next-generation oral antidiabetic medication for type 2 diabetes with additional cardiovascular benefits.",
    mechanismOfAction: "Dual action on pancreatic beta cells and peripheral insulin sensitivity, with additional protective effects on cardiac tissue.",
    sideEffects: ["Hypoglycemia risk", "Gastrointestinal discomfort", "Vitamin B12 deficiency with long-term use"],
    developmentPhase: 4,
    lastUpdated: "2023-09-10"
  },
  {
    id: "6",
    name: "Pulmorelief",
    status: "In Development",
    description: "A novel bronchodilator with anti-inflammatory properties for treatment of severe asthma and COPD.",
    mechanismOfAction: "Selective beta-2 adrenergic receptor activation combined with targeted anti-inflammatory effects in bronchial tissue.",
    sideEffects: ["Tachycardia", "Tremor", "Hypokalemia"],
    developmentPhase: 3,
    lastUpdated: "2024-02-18"
  },
  {
    id: "7",
    name: "Osteogen",
    status: "In Development",
    description: "An innovative anabolic agent for treatment of severe osteoporosis and fragility fractures.",
    mechanismOfAction: "Stimulation of osteoblast activity while simultaneously inhibiting osteoclast-mediated bone resorption.",
    sideEffects: ["Joint pain", "Hypercalcemia", "Increased risk of osteosarcoma in animal studies"],
    developmentPhase: 2,
    lastUpdated: "2023-12-05"
  },
  {
    id: "8",
    name: "Renalcare",
    status: "Approved",
    description: "A nephroprotective agent for management of chronic kidney disease in diabetic and hypertensive patients.",
    mechanismOfAction: "Inhibition of advanced glycation end-product formation and modulation of renal sodium transport channels.",
    sideEffects: ["Hyperkalemia", "Orthostatic hypotension", "Acute kidney injury risk in dehydrated patients"],
    developmentPhase: 4,
    lastUpdated: "2023-07-12"
  }
];
