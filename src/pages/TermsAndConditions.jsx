import React from "react";
import EffectsImg from "../assets/images/effects.png";
import GetStarted from "../components/GetStarted";

const TermsAndConditions = () => {
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
              Terms & conditions
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <p className="text-xl font-normal leading-8 text-white">
            Last Updated: June 4, 2024
            <br />
            <br />
            Introduction
            <br />
            Welcome to WagerKingz. By using our website, products, or services,
            you agree to these Terms & Conditions ("Terms"). Please read them
            carefully, as they constitute a legally binding agreement between
            you ("User") and WagerKingz ("we," "us," "our").
            <br />
            <br />
            ---
            <br />
            <br />
            1. Eligibility
            <br />
            To use our services, you must be at least 18 years old (or the age
            of legal consent in your jurisdiction) and fully capable of entering
            into binding agreements. By creating an account, you confirm that
            you meet these eligibility requirements.
            <br />
            <br />
            2. Account Registration and Security
            <br />
            - You are responsible for maintaining the confidentiality of your
            account details.
            <br />
            - You agree to provide accurate information during registration and
            update it as necessary.
            <br />
            - WagerKingz reserves the right to suspend or terminate accounts if
            fraudulent, inaccurate, or incomplete information is detected.
            <br />
            <br />
            3. Demo Prop Firm Service
            <br />
            WagerKingz operates as a demo prop firm, providing a simulated
            environment for users to develop and demonstrate their sports
            betting skills. This structure allows users to participate in
            challenges without initially risking real funds, with the
            possibility of accessing real firm capital upon successful
            completion.
            <br />
            <br />
            - Simulated Betting Environment: All initial challenges are
            conducted in a demo mode, where users can showcase their skills
            using a simulated balance.
            <br />
            - Structured Challenges and Progression: Users must meet specific
            profit targets, loss limits, and other requirements to advance
            through demo stages.
            <br />
            - Evaluation for Real Capital Access: Completion of demo challenges
            may lead to access to a real-funded account, where users can trade
            or bet using firm capital, contingent upon meeting WagerKingz’s
            performance criteria.
            <br />
            <br />
            4. User Responsibilities
            <br />
            You agree to:
            <br />
            - Use the website and services lawfully and ethically.
            <br />
            - Refrain from any activities that may manipulate or interfere with
            WagerKingz’s systems or services.
            <br />
            - Adhere to the rules of our sports betting challenges, including
            those prohibiting hedging and arbitrage betting.
            <br />
            <br />
            5. Privacy
            <br />
            Our Privacy Policy outlines how we collect, use, and protect your
            data. By using WagerKingz, you consent to our data practices as
            described in our Privacy Policy.
            <br />
            <br />
            6. Betting and Challenge Rules
            <br />
            - Betting Markets: Only pre-approved sports markets are allowed.
            <br />
            - Prohibited Practices: Collusion, automated betting systems, and
            any attempts to manipulate outcomes are strictly prohibited.
            <br />
            - Challenges: Users must follow all rules associated with the
            specific betting challenges, including minimum picks, profit
            targets, and maximum loss limits.
            <br />
            <br />
            7. Payments and Withdrawals
            <br />
            - Funding and Withdrawals: Users are responsible for funding their
            accounts for betting purposes. Payouts are subject to eligibility
            requirements, verification, and time frames as specified by
            WagerKingz.
            <br />
            - Payment Methods: We reserve the right to determine available
            payment and withdrawal methods.
            <br />
            - Inactivity and Breach of Terms: Accounts may be terminated or
            restricted if inactive or if there is a breach of our Terms &
            Conditions.
            <br />
            <br />
            8. Limitation of Liability
            <br />
            WagerKingz is not liable for any damages resulting from the use of
            our services, including, but not limited to, losses in betting,
            financial damages, or disruptions. Our services are provided on an
            "as-is" basis, and we disclaim all warranties, expressed or implied,
            regarding the reliability, accuracy, or availability of our
            platform.
            <br />
            <br />
            9. Indemnification
            <br />
            By using our services, you agree to indemnify and hold WagerKingz
            harmless from any claims, damages, losses, or liabilities arising
            from your use of our platform, including any violation of these
            Terms.
            <br />
            <br />
            10. Intellectual Property
            <br />
            All content on WagerKingz, including text, logos, graphics, and
            software, is the property of WagerKingz and is protected by
            copyright and trademark laws. You may not use or reproduce any
            WagerKingz content without our express permission.
            <br />
            <br />
            11. Amendments
            <br />
            WagerKingz may update or amend these Terms at any time. Users will
            be notified of significant changes, and continued use of our
            services following updates constitutes acceptance of the new Terms.
            <br />
            <br />
            12. Governing Law
            <br />
            These Terms shall be governed by and construed in accordance with
            the laws of Malta. Any disputes arising from these Terms will be
            resolved in the courts of Malta.
            <br />
            <br />
            13. Contact Us
            <br />
            If you have questions about these Terms & Conditions, please contact
            us at:
            <br />
            WagerKingz Support
            <br />
            Email:{" "}
            <a href="mailto:support@wagerkingz.com">support@wagerkingz.com</a>
          </p>
        </div>
      </section>
      <GetStarted />
    </main>
  );
};

export default TermsAndConditions;
