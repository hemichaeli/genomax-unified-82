import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface SimulationInputs {
  consistency: number;
  sleep: number;
  stress: number;
  protein: number;
  moduleAdherence: number;
}

interface BiomarkerSimulatorProps {
  gender?: "maxima" | "maximo";
}

export const BiomarkerSimulator = ({ gender = "maximo" }: BiomarkerSimulatorProps) => {
  const [inputs, setInputs] = useState<SimulationInputs>({
    consistency: 80,
    sleep: 75,
    stress: 60,
    protein: 70,
    moduleAdherence: 85
  });

  // Simplified predictive model
  const calculateProjectedBiomarkers = (inputs: SimulationInputs) => {
    const weeks = 12;
    const data = [];

    for (let week = 0; week <= weeks; week++) {
      const baseFerritin = 50;
      const baseVitD = 25;
      const baseOmega3 = 4;
      const baseHsCRP = 3;

      // Simplified delta calculations based on inputs
      const ferritinDelta = (inputs.consistency / 100) * (inputs.moduleAdherence / 100) * 1.5 * week;
      const vitDDelta = (inputs.consistency / 100) * (inputs.sleep / 100) * 2 * week;
      const omega3Delta = (inputs.moduleAdherence / 100) * 0.3 * week;
      const hsCRPDelta = ((100 - inputs.stress) / 100) * (inputs.sleep / 100) * -0.2 * week;

      data.push({
        week,
        ferritin: Math.min(150, baseFerritin + ferritinDelta),
        vitaminD: Math.min(60, baseVitD + vitDDelta),
        omega3: Math.min(8, baseOmega3 + omega3Delta),
        hsCRP: Math.max(0.5, baseHsCRP + hsCRPDelta)
      });
    }

    return data;
  };

  const projectedData = calculateProjectedBiomarkers(inputs);
  const projectedOSScore = Math.min(100, 65 + (inputs.consistency + inputs.moduleAdherence) / 4);
  const upgradeWeek = projectedOSScore >= 85 ? 6 : projectedOSScore >= 75 ? 8 : 10;

  return (
    <Card className="p-8 bg-card/50 backdrop-blur space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-2">Live Biomarker Simulation</h3>
        <p className="text-sm text-muted-foreground">
          Predict your progress based on consistency and behavior inputs
        </p>
      </div>

      {/* Input Controls */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Consistency</label>
            <span className="text-sm text-muted-foreground">{inputs.consistency}%</span>
          </div>
          <Slider
            value={[inputs.consistency]}
            onValueChange={(v) => setInputs({ ...inputs, consistency: v[0] })}
            max={100}
            step={5}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Sleep Quality</label>
            <span className="text-sm text-muted-foreground">{inputs.sleep}%</span>
          </div>
          <Slider
            value={[inputs.sleep]}
            onValueChange={(v) => setInputs({ ...inputs, sleep: v[0] })}
            max={100}
            step={5}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Stress Level</label>
            <span className="text-sm text-muted-foreground">{inputs.stress}%</span>
          </div>
          <Slider
            value={[inputs.stress]}
            onValueChange={(v) => setInputs({ ...inputs, stress: v[0] })}
            max={100}
            step={5}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Module Adherence</label>
            <span className="text-sm text-muted-foreground">{inputs.moduleAdherence}%</span>
          </div>
          <Slider
            value={[inputs.moduleAdherence]}
            onValueChange={(v) => setInputs({ ...inputs, moduleAdherence: v[0] })}
            max={100}
            step={5}
            className="w-full"
          />
        </div>
      </div>

      {/* Projection Summary */}
      <div className="grid md:grid-cols-2 gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20">
        <div>
          <div className="text-sm text-muted-foreground">Projected OS Stability</div>
          <div className="text-3xl font-bold mt-1">{projectedOSScore.toFixed(0)}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Projected Upgrade Date</div>
          <div className="text-xl font-semibold mt-1">Week {upgradeWeek}</div>
          <div className="text-xs text-muted-foreground">OS v2.0</div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={projectedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="week" 
              stroke="hsl(var(--muted-foreground))"
              label={{ value: 'Weeks', position: 'insideBottom', offset: -5 }}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="ferritin" 
              stroke={gender === "maxima" ? "hsl(330 100% 68%)" : "hsl(186 100% 64%)"} 
              strokeWidth={2}
              dot={false}
              name="Ferritin"
            />
            <Line 
              type="monotone" 
              dataKey="vitaminD" 
              stroke="hsl(45 100% 60%)" 
              strokeWidth={2}
              dot={false}
              name="Vitamin D"
            />
            <Line 
              type="monotone" 
              dataKey="omega3" 
              stroke="hsl(120 60% 50%)" 
              strokeWidth={2}
              dot={false}
              name="Omega-3"
            />
            <Line 
              type="monotone" 
              dataKey="hsCRP" 
              stroke="hsl(0 100% 60%)" 
              strokeWidth={2}
              dot={false}
              name="hsCRP"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Button 
        className="w-full bg-gradient-to-r from-maximo to-maximo-light hover:opacity-90"
      >
        Save Simulation
      </Button>
    </Card>
  );
};
