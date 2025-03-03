import { DrugCandidate } from "@/lib/types";

const statuses = ["In Development", "Approved", "Discontinued"] as const;
type DrugStatus = (typeof statuses)[number];

// Helper function to generate random drug names
const generateDrugName = (index: number): string => {
  const prefixes = [
    "Neo",
    "Pro",
    "Meta",
    "Bio",
    "Gen",
    "Evo",
    "Syn",
    "Vita",
    "Immuno",
    "Cardio",
    "Neuro",
    "Onco",
  ];
  const suffixes = [
    "zol",
    "vir",
    "mab",
    "nib",
    "stat",
    "zib",
    "tide",
    "pril",
    "zine",
    "pine",
  ];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${prefix}${suffix}-${index + 1}`;
};

// Helper function to generate random dates within the last year
const generateRandomDate = (): string => {
  const start = new Date(2023, 0, 1);
  const end = new Date();
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toISOString().split("T")[0];
};

// Generate 1000 drug candidates
export const drugCandidates: DrugCandidate[] = Array.from(
  { length: 1000 },
  (_, index) => {
    const status = statuses[
      Math.floor(Math.random() * statuses.length)
    ] as DrugStatus;
    const phase = status === "Approved" ? 4 : Math.floor(Math.random() * 3) + 1;

    const descriptions = [
      "A novel treatment targeting chronic conditions through innovative mechanisms.",
      "An experimental therapy designed to address unmet medical needs.",
      "A breakthrough medication utilizing cutting-edge therapeutic approaches.",
      "A promising candidate showing potential in early clinical trials.",
      "An innovative treatment option with unique molecular targeting.",
    ];

    const mechanisms = [
      "Selectively inhibits key enzymatic pathways involved in disease progression.",
      "Modulates cellular signaling cascades to achieve therapeutic effects.",
      "Targets specific receptors to enhance therapeutic outcomes.",
      "Utilizes novel binding mechanisms to achieve desired clinical effects.",
      "Employs dual-action mechanisms for improved efficacy.",
    ];

    const commonSideEffects = [
      "Headache",
      "Nausea",
      "Dizziness",
      "Fatigue",
      "Insomnia",
      "Dry mouth",
      "Mild anxiety",
      "Gastrointestinal discomfort",
    ];

    return {
      id: (index + 1).toString(),
      name: generateDrugName(index),
      status,
      description:
        descriptions[Math.floor(Math.random() * descriptions.length)],
      mechanismOfAction:
        mechanisms[Math.floor(Math.random() * mechanisms.length)],
      sideEffects: Array.from(
        { length: Math.floor(Math.random() * 3) + 1 },
        () =>
          commonSideEffects[
            Math.floor(Math.random() * commonSideEffects.length)
          ]
      ),
      developmentPhase: phase,
      lastUpdated: generateRandomDate(),
    };
  }
);
