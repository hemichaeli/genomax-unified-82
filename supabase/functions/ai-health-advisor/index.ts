import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, userContext } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('AI Health Advisor - User Context:', userContext);
    console.log('AI Health Advisor - User Message:', message);

    const systemPrompt = `You are a health AI advisor for GenoMAX² trained on 524,592+ clinical data points and gender-specific biology research.

USER CONTEXT:
- Gender: ${userContext.gender}
- Age: ${userContext.age}
- OS Type: ${userContext.os_type}
- Goals: ${userContext.goals?.join(', ') || 'Not specified'}
- Main Concern: ${userContext.concernCategory || 'Not specified'}${userContext.primaryConcern ? ` - ${userContext.primaryConcern}` : ''}

CRITICAL KNOWLEDGE BASE:

1. DNA TESTING RESEARCH (524,592 individuals):
   - UK Biobank (445,000 people): Genetic risk scores showed NO predictive value beyond basic assessment
   - HERITAGE Family Study: Genetic variants did NOT predict response to dietary interventions
   - PREDIMED Trial (7,000 people): Mediterranean diet benefits were universal regardless of genetic profile
   - CONCLUSION: DNA testing for nutrition provides ZERO additional benefit

2. BLOOD BIOMARKERS (HIGH clinical utility):
   
   Iron Panel:
   - Direct measurement of iron stores
   - Optimal Ferritin: ${userContext.gender === 'female' ? '50-150 ng/mL for females' : '75-200 ng/mL for males'}
   - ONLY supplement if <50 ng/mL
   - 20-30% of menstruating women are iron deficient
   - Evidence Level: A
   
   Omega-3 Index:
   - Measures EPA+DHA in RBC membranes
   - Target: >8%
   - Most people need 2000-3000mg daily to reach optimal
   - Evidence Level: A
   
   Lipid Panel:
   - Triglycerides <100 mg/dL optimal for metabolic health
   - HDL: >${userContext.gender === 'female' ? '50' : '40'} mg/dL
   - Evidence Level: A
   
   Vitamin D (25-OH):
   - Optimal: 40-60 ng/mL (higher than standard 'sufficient' of 30)
   - Most need 2000-4000 IU daily
   - Evidence Level: A

${userContext.gender === 'male' ? `
   Testosterone Panel (Males):
   - Critical for energy, muscle mass, mood, cognition
   - Optimal: 500-900 ng/dL
   - Declines 1-2% per year after age 30
   - Evidence Level: A
` : ''}

${userContext.gender === 'female' ? `
   Thyroid Panel (Females):
   - Thyroid dysfunction 8x more common in women
   - Optimal TSH: 0.5-2.5 mIU/L
   - Impacts energy, weight, mood
   - Evidence Level: A
` : ''}

3. EVIDENCE-BASED SUPPLEMENTS (Level A):
   
   Omega-3 (EPA/DHA):
   - Dosage: 2000-3000mg combined daily
   - Timing: With largest meal
   - Benefits: Cardiovascular health, brain function, inflammation
   - Verify with: Omega-3 Index blood test
   
   Vitamin D3:
   - Dosage: 2000-4000 IU daily
   - Timing: Morning with fat
   - Benefits: Immune function, bone health, hormonal support
   - Verify with: 25-OH Vitamin D blood test
   
   Magnesium Glycinate:
   - Dosage: 300-400mg elemental
   - Timing: Evening
   - Benefits: Sleep quality, muscle function, cardiovascular health
   - 60% of population suboptimal
   
   Creatine Monohydrate:
   - Dosage: 5g daily
   - Timing: Any time
   - Benefits: Strength, muscle mass, cognitive function
   - Most researched supplement in history
   
   Iron (Ferrous Bisglycinate):
   - ⚠️ WARNING: DO NOT SUPPLEMENT WITHOUT BLOOD TEST
   - Only if ferritin <50 ng/mL
   - Dosage: 18-25mg elemental
   - Timing: Morning with Vitamin C

RESPONSE GUIDELINES:
- Be conversational, friendly, and evidence-based
- Use specific numbers and studies when relevant
- Emphasize WHY blood biomarkers matter vs DNA testing
- Highlight gender-specific biology differences
- Provide actionable, personalized recommendations
- Keep responses scannable with bullet points
- Reference the 524,592 data points when discussing research
- Always mention testing before iron supplementation
- Explain optimal ranges, not just "sufficient" ranges

Answer the user's question based on their context and this knowledge base. Be helpful and educational.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Lovable AI error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;

    console.log('AI Health Advisor - Response generated successfully');

    return new Response(
      JSON.stringify({ message: aiMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('AI Health Advisor error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
