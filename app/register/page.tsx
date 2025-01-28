'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoMessage, setPromoMessage] = useState({ text: '', isValid: false });

  const validatePromoCode = (code: string) => {
    // Örnek promo kod: TRUMP5
    if (code.toUpperCase() === 'TRUMP5') {
      setPromoMessage({ text: '✓ Valid promo code! You will get 5% extra bonus!', isValid: true });
    } else if (code) {
      setPromoMessage({ text: '✗ Invalid promo code', isValid: false });
    } else {
      setPromoMessage({ text: '', isValid: false });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Her zaman TRUMP5 promo kodunu ekle
    const queryParams = new URLSearchParams({
      email: email as string,
      password: password as string,
      promoCode: 'TRUMP5'  // Sabit promo kodu
    });
    
    router.push(`/dashboard?${queryParams.toString()}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative p-4">
      {/* Arkaplan */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            animation: '20s linear 0s infinite normal none running gridAnimation'
          }}>
        </div>
      </div>

      {/* Kayıt Formu Konteyneri */}
      <div className="w-full max-w-md relative">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-700/30 via-purple-700/30 to-blue-700/30 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative space-y-8 bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700 bg-gradient-to-b from-gray-900/10 to-transparent">
            {/* Başlıklar */}
            <p className="mt-2 text-gray-300 text-center">
              Already have an account? 
              <a className="text-blue-400 hover:text-blue-300 transition-all duration-300 relative group/link" href="/login">
                Sign in
                <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
              </a>
            </p>

            {/* Form Başlangıcı */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <div className="relative group/field">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                        className="lucide lucide-user h-5 w-5 text-gray-500 group-hover/field:text-blue-400 transition-colors duration-300"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <input 
                      id="name" 
                      required 
                      className="block w-full pl-10 pr-10 py-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-gray-500 transition-all duration-300"
                      placeholder="Enter your full name" 
                      type="text" 
                      name="name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <div className="relative group/field">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                        className="lucide lucide-mail h-5 w-5 text-gray-500 group-hover/field:text-blue-400 transition-colors duration-300"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <input 
                      id="email" 
                      required 
                      className="block w-full pl-10 pr-10 py-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-gray-500 transition-all duration-300"
                      placeholder="Enter your email" 
                      type="email" 
                      name="email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                  <div className="relative group/field">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                        className="lucide lucide-lock h-5 w-5 text-gray-500 group-hover/field:text-blue-400 transition-colors duration-300"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <input 
                      id="password" 
                      required 
                      className="block w-full pl-10 pr-10 py-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-gray-500 transition-all duration-300"
                      placeholder="Create a password" 
                      type={showPassword ? "text" : "password"}
                      name="password"
                    />
                    <button 
                      type="button" 
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
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
                        className="lucide lucide-eye h-5 w-5 text-gray-500 hover:text-gray-400 transition-colors duration-300"
                      >
                        {showPassword ? (
                          <>
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                            <circle cx="12" cy="12" r="3"/>
                            <line x1="4" y1="4" x2="20" y2="20"/>
                          </>
                        ) : (
                          <>
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                            <circle cx="12" cy="12" r="3"/>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                  <div className="relative group/field">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                        className="lucide lucide-lock h-5 w-5 text-gray-500 group-hover/field:text-blue-400 transition-colors duration-300"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <input 
                      id="repeatPassword" 
                      required 
                      className="block w-full pl-10 pr-10 py-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-gray-500 transition-all duration-300"
                      placeholder="Confirm your password" 
                      type={showConfirmPassword ? "text" : "password"}
                      name="repeatPassword"
                    />
                    <button 
                      type="button" 
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                        className="lucide lucide-eye h-5 w-5 text-gray-500 hover:text-gray-400 transition-colors duration-300"
                      >
                        {showConfirmPassword ? (
                          <>
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                            <circle cx="12" cy="12" r="3"/>
                            <line x1="4" y1="4" x2="20" y2="20"/>
                          </>
                        ) : (
                          <>
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                            <circle cx="12" cy="12" r="3"/>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Promo Code */}
                <div>
                  <label htmlFor="promoCode" className="block text-sm font-medium text-gray-300 mb-1">Promo Code (Optional)</label>
                  <div className="relative group/field">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                        className="lucide lucide-ticket h-5 w-5 text-gray-500 group-hover/field:text-blue-400 transition-colors duration-300"
                      >
                        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                        <path d="M13 5v2"/>
                        <path d="M13 17v2"/>
                        <path d="M13 11v2"/>
                      </svg>
                    </div>
                    <input 
                      id="promoCode" 
                      className="block w-full pl-10 pr-10 py-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-gray-500 transition-all duration-300"
                      placeholder="Enter promo code" 
                      type="text" 
                      name="promoCode"
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value);
                        validatePromoCode(e.target.value);
                      }}
                    />
                    {promoMessage.text && (
                      <div className={`mt-1 text-sm ${promoMessage.isValid ? 'text-green-400' : 'text-red-400'}`}>
                        {promoMessage.text}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-center">
                <input 
                  id="agree" 
                  required 
                  className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500 transition-colors duration-300" 
                  type="checkbox" 
                  name="agree"
                />
                <label htmlFor="agree" className="ml-2 block text-sm text-gray-300">
                  I agree to the 
                  <a className="text-blue-400 hover:text-blue-300 transition-all duration-300 relative group/link" href="/dashboard/privacy">
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
                  </a>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="relative group w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-black to-blue-700 hover:from-black hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-blue-500/50"
              >
                <span className="relative z-10 flex items-center">
                  Create Account
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
                    className="lucide lucide-arrow-right ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 