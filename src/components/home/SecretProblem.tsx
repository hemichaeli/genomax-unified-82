export const SecretProblem = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(354 100% 62% / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          The hidden reason your supplements don't work
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Nobody optimizes biology. They collect pills. Protocols drift, needs change, and supplements pile up. 
          Geno<span className="text-accent">MAX²</span> fixes the root cause — misalignment.
        </p>
      </div>
    </section>
  );
};
