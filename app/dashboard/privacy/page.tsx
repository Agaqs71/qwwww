'use client';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <a 
          className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors mb-8" 
          href="/register"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-arrow-left h-4 w-4 mr-2"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back
        </a>

        <div className="space-y-8">
          <section className="space-y-4 bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              Last Modified: January 16, 2024
              
              This website is owned and operated by Fight Fight Fight, LLC. We respect your privacy and understand that you have a right to know why we collect your personal information and what we do with it. This Privacy Policy applies to information we collect through our Website as well as information we may collect offline.
            </p>
          </section>

          <section className="space-y-4 bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">Your Security</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              We strive to keep your Personal Information private and safe. Despite our best efforts, the transmission of data over the Internet cannot be guaranteed to be 100% secure. Any transmission of Personal Information is at your own risk.
            </p>
          </section>

          <section className="space-y-4 bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              We collect Personal Information in two ways: information you provide to us (e.g., contact details, account information) and Automated Information (e.g., IP address, browser characteristics). Most web browsers automatically accept cookies; however, you can configure your browser settings to refuse them.
            </p>
          </section>

          <section className="space-y-4 bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              We may use your Personal Information for various purposes, including fulfilling orders, improving services, and marketing. By providing your email, you consent to receive communications from us.
            </p>
          </section>

          <section className="space-y-4 bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">Sharing Information</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              We do not sell your Personal Information to third parties. We may share it with affiliates, service providers, or as legally required.
            </p>
          </section>

          <section className="space-y-4 bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">Targeted Advertising</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              We may work with third-party advertisers for remarketing and retargeting activities. To opt-out, visit relevant ad preference managers or browser settings.
            </p>
          </section>

          <section className="space-y-4 bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">Your Rights</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              You have rights concerning your Personal Information, such as accessing, correcting, or deleting it. Contact us if you wish to exercise these rights.
            </p>
          </section>

          <section className="space-y-4 bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              If you have questions or concerns, email us at support@gettrumpmemes.com.
              
              Date Last Modified: December 16, 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 