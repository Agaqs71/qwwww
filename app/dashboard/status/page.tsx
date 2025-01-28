'use client';

import { useState } from 'react';
import { Medal, Sparkles, TriangleAlert, TrendingUp, Menu, Crown, Wallet, User, Banknote, CircleHelp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TierBenefit {
  text: string;
}

interface StatusTier {
  name: string;
  range: string;
  benefits: TierBenefit[];
}

export default function StatusPage() {
  const [currentBalance] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedTier, setExpandedTier] = useState<number | null>(null);
  const bronzeThreshold = 100;
  const progress = Math.min((currentBalance / bronzeThreshold) * 100, 100);

  const tiers: StatusTier[] = [
    {
      name: 'Bronze Status',
      range: '100 - 250 tokens',
      benefits: [
        { text: 'Reduced withdrawal fees (2% lower than the standard rate)' },
        { text: 'A chance to win a Tesla Plaid' },
      ],
    },
    {
      name: 'Silver Status',
      range: '250 - 1,000 tokens',
      benefits: [
        { text: 'Zero trading fees' },
        { text: '24/7 priority support' },
        { text: 'Participation in a Zoom call with developers and other investors' },
        { text: 'Increased chances to win a Tesla Plaid' },
      ],
    },
    {
      name: 'Gold Status',
      range: '1,000 - 5,000 tokens',
      benefits: [
        { text: '10% discount on all Tesla products for 2 years' },
        { text: 'Ability to withdraw tokens before listing' },
        { text: 'Participation in quarterly meetings with top management and token developers' },
        { text: 'Additional bonus: +5% on all token deposits' },
      ],
    },
    {
      name: 'Platinum Status',
      range: '5,000 - 25,000 tokens',
      benefits: [
        { text: 'Lifetime 20% discount on all Tesla products' },
        { text: 'Personal financial advisor' },
        { text: 'Access to all VIP events' },
        { text: '5-year gift subscription to Starlink' },
        { text: 'Access to an exclusive alpha group with insider information' },
        { text: 'Special NFT artwork from our community as a gift' },
      ],
    },
    {
      name: 'Diamond Status',
      range: '25,000 - 50,000 tokens',
      benefits: [
        { text: 'Personal meeting with the Donald and project founders' },
        { text: 'Priority investment opportunities in new company projects' },
        { text: 'Free Tesla Plaid upon reaching a 50,000 contribution' },
        { text: 'Unique community status with voting rights on important decisions' },
        { text: 'Early access to the app (new trading platform X)' },
      ],
    },
    {
      name: 'Legendary Status',
      range: '50,000+ tokens',
      benefits: [
        { text: 'Full access to all previous bonuses' },
        { text: 'A share of the profits from future company projects' },
        { text: 'Exclusive terms for token purchases in future presales' },
        { text: 'Ability to propose your own improvements to the X ecosystem' },
        { text: 'A personalized Tesla of any model with a limited edition design from the company' },
        { text: "A share in the X company's stock upon reaching a 200,000 X contribution" },
      ],
    },
  ];

  const navLinks = [
    { href: '/dashboard', icon: TrendingUp, text: 'Dashboard' },
    { href: '/buy-token', icon: Wallet, text: 'Buy Token' },
    { href: '/profile', icon: User, text: 'Profile' },
    { href: '/my-tokens', icon: Banknote, text: 'My Tokens' },
    { href: '/status', icon: Crown, text: 'Status' },
    { href: '/how-to-buy', icon: CircleHelp, text: 'How to Buy' },
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
                  src="/trumpimg/T-Meme-Logo_1.webp"
                  alt="Logo"
                  width={140}
                  height={48}
                  className="group-hover:scale-102 transition-transform duration-300"
                />
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="relative group">
                  <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <link.icon className="w-4 h-4" />
                    <span>{link.text}</span>
                    {link.href === '/status' && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                    )}
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
        <div className="relative min-h-screen text-white">
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
          <div className="relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {/* Header Section */}
              <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">
                  Status Tiers
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Explore our exclusive membership tiers and unlock premium benefits as you increase your token holdings.
                </p>
              </div>

              {/* Current Status Card */}
              <div className="mb-12 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-blue-500/20">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-blue-500/10">
                          <Medal className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-sm text-gray-400">Current Balance</h3>
                          <p className="text-2xl font-bold text-white">{currentBalance} $TRUMP</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Current Tier</p>
                        <p className="text-xl font-semibold text-blue-400">Basic Status</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress to Bronze Status</span>
                        <span className="text-blue-400 font-medium">{progress}%</span>
                      </div>
                      <div className="h-3 bg-black/40 rounded-full overflow-hidden backdrop-blur-xl border border-white/5">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>0 $TRUMP</span>
                        <span>100 $TRUMP</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                      <div className="flex items-center gap-3">
                        <Medal className="w-5 h-5 text-blue-400" />
                        <p className="text-sm text-gray-300">
                          <span className="text-white font-medium">100 $TRUMP</span> needed to reach Bronze Status
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tier Cards */}
              <div className="grid grid-cols-1 gap-4">
                {tiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className="group relative cursor-pointer bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
                    onClick={() => setExpandedTier(expandedTier === index ? null : index)}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setExpandedTier(expandedTier === index ? null : index);
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center">
                            <Medal className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {tier.name}
                            </h3>
                            <div className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-gray-400">
                              TIER
                            </div>
                          </div>
                          <p className="text-sm text-gray-400 mt-0.5">{tier.range}</p>
                        </div>
                      </div>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedTier === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="mt-6 pt-6 border-t border-white/5">
                          <div className="grid gap-3">
                            {tier.benefits.map((benefit, benefitIndex) => (
                              <div 
                                key={benefitIndex} 
                                className="flex items-start gap-3 group/benefit"
                                style={{
                                  opacity: 1,
                                  transform: 'none'
                                }}
                              >
                                <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                  <Sparkles className="w-4 h-4 text-blue-400 group-hover/benefit:scale-110 transition-transform duration-300" />
                                </div>
                                <p className="text-sm text-gray-300 leading-relaxed">{benefit.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Note */}
              <div className="mt-8 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-yellow-500/10">
                    <TriangleAlert className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Important Note</h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Token holding requirements must be maintained to keep tier status and benefits. Benefits are subject to terms and conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
