import React from "react";
import { FaGlobeEurope, FaWifi, FaDollarSign, FaArrowRight, FaCheck, FaShieldAlt, FaHeadset } from "react-icons/fa";

const plans = [
  {
    provider: "Airalo",
    country: "France",
    data: "5GB",
    price: "$15",
    validity: "30 days",
    link: "https://www.airalo.com/fr",
    logo: "https://cdn.airalo.com/assets/images/svg/Logo.svg",
    features: ["Instant activation", "24/7 support", "5G available"],
    rating: "4.8"
  },
  {
    provider: "Nomad",
    country: "France",
    data: "10GB",
    price: "$20",
    validity: "30 days",
    link: "https://www.getnomad.app",
    logo: "data:image/jpeg;base64,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",
    features: ["Unlimited texts", "Hotspot allowed", "Free incoming calls"],
    rating: "4.6"
  },
  {
    provider: "Ubigi",
    country: "France",
    data: "3GB",
    price: "$10",
    validity: "15 days",
    link: "https://www.ubigi.com",
    logo: "data:image/png;base64,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",
    features: ["Multi-country use", "No contract", "eSIM app included"],
    rating: "4.4"
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Best eSIM Plans for France
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay connected during your trip with instant, affordable data. No roaming fees. No SIM swaps.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
          <FaShieldAlt className="text-blue-600" />
          <span className="text-sm font-medium">Secure Payments</span>
        </div>
        <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
          <FaCheck className="text-green-600" />
          <span className="text-sm font-medium">Verified Providers</span>
        </div>
        <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
          <FaHeadset className="text-purple-600" />
          <span className="text-sm font-medium">24/7 Support</span>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Provider Header */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={plan.logo} 
                    alt={plan.provider} 
                    className="w-14 h-14 object-contain bg-white p-2 rounded-lg shadow-sm"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{plan.provider}</h2>
                    <p className="text-gray-500">{plan.country}</p>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  ★ {plan.rating}
                </span>
              </div>
            </div>

            {/* Pricing Highlight */}
            <div className="p-6 border-b">
              <div className="flex justify-between items-end">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.validity}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-blue-600 font-medium">
                <FaWifi /> <span>{plan.data} High-Speed Data</span>
              </div>
            </div>

            {/* Features List */}
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <FaCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="px-6 pb-6">
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get eSIM Now <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I install an eSIM?",
              a: "After purchase, you'll receive a QR code to scan in your phone settings. Most eSIMs activate instantly."
            },
            {
              q: "Will my phone work with eSIM?",
              a: "Most modern smartphones support eSIM including iPhone XR/newer, Google Pixel 3/newer, and Samsung Galaxy S20/newer."
            },
            {
              q: "Can I use my regular number with eSIM?",
              a: "Yes! eSIM works alongside your physical SIM, so you can keep your regular number while using data from the eSIM."
            }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}