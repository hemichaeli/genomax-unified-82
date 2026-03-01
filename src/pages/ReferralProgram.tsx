import { Link } from "react-router-dom";
import { Gift, Users, Star, ArrowRight, Share2, Trophy, Repeat } from "lucide-react";

const tiers = [
  {
    icon: Gift,
    title: "Every Referral",
    reward: "$20 credit",
    friendGets: "$20 off first month",
    description: "Share your referral link. When your friend subscribes to any tier, you both benefit.",
    color: "text-os-cyan",
    border: "border-os-cyan/30",
    bg: "bg-os-cyan/5",
  },
  {
    icon: Star,
    title: "3 Referrals",
    reward: "Free month",
    friendGets: "$20 off first month",
    description: "Reach 3 successful referrals and your next month is free (up to $139 value).",
    color: "text-[#FFD700]",
    border: "border-[#FFD700]/30",
    bg: "bg-[#FFD700]/5",
  },
  {
    icon: Trophy,
    title: "10+ Referrals",
    reward: "Ambassador",
    friendGets: "$25 off first month",
    description: "Permanent 15% discount, early access to new modules, and exclusive Protocol Box variants.",
    color: "text-[#FF2A2A]",
    border: "border-[#FF2A2A]/30",
    bg: "bg-[#FF2A2A]/5",
  },
];

const ReferralProgram = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, hsl(186 100% 64% / 0.06) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <p className="text-os-cyan font-mono text-sm tracking-[0.2em] uppercase">
            Referral Program
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
            Share Your Biological Advantage
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every person you refer earns you credits. Every referral strengthens the community. Your biology improves. Theirs begins.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-heading text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-os-cyan/10 border border-os-cyan/30 flex items-center justify-center mx-auto">
                <Share2 className="w-6 h-6 text-os-cyan" />
              </div>
              <h3 className="font-bold text-lg">1. Share Your Link</h3>
              <p className="text-sm text-muted-foreground">
                Get your unique referral link from your dashboard. Share it via Instagram, WhatsApp, email, or text.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-os-cyan/10 border border-os-cyan/30 flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-os-cyan" />
              </div>
              <h3 className="font-bold text-lg">2. Friend Subscribes</h3>
              <p className="text-sm text-muted-foreground">
                Your friend gets $20 off their first month. They upload blood work, build their protocol, and start optimizing.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-os-cyan/10 border border-os-cyan/30 flex items-center justify-center mx-auto">
                <Repeat className="w-6 h-6 text-os-cyan" />
              </div>
              <h3 className="font-bold text-lg">3. You Earn Credits</h3>
              <p className="text-sm text-muted-foreground">
                $20 credit applied to your next order. Credits stack. Reach milestones for bigger rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-heading text-center mb-4">
            Referral Tiers
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            The more you share, the more you earn. Credits are applied to your subscription, keeping every dollar in your protocol.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.title}
                  className={`rounded-2xl border ${tier.border} ${tier.bg} p-8 space-y-4 transition-all duration-[280ms] hover:translate-y-[-4px] hover:shadow-panel`}
                >
                  <Icon className={`w-8 h-8 ${tier.color}`} />
                  <h3 className="text-xl font-bold font-heading">
                    {tier.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">You get:</span>
                      <span className={`font-bold ${tier.color}`}>
                        {tier.reward}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Friend gets:</span>
                      <span className="font-medium text-foreground">
                        {tier.friendGets}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    {tier.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Credits */}
      <section className="py-16 px-6 border-t border-border bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold font-heading">
            Why Credits, Not Cash
          </h2>
          <p className="text-muted-foreground">
            Referral rewards are subscription credits. Every dollar circulates within your Biological Operating System. A subscriber with accumulated credits has even more reason to stay, optimize, and refer again. This is not a payout program. It is a compounding advantage.
          </p>
        </div>
      </section>

      {/* Professional Channel */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-gradient-to-b from-[#1a1a2e] to-[#0A0E1A] p-10 md:flex items-center gap-10">
            <div className="flex-1 space-y-4">
              <p className="text-os-cyan font-mono text-xs tracking-[0.2em] uppercase">
                For Practitioners
              </p>
              <h3 className="text-2xl font-bold font-heading">
                Professional Referral Channel
              </h3>
              <p className="text-muted-foreground">
                Doctors, nutritionists, and trainers who refer clients receive a 10% recurring revenue share on each subscription for 12 months. Refer your patients to clinical-grade, blood-based protocols they can trust.
              </p>
              <Link to="/organizations">
                <button className="mt-4 px-6 py-3 rounded-full border-2 border-os-cyan bg-transparent text-foreground font-bold text-sm transition-all duration-[280ms] hover:bg-os-cyan/10">
                  Learn About B2B Partnerships
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              </Link>
            </div>
            <div className="mt-8 md:mt-0 text-center">
              <div className="text-6xl font-bold font-heading text-os-cyan">
                10%
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                recurring for 12 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UGC Section */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold font-heading">
            #MyBioOS
          </h2>
          <p className="text-muted-foreground">
            Share your Protocol Box on Instagram with <span className="text-os-cyan font-mono">#MyBioOS</span> for a chance to win a free quarter. Show the world what a Biological Operating System looks like on your kitchen counter.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Start Your Protocol. Share Your Advantage.
          </h2>
          <Link to="/assessment">
            <button className="px-10 py-4 rounded-full font-bold text-white text-lg transition-all duration-[280ms] hover:opacity-90 bg-gradient-to-r from-[#00AEEF] to-[#006AFB]">
              Get Started
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReferralProgram;
