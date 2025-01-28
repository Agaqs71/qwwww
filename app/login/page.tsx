'use client';

export default function Login() {
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

      {/* Giriş Formu Konteyneri */}
      <div className="w-full max-w-md relative">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative space-y-8 bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
            {/* Başlıklar */}
            <div>
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="mt-2 text-gray-400 text-center">
                New to our platform? 
                <a className="text-blue-400 hover:text-blue-300 transition-all duration-300 relative group/link" href="/register">
                  Create an account
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
                </a>
              </p>
            </div>

            {/* Form Başlangıcı */}
            <form action="dashboard" method="get" className="space-y-6">
              <div className="space-y-4">
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
                      placeholder="Enter your password" 
                      type="password" 
                      name="password"
                    />
                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
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
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input 
                  id="remember" 
                  className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500 transition-colors duration-300" 
                  type="checkbox" 
                  name="remember"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">Remember me</label>
              </div>

              {/* Giriş Butonu */}
              <div>
                <button
                  type="submit"
                  className="relative group w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-black to-blue-700 hover:from-black hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-blue-500/50"
                >
                  <span className="relative z-10 flex items-center">
                    Sign in
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 