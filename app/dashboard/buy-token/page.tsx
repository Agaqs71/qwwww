'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

// Kripto para listesi ve oranları
const cryptoRates = {
    BTC: { rate: 4085.16, address: "bc1qumpvg75qqtdnwgwraju3exy9h0yckkj770nv87" },
    ETH: { rate: 129.09, address: "0xD3520612F6f73b5665a7eA42B114B9CC351Ca125" },
    USDT: { rate: 0.04, address: "0xD3520612F6f73b5665a7eA42B114B9CC351Ca125" },
    USDC: { rate: 0.04, address: "0xD3520612F6f73b5665a7eA42B114B9CC351Ca125" },
    BNB: { rate: 26.78, address: "0xD3520612F6f73b5665a7eA42B114B9CC351Ca125" },
    XRP: { rate: 0.12, address: "rP4Q2eKq2BudqGQ3adZuktp3xWt9LPR6Zr" },
    PEPE: { rate: 0.000001, address: "0xD3520612F6f73b5665a7eA42B114B9CC351Ca125" },
    SOL: { rate: 8.75, address: "8fh2Q7gogoLux2maZd4d1tQM9EQLce8kv8NznJazBp7v" },
    DOGE: { rate: 0.01, address: "DPLjXtMFxuwvbPTP3X5uDFXFkSfWkNB1RG" },
    XLM: { rate: 0.02, address: "GCT7K5F27MUELI5UX5C7RRAIIQHDC6XKD6JFH5GR2E5JBWJZZVMXTAZN" },
    AVAX: { rate: 12.45, address: "0xD3520612F6f73b5665a7eA42B114B9CC351Ca125" },
    SHIB: { rate: 0.000001, address: "0xD3520612F6f73b5665a7eA42B114B9CC351Ca125" },
    BUSD: { rate: 0.04, address: "0xD3520612F6f73b5665a7eA42B114B9CC351Ca125" },
    UNI: { rate: 4.85, address: "0xD3520612F6f73b5665a7eA42B114B9CC351Ca125" },
    ADA: { rate: 0.45, address: "addr1qyhajxrnf7sna5l7zc40wyyz4cavs67l6qht8d8c3zpmpvjf868fhq5cwspq8m6feqxdzxd5xejxzmyn3z2ttzf2d5ssh3a6hx" },
    TON: { rate: 0.20, address: "UQAG8qFSqZduegSlgAS4oTdTbgchv5ecPAKaYEKSyUVZn4rY" },
    BCH: { rate: 17.18, address: "qrh8hn4ek96qh7aczatn2jxal8fwphagluurmjtq0c" },
    DASH: { rate: 1.37, address: "XyBNgUqUwDWpxs7vZet5TuZHZhz6r8SU86" },
    DOT: { rate: 5.20, address: "12n8bo2MdgxntPHrvJXJjbU4gkamgypuZ3eeiMiFPy7ym3AQ" },
    WAVES: { rate: 0.06, address: "3PJsdRJevivTS36A85UWEKYrxgr4oufrayd" }
} as const;

type CryptoSymbol = keyof typeof cryptoRates;

