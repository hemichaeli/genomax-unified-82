import { VideoPlaceholder } from "./VideoPlaceholder";

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

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            The hidden reason your supplements don't work
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Nobody optimizes biology. They collect pills. Protocols drift, needs change, and supplements pile up. 
            Geno<span className="text-accent">MAX²</span> fixes the root cause - misalignment.
          </p>
        </div>

        {/* Core Video #2: DNA vs Biomarkers */}
        <div className="max-w-4xl mx-auto">
          <VideoPlaceholder
            title="DNA Doesn't Predict Your Health"
            subtitle="Why most personalization fails"
            duration="0:35"
            videoSrc="/videos/dna-vs-bloodwork-2.mp4"
            thumbnail="/placeholder-dna-video.jpg"
            glowColor="magenta"
            controls={true}
            autoPlay={false}
            muted={false}
          />
        </div>
      </div>
    </section>
  );
};
