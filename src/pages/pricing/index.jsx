import {
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Zap,
  DollarSign,
  Gift,
  FileText,
  Building2,
  ShoppingBag,
  Award,
  HeartHandshake,
  Factory
} from "lucide-react";

export default function Pricing() {
  const certificates = [
    {
      icon: <Target className="w-8 h-8" />,
      name: "Business Name Registration",
      description: "Register your business name with CAC",
      price: "₦15,000",
      priceDetail: "One-time fee",
      color: "from-blue-500 to-blue-600",
      timeline: "3-5 business days",
      features: [
        "Name availability search",
        "CAC registration form",
        "Certificate of registration",
        "Digital copy delivery",
        "Expert guidance included"
      ],
      cta: "Register Now",
      popular: false
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      name: "Limited Liability Company",
      description: "Incorporate your business as an LLC",
      price: "₦75,000",
      priceDetail: "Complete registration",
      color: "from-green-500 to-green-600",
      timeline: "7-10 business days",
      features: [
        "CAC incorporation certificate",
        "Memorandum & Articles of Association",
        "Form CAC 1.1 & CAC 7",
        "Company seal & stamp",
        "TIN registration assistance"
      ],
      cta: "Incorporate Now",
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: "NAFDAC Registration",
      description: "Register food, drug, or cosmetic products",
      price: "₦250,000",
      priceDetail: "Per product",
      color: "from-purple-500 to-purple-600",
      timeline: "4-6 weeks",
      features: [
        "Application preparation",
        "Document compilation",
        "NAFDAC liaison",
        "Product registration certificate",
        "Renewal reminders"
      ],
      cta: "Start Application",
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8" />,
      name: "TIN Registration",
      description: "Get your Tax Identification Number",
      price: "₦10,000",
      priceDetail: "One-time fee",
      color: "from-orange-500 to-orange-600",
      timeline: "2-3 business days",
      features: [
        "FIRS registration",
        "TIN certificate",
        "Tax compliance guidance",
        "Digital delivery",
        "Same-day processing available"
      ],
      cta: "Get TIN",
      popular: false
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      name: "SON Certification",
      description: "Standards Organisation of Nigeria compliance",
      price: "₦180,000",
      priceDetail: "Per product line",
      color: "from-red-500 to-red-600",
      timeline: "3-5 weeks",
      features: [
        "Product testing coordination",
        "SON compliance documentation",
        "Certification facilitation",
        "MANCAP certificate",
        "Post-certification support"
      ],
      cta: "Apply Now",
      popular: false
    },
    {
      icon: <Factory className="w-8 h-8" />,
      name: "SMEDAN Registration",
      description: "Register with Small & Medium Enterprise Agency",
      price: "₦5,000",
      priceDetail: "One-time fee",
      color: "from-teal-500 to-teal-600",
      timeline: "1-2 business days",
      features: [
        "SMEDAN registration",
        "Access to SME support programs",
        "Certificate of registration",
        "Grant eligibility",
        "Fast-track processing"
      ],
      cta: "Register",
      popular: false
    }
  ];

  const subscriptionPlans = [
    {
      name: "Starter",
      price: "₦5,000",
      period: "/month",
      description: "Perfect for early-stage founders",
      features: [
        "Document templates library",
        "Compliance checklist access",
        "Email support (48hr response)",
        "Monthly newsletter",
        "Community forum access"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Growth",
      price: "₦15,000",
      period: "/month",
      description: "For businesses ready to scale",
      features: [
        "Everything in Starter",
        "Priority support (24hr response)",
        "Quarterly strategy review",
        "10% marketplace discounts",
        "Community access + events",
        "10% off all certificates"
      ],
      cta: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored for established businesses",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "Custom compliance workflows",
        "API access",
        "White-glove service",
        "20% off all certificates"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const additionalServices = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "SCUML Registration",
      price: "₦25,000",
      timeline: "5-7 days"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "CAC Certificate Authentication",
      price: "₦20,000",
      timeline: "3-5 days"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Business Permit",
      price: "₦30,000",
      timeline: "7-10 days"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Change of Company Name",
      price: "₦40,000",
      timeline: "10-14 days"
    }
  ];

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, text: "No hidden fees" },
    { icon: <Clock className="w-6 h-6" />, text: "Guaranteed timelines" },
    { icon: <Zap className="w-6 h-6" />, text: "Cancel subscription anytime" },
    { icon: <Gift className="w-6 h-6" />, text: "Free initial consultation" }
  ];

  const faqs = [
    {
      question: "Are these prices all-inclusive?",
      answer:
        "Yes! All certificate prices include government fees, document preparation, expert guidance, and delivery of your official documents. No hidden charges."
    },
    {
      question: "Can I purchase certificates without a subscription?",
      answer:
        "Absolutely. All regulatory certificates can be purchased individually at the listed prices. Subscriptions provide additional ongoing support and resources but are completely optional."
    },
    {
      question: "What's the difference between the subscription tiers?",
      answer:
        "Starter gives you templates and basic support. Growth adds priority support, quarterly reviews, and 10% discounts on marketplace services and certificates. Enterprise provides dedicated account management, custom solutions, and 20% discounts."
    },
    {
      question: "How do I access the marketplace for consulting services?",
      answer:
        "The marketplace will be accessible from your dashboard once you create an account. You'll be able to browse verified providers, compare rates, read reviews, and book sessions directly. Prices vary by provider and service type."
    },
    {
      question: "Do subscription members get discounts on certificates?",
      answer:
        "Yes! Growth members receive 10% off all regulatory certificates, and Enterprise members receive 20% off. These discounts apply to all certificate purchases made through the platform."
    },
    {
      question: "What if my certificate takes longer than the stated timeline?",
      answer:
        "We guarantee our timelines. If processing takes longer than stated due to our error, you'll receive a full refund of our service fee. Government delays are communicated promptly with regular updates."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=800&fit=crop"
            alt="Financial planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-yellow-900/95"></div>
        </div>

        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge with Hover Effect */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 cursor-default group">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
              <DollarSign className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 text-yellow-400" />
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight block">
                Simple, Clear Pricing
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent leading-tight block mt-2">
                No Hidden Fees
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Fixed prices for regulatory certificates. Flexible subscriptions
              for ongoing support.
              <span className="block mt-2 text-lg text-gray-400">
                Pay only for what you need. Scale as you grow.
              </span>
            </p>

            {/* Decorative Elements */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                No Hidden Fees
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000 shadow-lg shadow-blue-400/50"></div>
                Guaranteed Timelines
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse animation-delay-2000 shadow-lg shadow-yellow-400/50"></div>
                All-Inclusive Prices
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .bg-grid-pattern {
            background-image: linear-gradient(
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              );
            background-size: 50px 50px;
          }
        `}</style>
      </section>

      {/* Regulatory Certificates Pricing */}
      <section
        id="certificates"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FileText className="w-4 h-4" />
            Regulatory Certificates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Business Registration & Licenses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fixed, transparent pricing for all essential business registrations.
            All prices include government fees.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.name}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                cert.popular ? "ring-4 ring-green-500 scale-105" : ""
              }`}
            >
              {cert.popular && (
                <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1 z-10">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              <div className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="mb-4">
                  <p className="text-4xl font-bold text-gray-900">
                    {cert.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {cert.priceDetail}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 bg-gray-50 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">{cert.timeline}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {cert.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    cert.popular
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {cert.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-2xl font-bold text-gray-900 mb-1">
                  {service.price}
                </p>
                <p className="text-sm text-gray-500">{service.timeline}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a different certificate or license?{" "}
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              View all 20+ available services
              <ArrowRight className="w-4 h-4" />
            </a>
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Founders Choose Craddule
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Transparent, efficient, and designed with startups in mind
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <p className="font-semibold text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="subscriptions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Optional Add-On
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Subscription Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get ongoing support, resources, and discounts to help you build
              and scale
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.highlighted
                    ? "ring-4 ring-blue-500 scale-105 relative"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              <strong>Note:</strong> All certificates can be purchased without a
              subscription. Subscriptions simply provide additional ongoing
              support and discounts.
            </p>
          </div>
        </div>
      </section>

      {/* Marketplace Callout */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Coming Soon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Need Consulting or Strategy Sessions?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Browse our marketplace to connect with verified consultants,
                lawyers, accountants, and business advisors. View profiles, read
                reviews, compare rates, and book sessions—all in one place.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "1-on-1 strategy sessions from ₦25,000",
                  "Legal consultations from ₦15,000",
                  "Accounting services from ₦20,000",
                  "Industry-specific mentorship"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:shadow-lg transition font-semibold inline-flex items-center gap-2">
                Explore Marketplace
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
                alt="Marketplace"
                className="rounded-2xl shadow-lg w-full md:w-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Register your business today or schedule a free consultation to
            discuss your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold shadow-xl inline-flex items-center justify-center gap-2">
              Start Registration
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white/10 transition text-lg font-semibold">
              Book Free Consultation
            </button>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            No credit card required • Free consultation • Money-back guarantee
          </p>
        </div>
      </section>
    </div>
  );
}
