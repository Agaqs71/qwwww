'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
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
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
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
        <div className="space-y-12">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            My Profile
          </h1>
          <div className="grid gap-12">
            {/* Wallet Balance Card */}
            <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl shadow-[0_0_30px_rgba(0,0,255,0.15)] transition-transform transform hover:scale-105">
              <div className="flex flex-col space-y-1.5 p-6 px-6 py-4">
                <div className="tracking-tight text-2xl font-semibold text-white">Wallet Balance</div>
              </div>
              <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6">
                <div className="flex items-center space-x-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet w-8 h-8 text-blue-400">
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Token Balance</p>
                    <p className="text-2xl font-bold text-white">0 $TRUMP</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign w-8 h-8 text-green-400">
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">USD Value</p>
                    <p className="text-2xl font-bold text-white">$0.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information Card */}
            <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl shadow-[0_0_30px_rgba(0,255,0,0.15)] transition-transform transform hover:scale-105">
              <div className="flex flex-col space-y-1.5 p-6 px-6 py-4">
                <div className="tracking-tight text-2xl font-semibold text-white">Personal Information</div>
              </div>
              <div className="p-6 pt-0 px-6 pb-6">
                <form className="text-white space-y-6">
                  <div>
                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-gray-400" htmlFor="name">
                      Full Name
                    </label>
                    <div className="relative mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input
                        className="flex h-9 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full bg-black/40 border border-white/10 rounded-lg px-12 py-3 text-white"
                        id="name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-gray-400" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <input
                        className="flex h-9 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full bg-black/40 border border-white/10 rounded-lg px-12 py-3 text-white"
                        id="email"
                        type="email"
                        defaultValue="@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                      type="submit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-save w-5 h-5 mr-2">
                        <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                        <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                        <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                      </svg>
                      Save Changes
                    </button>
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 border border-white/10 bg-black/40 text-white px-8 py-4 rounded-xl shadow hover:bg-white/5 transition"
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-5 h-5 mr-2">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 