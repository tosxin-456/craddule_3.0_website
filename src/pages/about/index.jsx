import {
  Target,
  Users,
  Shield,
  Lightbulb,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparency",
      desc: "We provide clear, honest assessments without overpromising outcomes."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Expertise",
      desc: "Our team brings decades of combined experience across industries and regulatory environments."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership",
      desc: "We work alongside founders as strategic partners, not just service providers."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Results-Driven",
      desc: "Every recommendation and strategy is designed to move your venture forward measurably."
    }
  ];

  const stats = [
    { number: "500+", label: "Startups Reviewed" },
    { number: "85%", label: "Success Rate" },
    { number: "50+", label: "Industry Experts" },
    { number: "$120M+", label: "Funding Secured" }
  ];

  const principles = [
    "We do not promise shortcuts",
    "We provide structure, expertise, and accountability",
    "We focus on sustainable, long-term success",
    "We believe in the power of preparation"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/85 to-indigo-800/75"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-white max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-blue-200 text-sm font-medium tracking-wide">
                OUR MISSION
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
                Craddule
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-50 leading-relaxed font-light mb-12 max-w-3xl">
              We exist to reduce uncertainty for founders, transforming bold
              visions into thriving realities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
                Our Story
              </button>
              <button className="px-8 py-4 bg-blue-500/20 backdrop-blur-sm text-white rounded-lg font-semibold border border-blue-400/30 hover:bg-blue-500/30 transition-all">
                Meet the Team
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Many founders fail not because their ideas are bad, but
                  because they lack clarity — on regulation, documentation,
                  strategy, and execution.
                </p>
                <p>
                  Craddule reviews your idea, identifies what is required to
                  move forward, and connects you with experienced professionals
                  who help guide each step.
                </p>
                <p className="text-blue-600 font-semibold">
                  We transform uncertainty into actionable clarity.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&h=500&fit=crop"
                alt="Strategic planning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <Award className="w-12 h-12 mb-2" />
                <p className="font-bold text-xl">Industry Leading</p>
                <p className="text-blue-100 text-sm">Expert Guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Our Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-blue-50 p-6 rounded-xl text-left"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-800">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every interaction and decision we make
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built by Founders, For Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team has walked the path you're on. We understand the
              challenges because we've faced them ourselves.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=400&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
              alt="Strategy session"
              className="rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=400&fit=crop"
              alt="Professional meeting"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Move Forward with Clarity?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's review your idea and create a clear path to execution
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold shadow-xl inline-flex items-center gap-2">
            Start Your Review
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
