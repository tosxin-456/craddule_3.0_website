import React, { useState } from "react";
import {
  Building2,
  Briefcase,
  Mail,
  User,
  FileText,
  CheckCircle,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { API_BASE_URL } from "../../config/apiConfig";

export default function BusinessOnboarding() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessDescription: "",
    sector: "",
    customSector: "",
    email: "",
    fullName: ""
  });
  const [errors, setErrors] = useState({});
  const [requiredDocuments, setRequiredDocuments] = useState([]);

  const sectors = [
    { id: "fintech", name: "Fintech", icon: "💳" },
    { id: "healthtech", name: "Healthtech", icon: "🏥" },
    { id: "edtech", name: "Edtech", icon: "📚" },
    { id: "ecommerce", name: "E-commerce", icon: "🛒" },
    { id: "saas", name: "SaaS", icon: "☁️" },
    { id: "logistics", name: "Logistics", icon: "📦" },
    { id: "agribusiness", name: "Agribusiness", icon: "🌾" },
    { id: "proptech", name: "Proptech", icon: "🏢" },
    { id: "legaltech", name: "Legaltech", icon: "⚖️" },
    { id: "insurtech", name: "Insurtech", icon: "🛡️" },
    { id: "media", name: "Media & Entertainment", icon: "🎬" },
    { id: "manufacturing", name: "Manufacturing", icon: "🏭" },
    { id: "energy", name: "Energy & Climate", icon: "⚡" },
    { id: "travel", name: "Travel & Hospitality", icon: "✈️" },
    { id: "retail", name: "Retail", icon: "🛍️" },
    { id: "other", name: "Other", icon: "📋" }
  ];

  const handleNext = async () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.businessDescription.trim()) {
        newErrors.businessDescription = "Please describe your business";
      } else if (formData.businessDescription.trim().length < 10) {
        newErrors.businessDescription =
          "Description must be at least 10 characters";
      }
    }

    if (step === 2) {
      if (!formData.sector) {
        newErrors.sector = "Please select a sector";
      } else if (formData.sector === "other" && !formData.customSector.trim()) {
        newErrors.customSector = "Please specify your business sector";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Generate documents after sector selection (step 2)
    if (step === 2) {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/business-onboarding`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            businessDescription: formData.businessDescription,
            sector:
              formData.sector === "other"
                ? formData.customSector
                : formData.sector
          })
        });

        const data = await response.json();
        console.log(data);
        if (response.ok) {
          const docs = data.data.requiredDocuments || [];
          const id = data.data.id;

          localStorage.setItem("id", id);

          // ✅ NO parsing, NO join, NO cleanup — backend already sends correct format
          setRequiredDocuments(docs);

          setStep(3); // Move to document preview step
        } else {
          console.log(data);
          alert(data.message || "Failed to generate documents");
        }
      } catch (err) {
        console.error("Server error:", err);
        alert("Server error. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleSectorChange = (sectorId) => {
    setFormData((prev) => ({
      ...prev,
      sector: sectorId,
      customSector: sectorId !== "other" ? "" : prev.customSector
    }));
    if (errors.sector) {
      setErrors((prev) => ({
        ...prev,
        sector: ""
      }));
    }
  };

  const handleGetRemainingDocs = () => {
    setStep(4); // Move to contact form step
  };

  const handleSubmitContact = async () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // Get the onboarding ID stored after step 2
      const onboardingId = localStorage.getItem("id");

      if (!onboardingId) {
        alert("Onboarding ID not found. Please try again.");
        return;
      }

      // Send email with onboarding ID
      const response = await fetch(
        `${API_BASE_URL}/business-onboarding/send-documents`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            onboardingId, // <-- Use ID here
            email: formData.email,
            fullName: formData.fullName
          })
        }
      );

      if (response.ok) {
        setStep(5); // Success step
      } else {
        const data = await response.json();
        console.log(data);

        alert(data.message || "Failed to send documents. Please try again.");
      }
    } catch (err) {
      console.log(err);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      businessDescription: "",
      sector: "",
      customSector: "",
      email: "",
      fullName: ""
    });
    setErrors({});
    setRequiredDocuments([]);
  };

  const getSectorDisplayName = () => {
    if (formData.sector === "other") {
      return formData.customSector || "Other";
    }
    return sectors.find((s) => s.id === formData.sector)?.name || "";
  };

  const countWords = (text) => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  };

  const stepLabels = ["Business Info", "Select Sector", "Documents", "Contact"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="m-auto w-fit    ">
          <h1 className="m-auto text-2xl font-bold ">STRATEGY TOOL</h1>
        </div>

        {/* Progress Indicator - Show for steps 1-4 */}
        {step <= 4 && (
          <div className="mb-8">
            <div className="flex items-center justify-center mb-2">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step >= num
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {num}
                  </div>
                  {num < 4 && (
                    <div
                      className={`h-1 w-20 mx-2 transition-all ${
                        step > num ? "bg-indigo-600" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2 px-4">
              {stepLabels.map((label, index) => (
                <span key={index} className="text-center w-20">
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Welcome & Business Description */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Building2 className="w-8 h-8 text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome!
              </h1>
              <p className="text-gray-600">Let's get to know your business</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe your business
                <span className="text-gray-500 text-xs ml-2">
                  ({countWords(formData.businessDescription)}/20 words)
                </span>
              </label>
              <textarea
                value={formData.businessDescription}
                onChange={(e) => {
                  const words = e.target.value.trim().split(/\s+/);
                  if (words.length <= 20) {
                    handleChange("businessDescription", e.target.value);
                  }
                }}
                rows="3"
                className={`block w-full px-4 py-3 border ${
                  errors.businessDescription
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none`}
                placeholder="E.g., Online retail store"
              />

              {errors.businessDescription && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.businessDescription}
                </p>
              )}
              <p className="mt-2 text-xs text-gray-500">
                Keep it brief - maximum 20 words
              </p>

              <p className="mt-2 text-xs text-indigo-600">
                Example: "An online store that sells affordable handmade fashion
                accessories to young adults."
              </p>
            </div>

            <button
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium"
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Step 2: Select Sector */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Briefcase className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                What sector are you in?
              </h2>
              <p className="text-gray-600">
                Select the industry that best describes your business
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-h-96 overflow-y-auto pr-2">
              {sectors.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => handleSectorChange(sector.id)}
                  className={`p-3 sm:p-4 border-2 rounded-lg text-left transition-all hover:border-indigo-400 hover:shadow-md ${
                    formData.sector === sector.id
                      ? "border-indigo-600 bg-indigo-50 shadow-md"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sector.icon}</span>
                    <span className="font-medium text-gray-800 text-sm sm:text-base">
                      {sector.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Sector Input for "Other" */}
            {formData.sector === "other" && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Please specify your business sector
                </label>
                <input
                  type="text"
                  value={formData.customSector}
                  onChange={(e) => handleChange("customSector", e.target.value)}
                  className={`block w-full px-4 py-3 border ${
                    errors.customSector ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                  placeholder="E.g., Cryptocurrency, Gaming, etc."
                />
                {errors.customSector && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.customSector}
                  </p>
                )}
              </div>
            )}

            {errors.sector && (
              <p className="text-sm text-red-600 text-center">
                {errors.sector}
              </p>
            )}
            <p className="mt-2 text-xs text-indigo-600">Example: "Retail"</p>
            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={loading}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  loading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    Get Documents
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Display 5 documents */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Here's Your Preview!
              </h2>
              <p className="text-gray-600">
                Top 5 compliance documents for your{" "}
                <span className="font-semibold text-indigo-600">
                  {getSectorDisplayName()}
                </span>{" "}
                business
              </p>
            </div>

            <div className="space-y-3">
              {requiredDocuments.slice(0, 5).map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold text-sm">
                    {index + 1}
                  </div>

                  <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0" />

                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      {doc.documentName}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        doc.isMandatory ? "text-red-600" : "text-gray-500"
                      }`}
                    >
                      {doc.isMandatory ? "Mandatory" : "Can be done later"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {requiredDocuments.length > 5 && (
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <p className="text-center text-gray-700">
                  <span className="font-semibold text-indigo-600">
                    +{requiredDocuments.length - 5} more documents
                  </span>{" "}
                  available for your business
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={resetForm}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                Start Over
              </button>
              <button
                onClick={handleGetRemainingDocs}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium"
              >
                Get All Documents via Email
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact Form */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Get the Complete List
              </h2>
              <p className="text-gray-600">
                We'll email you all {requiredDocuments.length} required
                documents
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <button
                onClick={handleSubmitContact}
                disabled={loading}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  loading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    Send Documents
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Success */}
        {step === 5 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Check Your Email!
              </h2>
              <p className="text-gray-600">
                We've sent the complete list of {requiredDocuments.length}{" "}
                compliance documents to{" "}
                <span className="font-semibold text-indigo-600">
                  {formData.email}
                </span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    🎉 Congrats on Your First Strategy Session!
                  </h3>
                  <p className="text-gray-700 mb-3">
                    You've completed your first strategy session! As a reward,
                    enjoy a <strong>50% discount</strong> on your next session.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>
                        Check your inbox for the complete document list
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Review each document requirement carefully</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Start preparing your compliance documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={resetForm}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
