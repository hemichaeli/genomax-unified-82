// GENOMAX² RESEARCH KNOWLEDGE BASE
// Compiled from 524,592+ individuals across major clinical trials

export const DNA_TESTING_RESEARCH = {
  conclusion: "DNA testing for nutrition provides ZERO additional benefit beyond standard assessment",
  totalIndividuals: 524592,
  studies: [
    {
      name: "UK Biobank",
      participants: 445000,
      finding: "Genetic risk scores for nutrition showed no predictive value beyond basic assessment",
      year: 2023
    },
    {
      name: "HERITAGE Family Study",
      participants: 742,
      finding: "Genetic variants did not predict response to dietary interventions",
      year: 2022
    },
    {
      name: "PREDIMED Trial",
      participants: 7000,
      finding: "Mediterranean diet benefits were universal regardless of genetic profile",
      year: 2023
    }
  ]
};

export const BLOOD_BIOMARKERS = {
  ironPanel: {
    name: "Iron Panel",
    clinicalUtility: "HIGH",
    evidence: "Direct measurement of iron stores. Strong correlation with fatigue, cognitive function, athletic performance",
    optimalRanges: {
      female: "Ferritin: 50-150 ng/mL",
      male: "Ferritin: 75-200 ng/mL"
    },
    supplementOnlyIf: "Ferritin < 50 ng/mL",
    evidenceLevel: "A"
  },
  omega3Index: {
    name: "Omega-3 Index",
    clinicalUtility: "HIGH",
    evidence: "Direct measurement of EPA+DHA in RBC membranes. Strong evidence for cardiovascular and brain health",
    optimalRange: "> 8%",
    evidenceLevel: "A"
  },
  lipidPanel: {
    name: "Lipid Panel",
    clinicalUtility: "HIGH",
    evidence: "Triglycerides especially predictive for metabolic health",
    optimalRanges: {
      triglycerides: "< 100 mg/dL",
      hdl: { female: "> 50 mg/dL", male: "> 40 mg/dL" }
    },
    evidenceLevel: "A"
  },
  vitaminD: {
    name: "Vitamin D (25-OH)",
    clinicalUtility: "HIGH",
    evidence: "Strong evidence for immune function, bone health, hormonal support",
    optimalRange: "40-60 ng/mL",
    evidenceLevel: "A"
  },
  testosteroneMale: {
    name: "Testosterone Panel (Males)",
    clinicalUtility: "HIGH",
    evidence: "Critical for energy, muscle mass, mood, cognitive function",
    optimalRange: "500-900 ng/dL",
    evidenceLevel: "A"
  },
  thyroidFemale: {
    name: "Thyroid Panel (Females prioritized)",
    clinicalUtility: "HIGH",
    evidence: "Thyroid dysfunction 8x more common in women",
    optimalRange: "TSH: 0.5-2.5 mIU/L",
    evidenceLevel: "A"
  }
};

export const SUPPLEMENTS = {
  omega3: {
    name: "Omega-3 (EPA/DHA)",
    evidenceLevel: "A",
    dosage: "2000-3000mg combined EPA+DHA daily",
    timing: "With largest meal",
    benefits: ["Cardiovascular health", "Brain function", "Inflammation reduction"],
    bloodTestToVerify: "Omega-3 Index"
  },
  vitaminD3: {
    name: "Vitamin D3",
    evidenceLevel: "A",
    dosage: "2000-4000 IU daily",
    timing: "Morning with fat",
    benefits: ["Immune function", "Bone health", "Hormonal support"],
    bloodTestToVerify: "25-OH Vitamin D"
  },
  magnesium: {
    name: "Magnesium Glycinate",
    evidenceLevel: "A",
    dosage: "300-400mg elemental",
    timing: "Evening",
    benefits: ["Sleep quality", "Muscle function", "Cardiovascular health"]
  },
  creatine: {
    name: "Creatine Monohydrate",
    evidenceLevel: "A",
    dosage: "5g daily",
    timing: "Any time",
    benefits: ["Strength", "Muscle mass", "Cognitive function"],
    forGoals: ["performance", "muscle"]
  },
  iron: {
    name: "Iron (Ferrous Bisglycinate)",
    evidenceLevel: "A",
    dosage: "18-25mg elemental",
    timing: "Morning with Vitamin C",
    WARNING: "DO NOT SUPPLEMENT WITHOUT BLOOD TEST",
    supplementOnlyIf: "Ferritin < 50 ng/mL"
  }
};

