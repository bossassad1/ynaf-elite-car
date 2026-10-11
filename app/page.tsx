'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingCalculator from '@/components/BookingCalculator';
import FleetShowcase from '@/components/FleetShowcase';
import Conditions from '@/components/Conditions';
import AirportService from '@/components/AirportService';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col scroll-smooth selection:bg-amber-500 selection:text-zinc-950">
      {/* 1. Sticky Glassmorphic Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Ultra-Luxury Hero Section with Badges & WhatsApp Quote Simulation */}
        <Hero />

        {/* 3. Instant Booking Price Estimator / Quote Calculator */}
        <BookingCalculator />

        {/* 4. The 6-Vehicle Fleet Grid with Dynamic Tiered Pricing */}
        <FleetShowcase />

        {/* 5. 4 Luxury Conditions Cards (Permis, Sans Caution > 5 ans, Tous Risques, Livraison 24/7) */}
        <Conditions />

        {/* 6. Airport Fès-Saïss 24/7 Delivery & Meet & Greet Service */}
        <AirportService />

        {/* 7. Google 4.9/5 Verified Social Proof & Customer Reviews */}
        <ReviewsSection />
      </main>

      {/* 8. Dark Gold Luxury Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <aside aria-label="Contact rapide WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/212620759032?text=Bonjour%20Ynaf%20Elite%20Car%2C%20je%20souhaite%20un%20renseignement%20pour%20une%20location%20de%20voiture%20%C3%A0%20F%C3%A8s."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 font-bold shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Contacter sur WhatsApp au +212 620-759032"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-zinc-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-zinc-950" />
          </div>
          <span className="hidden sm:inline text-xs font-extrabold uppercase tracking-wider">
            WhatsApp 24/7
          </span>
        </a>
      </aside>
    </div>
  );
}
