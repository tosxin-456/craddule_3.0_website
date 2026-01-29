import React from "react";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Terms and Conditions
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Craddule ("we", "our", "us"). These Terms and
              Conditions ("Terms") govern your use of our application and
              services ("Services"). By accessing or using our application, you
              agree to comply with and be bound by these Terms. If you do not
              agree with these Terms, you must not use our application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Definitions
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Application or Services or We or Us or Our:</strong>{" "}
                Refers to Craddule, including all related software, services,
                and content.
              </li>
              <li>
                <strong>User:</strong> Refers to any individual or entity who
                accesses or uses the application.
              </li>
              <li>
                <strong>Content or Your Content:</strong> Refers to any data,
                information, text, graphics, photos, videos, or other materials
                uploaded, created, or shared by users within the application.
              </li>
              <li>
                <strong>Projects:</strong> Refers to specific initiatives or
                tasks created by users within the application aimed at
                understanding the business impact of their ideas.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To use our application, you must be at least 18 years old and have
              the legal capacity to enter into these Terms. By using the
              application, you represent and warrant that you meet these
              eligibility requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Your Content
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services allow you to create, store or share Your Content or
              receive material from others. We don't claim ownership of Your
              Content. Your Content remains yours and you are responsible for
              it. When you share Your Content with other people, you understand
              that they may be able to, on a worldwide basis, use, save, record,
              reproduce, broadcast, transmit, share and display Your Content for
              the purpose that you made Your Content available on the Services
              without compensating you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You represent and warrant that for the duration of these Terms,
              you have (and will have) all the rights necessary for Your Content
              that is uploaded, stored, or shared on or through the Services and
              that the collection, use, and retention of Your Content will not
              violate any law or rights of others. Craddule cannot be held
              responsible for Your Content or the material others upload, store
              or share using the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Creating an Account
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can create a Craddule account by signing up online. You agree
              not to use any false, inaccurate or misleading information when
              signing up for your account. You cannot transfer your account
              credentials to another user or entity. To protect your account,
              keep your account details and password confidential. You are
              responsible for all activity that occurs under your account.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Account Use
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must use your account to keep it active. If we reasonably
              suspect that your account is at risk of being used by a third
              party fraudulently, Craddule may suspend your account until you
              can reclaim ownership.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Closing Your Account
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You can cancel specific Services or close your account at any time
              and for any reason. When you ask us to close your account, you can
              choose to put it in a suspended state for either 30 or 60 days.
              After that period, your account will be closed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">Users must:</p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                Provide accurate, current, and complete information during
                registration
              </li>
              <li>Maintain the confidentiality of account credentials</li>
              <li>
                Not engage in activities that violate laws or infringe on
                third-party rights
              </li>
              <li>
                Not interfere with or disrupt the application or connected
                networks
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Data Security and Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to protecting user data and ensuring that it is
              secure and only accessible to authorized team members. We
              implement industry-standard security measures to protect user data
              from unauthorized access, disclosure, alteration, or destruction.
              Our Privacy Policy provides detailed information on how we
              collect, use, and protect user data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Payment Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you purchase a Service, you agree to pay the associated
              charges. All purchases are final and non-refundable unless
              otherwise provided by law. You must contact us within 90 days of
              any billing errors. For subscription services, payments will be
              made at recurring intervals until terminated by you or Craddule.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Users retain ownership of the content they create within the
              application. By using the application, users grant us a
              non-exclusive, royalty-free, worldwide license to use, display,
              and distribute their content for the purpose of operating the
              application. All application content is protected by copyright,
              trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed uppercase text-sm">
              Craddule makes no warranties, express or implied, with respect to
              your use of the services. You understand that use of the services
              is at your own risk and that we provide the services on an "as is"
              basis. We do not guarantee the services will be uninterrupted,
              timely, secure, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed uppercase text-sm">
              Your exclusive remedy is to recover direct damages up to an amount
              equal to your services fee for the month during which the loss
              occurred. You can't recover any other damages including
              consequential, lost profits, special, indirect, incidental, or
              punitive damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              12. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to terminate or suspend user accounts for
              violations of these Terms. Users can terminate their accounts at
              any time by contacting us. Upon termination, users must cease all
              use of the application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              13. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of the Federal Republic of Nigeria. Any disputes arising
              under or in connection with these Terms shall be subject to the
              exclusive jurisdiction of the Nigerian Courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              14. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions or concerns regarding these Terms, please
              contact us through our support channels.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-200">
            Last updated: January 2026
          </p>
        </div>
      </div>
    </div>
  );
}
