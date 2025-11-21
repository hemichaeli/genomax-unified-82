export const GenderMattersSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Gender Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Generic protocols ignore this. We don't.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Male Silhouette */}
          <div
            className="relative overflow-hidden rounded-3xl p-10 space-y-6 transition-all duration-[280ms] hover:translate-y-[-4px]"
            style={{
              background: "linear-gradient(135deg, hsl(186 100% 64% / 0.08) 0%, hsl(213 100% 55% / 0.05) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsl(186 100% 64% / 0.2)",
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, hsl(186 100% 64% / 0.2) 0%, hsl(213 100% 55% / 0.15) 100%)",
                  border: "2px solid hsl(186 100% 64% / 0.4)",
                }}
              >
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z" stroke="hsl(186 100% 64%)" strokeWidth="2"/>
                  <path d="M2 20C2 16.6863 4.68629 14 8 14H12C15.3137 14 18 16.6863 18 20" stroke="hsl(186 100% 64%)" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-maximo-light to-primary bg-clip-text text-transparent">
              <span className="text-accent">MAX</span>imo²
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-maximo-light mt-1">•</span>
                <span>Testosterone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maximo-light mt-1">•</span>
                <span>Recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maximo-light mt-1">•</span>
                <span>Cardiovascular Stress</span>
              </li>
            </ul>
          </div>

          {/* Female Silhouette */}
          <div
            className="relative overflow-hidden rounded-3xl p-10 space-y-6 transition-all duration-[280ms] hover:translate-y-[-4px]"
            style={{
              background: "linear-gradient(135deg, hsl(330 100% 68% / 0.08) 0%, hsl(280 85% 45% / 0.05) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsl(330 100% 68% / 0.2)",
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, hsl(330 100% 68% / 0.2) 0%, hsl(280 85% 45% / 0.15) 100%)",
                  border: "2px solid hsl(330 100% 68% / 0.4)",
                }}
              >
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z" stroke="hsl(330 100% 68%)" strokeWidth="2"/>
                  <path d="M2 20C2 16.6863 4.68629 14 8 14H12C15.3137 14 18 16.6863 18 20" stroke="hsl(330 100% 68%)" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-maxima-light to-maxima bg-clip-text text-transparent">
              <span className="text-accent">MAX</span>ima²
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-maxima-light mt-1">•</span>
                <span>Hormone Cycles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maxima-light mt-1">•</span>
                <span>Iron</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-maxima-light mt-1">•</span>
                <span>Thyroid</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
