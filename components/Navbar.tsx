'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, MessageCircle, Phone, Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = '+212 620-759032';
  const whatsappUrl = 'https://wa.me/212620759032?text=Bonjour%20Ynaf%20Elite%20Car%2C%20je%20souhaite%20louer%20un%20v%C3%A9hicule.';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-zinc-950/85 border-b border-amber-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
          
          {/* ZONE 1: Brand Wordmark with Gold Metallic Glow */}
          <Link
            href="/"
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg py-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 p-[1px] shadow-[0_0_15px_rgba(245,158,11,0.35)]">
              <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-500 text-sm tracking-tighter">
                  YEC
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 drop-shadow-[0_0_18px_rgba(245,158,11,0.45)] uppercase transition-all duration-300 group-hover:brightness-110">
                Ynaf Elite Car
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-medium">
                Fès · Saïss Airport
              </span>
            </div>
          </Link>

          {/* ZONE 2: Clean Single-Line Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a
              href="#flotte"
              className="hover:text-amber-300 transition-colors duration-200 whitespace-nowrap"
            >
              Véhicules & Tarifs
            </a>
            <a
              href="#conditions"
              className="hover:text-amber-300 transition-colors duration-200 whitespace-nowrap"
            >
              Sans Caution
            </a>
            <a
              href="#aeroport"
              className="hover:text-amber-300 transition-colors duration-200 whitespace-nowrap"
            >
              Aéroport Saïss 24/7
            </a>
            <a
              href="#avis"
              className="hover:text-amber-300 transition-colors duration-200 whitespace-nowrap"
            >
              Avis Clients
            </a>
          </nav>

          {/* ZONE 3: Google Rating + Primary WhatsApp Button */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            
            {/* Google 4.8/5 Rating Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/25 shadow-sm text-xs">
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white tabular-nums">4.8</span>
                <span className="text-zinc-500">/5</span>
              </div>
              <span className="text-zinc-400 text-[11px] hidden xl:inline">Google (180+ avis)</span>
            </div>

            {/* Primary Action: WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-zinc-950 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_28px_rgba(245,158,11,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
              aria-label="Contacter Ynaf Elite Car sur WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950 text-zinc-950" />
              <span>WhatsApp</span>
              <span className="hidden sm:inline font-mono tabular-nums text-zinc-900 text-xs">
                +212 620-759032
              </span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800/80 bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-1.5 text-xs text-zinc-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.8 / 5</span>
              <span className="text-zinc-500">sur Google Reviews</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-amber-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sans Caution</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-3 text-sm font-medium text-zinc-200">
            <a
              href="#flotte"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Véhicules & Tarifs (Clio 5, Nissan, Dacia...)
            </a>
            <a
              href="#conditions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Conditions Sans Caution (Permis &gt; 5 ans)
            </a>
            <a
              href="#aeroport"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Livraison Aéroport Fès-Saïss 24/7
            </a>
            <a
              href="#avis"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Témoignages & Avis Google
            </a>
          </nav>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-zinc-950 bg-gradient-to-r from-amber-500 to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950" />
              <span>Réserver au {phoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
