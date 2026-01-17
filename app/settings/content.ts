export const settingsContent = {
  header: {
    title: "Engine Tuning",
    description: "Configure matching algorithms and risk thresholds.",
  },
  matchingCard: {
    title: "Matching Parameters",
    description: "Adjust how the engine identifies potential risks.",
    form: {
      fuzzyThreshold: {
        label: "Fuzzy Match Threshold (0.0 - 1.0)",
        helpText: "Higher values require closer spelling matches. Recommended: 0.7",
      },
      phoneticAlgorithm: {
        label: "Phonetic Algorithm",
        placeholder: "Select algorithm",
        options: {
          bmpm: "Beider-Morse (BMPM) - Recommended",
          doubleMetaphone: "Double Metaphone",
          soundex: "Soundex (Legacy)",
        },
        helpText: "Algorithm used to index names by sound. BMPM is superior for non-English names.",
      },
      semanticContext: {
        label: "Semantic Context",
        placeholder: "e.g. Finance, Banking, AML",
        helpText: "Optional context prompt injected into Vector Search embeddings.",
      },
      submitButton: "Save Configuration",
    },
  },
};
