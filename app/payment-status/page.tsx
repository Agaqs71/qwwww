'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

// Sayfayı dinamik yap
export const dynamic = 'force-dynamic';

// Loading component
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// Main content component
function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  // Timer state
  const [timeRemaining, setTimeRemaining] = useState<number>(60 * 60); // 60 minutes

  useEffect(() => {
    // URL'den parametreleri al
    const orderId = searchParams.get('orderId');
    const cryptoAmount = searchParams.get('cryptoAmount');
    const cryptoSymbol = searchParams.get('cryptoSymbol');
    const address = searchParams.get('address');
    const tokenAmount = searchParams.get('tokenAmount');
    const bonusAmount = searchParams.get('bonusAmount');
    const totalAmount = searchParams.get('totalAmount');

    // Timer'ı başlat
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [searchParams]);

  // Timer formatı
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl mt-16">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        {/* Loading spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Time remaining */}
        <div className="text-yellow-400 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>Time remaining: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</span>
        </div>
        
        <h1 className="text-3xl font-bold">Waiting for Payment</h1>

        <div className="text-gray-400 max-w-md">
          <p>Order <span className="text-blue-400" id="order-id">{searchParams.get('orderId')}</span> is being processed..</p>
          <p className="mt-2">If payment has not been completed, please do so at your earliest convenience.</p>
          <p className="mt-2">If you have already made the payment, please wait while we process your transaction.</p>
        </div>

        <div className="w-full max-w-md bg-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 space-y-6 mt-8">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Amount:</span>
              <span className="font-mono font-bold">
                {searchParams.get('cryptoAmount')} {searchParams.get('cryptoSymbol')}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Address:</span>
              <span className="font-mono text-blue-400">
                {searchParams.get('address')}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Tokens:</span>
              <span className="font-mono text-green-400">
                {searchParams.get('tokenAmount')} $TRUMP
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Bonus Tokens:</span>
              <span className="font-mono text-purple-400">
                +{searchParams.get('bonusAmount')} $TRUMP
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Total Tokens:</span>
              <span className="font-mono font-bold">
                {searchParams.get('totalAmount')} $TRUMP
              </span>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-400 mt-4">
          If you're new to cryptocurrency, check out our <a href="/dashboard/how-to-buy" className="text-blue-400 hover:underline">How to Buy</a> guide to get started.
        </div>

        <button 
          onClick={() => router.push('/dashboard')} 
          className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          Back to Dashboard
        </button>
      </div>
    </main>
  );
}

// Export default component with Suspense
export default function PaymentStatus() {
  return (
    <Suspense fallback={<Loading />}>
      <PaymentStatusContent />
    </Suspense>
  );
} 