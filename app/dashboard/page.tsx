'use client';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-black border-b border-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/dashboard">
              <div className="group cursor-pointer">
                <img 
                  alt="Logo" 
                  loading="lazy" 
                  width="140" 
                  height="48" 
                  decoding="async" 
                  data-nimg="1" 
                  className="group-hover:scale-102 transition-transform duration-300" 
                  srcSet="/trumpimg/T-Meme-Logo_1.webp, /trumpimg/T-Meme-Logo_1.webp"
                  src="/trumpimg/T-Meme-Logo_1.webp" 
                  style={{ color: 'transparent' }}
                />
              </div>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a className="relative group" href="/dashboard">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-4 h-4">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span>Dashboard</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" style={{ opacity: 1 }}></div>
                </div>
              </a>
              <a className="relative group" href="/dashboard/buy-token">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet w-4 h-4">
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                  <span>Buy Token</span>
                </div>
              </a>
              <a className="relative group" href="/dashboard/profile">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-4 h-4">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Profile</span>
                </div>
              </a>
              <a className="relative group" href="/dashboard/my-tokens">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote w-4 h-4">
                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                  <span>My Tokens</span>
                </div>
              </a>
              <a className="relative group" href="/dashboard/status">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown w-4 h-4">
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                  <span>Status</span>
                </div>
              </a>
              <a className="relative group" href="/dashboard/how-to-buy">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <span>How to Buy</span>
                </div>
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-400 hover:text-white transition-colors" aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-10 px-6 py-12" style={{ opacity: 1 }}>
          <div className="text-center" style={{ opacity: 1, transform: 'none' }}>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">Dashboard Overview</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ opacity: 1, transform: 'none' }}>
            {/* Balance Card */}
            <div className="relative group h-full">
              <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,0,255,0.15)] transition-all duration-300 transform hover:scale-105 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-20 pointer-events-none rounded-2xl"></div>
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 space-y-3 sm:space-y-0">
                  <div className="tracking-tight text-lg font-semibold text-white">Balance</div>
                  <div className="p-2 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet w-6 h-6 text-blue-400">
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6 pt-0 px-6 pb-6">
                  <div className="flex flex-col items-start">
                    <h3 className="text-5xl font-bold text-blue-400">0 $TRUMP</h3>
                    <p className="text-gray-400 text-sm mt-2">Your current $TRUMP token balance</p>
                    <a href="/dashboard/how-to-buy">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                        How to Buy?
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-4 h-4">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* USD Equivalent Card */}
            <div className="relative group h-full">
              <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,255,0,0.15)] transition-all duration-300 transform hover:scale-105 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-20 pointer-events-none rounded-2xl"></div>
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 space-y-3 sm:space-y-0">
                  <div className="flex flex-col">
                    <div className="tracking-tight text-lg font-semibold text-white">USD Equivalent</div>
                    <p className="text-gray-400 text-sm mt-1">Current value of your tokens</p>
                  </div>
                  <div className="p-2 bg-green-900/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign w-6 h-6 text-green-400">
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6 pt-0 px-6 pb-6">
                  <div className="flex flex-col items-start">
                    <h3 className="text-5xl font-bold text-green-400">$0</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                      <p className="text-gray-400 text-sm">1 $TRUMP = $25.6</p>
                      <span className="text-gray-500 text-sm hidden sm:inline">•</span>
                      <p className="text-gray-400 text-sm">Stage 3 Price</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="relative h-full" tabIndex={0} style={{ transform: 'none' }}>
              <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)] h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-20 pointer-events-none rounded-2xl"></div>
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 space-y-3 sm:space-y-0">
                  <div className="flex flex-col">
                    <div className="tracking-tight text-lg items-center font-semibold text-white">Status</div>
                    <p className="text-gray-400 items-center text-sm mt-1">Based on your contribution</p>
                  </div>
                  <div className="p-3 bg-purple-800/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-6 h-6 text-purple-400">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  </div>
                </div>
                <div className="p-6 pt-0 px-6 pb-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-4xl font-bold text-blue-400">Basic</h3>
                      <p className="text-sm text-gray-400">Progress to <span className="text-purple-400">Bronze</span></p>
                    </div>
                    <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300" 
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                    <a href="/dashboard/buy-token">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                        BUY $TRUMP
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-4 h-4">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trump Tweet Card */}
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg transition-all duration-300" tabIndex="0" style={{ transform: 'none' }}>
              <div className="p-6 px-8 py-6">
                <div className="flex items-center gap-6">
                  <img 
                    alt="Donald J. Trump" 
                    className="w-16 h-16 rounded-full object-cover" 
                    src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      Donald J. Trump
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check w-5 h-5 text-blue-400">
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </h3>
                    <p className="text-sm text-gray-400">@realDonaldTrump</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed whitespace-pre-wrap">
                  My NEW Official Trump Meme is HERE! It's time to celebrate everything we stand for: WINNING! Join my very special Trump Community. GET YOUR $TRUMP NOW.
                </p>
              </div>
            </div>
          </div>

          {/* Token Sales Progress */}
          <div style={{ opacity: 1, transform: 'none' }}>
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg transition-all duration-300" tabIndex="0">
              <div className="flex-col space-y-1.5 p-6 flex items-center justify-between px-6 py-4">
                <div className="tracking-tight text-lg font-semibold text-white">Token Sales Progress</div>
              </div>
              <div className="p-6 pt-0 px-6 pb-6 space-y-6">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Raised Amount: 5.317.974 $TRUMP</span>
                  <span>Total Token: 6.475.000 $TRUMP</span>
                </div>
                <div className="relative">
                  <div className="h-3 bg-black/40 rounded-full overflow-hidden backdrop-blur-xl">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-full" 
                      style={{ width: '82.13%' }}
                    ></div>
                  </div>
                  <p className="text-blue-400 text-sm mt-2">82.13% Complete</p>
                </div>
                <div className="text-center">
                  <a href="/dashboard/buy-token">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                      BUY $TRUMP
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-3 w-5 h-5">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
