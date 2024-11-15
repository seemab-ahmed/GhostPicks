import React from "react";
import EffectsImg from "../assets/images/effects.png";
import GetStarted from "../components/GetStarted";

const RefundPolicy = () => {
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
              Refund policy
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <p className="text-xl font-normal leading-8 text-white">
            WagerKingz No Refund Policy
            <br />
            <br />
            Last Updated: July 17, 2024
            <br />
            <br />
            1. Introduction
            <br />
            By using our website and services, you agree to abide by this No
            Refund Policy. WagerKingz ("we," "us," or "our") does not issue
            refunds once a transaction has been completed, as our services are
            delivered digitally or through real-time access to betting or prop
            firm challenges.
            <br />
            <br />
            ---
            <br />
            <br />
            2. Non-Refundable Transactions
            <br />
            <br />
            - Challenge and Service Fees: Fees paid to participate in betting
            challenges, demo prop firm services, or any other features provided
            by WagerKingz are non-refundable. These fees cover access to
            specific features, and no refunds will be issued if you decide not
            to complete a challenge or if an account breach occurs.
            <br />
            - Subscription Services: If you subscribe to any recurring service
            or membership offered by WagerKingz, these charges are
            non-refundable. Users may cancel subscriptions, but no refunds will
            be issued for charges incurred before cancellation.
            <br />
            <br />
            3. Exceptional Cases
            <br />
            WagerKingz reserves the right to issue refunds only in specific
            cases, such as technical errors resulting in unintended charges or
            duplicate transactions. In such cases, please contact our support
            team at{" "}
            <a href="mailto:support@wagerkingz.com">support@wagerkingz.com</a>.
            Refunds will be granted at our discretion, and any exceptions are
            rare.
            <br />
            <br />
            4. Account Suspension or Termination
            <br />
            If an account is suspended or terminated due to a violation of
            WagerKingz’s Terms & Conditions or Privacy Policy, any remaining
            funds will not be refunded.
            <br />
            <br />
            5. Contact Us
            <br />
            If you have questions about this No Refund Policy, please reach out
            to:
            <br />
            WagerKingz Support
            <br />
            Email:{" "}
            <a href="mailto:support@wagerkingz.com">support@wagerkingz.com</a>
            <br />
            <br />
            By using our services, you acknowledge and agree to this No Refund
            Policy.
            <br />
          </p>
        </div>
      </section>
      <GetStarted />
    </main>
  );
};

export default RefundPolicy;
