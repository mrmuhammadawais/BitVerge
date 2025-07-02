import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Your Company Name",
  description: "Learn how we protect your privacy and handle your personal information with complete transparency and security.",
  // other metadata
};

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Your privacy matters to us. Learn how we collect, use, and protect your personal information."
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Header Section */}
            <div className="mb-16 text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <h1 className="mb-4 text-4xl font-bold text-black dark:text-white md:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-lg text-body-color">
                We believe in transparency. This policy explains how we handle your data with care and respect.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-dark md:p-10">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    Information We Collect
                  </h2>
                </div>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  We only collect information that helps us provide better services to you. This includes:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-light p-4 dark:bg-gray-800">
                    <h4 className="mb-2 font-semibold text-black dark:text-white">Personal Information</h4>
                    <ul className="space-y-1 text-sm text-body-color">
                      <li>• Name and contact details</li>
                      <li>• Email address</li>
                      <li>• Profile information</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-light p-4 dark:bg-gray-800">
                    <h4 className="mb-2 font-semibold text-black dark:text-white">Usage Information</h4>
                    <ul className="space-y-1 text-sm text-body-color">
                      <li>• Device and browser data</li>
                      <li>• Usage analytics</li>
                      <li>• Preferences and settings</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-dark md:p-10">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    How We Use Your Information
                  </h2>
                </div>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Your information helps us deliver and improve our services in the following ways:
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Service Delivery", desc: "Provide and maintain our core services and features" },
                    { title: "Customer Support", desc: "Respond to your inquiries and provide technical assistance" },
                    { title: "Communication", desc: "Send important updates, security alerts, and service notifications" },
                    { title: "Improvement", desc: "Analyze usage patterns to enhance user experience and functionality" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white">{item.title}</h4>
                        <p className="text-sm text-body-color">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3 */}
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-dark md:p-10">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                    <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    Information Sharing & Security
                  </h2>
                </div>
                <div className="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/10">
                  <p className="font-semibold text-red-800 dark:text-red-200">
                    🛡️ We never sell your personal information to third parties.
                  </p>
                </div>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  We implement industry-standard security measures and only share information when absolutely necessary:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Limited Sharing With:</h4>
                    <ul className="space-y-2 text-body-color">
                      <li className="flex items-center">
                        <span className="mr-2">🔧</span> Trusted service providers
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">⚖️</span> Legal authorities (when required)
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🤝</span> Business partners (with consent)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-black dark:text-white">Security Measures:</h4>
                    <ul className="space-y-2 text-body-color">
                      <li className="flex items-center">
                        <span className="mr-2">🔐</span> End-to-end encryption
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🔒</span> Secure data storage
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🛡️</span> Regular security audits
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-dark md:p-10">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    Your Rights & Control
                  </h2>
                </div>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  You have complete control over your personal information. Here&apos;s what you can do:
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { icon: "👁️", title: "Access", desc: "View all data we have about you" },
                    { icon: "✏️", title: "Correct", desc: "Update or fix incorrect information" },
                    { icon: "🗑️", title: "Delete", desc: "Request removal of your data" },
                    { icon: "⏸️", title: "Restrict", desc: "Limit how we use your information" },
                    { icon: "📦", title: "Export", desc: "Download your data in a portable format" },
                    { icon: "❌", title: "Withdraw", desc: "Remove consent at any time" }
                  ].map((right, index) => (
                    <div key={index} className="rounded-lg border border-gray-200 p-4 text-center dark:border-gray-700">
                      <div className="mb-2 text-2xl">{right.icon}</div>
                      <h4 className="mb-1 font-semibold text-black dark:text-white">{right.title}</h4>
                      <p className="text-sm text-body-color">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 text-white md:p-10">
                <div className="text-center">
                  <h2 className="mb-4 text-2xl font-bold">Questions About Your Privacy?</h2>
                  <p className="mb-6 text-white/90">
                    We&apos;re here to help. Reach out to our privacy team for any questions or concerns.
                  </p>
                  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
                    <a 
                      href="mailto:privacy@example.com" 
                      className="flex items-center rounded-full bg-white/20 px-6 py-3 font-medium text-white transition-all hover:bg-white/30"
                    >
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      privacy@example.com
                    </a>
                    <div className="flex items-center text-white/90">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Response within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;