import React from "react";
import EffectsImg from "../assets/images/effects.png";
import GetStarted from "../components/GetStarted";

const CookiesPolicy = () => {
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
              Cookie policy
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <p className="text-xl font-normal leading-8 text-white">
            WagerKingz Cookie Policy
            <br />
            Last Updated: May 17, 2024
            <br />
            <br />
            Introduction
            <br />
            This Cookie Policy explains how WagerKingz ("we," "us," or "our")
            uses cookies and similar tracking technologies on our website. By
            using our website, you agree to the use of cookies in accordance
            with this policy.
            <br />
            <br />
            What Are Cookies?
            <br />
            Cookies are small text files that are stored on your device when you
            visit a website. They allow us to recognize your device, store your
            preferences, and improve your overall user experience. Cookies may
            be "session cookies," which expire when you close your browser, or
            "persistent cookies," which remain on your device until deleted.
            <br />
            <br />
            Types of Cookies We Use
            <br />
            1. Essential Cookies
            <br />
            These cookies are necessary for the basic functioning of our
            website. They enable core features, such as secure login and access
            to restricted areas, and ensure that our website operates smoothly.
            <br />
            <br />
            2. Performance Cookies
            <br />
            Performance cookies help us understand how visitors interact with
            our website by collecting anonymous data on site usage, such as
            pages visited and errors encountered. This information helps us
            improve our website's performance and user experience.
            <br />
            <br />
            3. Functionality Cookies
            <br />
            These cookies allow us to remember choices you make on our website,
            such as language preference and display settings, to provide a
            personalized experience.
            <br />
            <br />
            4. Targeting and Advertising Cookies
            <br />
            Targeting cookies are used to deliver relevant ads based on your
            interests. They may also limit the number of times you see an ad and
            help us measure the effectiveness of our advertising campaigns.
            These cookies may be set by us or by third-party advertising
            networks.
            <br />
            <br />
            5. Analytics Cookies
            <br />
            We use analytics cookies to gather data on user behavior and website
            usage patterns. This helps us improve our services and provide
            better content. Third-party analytics tools, such as Google
            Analytics, may be used to collect and analyze this data.
            <br />
            <br />
            Third-Party Cookies
            <br />
            We may work with third-party service providers that set cookies on
            our website to deliver their services. These providers may use
            cookies for analytics, advertising, or social media purposes. We do
            not control these third-party cookies, and we recommend reviewing
            their respective privacy policies.
            <br />
            <br />
            Managing Your Cookie Preferences
            <br />
            You can control and manage cookies through your browser settings.
            Most browsers allow you to view, delete, and block cookies from
            particular sites. However, please note that disabling cookies may
            affect the functionality of our website, and certain features may
            not be available.
            <br />
            For more information on managing cookies, you can visit{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.allaboutcookies.org
            </a>
            .<br />
            <br />
            Changes to This Policy
            <br />
            We may update this Cookie Policy from time to time. When we make
            significant changes, we will post the updated policy on this page
            and update the "Last Updated" date.
            <br />
            <br />
            Contact Us
            <br />
            <br />
            If you have any questions about our Cookie Policy or how we use
            cookies, please contact us at:
            <br />
            <br />
            WagerKingz Support
            <br />
            <a href="mailto:support@wagerkingz.com">support@wagerkingz.com</a>
          </p>
        </div>
      </section>
      <GetStarted />
    </main>
  );
};

export default CookiesPolicy;
