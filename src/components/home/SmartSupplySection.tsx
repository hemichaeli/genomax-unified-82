import { SmartOSSupplyTimeline } from "./SmartOSSupplyTimeline";

export const SmartSupplySection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(186 100% 64% / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Smart OS Supply
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No more supplement graveyards. Your protocol updates monthly as your biology changes.
          </p>
        </div>

        <SmartOSSupplyTimeline />
      </div>
    </section>
  );
};
