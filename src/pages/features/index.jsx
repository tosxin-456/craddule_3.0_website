import {
  Target,
  FileText,
  FolderLock,
  Users,
  TrendingUp,
  BarChart3,
  UserCheck,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Requirement Engine",
      desc: "Identifies core and potential compliance documents required for your business.",
      color: "from-blue-500 to-blue-600",
      benefits: [
        "Automated analysis",
        "Regulatory compliance",
        "Industry-specific requirements"
      ]
    },
    {
      icon: <FolderLock className="w-8 h-8" />,
      title: "Document Vault",
      desc: "Centralised storage with real-time syncing, including manual additions.",
      color: "from-indigo-500 to-indigo-600",
      benefits: [
        "Secure cloud storage",
        "Real-time sync",
        "Easy access anywhere"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strategy Sessions",
      desc: "Structured sessions with predefined goals and expert reviewers.",
      color: "from-yellow-500 to-yellow-600",
      benefits: ["Expert guidance", "Structured approach", "Clear outcomes"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Funding Pathways",
      desc: "Apply for Craddule funding or prepare for external funding opportunities.",
      color: "from-green-500 to-green-600",
      benefits: [
        "Direct funding access",
        "Investor readiness",
        "Pitch preparation"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Cohort Execution Monitoring",
      desc: "Track meetings, reviews, notes, and progress once selected.",
      color: "from-orange-500 to-orange-600",
      benefits: [
        "Progress tracking",
        "Milestone monitoring",
        "Accountability tools"
      ]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Reviewer Portal",
      desc: "Dedicated access for invited industry experts to review and give feedback.",
      color: "from-pink-500 to-pink-600",
      benefits: ["Expert network", "Structured feedback", "Quality assurance"]
    }
  ];

  const additionalFeatures = [
    { icon: <Shield className="w-6 h-6" />, text: "Bank-grade security" },
    { icon: <Clock className="w-6 h-6" />, text: "24/7 platform access" },
    { icon: <Zap className="w-6 h-6" />, text: "Instant notifications" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Regular updates" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 md:py-40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-yellow-600/10 backdrop-blur-sm border border-blue-500/20 text-blue-300 px-5 py-2.5 rounded-full text-sm font-medium mb-8 shadow-lg shadow-blue-500/10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Comprehensive Platform
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-br from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight tracking-tight">
            Platform Features
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Tools designed to support founders from early review to execution.
            <span className="block mt-2 text-slate-300">
              Everything you need to transform your idea into a fundable
              business.
            </span>
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section
        id="features"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Showcase with Image */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for Startup Success
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Our platform combines powerful automation with expert human
                guidance to give you the best of both worlds.
              </p>
              <div className="space-y-4">
                {additionalFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                  >
                    <div className="text-blue-200">{item.icon}</div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop"
                alt="Analytics dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">99.9%</p>
                    <p className="text-sm text-gray-600">Uptime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A seamless workflow from onboarding to execution
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create your account and submit your business idea"
              },
              {
                step: "2",
                title: "Review",
                desc: "Our platform analyzes requirements and assigns experts"
              },
              {
                step: "3",
                title: "Collaborate",
                desc: "Work with reviewers through structured sessions"
              },
              {
                step: "4",
                title: "Execute",
                desc: "Track progress and prepare for funding"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-blue-300 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=500&fit=crop"
                alt="Team success"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Founders Choose Craddule
              </h2>
              <div className="space-y-6">
                {[
                  "Save months of research and planning time",
                  "Avoid costly compliance mistakes",
                  "Get expert guidance at every step",
                  "Access funding opportunities faster",
                  "Build with confidence and clarity"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Platform?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of founders who are building with clarity and
            confidence
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold shadow-xl inline-flex items-center gap-2">
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