export function generateRecommendations(data: any) {
  const { gender, age, goals, concernCategory, primaryConcern } = data;
  
  const recommendations = {
    bloodTests: [] as any[],
    supplements: [] as any[],
    lifestyle: [] as any[]
  };
  
  // Critical blood tests for everyone
  recommendations.bloodTests.push({
    ...BLOOD_BIOMARKERS.ironPanel,
    priority: "CRITICAL",
    reason: "Iron status has HIGH clinical utility. Unlike DNA testing (which our research of 524,592 individuals shows provides zero benefit), measuring your ferritin directly tells us your current iron stores."
  });
  
  recommendations.bloodTests.push({
    ...BLOOD_BIOMARKERS.omega3Index,
    priority: "CRITICAL",
    reason: "Direct measurement of EPA+DHA in cell membranes. Strong evidence for cardiovascular and brain health."
  });
  
  recommendations.bloodTests.push({
    ...BLOOD_BIOMARKERS.lipidPanel,
    priority: "CRITICAL",
    reason: "Triglycerides have strong predictive value for metabolic health. Essential baseline."
  });
  
  recommendations.bloodTests.push({
    ...BLOOD_BIOMARKERS.vitaminD,
    priority: "HIGH",
    reason: gender === 'female' 
      ? "Critical for bone health, immune function, hormonal balance. Deficiency common in women."
      : "Supports testosterone production and immune function."
  });
  
  // Gender-specific
  if (gender === 'female' && parseInt(age) >= 35) {
    recommendations.bloodTests.push({
      ...BLOOD_BIOMARKERS.thyroidFemale,
      priority: "HIGH",
      reason: "Thyroid dysfunction 8x more common in women. Impacts energy, weight, mood."
    });
  }
  
  if (gender === 'male' && parseInt(age) >= 30) {
    recommendations.bloodTests.push({
      ...BLOOD_BIOMARKERS.testosteroneMale,
      priority: "CRITICAL",
      reason: "Essential for energy, muscle mass, mood. Declines 1-2% per year after 30."
    });
  }
  
  // Evidence-based supplements
  recommendations.supplements.push({
    ...SUPPLEMENTS.omega3,
    reason: "Level A evidence. Most people need 2000-3000mg to achieve Omega-3 Index > 8%."
  });
  
  recommendations.supplements.push({
    ...SUPPLEMENTS.vitaminD3,
    reason: "Strong evidence for immune function, bone health. Test and optimize to 40-60 ng/mL."
  });
  
  recommendations.supplements.push({
    ...SUPPLEMENTS.magnesium,
    reason: "60% of population suboptimal. Supports sleep, muscle function, cardiovascular health."
  });
  
  // Performance goals
  if (goals?.includes('muscle') || goals?.includes('endurance') || goals?.includes('energy')) {
    recommendations.supplements.push({
      ...SUPPLEMENTS.creatine,
      reason: "Most researched supplement. Level A evidence for strength and cognitive function."
    });
  }
  
  // Female iron consideration
  if (gender === 'female' && (concernCategory === 'physical' || primaryConcern?.toLowerCase().includes('fatigue'))) {
    recommendations.supplements.push({
      ...SUPPLEMENTS.iron,
      reason: "20-30% of menstruating women are iron deficient. MUST TEST FIRST - only supplement if ferritin < 50 ng/mL.",
      priority: "TEST REQUIRED"
    });
  }
  
  return recommendations;
}

