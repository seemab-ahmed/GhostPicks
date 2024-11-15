import React from "react";
import EffectsImg from "../assets/images/effects.png";
import GetStarted from "../components/GetStarted";

const PrivacyPolicy = () => {
  return (
    <main>
      <section className="bg-cover bg-center pb-20 pt-16 xl:pt-[200px] xl:pb-[265px] relative">
        <img
          src={EffectsImg}
          alt="effect"
          className="absolute left-0 top-0 w-full h-auto -z-[1]"
        />
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="font-bangers text-4xl md:text-6xl xl:text-[90px] leading-none text-white font-normal uppercase">
              Privacy policy
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <p className="text-xl font-normal leading-8 text-white">
            WagerKingz Privacy Policy
            <br />
            <br />
            Last Updated: June 4, 2024
            <br />
            <br />
            WagerKingz ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our website and
            services. By using WagerKingz, you consent to the data practices
            described in this policy.
            <br />
            <br />
            ---
            <br />
            <br />
            1. Information We Collect
            <br />
            We collect various types of information to provide and improve our
            services, including:
            <br />
            <br />
            - Personal Information: When you create an account or use our
            services, we may collect personal information such as your name,
            email address, contact information, and payment details.
            <br />
            - Usage Information: We collect information on how you interact with
            our website, such as IP addresses, browser type, operating system,
            and pages visited.
            <br />
            - Cookies and Tracking Technologies: We use cookies and similar
            tracking technologies to monitor website activity, store your
            preferences, and improve your user experience. For more details,
            please see our website.
            <br />
            <br />
            2. How We Use Your Information
            <br />
            We use the information we collect to:
            <br />
            <br />
            - Provide Services: To create and manage your account, facilitate
            transactions, and deliver our betting and demo prop firm services.
            <br />
            - Improve User Experience: To enhance our website functionality,
            address user needs, and analyze site usage.
            <br />
            - Communication: To send you important updates, such as service
            announcements, changes to our Terms and Conditions, and
            account-related notifications.
            <br />
            - Security and Fraud Prevention: To monitor for and protect against
            fraudulent activity, unauthorized access, and security threats.
            <br />
            - Legal Compliance: To comply with applicable laws, regulations, and
            legal obligations.
            <br />
            <br />
            3. Information Sharing and Disclosure
            <br />
            We may share your information in the following situations:
            <br />
            <br />
            - With Service Providers: We share information with third-party
            vendors who perform services on our behalf, such as payment
            processors, analytics providers, and customer support services.
            These vendors are obligated to protect your information.
            <br />
            - For Legal and Compliance Reasons: We may disclose information to
            comply with legal obligations, respond to lawful requests, or
            protect our rights and interests.
            <br />
            - Business Transfers: In the event of a merger, acquisition, or
            asset sale, we may transfer your information to the acquiring
            company.
            <br />
            <br />
            4. Data Security
            <br />
            We implement reasonable security measures to protect your
            information from unauthorized access, loss, or misuse. However, no
            data transmission over the internet or electronic storage is
            completely secure, and we cannot guarantee absolute security.
            <br />
            <br />
            5. Data Retention
            <br />
            We retain your information for as long as necessary to fulfill the
            purposes outlined in this Privacy Policy or as required by law. When
            your information is no longer needed, we will securely delete or
            anonymize it.
            <br />
            <br />
            6. Your Rights and Choices
            <br />
            Depending on your location, you may have certain rights regarding
            your personal information, such as:
            <br />
            <br />
            - Access: You can request access to the personal information we hold
            about you.
            <br />
            - Correction: You can request corrections to any inaccurate
            information.
            <br />
            - Deletion: You may request deletion of your information, subject to
            legal or contractual requirements.
            <br />
            - Data Portability: In some cases, you may have the right to receive
            your personal information in a structured, commonly used, and
            machine-readable format.
            <br />
            To exercise your rights, please contact us at{" "}
            <a href="mailto:support@wagerkingz.com">support@wagerkingz.com</a>.
            <br />
            <br />
            7. Children’s Privacy
            <br />
            WagerKingz is intended for users who are at least 18 years old or
            the age of legal consent in their jurisdiction. We do not knowingly
            collect information from children under 18. If we learn that we have
            collected information from a child under 18, we will take steps to
            delete it.
            <br />
            <br />
            8. Changes to This Privacy Policy
            <br />
            We may update this Privacy Policy periodically. If we make
            significant changes, we will notify you through our website or via
            email. Your continued use of our services after any changes
            indicates acceptance of the updated policy.
            <br />
            <br />
            9. Contact Us
            <br />
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
            <br />
            WagerKingz Support
            <br />
            Email:{" "}
            <a href="mailto:support@wagerkingz.com">support@wagerkingz.com</a>
            <br />
            <br />
            By using WagerKingz, you agree to the terms of this Privacy Policy.
            <br />
          </p>
        </div>
      </section>
      <GetStarted />
    </main>
  );
};

export default PrivacyPolicy;
