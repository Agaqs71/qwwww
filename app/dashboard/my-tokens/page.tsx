'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MyTokens() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-black border-b border-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/dashboard">
              <div className="group cursor-pointer">
                <Image 
                  alt="Logo" 
                  width={140} 
                  height={48} 
                  className="group-hover:scale-102 transition-transform duration-300" 
                  src="/trumpimg/T-Meme-Logo_1.webp"
                />
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link className="relative group" href="/dashboard">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-4 h-4">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span>Dashboard</span>
                </div>
              </Link>
              <Link className="relative group" href="/buy-token">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet w-4 h-4">
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                  <span>Buy Token</span>
                </div>
              </Link>
              <Link className="relative group" href="/profile">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-4 h-4">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Profile</span>
                </div>
              </Link>
              <Link className="relative group" href="/my-tokens">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote w-4 h-4">
                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                  <span>My Tokens</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                </div>
              </Link>
              <Link className="relative group" href="/status">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown w-4 h-4">
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                  <span>Status</span>
                </div>
              </Link>
              <Link className="relative group" href="/how-to-buy">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <span>How to Buy</span>
                </div>
              </Link>
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
        <div className="space-y-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
            <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              My $TRUMP Token
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link href="/buy-token">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transform transition hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-5 h-5 mr-2">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Buy More Token
                </button>
              </Link>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transform transition hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5 mr-2">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
                Withdraw Token
              </button>
            </div>
          </div>

          {/* Token Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Token Balance Card */}
            <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)] transition-transform transform hover:scale-105">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet w-6 h-6 text-blue-400">
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-400">Token Balance</p>
                  <p className="text-3xl font-extrabold text-white mt-2">0 $TRUMP</p>
                </div>
              </div>
            </div>

            {/* USD Value Card */}
            <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)] transition-transform transform hover:scale-105">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign w-6 h-6 text-blue-400">
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-400">Equivalent in USD</p>
                  <p className="text-3xl font-extrabold text-white mt-2">$0.00</p>
                  <p className="text-sm text-gray-400 mt-1">1 $TRUMP = $25.6</p>
                </div>
              </div>
            </div>

            {/* Purchased Tokens Card */}
            <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)] transition-transform transform hover:scale-105">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins w-6 h-6 text-blue-400">
                      <circle cx="8" cy="8" r="6"></circle>
                      <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                      <path d="M7 6h1v4"></path>
                      <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-400">Purchased Tokens</p>
                  <p className="text-3xl font-extrabold text-white mt-2">0 $TRUMP</p>
                  <p className="text-sm text-gray-400 mt-1">Total purchases</p>
                </div>
              </div>
            </div>

            {/* Bonus Tokens Card */}
            <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)] transition-transform transform hover:scale-105">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift w-6 h-6 text-blue-400">
                      <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                      <path d="M12 8v13"></path>
                      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-400">Bonus Tokens</p>
                  <p className="text-3xl font-extrabold text-white mt-2">0 $TRUMP</p>
                  <p className="text-sm text-gray-400 mt-1">From referrals and loyalty</p>
                </div>
              </div>
            </div>

            {/* Total Contributed Card */}
            <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)] transition-transform transform hover:scale-105">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card w-6 h-6 text-blue-400">
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-400">Total Contributed</p>
                  <p className="text-3xl font-extrabold text-white mt-2">$0.00</p>
                  <p className="text-sm text-gray-400 mt-1">All time investment</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)] transition-transform transform hover:scale-105">
              <div className="flex flex-col space-y-1.5 p-6 px-6 py-4">
                <div className="tracking-tight text-xl font-semibold text-white">Quick Actions</div>
              </div>
              <div className="p-6 pt-0 space-y-4 px-6 pb-6">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                  View Transaction History
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                  Generate Referral Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 