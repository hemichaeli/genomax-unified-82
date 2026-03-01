import { Link } from "react-router-dom";
import { Globe, Home as HomeIcon, GraduationCap, TrendingUp, Shield, Users, ChevronLeft, MessageCircle, CheckCircle } from "lucide-react";

const Buyers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - English/Bilingual */}
      <section className="quantum-hero py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }} dir="ltr">
              Your Insider Access
              <br />
              <span className="text-[#B8860B]">to Israeli Real Estate</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto" dir="ltr">
              Whether you're making Aliyah, investing, or buying a home for your children's future in Israel, QUANTUM gives you access to opportunities others don't even know exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="quantum-btn-gold inline-flex items-center gap-2">
                <span>Tell Us What You're Looking For</span>
              </Link>
              <Link to="/community" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                <span>Explore Community Buying</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Motivations */}
      <section className="quantum-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto 24px' }} />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }} dir="ltr">
              Why Are You Buying in Israel?
            </h2>
            <p className="text-[#1A1A3E]/60 mt-4 max-w-2xl mx-auto" dir="ltr">
              We serve families from every background and motivation. Whatever brings you to Israel, we'll find the right property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HomeIcon, title: "Making Aliyah", desc: "Planning to move to Israel? We'll find you a home in a neighborhood that matches your lifestyle, budget, and community needs.", color: "#1A1A3E" },
              { icon: TrendingUp, title: "Investment", desc: "Israeli urban renewal offers 30-80% appreciation potential. We identify the highest-return opportunities before the market catches up.", color: "#B8860B" },
              { icon: GraduationCap, title: "For Your Children", desc: "Your child is joining the IDF, studying at an Israeli university, or building their life here. Give them a home base.", color: "#1A1A3E" },
              { icon: Globe, title: "Heritage Home", desc: "A second home for holidays, family visits, and maintaining your connection to Israel. We find properties that work for part-time residents.", color: "#B8860B" },
            ].map((item, i) => (
              <div key={i} className="quantum-card p-6" dir="ltr">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}10` }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A3E] mb-2">{item.title}</h3>
                <p className="text-sm text-[#1A1A3E]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUANTUM Advantage for Buyers */}
      <section className="quantum-section-alt" dir="ltr">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="quantum-gold-line" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)' }} />
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                The QUANTUM Advantage
              </h2>
              <p className="text-[#1A1A3E]/60 leading-relaxed">
                Most buyers see what's listed publicly. QUANTUM buyers see what's coming before it hits the market. Distressed sellers, receiverships, inheritances, and pre-approval opportunities.
              </p>
              <div className="space-y-3">
                {[
                  "Access to off-market properties months before public listing",
                  "Prices 10-20% below market through motivated seller identification",
                  "Properties in urban renewal zones with 30-80% appreciation potential",
                  "Full bilingual service: we speak your language",
                  "End-to-end support including legal, tax, and property management",
                  "Community buying: know your neighbors before you move in",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1A1A3E]/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[hsl(40,15%,88%)]">
              <h3 className="text-xl font-bold text-[#1A1A3E] mb-6">Global Markets We Serve</h3>
              <div className="space-y-3">
                {[
                  { flag: "🇺🇸", country: "United States", communities: "NYC, LA, Miami, Chicago, NJ" },
                  { flag: "🇫🇷", country: "France", communities: "Paris, Marseille, Lyon, Nice" },
                  { flag: "🇬🇧", country: "United Kingdom", communities: "London, Manchester, Leeds" },
                  { flag: "🇨🇦", country: "Canada", communities: "Toronto, Montreal, Vancouver" },
                  { flag: "🇦🇷", country: "Argentina", communities: "Buenos Aires" },
                  { flag: "🇿🇦", country: "South Africa", communities: "Johannesburg, Cape Town" },
                  { flag: "🇦🇺", country: "Australia", communities: "Melbourne, Sydney" },
                ].map((market, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#1A1A3E]/5 transition-colors border border-transparent hover:border-[hsl(40,15%,88%)]">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{market.flag}</span>
                      <span className="font-medium text-sm text-[#1A1A3E]">{market.country}</span>
                    </div>
                    <span className="text-xs text-[#1A1A3E]/50">{market.communities}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urban Renewal Investment Explainer */}
      <section className="quantum-section-navy" dir="ltr">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Urban Renewal (Pinuy-Binuy)?
            </h2>
            <p className="text-white/60 text-lg">
              Israel's urban renewal program replaces old buildings with modern developments. Property owners in these zones see dramatic value increases when projects are approved and built.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
              {[
                { number: "30-80%", label: "Average appreciation when a project is approved" },
                { number: "334+", label: "Active urban renewal complexes we track" },
                { number: "5-8 yrs", label: "Typical timeline from approval to completion" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-[#B8860B]" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.number}</div>
                  <div className="text-sm text-white/50 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quantum-section" dir="ltr">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Find Your Property in Israel?
            </h2>
            <p className="text-[#1A1A3E]/60">
              Tell us what you're looking for. We'll show you opportunities you won't find anywhere else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/972XXXXXXXXX?text=Hi, I'm interested in buying property in Israel"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <Link to="/contact" className="quantum-btn-gold">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buyers;
