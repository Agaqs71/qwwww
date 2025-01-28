'use client';

import { useState } from 'react';

export default function PaymentStatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/dashboard">
              <div className="group cursor-pointer">
                <img 
                  alt="Logo" 
                  width="140" 
                  height="48" 
                  className="group-hover:scale-102 transition-transform duration-300" 
                  src="/trumpimg/T-Meme-Logo_1.webp"
                />
              </div>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a className="relative group" href="/dashboard">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span>Dashboard</span>
                </div>
              </a>
              <a className="relative group" href="/dashboard/buy-token">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                  <span>Buy Token</span>
                </div>
              </a>
              <a className="relative group" href="/dashboard/profile">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Profile</span>
                </div>
              </a>
              <a className="relative group" href="/dashboard/my-tokens">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                  <span>My Tokens</span>
                </div>
              </a>
              <a className="relative group" href="/dashboard/status">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                  <span>Status</span>
                </div>
              </a>
              <a className="relative group" href="/dashboard/how-to-buy">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <span>How to Buy</span>
                </div>
              </a>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Toggle menu"
              >
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

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black/95 fixed inset-0 z-40 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
          <a href="/dashboard/buy-token" className="text-gray-300 hover:text-white transition-colors">Buy Token</a>
          <a href="/dashboard/profile" className="text-gray-300 hover:text-white transition-colors">Profile</a>
          <a href="/dashboard/my-tokens" className="text-gray-300 hover:text-white transition-colors">My Tokens</a>
          <a href="/dashboard/status" className="text-gray-300 hover:text-white transition-colors">Status</a>
          <a href="/dashboard/how-to-buy" className="text-gray-300 hover:text-white transition-colors">How to Buy</a>
        </div>
      </div>

      {children}
    </div>
  );
} 