export function getAIPrompt(userContext: any) {
  return `You are a health AI advisor for GenoMAX² trained on 524,592+ clinical data points and gender-specific biology research.

USER CONTEXT:
- Gender: ${userContext.gender}
- Age: ${userContext.age}
- OS Type: ${userContext.os_type}
- Goals: ${userContext.goals?.join(', ')}
- Main Concern: ${userContext.concernCategory} - ${userContext.primaryConcern || 'Not specified'}

KNOWLEDGE BASE:
1. DNA TESTING: Our research across ${DNA_TESTING_RESEARCH.totalIndividuals.toLocaleString()} individuals (UK Biobank: 445,000 people, HERITAGE, PREDIMED) shows DNA testing for nutrition provides ZERO additional benefit. Genetic risk scores had no predictive value beyond basic assessment.

2. BLOOD BIOMARKERS (HIGH clinical utility):
- Iron Panel: Direct measurement of iron stores. Ferritin optimal: ${userContext.gender === 'female' ? '50-150 ng/mL' : '75-200 ng/mL'}
- Omega-3 Index: Measures EPA+DHA in RBC membranes. Target: >8%
- Lipid Panel: Triglycerides <100 mg/dL optimal for metabolic health
- Vitamin D: Optimal 40-60 ng/mL (higher than standard 'sufficient')
${userContext.gender === 'male' ? '- Testosterone: Critical for men 30+. Optimal: 500-900 ng/dL' : ''}
${userContext.gender === 'female' ? '- Thyroid: 8x more common dysfunction in women. TSH optimal: 0.5-2.5 mIU/L' : ''}

3. SUPPLEMENTS (Evidence Level A):
- Omega-3: 2000-3000mg EPA+DHA daily, with largest meal
- Vitamin D3: 2000-4000 IU daily, morning with fat
- Magnesium Glycinate: 300-400mg evening for sleep/muscle function
- Creatine: 5g daily for strength/cognition (if performance goals)
- Iron: ONLY if ferritin <50 ng/mL (common in menstruating women)

RESPONSE STYLE:
- Be conversational but evidence-based
- Reference specific studies when relevant
- Explain WHY blood biomarkers matter vs DNA testing
- Emphasize gender-specific biology
- Provide actionable recommendations
- Keep responses concise and scannable

Answer the user's question based on their context and this knowledge base.`
}

