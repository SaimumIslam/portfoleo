const publications = [
  {
    id: 1,
    project: "KULemma: Towards a Comprehensive Bangla Lemmatizer",
    publisher: "ICEEICT",
    href: "https://ieeexplore.ieee.org/document/10534443",
    duration: "May 3, 2024",
    description: `Co-authored and published a paper presenting a high-accuracy (96.90%) Bangla lemmatization system, contributing a valuable NLP resource for Bangla language processing and downstream applications.`,
    tasks: [
      "Developed a large-scale linguistic dataset with over 297,000 unique words, 50,000 synonyms, and 10,000 antonyms",
      "Implemented advanced algorithms such as Trie, LSSRA, and Levenshtein Distance for morphological analysis and rule-based lemmatization",
      "Integrated POS tagging and Bangla-specific stemming rules to enhance lemmatization accuracy",
    ],
    badge: [
      "NLP",
      "Bangla Language Processing",
      "Trie Algorithm",
      "Levenshtein Distance",
      "Rule-Based Lemmatization",
      "POS Tagging",
      "Dataset Creation",
      "Research",
    ],
  },
  {
    id: 2,
    project: "BNNet: Towards A Comprehensive Bangla WordNet",
    publisher: "ICCIT",
    href: "https://ieeexplore.ieee.org/document/9392650",
    duration: "Apr. 4, 2021",
    description: `Co-authored a paper constructing a bilingual English-Bangla WordNet, addressing the scarcity of Bangla linguistic resources and supporting semantic analysis and word sense disambiguation.`,
    tasks: [
      "Compiled a large-scale bilingual lexical database with 247,748 English-to-Bangla and 205,344 Bangla-to-English word pairs",
      "Included over 75,000 Bangla synonyms and 66,000 English synonyms for semantic analysis",
      "Mapped 111,095 words (~75%) from Princeton WordNet and provided 102,047 Bangla definitions (~86%) aligned with 117,791 English definitions",
      "Developed RESTful APIs and user interfaces for public access",
      "Implemented an English-Bangla semantic similarity checker using the BNNet framework",
    ],
    badge: [
      "NLP",
      "Bangla Language Processing",
      "WordNet",
      "Semantic Analysis",
      "REST API",
      "Database Design",
      "Research",
    ],
  },
];

export default publications;
