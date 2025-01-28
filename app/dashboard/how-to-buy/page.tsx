'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HowToBuy() {
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
              <Link href="/dashboard" className="relative group">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span>Dashboard</span>
                </div>
              </Link>
              <Link href="/buy-token" className="relative group">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                  <span>Buy Token</span>
                </div>
              </Link>
              <Link href="/profile" className="relative group">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Profile</span>
                </div>
              </Link>
              <Link href="/my-tokens" className="relative group">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                  <span>My Tokens</span>
                </div>
              </Link>
              <Link href="/status" className="relative group">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                  <span>Status</span>
                </div>
              </Link>
              <Link href="/how-to-buy" className="relative group">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <span>How to Buy</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                </div>
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-400 hover:text-white transition-colors" aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
        <div className="space-y-12" style={{ opacity: 1 }}>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              How to Buy $TRUMP
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto">
              Follow these simple steps to purchase $TRUMP and join our growing community. New to crypto? Check out our guide for beginners below.
            </p>
          </div>

          {/* Via TrustWallet/MetaMask Section */}
          <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)]">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="tracking-tight text-2xl font-semibold text-white">
                Buy Crypto via TrustWallet or MetaMask
              </div>
            </div>
            <div className="p-6 pt-6 space-y-6">
              {/* Step 1 */}
              <div className="flex space-x-6 items-start">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    1
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Install TrustWallet or MetaMask</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Download TrustWallet or MetaMask from the App Store or Google Play. Ensure you download from official sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex space-x-6 items-start">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    2
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                            <line x1="2" x2="22" y1="10" y2="10"></line>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Use Your Credit/Debit Card</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Within the app, choose Buy Crypto. Select USDT, ETH, or BTC and pay securely with your credit or debit card.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex space-x-6 items-start">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    3
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
                            <path d="m21 2-9.6 9.6"></path>
                            <circle cx="7.5" cy="15.5" r="5.5"></circle>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Secure Your Wallet</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Save your recovery phrase securely. Never share it with anyone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex space-x-6 items-start">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Transfer Crypto to Address you got</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Once you have purchased crypto, transfer it to the address provided on the Buy Token page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buy Crypto via Crypto Exchanges Section */}
          <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)]">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="tracking-tight text-2xl font-semibold text-white">
                Buy Crypto via Crypto Exchanges
              </div>
            </div>
            <div className="p-6 pt-6 space-y-6">
              {/* Step 1 */}
              <div className="flex space-x-6 items-start" style={{ opacity: 1, transform: 'none' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    1
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Create an Exchange Account</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Sign up on Coinbase, Binance, or OKX. Verify your identity with basic documents to get started.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex space-x-6 items-start" style={{ opacity: 1, transform: 'none' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    2
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                            <line x1="2" x2="22" y1="10" y2="10"></line>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Buy USDT or ETH</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Use your credit/debit card to purchase USDT (Tether) or ETH (Ethereum) on the exchange.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex space-x-6 items-start" style={{ opacity: 1, transform: 'none' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    3
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Withdraw to Address</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Once you have purchased crypto, transfer it to the address provided on the Buy Token page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/binance" className="inline-flex items-center text-blue-500 hover:text-blue-400 text-sm transition-all duration-200 group">
                Learn how to withdraw from Binance
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="text-card-foreground bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,255,211,0.15)]">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="tracking-tight text-2xl font-semibold text-white">
                Step-by-Step $TRUMP Purchase Guide
              </div>
            </div>
            <div className="p-6 pt-6 space-y-6">
              {/* Step 1 */}
              <div className="flex space-x-6 items-start" style={{ opacity: 1, transform: 'none' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    1
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Select Your Currency</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Choose your preferred cryptocurrency from the available options in the Buy Token page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex space-x-6 items-start" style={{ opacity: 1, transform: 'none' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    2
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                            <line x1="2" x2="22" y1="10" y2="10"></line>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Enter Amount</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Input the amount you wish to invest. The system will calculate the $TRUMP you'll receive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex space-x-6 items-start" style={{ opacity: 1, transform: 'none' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    3
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Review Transaction</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Carefully review the transaction details before proceeding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex space-x-6 items-start" style={{ opacity: 1, transform: 'none' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    4
                  </div>
                  <div className="absolute top-full left-1/2 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-600 to-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                            <path d="m9 11 3 3L22 4"></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Complete Payment</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Send the exact amount to the provided wallet address. Verify the address to avoid errors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex space-x-6 items-start" style={{ opacity: 1, transform: 'none' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md text-white font-extrabold">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-card-foreground shadow relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:shadow-[0_0_40px_rgba(0,225,201,0.09)] transition-transform duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-20 rounded-2xl pointer-events-none"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                            <path d="m9 11 3 3L22 4"></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white">Receive Tokens</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Once your payment is confirmed, the $TRUMP will be credited to your account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          {/* Buy Now Button */}
          <div className="flex justify-center">
            <Link href="/buy-token">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition-transform">
                Buy $TRUMP Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 w-5 h-5">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Smartsupp Chat Widget */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = 'd77f7fe663b1682e2e0ec27cb289e4231fc48b45';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `
        }}
      />
    </div>
  );
} 