export default function BuyToken() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // State tanımlamaları
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoSymbol | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [inputMode, setInputMode] = useState<'crypto' | 'trump'>('crypto');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Dialog state'leri
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showWaitingDialog, setShowWaitingDialog] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<{ amount: boolean; address: boolean }>({
    amount: false,
    address: false
  });

  // Bonus hesaplama
  const calculateBonus = (amount: number): number => {
    // Base bonus calculation
    let baseBonus = 0;
    if (amount >= 50000) baseBonus = 15;
    else if (amount >= 25000) baseBonus = 12.5;
    else if (amount >= 5000) baseBonus = 10;
    else if (amount >= 1000) baseBonus = 7.5;
    else if (amount >= 250) baseBonus = 5;
    else if (amount >= 100) baseBonus = 2.5;
    
    // Her zaman ekstra 5% bonus ekle
    const extraBonus = 5;
    
    return baseBonus + extraBonus;
  };

  // Status level belirleme
  const getStatusLevel = (amount: number): string => {
    if (amount >= 50000) return 'Legendary';
    if (amount >= 25000) return 'Diamond';
    if (amount >= 5000) return 'Platinum';
    if (amount >= 1000) return 'Gold';
    if (amount >= 250) return 'Silver';
    if (amount >= 100) return 'Bronze';
    return 'Basic';
  };

  // Kopyalama fonksiyonu
  const copyToClipboard = async (text: string, type?: 'amount' | 'address') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type) {
        setCopyFeedback(prev => ({ ...prev, [type]: true }));
        setTimeout(() => {
          setCopyFeedback(prev => ({ ...prev, [type]: false }));
        }, 5000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Detayları güncelle
  const updateDetails = () => {
    if (!selectedCrypto || !paymentAmount) return null;

    const rate = cryptoRates[selectedCrypto].rate;
    const trumpAmount = inputMode === 'crypto' ? paymentAmount * rate : paymentAmount;
    const cryptoAmount = inputMode === 'crypto' ? paymentAmount : paymentAmount / rate;
    
    const status = getStatusLevel(trumpAmount);
    const bonusPercentage = calculateBonus(trumpAmount);
    const bonusAmount = (trumpAmount * bonusPercentage) / 100;
    const totalAmount = trumpAmount + bonusAmount;
    const progressPercentage = Math.min((trumpAmount / 50000) * 100, 100);

    console.log('Debug:', {
      trumpAmount,
      bonusPercentage,
      bonusAmount,
      totalAmount
    });

    return {
      trumpAmount,
      cryptoAmount,
      status,
      bonus: bonusPercentage,
      bonusAmount,
      totalAmount,
      progressPercentage,
      formattedCryptoAmount: cryptoAmount.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 8
      }),
      formattedTrumpAmount: Math.floor(trumpAmount).toLocaleString()
    };
  };

  // Payment status sayfasına yönlendir
  const redirectToPaymentStatus = (cryptoAmount: number, address: string) => {
    if (!selectedCrypto) return;

    const orderId = Math.random().toString(36).substring(2, 12).toUpperCase();
    const details = updateDetails();
    if (!details) return;

    const { trumpAmount } = details;
    const bonusAmount = (trumpAmount * calculateBonus(trumpAmount)) / 100;
    const totalAmount = trumpAmount + bonusAmount;

    // URL parametrelerini oluştur
    const params = new URLSearchParams({
      orderId,
      cryptoAmount: cryptoAmount.toString(),
      cryptoSymbol: selectedCrypto,
      address,
      tokenAmount: Math.floor(trumpAmount).toLocaleString(),
      bonusAmount: Math.floor(bonusAmount).toLocaleString(),
      totalAmount: Math.floor(totalAmount).toLocaleString()
    });

    // Direkt payment status sayfasına yönlendir
    router.push(`/payment-status?${params.toString()}`);
  };

  // Payment Dialog
  const PaymentDialog = () => {
    const [isAgreed, setIsAgreed] = useState(false);
    const details = updateDetails();
    if (!details || !selectedCrypto) return null;

    const { cryptoAmount, trumpAmount } = details;
    const bonusAmount = (trumpAmount * calculateBonus(trumpAmount)) / 100;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 bg-black p-6 text-white rounded-xl">
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Secure Payment Process
              </h2>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-black/50 backdrop-blur-lg border border-blue-500/10 rounded-2xl space-y-4 shadow-inner">
              <div className="flex items-center space-x-3 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h3 className="font-medium text-lg">Transaction Details</h3>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Payment Amount:</span>
                  <span className="font-mono font-bold">{cryptoAmount.toFixed(8)} {selectedCrypto}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Tokens to Receive:</span>
                  <span className="font-mono font-bold text-green-400">{Math.floor(trumpAmount).toLocaleString()} $TRUMP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Bonus Tokens:</span>
                  <span className="font-mono font-bold text-purple-400">+{Math.floor(bonusAmount).toLocaleString()} $TRUMP</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-blue-500/10 rounded-lg">
              <input 
                type="checkbox" 
                id="terms-checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="h-4 w-4 bg-gray-800 border-blue-500 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label className="text-sm text-gray-300">
                I agree to the token purchase agreement and sale terms
              </label>
            </div>

            <button 
              onClick={() => {
                setShowPaymentDialog(false);
                const details = updateDetails();
                if (!details || !selectedCrypto) return;
                const { cryptoAmount } = details;
                const address = cryptoRates[selectedCrypto].address;
                setShowWaitingDialog(true);
              }}
              disabled={!isAgreed}
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 px-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 rounded-xl shadow-md hover:shadow-xl ${!isAgreed && 'opacity-50 cursor-not-allowed'}`}
            >
              Proceed with Purchase
            </button>
          </div>
          
          <button 
            onClick={() => setShowPaymentDialog(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </div>
      </div>
    );
  };

  // Waiting Dialog
  const WaitingDialog = () => {
    const details = updateDetails();
    if (!details || !selectedCrypto) return null;

    const { cryptoAmount } = details;
    const address = cryptoRates[selectedCrypto].address;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 bg-black p-6 text-white rounded-xl">
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Waiting for Payment
              </h2>
            </div>
          </div>

          <div className="mt-4">
            <div className="mt-6 space-y-4">
              <p className="text-sm text-gray-300">
                Send exactly <span className="font-mono font-bold text-lg">{Number.isInteger(cryptoAmount) ? cryptoAmount.toFixed(0) : cryptoAmount.toFixed(8)}</span> {selectedCrypto}:
              </p>
              
              <div className="p-4 bg-black rounded-xl border border-gray-800 flex justify-between items-center">
                <p className="font-mono text-sm text-gray-300 break-all mr-2">{Number.isInteger(cryptoAmount) ? cryptoAmount.toFixed(0) : cryptoAmount.toFixed(8)}</p>
                <button 
                  onClick={() => copyToClipboard(Number.isInteger(cryptoAmount) ? cryptoAmount.toFixed(0) : cryptoAmount.toFixed(8), 'amount')}
                  className="p-2 rounded-lg transition-all duration-150 hover:bg-white/5"
                >
                  {copyFeedback.amount ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  )}
                </button>
              </div>

              <p className="text-sm text-gray-300">To the address below:</p>
              <div className="p-4 bg-black rounded-xl border border-gray-800 flex justify-between items-center">
                <p className="font-mono text-sm text-gray-300 break-all mr-2">{address}</p>
                <button 
                  onClick={() => copyToClipboard(address, 'address')}
                  className="p-2 rounded-lg transition-all duration-150 hover:bg-white/5"
                >
                  {copyFeedback.address ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  )}
                </button>
              </div>

              <div className="space-y-1 text-xs text-gray-400">
                <p>• A minimum of 12 confirmations is required to process this payment.</p>
                <p>• Ensure the exact amount is sent to avoid discrepancies.</p>
                <p>• Your tokens will be credited once payment is confirmed.</p>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button 
                onClick={() => {
                  const details = updateDetails();
                  if (!details || !selectedCrypto) return;
                  const { cryptoAmount } = details;
                  const address = cryptoRates[selectedCrypto].address;
                  redirectToPaymentStatus(cryptoAmount, address);
                }}
                className="flex-1 bg-black border border-green-700 text-white px-4 py-3 rounded-xl hover:bg-green-800/20 transition-colors"
              >
                Confirm & Proceed
              </button>
              <button 
                onClick={() => setShowWaitingDialog(false)}
                className="flex-1 bg-black border border-red-500 text-white px-4 py-3 rounded-xl hover:bg-red-800/20 transition-colors"
              >
                Cancel Order
              </button>
            </div>
          </div>

          <button 
            onClick={() => setShowWaitingDialog(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    );
  };

  // URL parametrelerini koru
  const getUrlWithParams = (path: string) => {
    const params = new URLSearchParams();
    
    // searchParams'dan parametreleri al
    const promoCode = searchParams.get('promoCode');
    const email = searchParams.get('email');
    const password = searchParams.get('password');
    
    if (promoCode) params.append('promoCode', promoCode);
    if (email) params.append('email', email);
    if (password) params.append('password', password);
    
    const queryString = params.toString();
    return queryString ? `${path}?${queryString}` : path;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-black border-b border-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href={getUrlWithParams('/dashboard')}>
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
              <a className="relative group" href={getUrlWithParams('/dashboard')}>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-4 h-4">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <span>Dashboard</span>
                </div>
              </a>
              <a className="relative group" href={getUrlWithParams('/dashboard/buy-token')}>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet w-4 h-4">
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                  <span>Buy Token</span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                </div>
              </a>
              <a className="relative group" href={getUrlWithParams('/dashboard/profile')}>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-4 h-4">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Profile</span>
                </div>
              </a>
              <a className="relative group" href={getUrlWithParams('/dashboard/my-tokens')}>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote w-4 h-4">
                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                  <span>My Tokens</span>
                </div>
              </a>
              <a className="relative group" href={getUrlWithParams('/dashboard/status')}>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown w-4 h-4">
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                  <span>Status</span>
                </div>
              </a>
              <a className="relative group" href={getUrlWithParams('/dashboard/how-to-buy')}>
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
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">
            Buy $TRUMP
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Select your preferred currency and calculate your potential rewards.
            <br />
            <a href="/how-to-buy" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-400 text-sm transition-all duration-200 group">
              New to crypto? Learn how to get started
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </p>
        </div>

        {/* Input Area */}
        {selectedCrypto && (
          <div className="mb-8">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  value={paymentAmount || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || /^\d*\.?\d*$/.test(value)) {
                      setPaymentAmount(parseFloat(value) || 0);
                    }
                  }}
                  className="w-full bg-transparent text-2xl font-bold text-white border-none focus:outline-none"
                  placeholder="Enter amount"
                />
                <button
                  onClick={() => {
                    if (!selectedCrypto || !paymentAmount) return;
                    setInputMode(inputMode === 'crypto' ? 'trump' : 'crypto');
                    const rate = cryptoRates[selectedCrypto].rate;
                    if (inputMode === 'crypto') {
                      setPaymentAmount(paymentAmount * rate);
                    } else {
                      setPaymentAmount(paymentAmount / rate);
                    }
                  }}
                  className="text-xl font-medium text-gray-400 hover:text-white transition-colors px-5 py-2.5 rounded-lg hover:bg-white/5 flex items-center"
                >
                  <div className="flex items-center gap-3 min-w-[120px] border-r border-gray-700 pr-4 mr-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <img
                        alt={inputMode === 'crypto' ? selectedCrypto : 'TRUMP'}
                        width="24"
                        height="24"
                        className="rounded-full"
                        src={inputMode === 'crypto' 
                          ? (selectedCrypto === 'TON' ? 'https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=040' :
                             selectedCrypto === 'PEPE' ? 'https://cryptologos.cc/logos/pepe-pepe-logo.svg?v=040' :
                             selectedCrypto === 'SHIB' ? 'https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=040' :
                             selectedCrypto === 'UNI' ? 'https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=040' :
                             selectedCrypto === 'BUSD' ? 'https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=040' :
                             selectedCrypto === 'AVAX' ? 'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=040' :
                             selectedCrypto === 'DOT' ? 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=040' :
                             selectedCrypto === 'SOL' ? 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=040' :
                             selectedCrypto === 'ADA' ? 'https://cryptologos.cc/logos/cardano-ada-logo.svg?v=040' :
                             `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/svg/color/${selectedCrypto.toLowerCase()}.svg`)
                          : "/trumpimg/T-Meme-Logo_1.webp"
                        }
                      />
                    </div>
                    <span className="flex-shrink-0">{inputMode === 'crypto' ? selectedCrypto : 'TRUMP'}</span>
                  </div>
                  <div className="w-5 h-5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M12 3v18"/>
                      <path d="m17 8-5-5-5 5"/>
                      <path d="m17 16-5 5-5-5"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Details */}
            {(() => {
              const details = updateDetails();
              if (!details) return null;

              const {
                trumpAmount,
                status,
                bonus,
                progressPercentage,
                formattedCryptoAmount,
                formattedTrumpAmount
              } = details;

              return (
                <div className="mt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Progress to next tier</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{formattedTrumpAmount}</span>
                      <span className="text-white">$TRUMP</span>
                      <span className="text-blue-400 ml-2">{status}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>100</span>
                      <span>250</span>
                      <span>1,000</span>
                      <span>5,000</span>
                      <span>25,000</span>
                      <span>50,000</span>
                    </div>
                    <div className="h-2 bg-black/40 rounded-full overflow-hidden mt-1">
                      <div
                        className={`h-full transition-all duration-300 ${
                          trumpAmount >= 50000 ? 'bg-red-500' :
                          trumpAmount >= 25000 ? 'bg-blue-500' :
                          trumpAmount >= 5000 ? 'bg-yellow-500' :
                          trumpAmount >= 1000 ? 'bg-gray-500' :
                          trumpAmount >= 250 ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                      <div className="text-gray-400 text-sm">You Pay</div>
                      <div className="text-xl font-bold text-white mt-1">
                        {formattedCryptoAmount} {selectedCrypto}
                      </div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                      <div className="text-gray-400 text-sm">You Receive</div>
                      <div className="text-xl font-bold text-white mt-1">
                        {formattedTrumpAmount} $TRUMP
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-xl border border-blue-500/20 rounded-xl p-4 mt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-gray-400 text-sm">Status Level</div>
                        <div className="text-2xl font-bold text-white mt-1">{status}</div>
                      </div>
                      <div className="px-2 py-1 rounded-full bg-blue-500/20 text-sm text-blue-400">
                        {bonus}% Bonus
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowPaymentDialog(true)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-6 text-xl rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform mt-6"
                  >
                    Make a Manual Payment
                  </button>
                </div>
              );
            })()}
          </div>
        )}

        {/* Crypto Selector */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <div className="flex items-center gap-2">
            <span>Max:</span>
            <div className="px-2 py-0.5 rounded-lg bg-white/5 font-medium">100,000 $TRUMP</div>
          </div>
        </div>

        <div className="relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl blur-3xl"></div>
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Select Payment Method
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Choose your preferred cryptocurrency for secure and instant transactions
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow group">
                    <input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex px-3 py-1 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-12 pl-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-blue-500/50 transition-all group-hover:border-white/20"
                      placeholder="Search cryptocurrency..."
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                <div className="grid gap-4 transition-all grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                  {Object.entries(cryptoRates)
                    .filter(([symbol]) => 
                      symbol.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map(([symbol, { rate }], index) => (
                      <div
                        key={symbol}
                        onClick={() => setSelectedCrypto(symbol as CryptoSymbol)}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className={`group relative bg-black/40 backdrop-blur-xl border ${
                          selectedCrypto === symbol ? 'border-blue-500 shadow-[0_0_30px_rgba(0,0,255,0.15)]' : 'border-white/5'
                        } rounded-2xl cursor-pointer overflow-hidden hover:border-blue-500/50 transition-all duration-300`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative flex items-center gap-4 p-5">
                            <div className="relative">
                              <div className="rounded-xl bg-black/40 flex items-center justify-center w-14 h-14">
                                <img
                                  alt={symbol}
                                  width="32"
                                  height="32"
                                  className="group-hover:scale-110 transition-transform duration-300"
                                  src={
                                    symbol === 'TON' ? 'https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=040' :
                                    symbol === 'PEPE' ? 'https://cryptologos.cc/logos/pepe-pepe-logo.svg?v=040' :
                                    symbol === 'SHIB' ? 'https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=040' :
                                    symbol === 'UNI' ? 'https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=040' :
                                    symbol === 'BUSD' ? 'https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=040' :
                                    symbol === 'AVAX' ? 'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=040' :
                                    symbol === 'DOT' ? 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=040' :
                                    symbol === 'SOL' ? 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=040' :
                                    symbol === 'ADA' ? 'https://cryptologos.cc/logos/cardano-ada-logo.svg?v=040' :
                                    `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/svg/color/${symbol.toLowerCase()}.svg`
                                  }
                                />
                              </div>
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg font-semibold text-white truncate">{symbol}</h3>
                              </div>
                              <p className="text-sm text-gray-400 mt-0.5 truncate">
                                1 {symbol} = {rate} $TRUMP
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-3 mt-8">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500/50 hover:bg-blue-500/5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </button>
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg text-sm">
                    <span className="text-blue-400">{currentPage}</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-400">{Math.ceil(Object.keys(cryptoRates).length / itemsPerPage)}</span>
                  </div>
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(Object.keys(cryptoRates).length / itemsPerPage)))}
                    disabled={currentPage === Math.ceil(Object.keys(cryptoRates).length / itemsPerPage)}
                    className="p-2 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500/50 hover:bg-blue-500/5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showPaymentDialog && <PaymentDialog />}
      {showWaitingDialog && <WaitingDialog />}
    </div>
  );
} 
