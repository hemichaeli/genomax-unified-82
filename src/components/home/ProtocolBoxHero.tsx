import { Check } from "lucide-react";

export const ProtocolBoxHero = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden border-t border-border">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, hsl(186 100% 64% / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-os-cyan font-mono text-sm tracking-[0.2em] uppercase">
              Included with Every Subscription
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight">
              The Protocol Box
            </h2>
            <p className="text-muted-foreground text-lg">
              Not packaging. A precision dosing instrument. Every new subscriber receives a premium daily organizer with compartments matching your chronobiology schedule.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-1 text-os-cyan shrink-0" />
                <span className="text-sm text-foreground">
                  <strong>Morning / Midday / Evening</strong> compartments matching your dosing windows
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-1 text-os-cyan shrink-0" />
                <span className="text-sm text-foreground">
                  <strong>31-day stackable design</strong> for monthly module supply
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-1 text-os-cyan shrink-0" />
                <span className="text-sm text-foreground">
                  <strong>Gender sub-brand trim</strong> in <span className="text-maximo">MAXimo\u00B2 cyan</span> or <span className="text-maxima">MAXima\u00B2 magenta</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-1 text-os-cyan shrink-0" />
                <span className="text-sm text-foreground">
                  <strong>QR code</strong> linking to your MAXync\u00B2 daily protocol view
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, hsl(186 100% 64% / 0.08) 0%, transparent 70%)",
              }}
            />
            <img
              src="/images/protocol-box.png"
              alt="GenoMAX\u00B2 Protocol Box - 31-day stackable dosing organizer"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <p className="text-center text-xs text-muted-foreground mt-3">
              GenoMAX\u00B2 Protocol Box: 31-day stackable organizer with morning/evening dosing compartments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
