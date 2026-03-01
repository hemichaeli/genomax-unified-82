import { Link } from "react-router-dom";
import { Gift, Users, Star, ArrowRight, Share2, Trophy } from "lucide-react";

const ReferralProgram = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gx-safety-badge mx-auto w-fit mb-6">
            <Gift className="w-3 h-3" />
            <span>Referral Engine</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Share Your <span className="text-[#FF1F23]">Biological Advantage</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            Every referral earns you credits toward your subscription. Three referrals earn a free month. Ten make you an Ambassador.
          </p>
        </div>
      </section>

      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="gx-card p-8 text-center">
              <Share2 className="w-10 h-10 text-[#FF1F23] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Share</h3>
              <p className="text-sm text-[#6B7A90] mb-4">Send your unique referral link. Your friend sees a personalized landing page with $20 off their first protocol.</p>
              <div className="pt-4 border-t border-[#1A2030]">
                <div className="text-2xl font-bold text-[#00E676] font-mono">$20</div>
                <div className="text-xs text-[#6B7A90]">Credit per referral</div>
              </div>
            </div>
            <div className="gx-card p-8 text-center" style={{ borderColor: 'rgba(255, 31, 35, 0.3)' }}>
              <Trophy className="w-10 h-10 text-[#FF1F23] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Earn Free Months</h3>
              <p className="text-sm text-[#6B7A90] mb-4">Three successful referrals earn a free month (up to $139 value). Credits stack and never expire while subscribed.</p>
              <div className="pt-4 border-t border-[#1A2030]">
                <div className="text-2xl font-bold text-[#FF1F23] font-mono">3 = FREE</div>
                <div className="text-xs text-[#6B7A90]">Month of your protocol</div>
              </div>
            </div>
            <div className="gx-card p-8 text-center">
              <Star className="w-10 h-10 text-[#FFD600] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Ambassador</h3>
              <p className="text-sm text-[#6B7A90] mb-4">10+ referrals unlock 15% permanent discount, early access to new modules, and limited edition Protocol Box variants.</p>
              <div className="pt-4 border-t border-[#1A2030]">
                <div className="text-2xl font-bold text-[#FFD600] font-mono">15%</div>
                <div className="text-xs text-[#6B7A90]">Permanent discount</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Referral Tier Structure
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1A2030]">
                    <th className="text-left py-4 px-4 text-[#6B7A90] font-medium">Action</th>
                    <th className="text-left py-4 px-4 text-[#6B7A90] font-medium">You Get</th>
                    <th className="text-left py-4 px-4 text-[#6B7A90] font-medium">Friend Gets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#1A2030]/50">
                    <td className="py-4 px-4 text-white">Friend subscribes (any tier)</td>
                    <td className="py-4 px-4 text-[#00E676]">$20 credit on next order</td>
                    <td className="py-4 px-4 text-[#00E676]">$20 off first month</td>
                  </tr>
                  <tr className="border-b border-[#1A2030]/50">
                    <td className="py-4 px-4 text-white">3 successful referrals</td>
                    <td className="py-4 px-4 text-[#FF1F23]">Free month (up to $139)</td>
                    <td className="py-4 px-4 text-[#6B7A90]">Standard $20 discount</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-white">10+ referrals (Ambassador)</td>
                    <td className="py-4 px-4 text-[#FFD600]">15% permanent + early access</td>
                    <td className="py-4 px-4 text-[#00E676]">$25 off first month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              For Health Professionals
            </h2>
            <div className="gx-card p-8">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-[#FF1F23] flex-shrink-0" />
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">Professional Referral Channel</h3>
                  <p className="text-sm text-[#6B7A90] leading-relaxed">
                    Practitioners (doctors, nutritionists, trainers) who refer clients receive a separate commission: 10% recurring revenue share on each referred subscription for 12 months.
                  </p>
                  <Link to="/organizations" className="inline-flex items-center gap-2 text-[#FF1F23] text-sm font-medium">
                    Learn about our Organizations program <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Why Credits, Not Cash
            </h2>
            <p className="text-[#6B7A90] text-sm leading-relaxed">
              Referral rewards are subscription credits, not cash payouts. This keeps every dollar circulating within the GenoMAX&#178; ecosystem and creates a psychological incentive to maintain the subscription.
            </p>
          </div>
        </div>
      </section>

      <section className="gx-section text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Share Your #MyBioOS
            </h2>
            <p className="text-[#6B7A90]">
              Post your Protocol Box on Instagram with #MyBioOS for a chance to win a free quarter.
            </p>
            <Link to="/assessment" className="gx-btn-primary inline-block">
              Get Started <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralProgram;
