import { Link } from "react-router-dom";
import { ArrowRight, Gift, Star, Award, Users } from "lucide-react";

const ReferralProgram = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Share Your <span className="text-[#FF1F23]">Biological Advantage</span>
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
          Every satisfied subscriber becomes a paid acquisition channel. Earn credits, free months, and permanent discounts.
        </p>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <Gift className="w-8 h-8 text-[#009BFF]" />, title: "First Referral", reward: "$20 credit", friend: "$20 off first month", desc: "Both you and your friend benefit from the first referral." },
            { icon: <Star className="w-8 h-8 text-[#FFD600]" />, title: "3 Referrals", reward: "Free month (up to $139)", friend: "Standard $20 discount", desc: "Three successful referrals earn you a complete free month." },
            { icon: <Award className="w-8 h-8 text-[#FF1F23]" />, title: "10+ Referrals", reward: "15% permanent discount", friend: "$25 off first month", desc: "Ambassador tier: permanent discount plus early access to new modules." },
          ].map((tier, i) => (
            <div key={i} className="gx-card p-8">
              <div className="mb-4">{tier.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{tier.title}</h3>
              <div className="text-sm font-mono text-[#00E676] mb-1">You get: {tier.reward}</div>
              <div className="text-sm font-mono text-[#009BFF] mb-4">Friend gets: {tier.friend}</div>
              <p className="text-xs text-[#6B7A90]">{tier.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gx-section-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Why Credits, Not Cash</h2>
          <p className="text-[#6B7A90] text-center mb-8">Referral rewards are subscription credits, not cash payouts. This keeps every dollar circulating within the GenoMAX&#178; ecosystem, increases customer lifetime value, and creates a psychological incentive to maintain the subscription.</p>
          <div className="gx-card p-6">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-[#FF2D95] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-sm font-bold text-white mb-1">Professional Referral Channel</h3>
                <p className="text-xs text-[#6B7A90]">Practitioners (doctors, nutritionists, trainers) who refer clients receive 10% recurring revenue share on each referred subscription for 12 months.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="gx-section text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-[#6B7A90]/60 mb-4">#MyBioOS</p>
        <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
          Start Your Protocol First <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default ReferralProgram;
