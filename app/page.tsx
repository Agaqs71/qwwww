'use client';

import Image from "next/image";
import StarsAnimation from './components/StarsAnimation';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070735] text-white __className_d65c78">
      <header>
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-transform duration-300 translate-y-0" role="navigation" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#070735] rounded-full px-8 py-4 border border-[#070735]">
            <a className="relative z-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg" href="/">
              <img 
                alt="GetTrumpMemes Logo" 
                width="200"
                height="32"
                className="h-8 w-auto" 
                src="/trumpimg/T-Meme-Logo_1.webp"
              />
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#hero" className="text-white hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg px-3 py-2">Home</a>
              <a href="#how-to" className="text-white hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg px-3 py-2">How to Buy</a>
              <a href="#Fight-facts" className="text-white hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg px-3 py-2">About</a>
              <a href="#tokenomics" className="text-white hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-lg px-3 py-2">Allocation</a>
              <div className="flex items-center space-x-4">
                <a href="/login" className="text-[#070735] bg-white px-6 py-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">Login</a>
                <a href="/register" className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2">Participate</a>
              </div>
            </div>
            <a href="/register" className="md:hidden bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors">Participate</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-[#070735] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/trumpimg/Grain_Latest.png')] bg-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#070735] via-[#131385] to-[#070735] opacity-50"></div>
        
        <StarsAnimation />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-24 pb-16 sm:pt-32 sm:pb-20">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative z-10 text-center md:text-left">
                <h1 className="text-[2.5rem] sm:text-[3.8rem] md:text-[5.8rem] leading-tight font-black mt-8 mb-8 md:mb-[10rem] relative">
                  THE ONLY<br />
                  <span className="text-red-600 relative inline-block">
                    OFFICIAL
                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-red-600"></span>
                  </span>
                  <br />TRUMP MEME
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-4 text-white font-light">
                  Join the Trump Community. This is History in the Making!
                </p>
                <div className="bg-[#ffffff10] text-white text-sm sm:text-lg font-semibold p-4 rounded-lg mb-6">
                  <p>Current Price for Sale:<span className="text-red-500 font-bold ml-2">$25.6</span></p>
                </div>
                <a href="/register" className="bg-red-700 text-white text-base sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-lg hover:bg-red-800 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 transform hover:scale-105">
                  BUY NOW WITH CRYPTO
                </a>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="relative">
                  <Image
                    alt="Trump with Fist in Air"
                    width={400}
                    height={500}
                    className="rounded-lg filter"
                    src="/trumpimg/T-Fight-Figure-3_1T-Fight-Figure-3.webp"
                    priority
                  />
                  <div className="bg-[#040420] border-t-4 border-b-4 border-red-700 overflow-hidden">
                    <div className="quote text-center">
                      <p className="text-base sm:text-lg md:text-2xl italic text-white mb-4">
                        "Celebrate Our Win & Have Fun!"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Image
                    src="/trumpimg/signaturetrump.png"
                    alt="Trump's Signature"
                    width={128}
                    height={48}
                    className="w-32 md:w-36"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(81%) sepia(74%) saturate(590%) hue-rotate(1deg) brightness(95%) contrast(96%)"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-2/3 sm:w-1/2 h-12 sm:h-16 bg-[#c41220] opacity-20 blur-2xl"></div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to" className="relative py-20 px-4 bg-[#070735] overflow-hidden">
        {/* ... how to buy section content ... */}
      </section>

      {/* Marquee Section */}
      <div className="bg-[#040420] border-t-4 border-b-4 border-red-700 overflow-hidden">
        {/* ... marquee section content ... */}
      </div>

      {/* Fight Facts Section */}
      <section id="Fight-facts" className="py-20 px-4 md:px-8 bg-[#101058] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/trumpimg/Grain_Latest.png')] bg-repeat opacity-20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="mb-8">
                <h2 className="text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                    TRUMP:<br />THE CRYPTO PRESIDENT
                  </span>
                  <br />
                  <span className="text-white text-4xl">
                    A Community Celebrating Courage & Strength
                  </span>
                </h2>
              </div>
              <div className="relative">
                <Image
                  alt="Trump Fight Card"
                  width={660}
                  height={400}
                  className="w-full max-w-md"
                  src="/trumpimg/TrumpCard_EnjoyMySneakers_Signiture-680_1208f.jpeg"
                />
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">
                $TRUMP are now freely tradeable on the blockchain.
              </h3>
              <div className="text-white/90 text-2xl leading-relaxed">
                On July 13, 2024, President Trump faced death and came up fighting! With his fist in the air and the iconic battle cry FIGHT FIGHT FIGHT, President Trump showed the world what a LEADER is made of. His strength and courage ignited a movement becoming the most memorable meme of the century.
                <br /><br />
                Now, you can get your piece of history. This Trump Meme celebrates a leader who doesn't back down, no matter the odds. Join the Trump Community - we're all about fighting for what matters.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-[#070733] relative overflow-hidden pb-28">
        <div className="absolute inset-0 bg-[url('/trumpimg/Grain_Latest.png')] bg-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#18183b] to-transparent"></div>
        <div className="relative h-[800px] flex justify-center items-center">
          <Image
            alt="Donald Trump Community"
            width={995}
            height={800}
            className="w-auto max-w-[800px] md:max-w-[70vw] lg:max-w-[800px] mx-auto object-contain"
            src="/trumpimg/Community-top-image_1Community-top-image.webp"
            priority
          />
        </div>
        <div className="relative text-center -mt-20 px-4 z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl lg:text-[4rem] leading-tight font-bold drop-shadow-lg">
              JOIN TRUMP'S SPECIAL COMMUNITY.<br />
              <span className="text-[#c41220] inline-block px-8 text-6xl md:text-7xl lg:text-[6rem] leading-[10rem] drop-shadow-lg">$TRUMP</span>
              <br />OWN A PIECE OF HISTORY.
            </h1>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 bg-[url('/trumpimg/stars-stripes-3_1stars-stripes-3.webp')] bg-cover relative">
        <div className="absolute inset-0 bg-[url('/trumpimg/Grain_Latest.png')] bg-repeat opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                Allocation
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                There are 200 million $TRUMP available on day one and will grow to a total of 1 billion $TRUMP over three years. Each group's allocation are released on their own schedule over 3 years.
              </p>
            </div>
            <div className="mb-12">
              <Image
                alt="Allocation Chart"
                width={1500}
                height={800}
                className="w-full max-w-3xl mx-auto rounded-lg"
                src="/trumpimg/TMC-Allocation-Report-6a2da.jpeg"
              />
            </div>
            <div className="bg-[#444444] bg-opacity-40 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-[15px] leading-[18px] text-white/80 text-center">
                Trump Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$TRUMP" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. gettrumpmeme.today is not political and has nothing to do with any political campaign or any political office or governmental agency. CIC Digital LLC, an affiliate of The Trump Organization, and Fight Fight Fight LLC collectively own 80% of the Trump Cards, subject to a 3-year unlocking schedule. CIC Digital LLC and Celebration Cards LLC, the owners of Fight Fight Fight LLC, will receive trading revenue derived from trading activities of Trump Meme Cards. See Terms & Conditions
                <a className="text-[#d3b136] hover:text-[#e0c158] transition-colors" href="/terms">Here</a>, See Card Allocation
                <a className="text-[#d3b136] hover:text-[#e0c158] transition-colors" href="#tokenomics">Here</a>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-0 right-0 top-0 h-1 bg-red-700"></div>
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-red-700"></div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#070735]" aria-labelledby="faq-title">
        <div className="max-w-lg sm:max-w-xl lg:max-w-3xl mx-auto">
          <h2 id="faq-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              'Is this an official Trump product?',
              'How can I get Trump Memes?',
              'What payment methods are accepted?',
              'Is my purchase secure?',
              'Can I resell my purchased memes?',
              'Are there any transaction fees?',
              'What happens if I lose access to my wallet?',
              'How can I contact support?'
            ].map((question, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  className="flex justify-between items-center w-full py-3 sm:py-4 text-left text-white hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-expanded="false"
                  aria-controls={`faq-answer-${index + 1}`}
                >
                  <span className="text-base sm:text-lg font-semibold">{question}</span>
                  <span className="text-xl sm:text-2xl" aria-hidden="true">+</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <img
              alt="Trump Meme Logo"
              width="200"
              height="32"
              className="h-8 w-auto mb-6 md:mb-0"
              src="/trumpimg/T-Meme-Logo_1.webp"
            />
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
              {[
                { href: '#hero', text: 'Home' },
                { href: '#Fight-facts', text: 'About' },
                { href: '#how-to', text: 'How to Buy' },
                { href: '/terms', text: 'Terms' },
                { href: '/dashboard/privacy', text: 'Privacy Policy' },
                { href: '/login', text: 'Login' },
                { href: '/register', text: 'Register' }
              ].map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="hover:text-red-600 transition-colors text-sm md:text-base"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 text-center">
            <p>© 2025 Fight Fight Fight LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
