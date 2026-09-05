"use client";

import { progress } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "am" | "om" | "ar" | "ti";

export const languages: {
  code: Language;
  label: string;
  native: string;
  dir: "ltr" | "rtl";
}[] = [
  {
    code: "en",
    label: "English",
    native: "English",
    dir: "ltr",
  },
  {
    code: "am",
    label: "Amharic",
    native: "አማርኛ",
    dir: "ltr",
  },
  {
    code: "om",
    label: "Afaan Oromoo",
    native: "Afaan Oromoo",
    dir: "ltr",
  },
  {
    code: "ar",
    label: "Arabic",
    native: "العربية",
    dir: "rtl",
  },
  {
    code: "ti",
    label: "Tigrinya",
    native: "ትግርኛ",
    dir: "ltr",
  },
];

const translations = {
  en: {
    nav: {
      learn: "Learn",
      practice: "Practice",
      trace: "Trace",
      quiz: "Quiz",
      progress: "Progress",
      language: "Language",
      menu: "Menu",
      close: "Close menu",
      open: "Open menu",
    },

    common: {
      back: "Back",
      next: "Next",
      previous: "Previous",
      start: "Start",
      continue: "Continue",
      reset: "Reset",
      clear: "Clear",
      hear: "Hear it",
      tryAgain: "Try again",
      done: "Done",
      close: "Close",
      home: "Home",
      learnMore: "Learn more",
    },

    home: {
      badge: "Learning can be fun!",
      title: "Discover the magic of Amharic ፊደል.",
      description:
        "Learn Amharic letters, hear their sounds, practice writing, and build confidence one family at a time.",
      startLearning: "Start learning",
      tryWriting: "Try writing",
      free: "Free",
      noSignup: "No signup",
      learnAtYourPace: "Learn at your pace",
      families: "Fidel families",
      letters: "Core forms",
      formsEach: "Forms in each family",
      thingsToLearn: "Everything you need to learn",
      learnYourWay: "Learn your way",
      seeHearPlay: "See it. Hear it. Practice it.",
      explore: "Explore",
      practice: "Practice",
      test: "Test yourself",
      trace: "Write",
      meetFriends: "Meet your first ፊደል friends.",
      exploreAll: "Explore all ፊደል",
      adventure: "Your Amharic adventure starts here.",
      pickFirst:
        "Pick a family, learn the seven forms, then practice what you know.",
      takeQuiz: "Take a quiz",
      learnFidel: "Learn ፊደል",
    },

    learn: {
      eyebrow: "Fidel Explorer",
      title: "Learn ፊደል. One family at a time.",
      description:
        "Explore each Fidel family, learn its seven forms, hear the pronunciation, and practice writing it.",
      quickGuide: "Quick guide",
      chooseFamily: "Choose a family",
      chooseFamilyText:
        "Start with any Fidel family and move through the seven forms.",
      listen: "Listen",
      listenText:
        "Hear the learner-friendly pronunciation for each form.",
      practiceWriting: "Practice writing",
      practiceWritingText:
        "When you are ready, trace the letter with your finger, mouse, or stylus.",
      learningTip: "Learning tip",
      learningTipText:
        "Do not try to memorize everything at once. Learn one family, say the sounds aloud, then write each form.",
      pattern: "The pattern",
      patternText:
        "Each Fidel family has seven forms. The shape changes while the core sound stays connected.",
      nextStep: "Ready for the next step?",
      nextStepText:
        "Practice what you just learned or test your memory with a quick quiz.",
    },

    explorer: {
      chooseFamily: "Choose a family",
      previousFamily: "Previous Fidel family",
      nextFamily: "Next Fidel family",
      sevenForms: "Seven forms",
      sound: "Sound",
      listen: "Listen",
      trace: "Trace",
      practiceThis: "Practice this letter",
      family: "Family",
      form: "Form",
      first: "First",
      second: "Second",
      third: "Third",
      fourth: "Fourth",
      fifth: "Fifth",
      sixth: "Sixth",
      seventh: "Seventh",
    },

    practice: {
      eyebrow: "Practice",
      title: "See it. Type it. Learn it.",
      description:
        "Practice Amharic words by typing their English transliteration.",
      instructions:
        "Look at the Amharic word and type its pronunciation in English.",
      directionAmharic: "Amharic → English",
      directionEnglish: "English → Amharic",
      switchDirection: "Switch direction",
      checkAnswer: "Check answer",
      correct: "Correct!",
      incorrect: "Not quite.",
      correctAnswer: "Correct answer",
      score: "Score",
      question: "Question",
      of: "of",
      keepGoing: "Keep going!",
      greatWork: "Great work!",
      practiceAgain: "Practice again",
      finished: "Practice complete",
      finishedText:
        "You finished this practice session. Keep practicing to make the words stick.",
    },

    trace: {
      eyebrow: "Trace & Practice",
      title: "Trace",
      description:
        "Follow the guide with your finger, mouse, or stylus.",
      letter: "Letter",
      hideGuide: "Hide guide",
      showGuide: "Show guide",
      drawing: "Drawing",
      practiceAgain: "Practice this letter again",
      previousLetter: "Previous letter",
      nextLetter: "Next letter",
      canvasLabel: "Writing area for the selected Fidel",
    },

    quiz: {
      eyebrow: "Quiz",
      title: "Test what you know.",
      description:
        "Put your Fidel knowledge to the test.",
      start: "Start quiz",
      next: "Next question",
      finish: "Finish quiz",
      score: "Score",
      streak: "Streak",
      bestStreak: "Best streak",
      lives: "Lives",
      question: "Question",
      of: "of",
      correct: "Correct!",
      incorrect: "Not quite.",
      answer: "Your answer",
      chooseAnswer: "Choose an answer",
      soundQuestion: "Which Fidel makes this sound?",
      letterQuestion: "What is this letter?",
      familyQuestion: "Which family does this letter belong to?",
      completed: "Quiz complete!",
      completedText:
        "Nice work. Review your result and keep practicing the letters you missed.",
      tryAgain: "Try again",
      backToLearn: "Back to learning",
    },
progress: {
  
    eyebrow: "Your progress",
    title: "Keep learning.",
    description:
      "Track your practice and quiz progress as you learn Fidel.",

    practiceScore: "Quiz progress",
    quizScore: "Your best score",
    bestStreak: "Best streak",
    sessions: "Sessions",

    points: "points",
    fidelFamilies: "Fidel families",
    familiesAvailable: "Families available to explore",

    practiceGoal: "Practice goal",
    keepGoing: "Keep going",
    dailyTip: "Learn a little Fidel every day.",

    reset: "Reset progress",
    resetText: "Your progress has been reset.",
    noProgress:
      "Complete a quiz and your score will appear here.",
    startLearning: "Ready to learn?",
    keepLearning:
      "Keep practicing and try to beat your score.",
    local: "Saved locally",
  },


    footer: {
      tagline:
        "A simple way to learn Amharic ፊደል through letters, words, writing, and practice.",
      explore: "Explore",
      learning: "Learning",
      learn: "Learn",
      practice: "Practice",
      trace: "Trace",
      quiz: "Quiz",
      progress: "Progress",
      language: "Language",
      madeForLearners: "Made for learners.",
      copyright: "EthubX FidelFun",
    },
  },

  am: {
    nav: {
      learn: "ተማር",
      practice: "ልምምድ",
      trace: "ጻፍ",
      quiz: "ፈተና",
      progress: "እድገት",
      language: "ቋንቋ",
      menu: "ምናሌ",
      close: "ምናሌውን ዝጋ",
      open: "ምናሌውን ክፈት",
    },

    common: {
      back: "ተመለስ",
      next: "ቀጣይ",
      previous: "ቀዳሚ",
      start: "ጀምር",
      continue: "ቀጥል",
      reset: "እንደገና አስጀምር",
      clear: "አጽዳ",
      hear: "አዳምጥ",
      tryAgain: "እንደገና ሞክር",
      done: "ተጠናቋል",
      close: "ዝጋ",
      home: "መነሻ",
      learnMore: "ተጨማሪ ተማር",
    },

    home: {
      badge: "መማር አስደሳች ሊሆን ይችላል!",
      title: "የአማርኛ ፊደል ውበትን ያግኙ።",
      description:
        "የአማርኛ ፊደላትን ይማሩ፣ ድምጻቸውን ያዳምጡ፣ መጻፍ ይለማመዱ እና በአንድ ቤተሰብ በአንድ ጊዜ በራስ መተማመንዎን ያዳብሩ።",
      startLearning: "መማር ጀምር",
      tryWriting: "መጻፍ ሞክር",
      free: "ነፃ",
      noSignup: "መመዝገብ አያስፈልግም",
      learnAtYourPace: "በራስህ ፍጥነት ተማር",
      families: "የፊደል ቤተሰቦች",
      letters: "ዋና ፊደላት",
      formsEach: "በእያንዳንዱ ቤተሰብ ቅርጾች",
      thingsToLearn: "ለመማር የሚያስፈልጉህ ሁሉ",
      learnYourWay: "በሚመችህ መንገድ ተማር",
      seeHearPlay: "እይ። አዳምጥ። ተለማመድ።",
      explore: "አስስ",
      practice: "ልምምድ",
      test: "ራስህን ፈትን",
      trace: "ጻፍ",
      meetFriends: "የመጀመሪያዎቹን የፊደል ጓደኞችህን እወቃቸው።",
      exploreAll: "ሁሉንም ፊደል አስስ",
      adventure: "የአማርኛ ጉዞህ እዚህ ይጀምራል።",
      pickFirst: "የመጀመሪያ ቤተሰብህን ምረጥ፣ ሰባቱን ቅርጾች ተማር እና የተማርከውን ተለማመድ።",
      takeQuiz: "ፈተና ውሰድ",
      learnFidel: "ፊደል ተማር",
    },

    learn: {
      eyebrow: "የፊደል አሳሽ",
      title: "ፊደል ተማር። አንድ ቤተሰብ በአንድ ጊዜ።",
      description:
        "እያንዳንዱን የፊደል ቤተሰብ ያስሱ፣ ሰባቱን ቅርጾች ይማሩ፣ አጠራሩን ያዳምጡ እና መጻፍ ይለማመዱ።",
      quickGuide: "ፈጣን መመሪያ",
      chooseFamily: "ቤተሰብ ምረጥ",
      chooseFamilyText: "ማንኛውንም የፊደል ቤተሰብ ምረጥና በሰባቱ ቅርጾች ቀጥል።",
      listen: "አዳምጥ",
      listenText: "ለእያንዳንዱ ቅርጽ ቀላል አጠራር ያዳምጡ።",
      practiceWriting: "መጻፍ ተለማመድ",
      practiceWritingText: "ዝግጁ ሲሆኑ ፊደሉን በጣት፣ በመዳፊት ወይም በstylus ይከታተሉ።",
      learningTip: "የመማሪያ ምክር",
      learningTipText: "ሁሉንም በአንድ ጊዜ ለማስታወስ አትሞክር። አንድ ቤተሰብ ተማር፣ ድምጾቹን ተናገር እና እያንዳንዱን ቅርጽ ጻፍ።",
      pattern: "አቀራረቡ",
      patternText: "እያንዳንዱ የፊደል ቤተሰብ ሰባት ቅርጾች አሉት። ቅርጹ ሲቀየር ዋናው ድምጽ ተያያዥ ሆኖ ይቆያል።",
      nextStep: "ለሚቀጥለው ደረጃ ዝግጁ ነህ?",
      nextStepText: "የተማርከውን ተለማመድ ወይም በፈጣን ፈተና ራስህን ፈትን።",
    },

    explorer: {
      chooseFamily: "ቤተሰብ ምረጥ",
      previousFamily: "የቀድሞው የፊደል ቤተሰብ",
      nextFamily: "የሚቀጥለው የፊደል ቤተሰብ",
      sevenForms: "ሰባት ቅርጾች",
      sound: "ድምጽ",
      listen: "አዳምጥ",
      trace: "ጻፍ",
      practiceThis: "ይህን ፊደል ተለማመድ",
      family: "ቤተሰብ",
      form: "ቅርጽ",
      first: "አንደኛ",
      second: "ሁለተኛ",
      third: "ሶስተኛ",
      fourth: "አራተኛ",
      fifth: "አምስተኛ",
      sixth: "ስድስተኛ",
      seventh: "ሰባተኛ",
    },

    practice: {
      eyebrow: "ልምምድ",
      title: "እይ። ጻፍ። ተማር።",
      description: "የአማርኛ ቃላትን በእንግሊዝኛ አጻጻፍ በመጻፍ ይለማመዱ።",
      instructions: "የአማርኛውን ቃል ተመልከትና አጠራሩን በእንግሊዝኛ ጻፍ።",
      directionAmharic: "አማርኛ → እንግሊዝኛ",
      directionEnglish: "እንግሊዝኛ → አማርኛ",
      switchDirection: "አቅጣጫ ቀይር",
      checkAnswer: "መልሱን ፈትሽ",
      correct: "ትክክል!",
      incorrect: "በትክክል አይደለም።",
      correctAnswer: "ትክክለኛው መልስ",
      score: "ውጤት",
      question: "ጥያቄ",
      of: "ከ",
      keepGoing: "ቀጥል!",
      greatWork: "በጣም ጥሩ!",
      practiceAgain: "እንደገና ተለማመድ",
      finished: "ልምምዱ ተጠናቋል",
      finishedText: "ይህን የልምምድ ክፍል ጨርሰሃል። ቃላቱ እንዲጸኑ መለማመድህን ቀጥል።",
    },

    trace: {
      eyebrow: "ጻፍ እና ተለማመድ",
      title: "ጻፍ",
      description: "በጣትህ፣ በመዳፊትህ ወይም በstylus መመሪያውን ተከተል።",
      letter: "ፊደል",
      hideGuide: "መመሪያውን ደብቅ",
      showGuide: "መመሪያውን አሳይ",
      drawing: "በመጻፍ ላይ",
      practiceAgain: "ይህን ፊደል እንደገና ተለማመድ",
      previousLetter: "የቀድሞው ፊደል",
      nextLetter: "የሚቀጥለው ፊደል",
      canvasLabel: "የተመረጠውን ፊደል ለመጻፍ ቦታ",
    },

    quiz: {
      eyebrow: "ፈተና",
      title: "የተማርከውን ፈትን።",
      description: "የፊደል እውቀትህን ፈትን።",
      start: "ፈተና ጀምር",
      next: "ቀጣይ ጥያቄ",
      finish: "ፈተናውን ጨርስ",
      score: "ውጤት",
      streak: "ተከታታይ ትክክል",
      bestStreak: "ከፍተኛ ተከታታይ",
      lives: "ዕድሎች",
      question: "ጥያቄ",
      of: "ከ",
      correct: "ትክክል!",
      incorrect: "በትክክል አይደለም።",
      answer: "መልስህ",
      chooseAnswer: "መልስ ምረጥ",
      soundQuestion: "ይህን ድምጽ የሚያመጣው የትኛው ፊደል ነው?",
      letterQuestion: "ይህ ምን ፊደል ነው?",
      familyQuestion: "ይህ ፊደል የየትኛው ቤተሰብ ነው?",
      completed: "ፈተናው ተጠናቋል!",
      completedText: "በጣም ጥሩ። ውጤትህን ተመልከትና ያልተሳካልህን ፊደላት ተመልሰህ ተለማመድ።",
      tryAgain: "እንደገና ሞክር",
      backToLearn: "ወደ መማር ተመለስ",
    },

   progress:{
    
    eyebrow: "የእርስዎ እድገት",
    title: "መማርዎን ይቀጥሉ።",
    description:
      "ፊደል ሲማሩ የልምምድ እና የፈተና እድገትዎን ይከታተሉ።",

    practiceScore: "የፈተና እድገት",
    quizScore: "ምርጥ ውጤትዎ",
    bestStreak: "ምርጥ ተከታታይ ውጤት",
    sessions: "ክፍለ ጊዜዎች",

    points: "ነጥቦች",
    fidelFamilies: "የፊደል ቤተሰቦች",
    familiesAvailable: "ለመማር የሚገኙ ቤተሰቦች",

    practiceGoal: "የልምምድ ግብ",
    keepGoing: "ይቀጥሉ",
    dailyTip: "በየቀኑ ትንሽ ፊደል ይማሩ።",

    reset: "እድገትን ዳግም አስጀምር",
    resetText: "እድገትዎ ዳግም ተጀምሯል።",
    noProgress:
      "ፈተና ይውሰዱ እና ውጤትዎ እዚህ ይታያል።",
    startLearning: "ለመማር ዝግጁ ነዎት?",
    keepLearning:
      "ልምምድዎን ይቀጥሉ እና ውጤትዎን ለማሻሻል ይሞክሩ።",
    local: "በመሳሪያው ላይ ተቀምጧል",
  },

    footer: {
      tagline: "ፊደልን፣ ቃላትን፣ ጽሑፍን እና ልምምድን በመጠቀም አማርኛ ፊደልን ለመማር ቀላል መንገድ።",
      explore: "አስስ",
      learning: "መማር",
      learn: "ተማር",
      practice: "ልምምድ",
      trace: "ጻፍ",
      quiz: "ፈተና",
      progress: "እድገት",
      language: "ቋንቋ",
      madeForLearners: "ለተማሪዎች የተሰራ።",
      copyright: "EthubX FidelFun",
    },
  },

  om: {
    nav: {
      learn: "Baradhuu",
      practice: "Shaakali",
      trace: "Barreessi",
      quiz: "Qormaata",
      progress: "Guddina",
      language: "Afaan",
      menu: "Menyu",
      close: "Menyu cufi",
      open: "Menyu bani",
    },

    common: {
      back: "Duubatti",
      next: "Itti aanu",
      previous: "Kan duraa",
      start: "Jalqabi",
      continue: "Itti fufi",
      reset: "Irra deebi'i",
      clear: "Haqi",
      hear: "Dhaggeeffadhu",
      tryAgain: "Irra deebi'ii yaali",
      done: "Xumurame",
      close: "Cufi",
      home: "Mana",
      learnMore: "Dabalata baradhu",
    },

    home: {
      badge: "Barachuun nama gammachiisuu danda'a!",
      title: "Miidhagina Fidel Afaan Amaaraa baradhu.",
      description: "Qubee Afaan Amaaraa baradhu, sagalee isaanii dhaggeeffadhu, barreessuu shaakali, fi ofitti amanamummaa kee guddisi.",
      startLearning: "Barachuu jalqabi",
      tryWriting: "Barreessuu yaali",
      free: "Bilisa",
      noSignup: "Galmeen hin barbaachisu",
      learnAtYourPace: "Saffisa keetiin baradhu",
      families: "Maatii Fidel",
      letters: "Bocaalee ijoo",
      formsEach: "Bocaalee maatii tokko keessatti",
      thingsToLearn: "Waan barachuuf si barbaachisu hunda",
      learnYourWay: "Akka siif mijatutti baradhu",
      seeHearPlay: "Ilaali. Dhaggeeffadhu. Shaakali.",
      explore: "Qoradhu",
      practice: "Shaakala",
      test: "Of qori",
      trace: "Barreessi",
      meetFriends: "Fidel hiriyoota kee jalqabaa beekamtii godhi.",
      exploreAll: "Fidel hunda qoradhu",
      adventure: "Imalli kee Afaan Amaaraa as irraa jalqaba.",
      pickFirst: "Maatii jalqabaa filadhu, boca torban baradhu, waan baratte shaakali.",
      takeQuiz: "Qormaata fudhadhu",
      learnFidel: "Fidel baradhu",
    },

    learn: {
      eyebrow: "Fidel Explorer",
      title: "Fidel baradhu. Maatii tokko yeroo tokko.",
      description: "Maatii Fidel hunda qoradhu, boca isaa torban baradhu, sagalee isaa dhaggeeffadhu, barreessuus shaakali.",
      quickGuide: "Qajeelfama gabaabaa",
      chooseFamily: "Maatii filadhu",
      chooseFamilyText: "Maatii Fidel kamiyyuu irraa jalqabiitii boca torban keessa darbu.",
      listen: "Dhaggeeffadhu",
      listenText: "Sagalee salphaa boca tokkoon tokkoon isaa dhaggeeffadhu.",
      practiceWriting: "Barreessuu shaakali",
      practiceWritingText: "Yeroo qophoofte, quba, mouse ykn stylus fayyadamuun qubee hordofi.",
      learningTip: "Gorsa barumsaa",
      learningTipText: "Hunda yeroo tokko keessatti yaadachuuf hin yaalin. Maatii tokko baradhu, sagalee isaa dubbadhu, booda boca tokko tokko barreessi.",
      pattern: "Sirna",
      patternText: "Maatiin Fidel tokko tokko boca torba qaba. Boca ni jijjiirama, sagaleen bu'uuraa garuu walitti hidhata qaba.",
      nextStep: "Tarkaanfii itti aanuuf qophoofteetta?",
      nextStepText: "Waan amma baratte shaakali ykn qormaata gabaabaan of qori.",
    },

    explorer: {
      chooseFamily: "Maatii filadhu",
      previousFamily: "Maatii Fidel duraa",
      nextFamily: "Maatii Fidel itti aanu",
      sevenForms: "Boca torba",
      sound: "Sagalee",
      listen: "Dhaggeeffadhu",
      trace: "Barreessi",
      practiceThis: "Fidel kana shaakali",
      family: "Maatii",
      form: "Boca",
      first: "Jalqabaa",
      second: "Lammaffaa",
      third: "Sadaffaa",
      fourth: "Afraffaa",
      fifth: "Shanaffaa",
      sixth: "Jahaffaa",
      seventh: "Torbeessaa",
    },

    practice: {
      eyebrow: "Shaakala",
      title: "Ilaali. Barreessi. Baradhu.",
      description: "Jechoota Afaan Amaaraa raajii isaanii Afaan Ingiliziitiin barreessuun shaakali.",
      instructions: "Jechoota Afaan Amaaraa ilaaliitii sagalee isaa Afaan Ingiliziitiin barreessi.",
      directionAmharic: "Amaaraa → Ingiliffa",
      directionEnglish: "Ingiliffa → Amaaraa",
      switchDirection: "Kallattii jijjiiri",
      checkAnswer: "Deebii mirkaneessi",
      correct: "Sirrii!",
      incorrect: "Guutumaan guutuutti sirrii miti.",
      correctAnswer: "Deebii sirrii",
      score: "Qabxii",
      question: "Gaaffii",
      of: "keessaa",
      keepGoing: "Itti fufi!",
      greatWork: "Hojii gaarii!",
      practiceAgain: "Irra deebi'ii shaakali",
      finished: "Shaakalli xumurame",
      finishedText: "Shaakala kana xumurteetta. Jechoonni akka siif cimanuf shaakaluu itti fufi.",
    },

    trace: {
      eyebrow: "Barreessi & Shaakali",
      title: "Barreessi",
      description: "Qajeelfama quba, mouse ykn stylus keetiin hordofi.",
      letter: "Fidel",
      hideGuide: "Qajeelfama dhoksi",
      showGuide: "Qajeelfama agarsiisi",
      drawing: "Barreessaa jira",
      practiceAgain: "Fidel kana irra deebi'ii shaakali",
      previousLetter: "Fidel duraa",
      nextLetter: "Fidel itti aanu",
      canvasLabel: "Iddoo Fidel filatame itti barreessan",
    },

    quiz: {
      eyebrow: "Qormaata",
      title: "Waan baratte qori.",
      description: "Beekumsa Fidel kee qormaadhu.",
      start: "Qormaata jalqabi",
      next: "Gaaffii itti aanu",
      finish: "Qormaata xumuri",
      score: "Qabxii",
      streak: "Walitti aansaa",
      bestStreak: "Walitti aansaa gaarii",
      lives: "Carraa",
      question: "Gaaffii",
      of: "keessaa",
      correct: "Sirrii!",
      incorrect: "Sirrii miti.",
      answer: "Deebii kee",
      chooseAnswer: "Deebii filadhu",
      soundQuestion: "Fidel kamtu sagalee kana qaba?",
      letterQuestion: "Kun Fidel maali?",
      familyQuestion: "Fidel kun maatii kami keessa jira?",
      completed: "Qormaatni xumurame!",
      completedText: "Hojii gaarii. Bu'aa kee ilaaliitii Fidel ati dogoggorte irra deebi'ii shaakali.",
      tryAgain: "Irra deebi'ii yaali",
      backToLearn: "Gara barumsaatti deebi'i",
    },

    progress: {
    eyebrow: "Guddina kee",
    title: "Barachuu itti fufi.",
    description:
      "Yeroo Fidel barattu guddina shaakala fi qormaataa kee hordofi.",

    practiceScore: "Guddina qormaataa",
    quizScore: "Qabxii kee isa gaarii",
    bestStreak: "Walitti aansaa kee isa gaarii",
    sessions: "Yeroo barnootaa",

    points: "qabxii",
    fidelFamilies: "Maatii Fidel",
    familiesAvailable: "Maatiiwwan qorachuuf jiran",

    practiceGoal: "Kaayyoo shaakalaa",
    keepGoing: "Itti fufi",
    dailyTip: "Guyyaa guyyaan Fidel xiqqoo baradhu.",

    reset: "Guddina deebisii jalqabi",
    resetText: "Guddinni kee deebifamee jalqabameera.",
    noProgress:
      "Qormaata xumuri; qabxiin kee as irratti mul'ata.",
    startLearning: "Barachuuf qophiidhaa?",
    keepLearning:
      "Shaakala itti fufiitii qabxii kee fooyyeessuuf yaali.",
    local: "Meeshaa irratti kuufame",

    },

    footer: {
      tagline: "Fidel, jechoota, barreessuu fi shaakala fayyadamuun Afaan Amaaraa barachuuf karaa salphaa.",
      explore: "Qoradhu",
      learning: "Barumsa",
      learn: "Baradhu",
      practice: "Shaakali",
      trace: "Barreessi",
      quiz: "Qormaata",
      progress: "Guddina",
      language: "Afaan",
      madeForLearners: "Barattootaaf kan hojjetame.",
      copyright: "EthubX FidelFun",
    },
  },

  ar: {
    nav: {
      learn: "تعلّم",
      practice: "تدرّب",
      trace: "اكتب",
      quiz: "اختبار",
      progress: "التقدم",
      language: "اللغة",
      menu: "القائمة",
      close: "إغلاق القائمة",
      open: "فتح القائمة",
    },

    common: {
      back: "رجوع",
      next: "التالي",
      previous: "السابق",
      start: "ابدأ",
      continue: "متابعة",
      reset: "إعادة ضبط",
      clear: "مسح",
      hear: "استمع",
      tryAgain: "حاول مرة أخرى",
      done: "تم",
      close: "إغلاق",
      home: "الرئيسية",
      learnMore: "اعرف المزيد",
    },

    home: {
      badge: "التعلّم يمكن أن يكون ممتعًا!",
      title: "اكتشف سحر الفِدِل الأمهرية.",
      description: "تعلّم الحروف الأمهرية، واستمع إلى أصواتها، وتدرّب على الكتابة، وابنِ ثقتك عائلة واحدة في كل مرة.",
      startLearning: "ابدأ التعلّم",
      tryWriting: "جرّب الكتابة",
      free: "مجاني",
      noSignup: "لا حاجة للتسجيل",
      learnAtYourPace: "تعلّم بالسرعة التي تناسبك",
      families: "عائلات الفِدِل",
      letters: "الأشكال الأساسية",
      formsEach: "أشكال في كل عائلة",
      thingsToLearn: "كل ما تحتاجه للتعلّم",
      learnYourWay: "تعلّم بطريقتك",
      seeHearPlay: "انظر. استمع. تدرّب.",
      explore: "استكشف",
      practice: "تدرّب",
      test: "اختبر نفسك",
      trace: "اكتب",
      meetFriends: "تعرّف على أول أصدقاء الفِدِل.",
      exploreAll: "استكشف كل الفِدِل",
      adventure: "رحلتك في تعلّم الأمهرية تبدأ هنا.",
      pickFirst: "اختر عائلة، وتعلّم أشكالها السبعة، ثم تدرّب على ما تعلمته.",
      takeQuiz: "ابدأ اختبارًا",
      learnFidel: "تعلّم الفِدِل",
    },

    learn: {
      eyebrow: "مستكشف الفِدِل",
      title: "تعلّم الفِدِل. عائلة واحدة في كل مرة.",
      description: "استكشف كل عائلة، وتعلّم أشكالها السبعة، واستمع إلى النطق، وتدرّب على الكتابة.",
      quickGuide: "دليل سريع",
      chooseFamily: "اختر عائلة",
      chooseFamilyText: "ابدأ بأي عائلة وتقدّم عبر الأشكال السبعة.",
      listen: "استمع",
      listenText: "استمع إلى النطق السهل لكل شكل.",
      practiceWriting: "تدرّب على الكتابة",
      practiceWritingText: "عندما تكون مستعدًا، تتبّع الحرف بإصبعك أو الفأرة أو القلم الإلكتروني.",
      learningTip: "نصيحة للتعلّم",
      learningTipText: "لا تحاول حفظ كل شيء دفعة واحدة. تعلّم عائلة واحدة، وانطق الأصوات، ثم اكتب كل شكل.",
      pattern: "النمط",
      patternText: "كل عائلة من عائلات الفِدِل تحتوي على سبعة أشكال. يتغير الشكل بينما يبقى الصوت الأساسي مرتبطًا.",
      nextStep: "هل أنت مستعد للخطوة التالية؟",
      nextStepText: "تدرّب على ما تعلمته أو اختبر ذاكرتك باختبار سريع.",
    },

    explorer: {
      chooseFamily: "اختر عائلة",
      previousFamily: "عائلة الفِدِل السابقة",
      nextFamily: "عائلة الفِدِل التالية",
      sevenForms: "سبعة أشكال",
      sound: "الصوت",
      listen: "استمع",
      trace: "اكتب",
      practiceThis: "تدرّب على هذا الحرف",
      family: "العائلة",
      form: "الشكل",
      first: "الأول",
      second: "الثاني",
      third: "الثالث",
      fourth: "الرابع",
      fifth: "الخامس",
      sixth: "السادس",
      seventh: "السابع",
    },

    practice: {
      eyebrow: "تدرّب",
      title: "انظر. اكتب. تعلّم.",
      description: "تدرّب على الكلمات من خلال كتابة نطقها بالحروف الإنجليزية.",
      instructions: "انظر إلى الكلمة الأمهرية واكتب نطقها باللغة الإنجليزية.",
      directionAmharic: "الأمهرية → الإنجليزية",
      directionEnglish: "الإنجليزية → الأمهرية",
      switchDirection: "تغيير الاتجاه",
      checkAnswer: "تحقق من الإجابة",
      correct: "صحيح!",
      incorrect: "ليست صحيحة تمامًا.",
      correctAnswer: "الإجابة الصحيحة",
      score: "النتيجة",
      question: "السؤال",
      of: "من",
      keepGoing: "واصل!",
      greatWork: "عمل رائع!",
      practiceAgain: "تدرّب مرة أخرى",
      finished: "اكتمل التدريب",
      finishedText: "لقد أكملت جلسة التدريب. واصل التدريب لتثبيت الكلمات.",
    },

    trace: {
      eyebrow: "اكتب وتدرّب",
      title: "اكتب",
      description: "اتبع الدليل بإصبعك أو الفأرة أو القلم الإلكتروني.",
      letter: "الحرف",
      hideGuide: "إخفاء الدليل",
      showGuide: "إظهار الدليل",
      drawing: "جارٍ الكتابة",
      practiceAgain: "تدرّب على هذا الحرف مرة أخرى",
      previousLetter: "الحرف السابق",
      nextLetter: "الحرف التالي",
      canvasLabel: "منطقة كتابة الفِدِل المحدد",
    },

    quiz: {
      eyebrow: "اختبار",
      title: "اختبر ما تعلّمته.",
      description: "اختبر معرفتك بالفِدِل.",
      start: "ابدأ الاختبار",
      next: "السؤال التالي",
      finish: "إنهاء الاختبار",
      score: "النتيجة",
      streak: "التتابع",
      bestStreak: "أفضل تتابع",
      lives: "المحاولات",
      question: "السؤال",
      of: "من",
      correct: "صحيح!",
      incorrect: "ليست صحيحة.",
      answer: "إجابتك",
      chooseAnswer: "اختر إجابة",
      soundQuestion: "أي حرف من الفِدِل يصدر هذا الصوت؟",
      letterQuestion: "ما هذا الحرف؟",
      familyQuestion: "إلى أي عائلة ينتمي هذا الحرف؟",
      completed: "اكتمل الاختبار!",
      completedText: "عمل رائع. راجع نتيجتك وتدرّب على الحروف التي أخطأت فيها.",
      tryAgain: "حاول مرة أخرى",
      backToLearn: "العودة إلى التعلّم",
    },

    progress: {
    eyebrow: "تقدمك",
    title: "واصل التعلم.",
    description:
      "تابع تقدمك في التدريب والاختبارات أثناء تعلم الفِدِل.",

    practiceScore: "تقدم الاختبار",
    quizScore: "أفضل نتيجة لك",
    bestStreak: "أفضل سلسلة",
    sessions: "الجلسات",

    points: "نقاط",
    fidelFamilies: "عائلات الفِدِل",
    familiesAvailable: "العائلات المتاحة للاستكشاف",

    practiceGoal: "هدف التدريب",
    keepGoing: "واصل التقدم",
    dailyTip: "تعلم القليل من الفِدِل كل يوم.",

    reset: "إعادة ضبط التقدم",
    resetText: "تمت إعادة ضبط تقدمك.",
    noProgress:
      "أكمل اختبارًا وستظهر نتيجتك هنا.",
    startLearning: "هل أنت مستعد للتعلم؟",
    keepLearning:
      "واصل التدريب وحاول تحسين نتيجتك.",
    local: "محفوظ على الجهاز",


    },

    footer: {
      tagline: "طريقة بسيطة لتعلّم الفِدِل الأمهرية من خلال الحروف والكلمات والكتابة والتدريب.",
      explore: "استكشف",
      learning: "التعلّم",
      learn: "تعلّم",
      practice: "تدرّب",
      trace: "اكتب",
      quiz: "اختبار",
      progress: "التقدم",
      language: "اللغة",
      madeForLearners: "صُنع للمتعلمين.",
      copyright: "EthubX FidelFun",
    },
  },

  ti: {
    nav: {
      learn: "ተማሃር",
      practice: "ተለማመድ",
      trace: "ጸሓፍ",
      quiz: "ፈተና",
      progress: "ዕቤት",
      language: "ቋንቋ",
      menu: "ምናሌ",
      close: "ምናሌ ዕጸው",
      open: "ምናሌ ክፈት",
    },

    common: {
      back: "ተመለስ",
      next: "ዝቕጽል",
      previous: "ዝሓለፈ",
      start: "ጀምር",
      continue: "ቀጽል",
      reset: "እንደገና ጀምር",
      clear: "ኣጽርይ",
      hear: "ስማዕ",
      tryAgain: "እንደገና ፈትን",
      done: "ተወዲኡ",
      close: "ዕጸው",
      home: "መበገሲ",
      learnMore: "ተወሳኺ ተማሃር",
    },

    home: {
      badge: "ምምሃር ክሕጉስ ይኽእል!",
      title: "ጽባቐ ናይ ኣማርኛ ፊደል ዳህስስ።",
      description: "ፊደላት ኣማርኛ ተማሃር፣ ድምጾም ስማዕ፣ ጽሕፈት ተለማመድ፣ እምነትካ ድማ ብሓደ ስድራ ፊደል ኣማዕብል።",
      startLearning: "ምምሃር ጀምር",
      tryWriting: "ጽሕፈት ፈትን",
      free: "ነጻ",
      noSignup: "ምምዝጋብ ኣየድልን",
      learnAtYourPace: "ብፍጥነትካ ተማሃር",
      families: "ስድራቤታት ፊደል",
      letters: "መሰረታዊ ቅርጽታት",
      formsEach: "ቅርጽታት ኣብ ነፍሲ ወከፍ ስድራ",
      thingsToLearn: "ንምምሃር ዘድልዩኻ ኩሎም",
      learnYourWay: "ብመንገድኻ ተማሃር",
      seeHearPlay: "ርአ። ስማዕ። ተለማመድ።",
      explore: "ዳህስስ",
      practice: "ተለማመድ",
      test: "ንርእስኻ ፈትን",
      trace: "ጸሓፍ",
      meetFriends: "ንመጀመርታ ናይ ፊደል መሓዙትካ ተላለዮም።",
      exploreAll: "ኩሎም ፊደል ዳህስስ",
      adventure: "ጉዕዞኻ ናይ ኣማርኛ ኣብዚ ይጅምር።",
      pickFirst: "ቀዳማይ ስድራ ምረጽ፣ ሸውዓተ ቅርጽታት ተማሃር፣ ዝተማሃርካዮ ድማ ተለማመድ።",
      takeQuiz: "ፈተና ውሰድ",
      learnFidel: "ፊደል ተማሃር",
    },

    learn: {
      eyebrow: "ፊደል መርሓ",
      title: "ፊደል ተማሃር። ሓደ ስድራ ብሓደ።",
      description: "ንነፍሲ ወከፍ ስድራ ፊደል ዳህስስ፣ ሸውዓተ ቅርጽታቱ ተማሃር፣ ኣደማምጻኡ ስማዕ እሞ ጽሕፍ ተለማመድ።",
      quickGuide: "ሓጺር መምርሒ",
      chooseFamily: "ስድራ ምረጽ",
      chooseFamilyText: "ካብ ዝኾነ ስድራ ፊደል ጀምር እሞ ኣብ ሸውዓተ ቅርጽታት ቀጽል።",
      listen: "ስማዕ",
      listenText: "ንነፍሲ ወከፍ ቅርጺ ቀሊል ኣደማምጻ ስማዕ።",
      practiceWriting: "ጽሕፈት ተለማመድ",
      practiceWritingText: "ምስ ተዳለኻ፣ ነቲ ፊደል ብጣትካ፣ mouse ወይ stylus ተኸታተሎ።",
      learningTip: "ምኽሪ ምምሃር",
      learningTipText: "ኩሉ ብሓንሳብ ክትዝክሮ ኣይትፈትን። ሓደ ስድራ ተማሃር፣ ድምጽታቱ ተዛረብ፣ ድሕሪኡ ነፍሲ ወከፍ ቅርጺ ጸሓፍ።",
      pattern: "ኣቀራርባ",
      patternText: "ነፍሲ ወከፍ ስድራ ፊደል ሸውዓተ ቅርጽታት ኣለዎ። ቅርጹ ይቕየር እምበር መሰረታዊ ድምጹ ይተሓሓዝ።",
      nextStep: "ንዝቕጽል ደረጃ ድሉው ዲኻ?",
      nextStepText: "ዝተማሃርካዮ ተለማመድ ወይ ብሓጺር ፈተና ንርእስኻ ፈትን።",
    },

    explorer: {
      chooseFamily: "ስድራ ምረጽ",
      previousFamily: "ዝሓለፈ ስድራ ፊደል",
      nextFamily: "ዝቕጽል ስድራ ፊደል",
      sevenForms: "ሸውዓተ ቅርጽታት",
      sound: "ድምጺ",
      listen: "ስማዕ",
      trace: "ጸሓፍ",
      practiceThis: "ነዚ ፊደል ተለማመድ",
      family: "ስድራ",
      form: "ቅርጺ",
      first: "ቀዳማይ",
      second: "ካልኣይ",
      third: "ሳልሳይ",
      fourth: "ራብዓይ",
      fifth: "ሓምሻይ",
      sixth: "ሻድሻይ",
      seventh: "ሻብዓይ",
    },

    practice: {
      eyebrow: "ልምምድ",
      title: "ርአ። ጸሓፍ። ተማሃር።",
      description: "ቃላት ብእንግሊዝኛ ኣጻጻፍ ብምጽሓፍ ተለማመድ።",
      instructions: "ነቲ ኣማርኛ ቃል ርአ እሞ ኣደማምጻኡ ብእንግሊዝኛ ጸሓፍ።",
      directionAmharic: "ኣማርኛ → እንግሊዝኛ",
      directionEnglish: "እንግሊዝኛ → ኣማርኛ",
      switchDirection: "ኣንፈት ቀይር",
      checkAnswer: "መልሲ መርምር",
      correct: "ትኽክል!",
      incorrect: "ሙሉእ ትኽክል ኣይኮነን።",
      correctAnswer: "ትኽክለኛ መልሲ",
      score: "ውጽኢት",
      question: "ሕቶ",
      of: "ካብ",
      keepGoing: "ቀጽል!",
      greatWork: "ጽቡቕ ስራሕ!",
      practiceAgain: "እንደገና ተለማመድ",
      finished: "ልምምድ ተወዲኡ",
      finishedText: "ነዚ ልምምድ ወዲእካዮ። ቃላት ንኽጸንዑ ምልምማድ ቀጽል።",
    },

    trace: {
      eyebrow: "ጸሓፍን ተለማመድን",
      title: "ጸሓፍ",
      description: "ብጣትካ፣ ብመዳፊትካ ወይ ብstylus መምርሒ ተኸተል።",
      letter: "ፊደል",
      hideGuide: "መምርሒ ሓብእ",
      showGuide: "መምርሒ ኣርእይ",
      drawing: "ይጽሓፍ ኣሎ",
      practiceAgain: "ነዚ ፊደል እንደገና ተለማመድ",
      previousLetter: "ዝሓለፈ ፊደል",
      nextLetter: "ዝቕጽል ፊደል",
      canvasLabel: "ናይቲ ዝተመርጸ ፊደል መጻሕፍቲ ቦታ",
    },

    quiz: {
      eyebrow: "ፈተና",
      title: "ዝተማሃርካዮ ፈትን።",
      description: "ፍልጠትካ ብፊደል ፈትን።",
      start: "ፈተና ጀምር",
      next: "ዝቕጽል ሕቶ",
      finish: "ፈተና ዛዝም",
      score: "ውጽኢት",
      streak: "ተኸታታሊ ትኽክል",
      bestStreak: "ዝበለጸ ተኸታታሊ",
      lives: "ዕድላት",
      question: "ሕቶ",
      of: "ካብ",
      correct: "ትኽክል!",
      incorrect: "ትኽክል ኣይኮነን።",
      answer: "መልስኻ",
      chooseAnswer: "መልሲ ምረጽ",
      soundQuestion: "ኣየናይ ፊደል እዩ ነዚ ድምጺ ዝህብ?",
      letterQuestion: "እዚ እንታይ ፊደል እዩ?",
      familyQuestion: "እዚ ፊደል ናይ ኣየናይ ስድራ እዩ?",
      completed: "ፈተና ተወዲኡ!",
      completedText: "ጽቡቕ ስራሕ። ውጽኢትካ ርአ እሞ ነቶም ዝተጋገኻሎም ፊደላት እንደገና ተለማመድ።",
      tryAgain: "እንደገና ፈትን",
      backToLearn: "ናብ ምምሃር ተመለስ",
    },
    progress: {

    eyebrow: "ዕቤትካ",
    title: "ምምሃርካ ቀጽል።",
    description:
      "ፊደል እናተማሃርካ ዕቤት ልምምድካን ፈተናኻን ተኸታተል።",

    practiceScore: "ዕቤት ፈተና",
    quizScore: "ዝበለጸ ውጽኢትካ",
    bestStreak: "ዝበለጸ ተኸታታሊ ውጽኢት",
    sessions: "ክፍለ ግዜታት",

    points: "ነጥብታት",
    fidelFamilies: "ስድራቤታት ፊደል",
    familiesAvailable:
      "ንምምርማር ዝርከቡ ስድራቤታት",

    practiceGoal: "ዕላማ ልምምድ",
    keepGoing: "ቀጽል",
    dailyTip:
      "ኩሉ መዓልቲ ቁሩብ ፊደል ተማሃር።",

    reset: "ዕቤት ዳግማይ ኣጀምር",
    resetText:
      "ዕቤትካ ዳግማይ ተጀሚሩ።",
    noProgress:
      "ፈተና ወዲእካ ውጽኢትካ ኣብዚ ክርአ እዩ።",
    startLearning:
      "ንምምሃር ድሉው ዲኻ?",
    keepLearning:
      "ልምምድካ ቀጽል እሞ ውጽኢትካ ንምምሕያሽ ፈትን።",
    local: "ኣብ መሳርሒ ተዓቂቡ",
  },

  
    footer: {
      tagline: "ፊደል፣ ቃላት፣ ጽሕፈትን ልምምድን ብምጥቃም ኣማርኛ ፊደል ንምምሃር ቀሊል መንገዲ።",
      explore: "ዳህስስ",
      learning: "ምምሃር",
      learn: "ተማሃር",
      practice: "ተለማመድ",
      trace: "ጸሓፍ",
      quiz: "ፈተና",
      progress: "ዕቤት",
      language: "ቋንቋ",
      madeForLearners: "ንተማሃሮ ዝተሰርሐ።",
      copyright: "EthubX FidelFun",
    },
    
  },
} as const;

type TranslationTree = (typeof translations)[Language];

type I18nContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationTree;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem(
      "ethubx-language"
    ) as Language | null;

    if (
      saved &&
      languages.some((item) => item.code === saved)
    ) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    const selected = languages.find(
      (item) => item.code === language
    );

    document.documentElement.lang = language;
    document.documentElement.dir =
      selected?.dir ?? "ltr";

    localStorage.setItem(
      "ethubx-language",
      language
    );
  }, [language]);

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage: setLanguageState,
        t: translations[language],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error(
      "useI18n must be used inside I18nProvider"
    );
  }

  return context;
}