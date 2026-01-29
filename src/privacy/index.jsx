import React from "react";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Craddule ("we", "our", "us"). We are committed to
              protecting your privacy and ensuring that your personal
              information is handled in a safe and responsible manner. This
              Privacy Policy outlines how we collect, use, and protect your
              information when you use our application and services
              ("Services").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700 leading-relaxed">
                <strong>Personal Information:</strong> When you register for an
                account, we collect personal information such as your name,
                email address, and contact details.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Project Information:</strong> We collect information
                related to the projects you create, including ideas, documents,
                and any other content you upload or create within the
                application.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Billing Information:</strong> When you make a purchase
                or subscribe to a paid service, we collect billing information
                such as your credit or debit card number, card expiration date,
                billing address, and other payment details.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Usage Data:</strong> We collect information about how
                you use our application, including your IP address, browser
                type, operating system, and access times.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700 leading-relaxed">
                <strong>To Provide and Improve Our Services:</strong> We use
                your information to operate, maintain, and improve our
                application and services.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>To Process Payments:</strong> We use your billing
                information to process transactions and manage your
                subscriptions.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>To Communicate with You:</strong> We use your contact
                information to send you updates, notifications, and other
                information related to your use of the application.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>To Ensure Security:</strong> We use your information to
                protect the security and integrity of our application and
                services.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Sharing Your Information
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700 leading-relaxed">
                <strong>With Your Consent:</strong> We may share your
                information with third parties if you have given us your consent
                to do so.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>With Service Providers:</strong> We may share your
                information with third-party service providers who assist us in
                operating our application and providing our services. These
                service providers are required to protect your information and
                use it only for the purposes for which it was disclosed.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>For Payment Processing:</strong> We share your billing
                information with payment processors to facilitate transactions.
                These processors are required to comply with strict data
                protection standards.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>For Legal Reasons:</strong> We may disclose your
                information if required to do so by law or in response to a
                valid request by a law enforcement or governmental authority.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Data Security
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700 leading-relaxed">
                <strong>Security Measures:</strong> We implement
                industry-standard security measures to protect your information
                from unauthorized access, disclosure, alteration, or
                destruction.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>User Responsibilities:</strong> You are responsible for
                maintaining the confidentiality of your account credentials and
                for all activities that occur under your account. You must
                notify us immediately of any unauthorized use of your account.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Data Retention
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700 leading-relaxed">
                <strong>Retention Period:</strong> We retain your personal
                information for as long as necessary to provide our services and
                fulfill the purposes outlined in this Privacy Policy. We may
                also retain and use your information to comply with legal
                obligations, resolve disputes, and enforce our agreements.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Deletion of Data:</strong> You can request the deletion
                of your personal information by contacting us. We will take
                reasonable steps to delete your information, except where we are
                required to retain it by law.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Your Rights
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700 leading-relaxed">
                <strong>Access and Correction:</strong> You have the right to
                access and correct your personal information. You can update
                your information through your account settings or by contacting
                us.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Data Portability:</strong> You have the right to request
                a copy of your personal information in a structured, commonly
                used, and machine-readable format.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Right to Erasure:</strong> You have the right to request
                the deletion of your personal information, subject to certain
                exceptions.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong>Right to Object:</strong> You have the right to object
                to the processing of your personal information in certain
                circumstances.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our application is not intended for use by children under the age
              of 18. We do not knowingly collect personal information from
              children under 18. If we become aware that we have collected
              personal information from a child under 18, we will take steps to
              delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the new Privacy
              Policy on our application and updating the "Last Updated" date at
              the top of this policy. Your continued use of the application
              after any changes to this Privacy Policy constitutes your
              acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us through our support
              channels.
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
