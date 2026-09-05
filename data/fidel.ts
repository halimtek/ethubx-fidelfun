
export type FidelForm = {
  letter: string;
  transliteration: string;
  pronunciation: string;
};

export type FidelFamily = {
  id: number;
  base: string;
  name: string;
  forms: FidelForm[];
};

export const fidelFamilies: FidelFamily[] = [
  // 1. ሀ
  {
    id: 1,
    base: "ሀ",
    name: "Ha",
    forms: [
      { letter: "ሀ", transliteration: "Ha", pronunciation: "ha" },
      { letter: "ሁ", transliteration: "Hu", pronunciation: "hoo" },
      { letter: "ሂ", transliteration: "Hi", pronunciation: "hee" },
      { letter: "ሃ", transliteration: "Haa", pronunciation: "haa" },
      { letter: "ሄ", transliteration: "He", pronunciation: "hey" },
      { letter: "ህ", transliteration: "H", pronunciation: "huh" },
      { letter: "ሆ", transliteration: "Ho", pronunciation: "ho" },
    ],
  },

  // 2. ለ
  {
    id: 2,
    base: "ለ",
    name: "La",
    forms: [
      { letter: "ለ", transliteration: "La", pronunciation: "la" },
      { letter: "ሉ", transliteration: "Lu", pronunciation: "loo" },
      { letter: "ሊ", transliteration: "Li", pronunciation: "lee" },
      { letter: "ላ", transliteration: "La", pronunciation: "laa" },
      { letter: "ሌ", transliteration: "Le", pronunciation: "lay" },
      { letter: "ል", transliteration: "L", pronunciation: "luh" },
      { letter: "ሎ", transliteration: "Lo", pronunciation: "lo" },
    ],
  },

  // 3. ሐ
  {
    id: 3,
    base: "ሐ",
    name: "Ha",
    forms: [
      { letter: "ሐ", transliteration: "Ha", pronunciation: "ha" },
      { letter: "ሑ", transliteration: "Hu", pronunciation: "hoo" },
      { letter: "ሒ", transliteration: "Hi", pronunciation: "hee" },
      { letter: "ሓ", transliteration: "Haa", pronunciation: "haa" },
      { letter: "ሔ", transliteration: "He", pronunciation: "hey" },
      { letter: "ሕ", transliteration: "H", pronunciation: "huh" },
      { letter: "ሖ", transliteration: "Ho", pronunciation: "ho" },
    ],
  },

  // 4. መ
  {
    id: 4,
    base: "መ",
    name: "Ma",
    forms: [
      { letter: "መ", transliteration: "Ma", pronunciation: "ma" },
      { letter: "ሙ", transliteration: "Mu", pronunciation: "moo" },
      { letter: "ሚ", transliteration: "Mi", pronunciation: "mee" },
      { letter: "ማ", transliteration: "Ma", pronunciation: "maa" },
      { letter: "ሜ", transliteration: "Me", pronunciation: "may" },
      { letter: "ም", transliteration: "M", pronunciation: "muh" },
      { letter: "ሞ", transliteration: "Mo", pronunciation: "mo" },
    ],
  },

  // 5. ሠ
  {
    id: 5,
    base: "ሠ",
    name: "Sa",
    forms: [
      { letter: "ሠ", transliteration: "Sa", pronunciation: "sa" },
      { letter: "ሡ", transliteration: "Su", pronunciation: "soo" },
      { letter: "ሢ", transliteration: "Si", pronunciation: "see" },
      { letter: "ሣ", transliteration: "Saa", pronunciation: "saa" },
      { letter: "ሤ", transliteration: "Se", pronunciation: "say" },
      { letter: "ሥ", transliteration: "S", pronunciation: "suh" },
      { letter: "ሦ", transliteration: "So", pronunciation: "so" },
    ],
  },

  // 6. ረ
  {
    id: 6,
    base: "ረ",
    name: "Ra",
    forms: [
      { letter: "ረ", transliteration: "Re", pronunciation: "reh" },
      { letter: "ሩ", transliteration: "Ru", pronunciation: "roo" },
      { letter: "ሪ", transliteration: "Ri", pronunciation: "ree" },
      { letter: "ራ", transliteration: "Ra", pronunciation: "raa" },
      { letter: "ሬ", transliteration: "Re", pronunciation: "ray" },
      { letter: "ር", transliteration: "R", pronunciation: "ruh" },
      { letter: "ሮ", transliteration: "Ro", pronunciation: "ro" },
    ],
  },

  // 7. ሰ
  {
    id: 7,
    base: "ሰ",
    name: "Sa",
    forms: [
      { letter: "ሰ", transliteration: "Se", pronunciation: "seh" },
      { letter: "ሱ", transliteration: "Su", pronunciation: "soo" },
      { letter: "ሲ", transliteration: "Si", pronunciation: "see" },
      { letter: "ሳ", transliteration: "Sa", pronunciation: "saa" },
      { letter: "ሴ", transliteration: "Se", pronunciation: "say" },
      { letter: "ስ", transliteration: "S", pronunciation: "suh" },
      { letter: "ሶ", transliteration: "So", pronunciation: "so" },
    ],
  },

  // 8. ሸ
  {
    id: 8,
    base: "ሸ",
    name: "Sha",
    forms: [
      { letter: "ሸ", transliteration: "She", pronunciation: "sheh" },
      { letter: "ሹ", transliteration: "Shu", pronunciation: "shoo" },
      { letter: "ሺ", transliteration: "Shi", pronunciation: "shee" },
      { letter: "ሻ", transliteration: "Sha", pronunciation: "shaa" },
      { letter: "ሼ", transliteration: "She", pronunciation: "shay" },
      { letter: "ሽ", transliteration: "Sh", pronunciation: "shuh" },
      { letter: "ሾ", transliteration: "Sho", pronunciation: "sho" },
    ],
  },

  // 9. ቀ
  {
    id: 9,
    base: "ቀ",
    name: "Qa",
    forms: [
      { letter: "ቀ", transliteration: "Qa", pronunciation: "qa" },
      { letter: "ቁ", transliteration: "Qu", pronunciation: "koo" },
      { letter: "ቂ", transliteration: "Qi", pronunciation: "kee" },
      { letter: "ቃ", transliteration: "Qaa", pronunciation: "qaa" },
      { letter: "ቄ", transliteration: "Qe", pronunciation: "qay" },
      { letter: "ቅ", transliteration: "Q", pronunciation: "kuh" },
      { letter: "ቆ", transliteration: "Qo", pronunciation: "qo" },
    ],
  },

  // 10. በ
  {
    id: 10,
    base: "በ",
    name: "Ba",
    forms: [
      { letter: "በ", transliteration: "Be", pronunciation: "beh" },
      { letter: "ቡ", transliteration: "Bu", pronunciation: "boo" },
      { letter: "ቢ", transliteration: "Bi", pronunciation: "bee" },
      { letter: "ባ", transliteration: "Ba", pronunciation: "baa" },
      { letter: "ቤ", transliteration: "Be", pronunciation: "bay" },
      { letter: "ብ", transliteration: "B", pronunciation: "buh" },
      { letter: "ቦ", transliteration: "Bo", pronunciation: "bo" },
    ],
  },

  // 11. ተ
  {
    id: 11,
    base: "ተ",
    name: "Ta",
    forms: [
      { letter: "ተ", transliteration: "Te", pronunciation: "teh" },
      { letter: "ቱ", transliteration: "Tu", pronunciation: "too" },
      { letter: "ቲ", transliteration: "Ti", pronunciation: "tee" },
      { letter: "ታ", transliteration: "Ta", pronunciation: "taa" },
      { letter: "ቴ", transliteration: "Te", pronunciation: "tay" },
      { letter: "ት", transliteration: "T", pronunciation: "tuh" },
      { letter: "ቶ", transliteration: "To", pronunciation: "to" },
    ],
  },

  // 12. ቸ
  {
    id: 12,
    base: "ቸ",
    name: "Cha",
    forms: [
      { letter: "ቸ", transliteration: "Che", pronunciation: "cheh" },
      { letter: "ቹ", transliteration: "Chu", pronunciation: "choo" },
      { letter: "ቺ", transliteration: "Chi", pronunciation: "chee" },
      { letter: "ቻ", transliteration: "Cha", pronunciation: "chaa" },
      { letter: "ቼ", transliteration: "Che", pronunciation: "chay" },
      { letter: "ች", transliteration: "Ch", pronunciation: "chuh" },
      { letter: "ቾ", transliteration: "Cho", pronunciation: "cho" },
    ],
  },

  // 13. ኀ
  {
    id: 13,
    base: "ኀ",
    name: "Ha",
    forms: [
      { letter: "ኀ", transliteration: "Ha", pronunciation: "ha" },
      { letter: "ኁ", transliteration: "Hu", pronunciation: "hoo" },
      { letter: "ኂ", transliteration: "Hi", pronunciation: "hee" },
      { letter: "ኃ", transliteration: "Haa", pronunciation: "haa" },
      { letter: "ኄ", transliteration: "He", pronunciation: "hey" },
      { letter: "ኅ", transliteration: "H", pronunciation: "huh" },
      { letter: "ኆ", transliteration: "Ho", pronunciation: "ho" },
    ],
  },

  // 14. ነ
  {
    id: 14,
    base: "ነ",
    name: "Na",
    forms: [
      { letter: "ነ", transliteration: "Ne", pronunciation: "neh" },
      { letter: "ኑ", transliteration: "Nu", pronunciation: "noo" },
      { letter: "ኒ", transliteration: "Ni", pronunciation: "nee" },
      { letter: "ና", transliteration: "Na", pronunciation: "naa" },
      { letter: "ኔ", transliteration: "Ne", pronunciation: "nay" },
      { letter: "ን", transliteration: "N", pronunciation: "nuh" },
      { letter: "ኖ", transliteration: "No", pronunciation: "no" },
    ],
  },

  // 15. ኘ
  {
    id: 15,
    base: "ኘ",
    name: "Nya",
    forms: [
      { letter: "ኘ", transliteration: "Nye", pronunciation: "nyeh" },
      { letter: "ኙ", transliteration: "Nyu", pronunciation: "nyoo" },
      { letter: "ኚ", transliteration: "Nyi", pronunciation: "nyee" },
      { letter: "ኛ", transliteration: "Nya", pronunciation: "nyaa" },
      { letter: "ኜ", transliteration: "Nye", pronunciation: "nyay" },
      { letter: "ኝ", transliteration: "Ny", pronunciation: "nyuh" },
      { letter: "ኞ", transliteration: "Nyo", pronunciation: "nyo" },
    ],
  },

  // 16. አ
  {
    id: 16,
    base: "አ",
    name: "A",
    forms: [
      { letter: "አ", transliteration: "A", pronunciation: "ah" },
      { letter: "ኡ", transliteration: "U", pronunciation: "oo" },
      { letter: "ኢ", transliteration: "I", pronunciation: "ee" },
      { letter: "ኣ", transliteration: "Aa", pronunciation: "aa" },
      { letter: "ኤ", transliteration: "E", pronunciation: "ay" },
      { letter: "እ", transliteration: "I", pronunciation: "uh" },
      { letter: "ኦ", transliteration: "O", pronunciation: "oh" },
    ],
  },

  // 17. ከ
  {
    id: 17,
    base: "ከ",
    name: "Ka",
    forms: [
      { letter: "ከ", transliteration: "Ke", pronunciation: "keh" },
      { letter: "ኩ", transliteration: "Ku", pronunciation: "koo" },
      { letter: "ኪ", transliteration: "Ki", pronunciation: "kee" },
      { letter: "ካ", transliteration: "Ka", pronunciation: "kaa" },
      { letter: "ኬ", transliteration: "Ke", pronunciation: "kay" },
      { letter: "ክ", transliteration: "K", pronunciation: "kuh" },
      { letter: "ኮ", transliteration: "Ko", pronunciation: "ko" },
    ],
  },

  // 18. ኸ
  {
    id: 18,
    base: "ኸ",
    name: "Kha",
    forms: [
      { letter: "ኸ", transliteration: "Khe", pronunciation: "kheh" },
      { letter: "ኹ", transliteration: "Khu", pronunciation: "khoo" },
      { letter: "ኺ", transliteration: "Khi", pronunciation: "khee" },
      { letter: "ኻ", transliteration: "Kha", pronunciation: "khaa" },
      { letter: "ኼ", transliteration: "Khe", pronunciation: "khay" },
      { letter: "ኽ", transliteration: "Kh", pronunciation: "khuh" },
      { letter: "ኾ", transliteration: "Kho", pronunciation: "kho" },
    ],
  },

  // 19. ወ
  {
    id: 19,
    base: "ወ",
    name: "Wa",
    forms: [
      { letter: "ወ", transliteration: "We", pronunciation: "weh" },
      { letter: "ዉ", transliteration: "Wu", pronunciation: "woo" },
      { letter: "ዊ", transliteration: "Wi", pronunciation: "wee" },
      { letter: "ዋ", transliteration: "Wa", pronunciation: "waa" },
      { letter: "ዌ", transliteration: "We", pronunciation: "way" },
      { letter: "ው", transliteration: "W", pronunciation: "wuh" },
      { letter: "ዎ", transliteration: "Wo", pronunciation: "wo" },
    ],
  },

  // 20. ዐ
  {
    id: 20,
    base: "ዐ",
    name: "Aa",
    forms: [
      { letter: "ዐ", transliteration: "A", pronunciation: "ah" },
      { letter: "ዑ", transliteration: "U", pronunciation: "oo" },
      { letter: "ዒ", transliteration: "I", pronunciation: "ee" },
      { letter: "ዓ", transliteration: "Aa", pronunciation: "aa" },
      { letter: "ዔ", transliteration: "E", pronunciation: "ay" },
      { letter: "ዕ", transliteration: "I", pronunciation: "uh" },
      { letter: "ዖ", transliteration: "O", pronunciation: "oh" },
    ],
  },

  // 21. ዘ
  {
    id: 21,
    base: "ዘ",
    name: "Za",
    forms: [
      { letter: "ዘ", transliteration: "Ze", pronunciation: "zeh" },
      { letter: "ዙ", transliteration: "Zu", pronunciation: "zoo" },
      { letter: "ዚ", transliteration: "Zi", pronunciation: "zee" },
      { letter: "ዛ", transliteration: "Za", pronunciation: "zaa" },
      { letter: "ዜ", transliteration: "Ze", pronunciation: "zay" },
      { letter: "ዝ", transliteration: "Z", pronunciation: "zuh" },
      { letter: "ዞ", transliteration: "Zo", pronunciation: "zo" },
    ],
  },

  // 22. ዠ
  {
    id: 22,
    base: "ዠ",
    name: "Zha",
    forms: [
      { letter: "ዠ", transliteration: "Zhe", pronunciation: "zheh" },
      { letter: "ዡ", transliteration: "Zhu", pronunciation: "zhoo" },
      { letter: "ዢ", transliteration: "Zhi", pronunciation: "zhee" },
      { letter: "ዣ", transliteration: "Zha", pronunciation: "zhaa" },
      { letter: "ዤ", transliteration: "Zhe", pronunciation: "zhay" },
      { letter: "ዥ", transliteration: "Zh", pronunciation: "zhuh" },
      { letter: "ዦ", transliteration: "Zho", pronunciation: "zho" },
    ],
  },

  // 23. የ
  {
    id: 23,
    base: "የ",
    name: "Ya",
    forms: [
      { letter: "የ", transliteration: "Ye", pronunciation: "yeh" },
      { letter: "ዩ", transliteration: "Yu", pronunciation: "yoo" },
      { letter: "ዪ", transliteration: "Yi", pronunciation: "yee" },
      { letter: "ያ", transliteration: "Ya", pronunciation: "yaa" },
      { letter: "ዬ", transliteration: "Ye", pronunciation: "yay" },
      { letter: "ይ", transliteration: "Y", pronunciation: "yuh" },
      { letter: "ዮ", transliteration: "Yo", pronunciation: "yo" },
    ],
  },

  // 24. ደ
  {
    id: 24,
    base: "ደ",
    name: "Da",
    forms: [
      { letter: "ደ", transliteration: "De", pronunciation: "deh" },
      { letter: "ዱ", transliteration: "Du", pronunciation: "doo" },
      { letter: "ዲ", transliteration: "Di", pronunciation: "dee" },
      { letter: "ዳ", transliteration: "Da", pronunciation: "daa" },
      { letter: "ዴ", transliteration: "De", pronunciation: "day" },
      { letter: "ድ", transliteration: "D", pronunciation: "duh" },
      { letter: "ዶ", transliteration: "Do", pronunciation: "do" },
    ],
  },

  // 25. ጀ
  {
    id: 25,
    base: "ጀ",
    name: "Ja",
    forms: [
      { letter: "ጀ", transliteration: "Je", pronunciation: "jeh" },
      { letter: "ጁ", transliteration: "Ju", pronunciation: "joo" },
      { letter: "ጂ", transliteration: "Ji", pronunciation: "jee" },
      { letter: "ጃ", transliteration: "Ja", pronunciation: "jaa" },
      { letter: "ጄ", transliteration: "Je", pronunciation: "jay" },
      { letter: "ጅ", transliteration: "J", pronunciation: "juh" },
      { letter: "ጆ", transliteration: "Jo", pronunciation: "jo" },
    ],
  },

  // 26. ገ
  {
    id: 26,
    base: "ገ",
    name: "Ga",
    forms: [
      { letter: "ገ", transliteration: "Ge", pronunciation: "geh" },
      { letter: "ጉ", transliteration: "Gu", pronunciation: "goo" },
      { letter: "ጊ", transliteration: "Gi", pronunciation: "gee" },
      { letter: "ጋ", transliteration: "Ga", pronunciation: "gaa" },
      { letter: "ጌ", transliteration: "Ge", pronunciation: "gay" },
      { letter: "ግ", transliteration: "G", pronunciation: "guh" },
      { letter: "ጎ", transliteration: "Go", pronunciation: "go" },
    ],
  },

  // 27. ጠ
  {
    id: 27,
    base: "ጠ",
    name: "T'a",
    forms: [
      { letter: "ጠ", transliteration: "T'e", pronunciation: "teh" },
      { letter: "ጡ", transliteration: "T'u", pronunciation: "too" },
      { letter: "ጢ", transliteration: "T'i", pronunciation: "tee" },
      { letter: "ጣ", transliteration: "T'a", pronunciation: "taa" },
      { letter: "ጤ", transliteration: "T'e", pronunciation: "tay" },
      { letter: "ጥ", transliteration: "T'", pronunciation: "tuh" },
      { letter: "ጦ", transliteration: "T'o", pronunciation: "to" },
    ],
  },

  // 28. ጨ
  {
    id: 28,
    base: "ጨ",
    name: "Ch'a",
    forms: [
      { letter: "ጨ", transliteration: "Ch'e", pronunciation: "cheh" },
      { letter: "ጩ", transliteration: "Ch'u", pronunciation: "choo" },
      { letter: "ጪ", transliteration: "Ch'i", pronunciation: "chee" },
      { letter: "ጫ", transliteration: "Ch'a", pronunciation: "chaa" },
      { letter: "ጬ", transliteration: "Ch'e", pronunciation: "chay" },
      { letter: "ጭ", transliteration: "Ch'", pronunciation: "chuh" },
      { letter: "ጮ", transliteration: "Ch'o", pronunciation: "cho" },
    ],
  },

  // 29. ጰ
  {
    id: 29,
    base: "ጰ",
    name: "P'a",
    forms: [
      { letter: "ጰ", transliteration: "P'e", pronunciation: "peh" },
      { letter: "ጱ", transliteration: "P'u", pronunciation: "poo" },
      { letter: "ጲ", transliteration: "P'i", pronunciation: "pee" },
      { letter: "ጳ", transliteration: "P'a", pronunciation: "paa" },
      { letter: "ጴ", transliteration: "P'e", pronunciation: "pay" },
      { letter: "ጵ", transliteration: "P'", pronunciation: "puh" },
      { letter: "ጶ", transliteration: "P'o", pronunciation: "po" },
    ],
  },

  // 30. ጸ
  {
    id: 30,
    base: "ጸ",
    name: "Ts'a",
    forms: [
      { letter: "ጸ", transliteration: "Ts'e", pronunciation: "tseh" },
      { letter: "ጹ", transliteration: "Ts'u", pronunciation: "tsoo" },
      { letter: "ጺ", transliteration: "Ts'i", pronunciation: "tsee" },
      { letter: "ጻ", transliteration: "Ts'a", pronunciation: "tsaa" },
      { letter: "ጼ", transliteration: "Ts'e", pronunciation: "tsay" },
      { letter: "ጽ", transliteration: "Ts'", pronunciation: "tsuh" },
      { letter: "ጾ", transliteration: "Ts'o", pronunciation: "tso" },
    ],
  },

  // 31. ፀ
  {
    id: 31,
    base: "ፀ",
    name: "Ts'a",
    forms: [
      { letter: "ፀ", transliteration: "Ts'a", pronunciation: "tsa" },
      { letter: "ፁ", transliteration: "Ts'u", pronunciation: "tsoo" },
      { letter: "ፂ", transliteration: "Ts'i", pronunciation: "tsee" },
      { letter: "ፃ", transliteration: "Ts'a", pronunciation: "tsaa" },
      { letter: "ፄ", transliteration: "Ts'e", pronunciation: "tsay" },
      { letter: "ፅ", transliteration: "Ts'I", pronunciation: "tsuh" },
      { letter: "ፆ", transliteration: "Ts'o", pronunciation: "tso" },
    ],
  },

  // 32. ፈ
  {
    id: 32,
    base: "ፈ",
    name: "Fa",
    forms: [
      { letter: "ፈ", transliteration: "Fe", pronunciation: "feh" },
      { letter: "ፉ", transliteration: "Fu", pronunciation: "foo" },
      { letter: "ፊ", transliteration: "Fi", pronunciation: "fee" },
      { letter: "ፋ", transliteration: "Fa", pronunciation: "faa" },
      { letter: "ፌ", transliteration: "Fe", pronunciation: "fay" },
      { letter: "ፍ", transliteration: "F", pronunciation: "fuh" },
      { letter: "ፎ", transliteration: "Fo", pronunciation: "fo" },
    ],
  },

  // 33. ፐ
  {
    id: 33,
    base: "ፐ",
    name: "Pa",
    forms: [
      { letter: "ፐ", transliteration: "Pe", pronunciation: "peh" },
      { letter: "ፑ", transliteration: "Pu", pronunciation: "poo" },
      { letter: "ፒ", transliteration: "Pi", pronunciation: "pee" },
      { letter: "ፓ", transliteration: "Pa", pronunciation: "paa" },
      { letter: "ፔ", transliteration: "Pe", pronunciation: "pay" },
      { letter: "ፕ", transliteration: "P", pronunciation: "puh" },
      { letter: "ፖ", transliteration: "Po", pronunciation: "po" },
    ],
  },
];

export const allForms = fidelFamilies.flatMap(
  (family) => family.forms
);