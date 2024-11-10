/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bangers: ["Bangers"],
      },
      colors: {
        spearmint: "#34FA48",
        jaguar: "#020201",
        tomato: "#FE6141",
        beanRed: "#FE6566",
        starDust: "#999F9F",
        "custom-transparent-white": "rgba(255, 255, 255, 0.04)",
        "border-transparent-white": "rgba(255, 255, 255, 0.1)",
        "custom-transparent-green": "rgba(200, 255, 206, 0.1)",
        "custom-transparent-mint-two": "rgba(52, 250, 72, 0.10)",
        "custom-transparent-tomato": "rgba(255, 147, 100, 0.1)",
        "custom-transparent-beanRed": "rgba(254, 97, 99, 0.1)",
      },
      backgroundImage: {
        "white-radial-gradient":
          "linear-gradient(106deg, rgba(78, 78, 78, 0.10) 0%, rgba(255, 255, 255, 0.10) 0.01%, rgba(255, 255, 255, 0.00) 32.81%, rgba(255, 255, 255, 0.10) 100%)",
        "spearmint-radial-gradient":
          "linear-gradient(180deg, rgba(71, 251, 92, 0.10) 0%, rgba(48, 174, 63, 0.10) 100%)",
        "custom-transparent-mint":
          "linear-gradient(90deg, rgba(71,251,92,0.1) 50%, rgba(48,174,63,0.1) 100%)",
        "custom-mint": "linear-gradient(180deg, #47FB5C 0%, #30AE3F 100%)",
        "custom-mint-two": "linear-gradient(180deg, #99FFA3 0%, #68EE76 100%)",
        "custom-green":
          " linear-gradient(0deg, rgba(25,199,43,1) 50%, rgba(0,170,17,1) 100%)",
        "custom-black":
          "linear-gradient(0deg, rgba(2,2,1,1) 50%, rgba(4,15,5,1) 100%)",
        "custom-transparent-black":
          "linear-gradient(0deg, rgba(2,2,1,0.1) 50%, rgba(4,15,5,0.1) 100%)",
        "custom-tomato": "linear-gradient(180deg, #FF9364 0%, #F25F33 100%)",
        "custom-beanRed":
          "linear-gradient(180deg, rgba(254,108,108,1) 0%, rgba(254,70,75,1) 100%)",
        "custom-transparent-jaguar":
          "linear-gradient(180deg, rgba(10, 10, 10, 0.90) 0%, #040404 100%)",
        "custom-mix":
          "radial-gradient(41.96% 69.02% at 50% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(270deg, #020702 0%, #020201 80%)",
        "custom-mix-two":
          "radial-gradient(75.49% 124.18% at 50% 0%, rgba(52, 250, 72, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(270deg, #020702 0%, #020201 80%)",
        "custom-mix-three":
          "radial-gradient(50% 50% at 50% 50%, #34FA48 0%, rgba(52, 250, 72, 0.00) 100%)",
        "custom-gordons-green-gradient":
          "linear-gradient(0deg, #020702 0%, #020201 80%)",
        "custom-blue-gradient":
          "linear-gradient(180deg, #291CED 0%, #2F20F0 100%)",
        "custom-orange-gradient":
          "linear-gradient(180deg, #DC5F3F 0%, #DC5F3F 100%)",
        "custom-peach-gradient":
          "linear-gradient(180deg, #D18B76 61.63%, #D1A776 100%)",
        "custom-bluelight-grandient":
          "linear-gradient(180deg, #5898E4 63.23%, #3D86DD 100%)",
        "custom-grey-gradient-two":
          "linear-gradient(180deg, rgba(10, 33, 12, 0.32) 0%, rgba(10, 33, 12, 0.08) 96.91%)",
          "custom-black-two-gradient": "linear-gradient(180deg, rgba(2, 2, 1, 0.00) 0%, #020201 100%)",
      },
      boxShadow: {
        "custom-green": " 0px -10px 40px 0px rgba(52,250,72,0.1) inset",
        "custom-white": "0px 4px 4px 0px rgba(255, 255, 255, 0.40) inset",
        "custom-white-two": "-4px -4px 10px 0px rgba(255,255,255,0.04) inset",
        "custom-white-three": "0px 4px 4px 0px rgba(255,255,255,0.4) inset",
        "custom-white-four": "0px 4px 10px 0px rgba(255,255,255,0.1) inset",
        "custom-grey": "-4px -4px 10px 0px rgba(255, 255, 255, 0.04) inset",
        "custom-gorden": "0px -10px 40px 0px rgba(68, 240, 88, 0.10) inset",
        "custom-green-two": "-4px -4px 10px 0px rgba(11, 32, 13, 0.04) inset",
        "custom-blue": "0px -10px 40px 0px #2F23C2 inset",
      },
      screens: {
        sm: "640px", // Small screens, such as mobile phones (>= 640px)
        md: "768px", // Medium screens, such as tablets (>= 768px)
        lg: "1025px", // Large screens, such as laptops (>= 1024px)
        xl: "1280px", // Extra large screens, such as desktops (>= 1280px)
        "2xl": "1366px",
        "3xl": "1440px",
        "4xl": "1600px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-heading2": {
          fontSize: "60px",
          fontFamily: "Bangers, cursive",
          lineHeight: "1",
          color: "#ffffff",
          // margin: "0 auto",
          marginBottom: "2rem",
          "@media (max-width: 1279px)": {
            fontSize: "36px",
            marginBottom: "1rem",
          },
          "@media (max-width: 1024px)": {
            fontSize: "30px",
          },
        },
        ".text-body": {
          fontSize: "1rem",
          lineHeight: "2rem",
          color: "rgba(255, 255, 255, 0.8)",
          "@media (max-width: 1024px)": {
            fontSize: "14px",
            lineHeight: "1.2rem",
          },
        },
      });
    },
  ],
};
