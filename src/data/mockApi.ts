import { drugCandidates } from "./drugCandidates";

export const fetchDrugCandidates = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(drugCandidates);
    }, 500);
  });
};
