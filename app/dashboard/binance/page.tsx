'use client';

import { useState } from 'react';
import { 
  TrendingUp, Menu, Crown, Wallet, User, Banknote, CircleHelp,
  TriangleAlert
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BinancePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard', icon: TrendingUp, text: 'Dashboard' },
    { href: '/buy-token', icon: Wallet, text: 'Buy Token' },
    { href: '/profile', icon: User, text: 'Profile' },
    { href: '/my-tokens', icon: Banknote, text: 'My Tokens' },
    { href: '/status', icon: Crown, text: 'Status' },
    { href: '/how-to-buy', icon: CircleHelp, text: 'How to Buy' },
  ];

  const networks = [
    { name: 'BEP2', description: 'BNB Beacon Chain' },
    { name: 'BEP20', description: 'BNB Smart Chain (BSC)' },
    { name: 'ERC20', description: 'Ethereum network' },
    { name: 'TRC20', description: 'TRON network' },
    { name: 'BTC', description: 'Bitcoin network' },
    { name: 'BTC (SegWit)', description: 'Native Segwit (bech32). Address starts with "bc1"' },
  ];

  const importantNotes = [
    "DO NOT select the cheapest fee option. Select the one that is compatible with the external platform.",
    "Confirm that the receiving platform supports the contract address of the token you're withdrawing.",
    "For certain networks (BEP2, EOS), you must fill in the Memo when making a transfer.",
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
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
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="relative group">
                  <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <link.icon className="w-4 h-4" />
                    <span>{link.text}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-8 max-w-4xl mx-auto pb-12">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-4">
              How to withdraw crypto on Binance
            </h1>
            <p className="text-gray-400">
              A step-by-step guide to safely withdraw your crypto from Binance
            </p>
          </div>

          {/* Video Tutorial */}
          <div className="text-card-foreground shadow bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://fast.wistia.net/embed/iframe/x460r4tnc7"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}
                />
              </div>
              <p className="text-center text-sm text-gray-400">Tutorial Video</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">1. Access Withdrawal</h3>
              <p className="text-gray-300">
                Log in to your Binance app and tap <span className="font-semibold text-white">Wallets</span> - <span className="font-semibold text-white">Spot</span> - <span className="font-semibold text-white">Withdraw</span>.
              </p>
              <div className="relative h-[300px] w-full sm:w-[313px]">
                <Image
                  src="/trumpimg/ebe467ad28f70003844d591ed51b10fc.webp"
                  alt="Binance withdrawal step 1"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">2. Select Cryptocurrency</h3>
              <p className="text-gray-300">
                Choose the cryptocurrency you want to withdraw, for example, BNB. Then, tap <span className="font-semibold text-white">Send via Crypto Network</span>.
              </p>
              <div className="relative h-[300px] w-full">
                <Image
                  src="/trumpimg/1c6df4eb905efd0fcaf3768f463d2835.webp"
                  alt="Binance withdrawal step 2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Warning */}
            <div className="rounded-xl border text-card-foreground shadow bg-red-500/10 border-red-500/20">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <TriangleAlert className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-400">Important Warning</h4>
                    <p className="text-gray-300">
                      Choose the network carefully and make sure that the selected network is the same as the network of the platform you are withdrawing funds to. If you select the wrong network, your funds might be lost and couldn't be recovered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Networks */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Common Networks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {networks.map((network, index) => (
                  <div key={index} className="rounded-xl text-card-foreground shadow bg-black/40 backdrop-blur-xl border border-white/5">
                    <div className="p-4">
                      <h5 className="font-bold text-white">{network.name}</h5>
                      <p className="text-sm text-gray-400">{network.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="rounded-xl text-card-foreground shadow bg-black/40 backdrop-blur-xl border border-white/5">
              <div className="p-6 space-y-4">
                <h4 className="font-bold text-white">Important Notes</h4>
                <ul className="space-y-3 text-gray-300">
                  {importantNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Completing the Withdrawal */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Completing the Withdrawal</h3>
              <div className="space-y-6">
                <p className="text-gray-300">1. Enter the withdrawal amount to see the transaction fee and final amount.</p>
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/trumpimg/5fc358d1b5e02386046a53ac266152a2.webp"
                    alt="Enter withdrawal amount"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300">2. Review and confirm the transaction details carefully.</p>
                <div className="relative h-[300px] w-full sm:w-[377px]">
                  <Image
                    src="/trumpimg/25192bcbda93c7af06a0f314c02946a3.webp"
                    alt="Confirm transaction"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-300">3. Verify the transaction with your passkey or 2FA devices and wait for processing.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