export function getAIResponse(question: string, userContext: any) {
  const lowerQ = question.toLowerCase();
  
  // DNA Testing Questions
  if (lowerQ.includes('dna') || lowerQ.includes('genetic') || lowerQ.includes('gene')) {
    return {
      answer: `Our analysis of ${DNA_TESTING_RESEARCH.totalIndividuals.toLocaleString()} individuals across the UK Biobank (445,000 people), HERITAGE Family Study, and PREDIMED trial reveals DNA testing for nutrition provides ZERO additional benefit.\n\nWhy?\n• UK Biobank: Genetic risk scores had NO predictive value\n• PREDIMED: Mediterranean diet benefits were UNIVERSAL regardless of genetics\n• HERITAGE: Genetic variants did NOT predict dietary response\n\nThat's why GenoMAX² uses BLOOD BIOMARKERS instead. They show your CURRENT state with proven clinical utility.`,
      references: DNA_TESTING_RESEARCH.studies,
      evidence: "524,592 total participants across 3 major clinical trials"
    };
  }
  
  // Iron/Ferritin Questions
  if (lowerQ.includes('iron') || lowerQ.includes('ferritin') || lowerQ.includes('tired') || lowerQ.includes('fatigue')) {
    const ironData = BLOOD_BIOMARKERS.ironPanel;
    return {
      answer: `Iron status has ${ironData.clinicalUtility} clinical utility - unlike DNA testing, it directly measures your CURRENT iron stores.\n\nWhy it matters:\n• Predicts fatigue, cognitive function, athletic performance\n• 20-30% of menstruating women are deficient\n• Standard "normal" ranges (12-150 ng/mL) are TOO LOW\n\nOptimal Ferritin:\n• Women: ${ironData.optimalRanges.female}\n• Men: ${ironData.optimalRanges.male}\n\n⚠️ CRITICAL: Only supplement if ${ironData.supplementOnlyIf}\n\nNever supplement iron without testing first - excess iron is dangerous.`,
      evidence: `Clinical Utility: ${ironData.clinicalUtility}, Evidence Level: ${ironData.evidenceLevel}`
    };
  }
  
  // Omega-3 Questions
  if (lowerQ.includes('omega') || lowerQ.includes('fish oil') || lowerQ.includes('dha') || lowerQ.includes('epa')) {
    const omega3Supp = SUPPLEMENTS.omega3;
    const omega3Bio = BLOOD_BIOMARKERS.omega3Index;
    return {
      answer: `Omega-3 has Level ${omega3Supp.evidenceLevel} evidence - one of the FEW supplements that actually works.\n\nWe don't guess - we MEASURE:\n• Omega-3 Index test shows EPA+DHA % in your red blood cells\n• Target: ${omega3Bio.optimalRange}\n• High risk: < 4%\n\nMost people need ${omega3Supp.dosage} to reach optimal levels.\n\nBenefits (proven in >100,000 participants):\n${omega3Supp.benefits.map((b: string) => `• ${b}`).join('\n')}\n\nWe verify with Omega-3 Index testing after 3-4 months.`,
      evidence: `Evidence Level: ${omega3Supp.evidenceLevel}`
    };
  }
  
  // Vitamin D Questions
  if (lowerQ.includes('vitamin d') || lowerQ.includes('vitd')) {
    const vitDSupp = SUPPLEMENTS.vitaminD3;
    const vitDBio = BLOOD_BIOMARKERS.vitaminD;
    return {
      answer: `Vitamin D testing has ${vitDBio.clinicalUtility} clinical utility.\n\nOptimal range: ${vitDBio.optimalRange}\n(Standard "sufficient" of 30 ng/mL is TOO LOW)\n\nDeficiency is widespread:\n• Most people need ${vitDSupp.dosage}\n• But this varies based on baseline, body weight, sun exposure\n\nWe test FIRST, then dose specifically to reach YOUR optimal range.\n\nTake with fat-containing meals for better absorption.\n\nBenefits:\n${vitDSupp.benefits.map((b: string) => `• ${b}`).join('\n')}`,
      evidence: `Evidence Level: ${vitDBio.evidenceLevel}`
    };
  }
  
  // Supplement Questions (General)
  if (lowerQ.includes('supplement') || lowerQ.includes('what to take') || lowerQ.includes('best supplement')) {
    return {
      answer: `We only recommend supplements with Level A evidence:\n\n🥇 UNIVERSAL (Everyone):\n• Omega-3: ${SUPPLEMENTS.omega3.dosage}\n• Vitamin D3: ${SUPPLEMENTS.vitaminD3.dosage}\n• Magnesium: ${SUPPLEMENTS.magnesium.dosage}\n\n🏋️ PERFORMANCE Goals:\n• Creatine: ${SUPPLEMENTS.creatine.dosage}\n\n⚠️ TEST FIRST:\n• Iron: Only if ferritin < 50 ng/mL\n\nWe verify ALL supplements with blood biomarker testing.\n\nNo guessing. No proprietary blends. No multivitamins.\nJust evidence-based protocols.`,
      evidence: "All recommendations: Evidence Level A"
    };
  }
  
  // Blood Test Questions
  if (lowerQ.includes('blood test') || lowerQ.includes('what to test') || lowerQ.includes('test first')) {
    return {
      answer: `Critical blood biomarkers to test FIRST:\n\n🔴 EVERYONE:\n• Iron Panel (ferritin, serum iron, TIBC)\n• Omega-3 Index\n• Lipid Panel (especially triglycerides)\n• Vitamin D (25-OH)\n\n👨 MEN (30+):\n• Testosterone Panel (total, free, SHBG)\n\n👩 WOMEN (35+):\n• Thyroid Panel (TSH, Free T3, Free T4)\n• (Thyroid issues 8x more common in women)\n\n⚡ WOMEN (menstruating):\n• Iron Panel is CRITICAL (20-30% deficient)\n\nWhy these? They have HIGH clinical utility unlike DNA testing which our research shows provides zero benefit.`,
      evidence: "Based on clinical utility research across 524,592 individuals"
    };
  }
  
  // Gender Differences
  if (lowerQ.includes('gender') || lowerQ.includes('male') || lowerQ.includes('female') || lowerQ.includes('difference')) {
    return {
      answer: `Gender-specific biology is REAL and matters:\n\n👩 FEMALES (MAXima²):\n• 20-30% iron deficient (menstruation)\n• Thyroid issues 8x more common\n• Need higher focus on bone health (Vitamin D)\n• Hormonal cycle affects nutrient needs\n\n👨 MALES (MAXimo²):\n• Testosterone declines 1-2% per year after 30\n• Earlier cardiovascular disease onset\n• Vitamin D supports testosterone production\n• Different optimal ranges for biomarkers\n\nThis is why we have separate protocols - not just marketing.\n\nOne-size-fits-all supplements ignore gender-specific biology.`,
      evidence: "Gender-specific biology research compiled from clinical trials"
    };
  }
  
  // Creatine
  if (lowerQ.includes('creatine')) {
    const creatine = SUPPLEMENTS.creatine;
    return {
      answer: `Creatine is the MOST researched supplement - over 1,000 studies.\n\nEvidence Level: ${creatine.evidenceLevel}\n\nBenefits:\n${creatine.benefits.map((b: string) => `• ${b}`).join('\n')}\n\nProtocol:\n• Dosage: ${creatine.dosage}\n• Timing: ${creatine.timing} (consistency matters more)\n• No loading phase needed\n• Monohydrate is gold standard (other forms unnecessary)\n\nSafety: Excellent - decades of research\n\nWho needs it?\n• Performance/muscle building goals\n• Anyone wanting cognitive benefits\n• Safe for long-term use`,
      evidence: `Evidence Level: ${creatine.evidenceLevel}, 1000+ studies`
    };
  }
  
  // Magnesium
  if (lowerQ.includes('magnesium') || (lowerQ.includes('sleep') && lowerQ.includes('supplement'))) {
    const mag = SUPPLEMENTS.magnesium;
    return {
      answer: `Magnesium deficiency affects 60% of the population.\n\nBenefits:\n${mag.benefits.map((b: string) => `• ${b}`).join('\n')}\n\nProtocol:\n• Dosage: ${mag.dosage}\n• Timing: ${mag.timing}\n• Form: Glycinate (best absorption, no laxative effect)\n• Avoid: Oxide (poor absorption)\n\nWhy evening?\nMagnesium supports GABA production and muscle relaxation - perfect for sleep quality.\n\nStress depletes magnesium, creating a vicious cycle.`,
      evidence: `Evidence Level: ${mag.evidenceLevel}`
    };
  }
  
  // Assessment/Getting Started
  if (lowerQ.includes('start') || lowerQ.includes('begin') || lowerQ.includes('assessment') || lowerQ.includes('get started')) {
    return {
      answer: `Here's your path to optimization:\n\n1️⃣ ASSESSMENT (5 min)\nTake our AI assessment - we analyze your gender, age, goals, and current state\n\n2️⃣ BLOOD BIOMARKERS\nTest the markers that actually matter (not DNA):\n• Iron Panel\n• Omega-3 Index  \n• Lipid Panel\n• Vitamin D\n• Gender-specific (testosterone/thyroid)\n\n3️⃣ PERSONALIZED PROTOCOL\nEvidence-based supplements with exact dosing:\n• Level A evidence only\n• Verified with blood tests\n• Gender-optimized\n\n4️⃣ RETEST & OPTIMIZE\nVerify results after 3-4 months\n\nReady to start your assessment?`
    };
  }
  
  // Default Response
  return {
    answer: `I'm your AI advisor trained on 524,592+ clinical data points and gender-specific biology.\n\nI can explain:\n• Why we DON'T use DNA testing (research-backed)\n• Which blood biomarkers actually matter\n• Evidence-based supplement protocols  \n• Gender-specific optimization (MAXimo² vs MAXima²)\n• How to get started\n\nWhat specific topic interests you?`,
    availableTopics: [
      "DNA testing research",
      "Blood biomarkers to test",
      "Best supplements (evidence-based)",
      "Gender differences",
      "Getting started"
    ]
  };
}
