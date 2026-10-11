'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Fuel, 
  Gauge, 
  Users, 
  Briefcase, 
  Wind, 
  ShieldCheck, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';
import { CARS_DATA, calculateQuote, buildWhatsAppLink } from '@/data/cars';
import { Car, FilterCategory } from '@/types/car';

export const FleetShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [selectedDurationBracket, setSelectedDurationBracket] = useState<'3-7' | '8-14' | '15+'>('3-7');

  const filteredCars = CARS_DATA.filter((car) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'economic') return car.category === 'Economic';
    if (activeCategory === 'suv') return car.category === 'Mini SUV' || car.category === 'Compact SUV';
    if (activeCategory === 'luxury') return car.isLuxury || car.category === 'Luxury Edition';
    if (activeCategory === 'automatic') return car.transmission === 'Automatic';
    if (activeCategory === 'diesel') return car.fuel === 'Diesel';
    return true;
  });

  const getBracketDays = (bracket: '3-7' | '8-14' | '15+'): number => {
    if (bracket === '3-7') return 5;
    if (bracket === '8-14') return 10;
    return 16;
  };

  const getDisplayPrice = (car: Car, bracket: '3-7' | '8-14' | '15+'): number => {
    if (bracket === '3-7') return car.pricing.range3to7;
    if (bracket === '8-14') return car.pricing.range8to14;
    return car.pricing.range15Plus;
  };

  return (
    <section id="flotte" className="py-20 bg-[#09090b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Flotte Ynaf Elite Car Fès</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Nos 6 Véhicules & Grille Tarifaire Dégressive
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              Choisissez votre modèle pour Fès et sa région. Tous nos véhicules sont entretenus aux normes constructeur, livrés propres et avec le plein.
            </p>
          </div>

          {/* Pricing Bracket Selector */}
          <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
            <span className="text-xs text-zinc-400">Afficher les tarifs selon durée :</span>
            <div className="inline-flex p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
              <button
                onClick={() => setSelectedDurationBracket('3-7')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedDurationBracket === '3-7'
                    ? 'bg-amber-500 text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                3 à 7 jours
              </button>
              <button
                onClick={() => setSelectedDurationBracket('8-14')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedDurationBracket === '8-14'
                    ? 'bg-amber-500 text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                8 à 14 jours (-10%)
              </button>
              <button
                onClick={() => setSelectedDurationBracket('15+')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedDurationBracket === '15+'
                    ? 'bg-amber-500 text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                15+ jours (-20%)
              </button>
            </div>
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-800'
            }`}
          >
            Tous les Véhicules ({CARS_DATA.length})
          </button>
          <button
            onClick={() => setActiveCategory('economic')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'economic'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-800'
            }`}
          >
            Économiques (Logan, 208, Clio 5)
          </button>
          <button
            onClick={() => setActiveCategory('suv')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'suv'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-800'
            }`}
          >
            SUVs & Crossovers (Stepway, Magnite)
          </button>
          <button
            onClick={() => setActiveCategory('luxury')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'luxury'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-800'
            }`}
          >
            Édition Luxe (Clio 5 Auto)
          </button>
          <button
            onClick={() => setActiveCategory('automatic')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'automatic'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-800'
            }`}
          >
            Boîte Automatique
          </button>
          <button
            onClick={() => setActiveCategory('diesel')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'diesel'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-800'
            }`}
          >
            Diesel
          </button>
        </div>

        {/* 6 Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => {
            const currentDailyPrice = getDisplayPrice(car, selectedDurationBracket);
            const daysCount = getBracketDays(selectedDurationBracket);
            const bookingUrl = buildWhatsAppLink({
              carName: car.name,
              days: daysCount,
              estimatedPrice: currentDailyPrice * daysCount,
              pickupLocation: 'Aéroport Fès-Saïss',
            });

            return (
              <div
                key={car.id}
                className="group relative flex flex-col rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_10px_35px_rgba(245,158,11,0.15)]"
              >
                {/* Vehicle Image Slot with Fallback Styling */}
                <div className="relative aspect-[4/3] w-full bg-zinc-950 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={`${car.name} - ${car.color}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  {car.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-amber-500/30 text-[11px] font-semibold text-amber-300">
                      {car.badge}
                    </div>
                  )}

                  {/* Sans Caution Overlay Pill */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-600/60 text-[10px] font-medium text-emerald-300 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Sans Caution</span>
                  </div>

                  {/* Vehicle Name and Color on Image Scrim */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-xs text-zinc-300 flex items-center gap-2">
                      <span>{car.color}</span>
                      <span>&middot;</span>
                      <span className="text-amber-400 font-medium">{car.category}</span>
                    </p>
                  </div>
                </div>

                {/* Specs Strip */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Quick specs icons */}
                  <div className="grid grid-cols-4 gap-2 py-2 border-y border-zinc-800/80 text-center text-xs text-zinc-300">
                    <div className="flex flex-col items-center gap-1">
                      <Gauge className="w-4 h-4 text-amber-400" />
                      <span className="text-[11px]">{car.transmission}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Fuel className="w-4 h-4 text-amber-400" />
                      <span className="text-[11px]">{car.fuel}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Users className="w-4 h-4 text-amber-400" />
                      <span className="text-[11px]">{car.seats} Places</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Briefcase className="w-4 h-4 text-amber-400" />
                      <span className="text-[11px]">{car.luggage} Valises</span>
                    </div>
                  </div>

                  {/* Pricing Matrix Breakdown */}
                  <div className="rounded-xl bg-zinc-950/80 p-3.5 border border-zinc-800 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-zinc-400">Tarif dès :</span>
                      <div className="text-right">
                        <span className="text-2xl font-black text-white font-mono tabular-nums">
                          {currentDailyPrice}
                        </span>
                        <span className="text-xs text-amber-400 font-medium ml-1">MAD / jour</span>
                      </div>
                    </div>

                    {/* Tier Table Summary */}
                    <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-zinc-800 text-[10px] text-zinc-400">
                      <div className={`p-1 rounded text-center ${selectedDurationBracket === '3-7' ? 'bg-amber-500/15 text-amber-300 font-semibold' : ''}`}>
                        <div>3-7 jours</div>
                        <div className="font-mono text-zinc-200">{car.pricing.range3to7} DH</div>
                      </div>
                      <div className={`p-1 rounded text-center ${selectedDurationBracket === '8-14' ? 'bg-amber-500/15 text-amber-300 font-semibold' : ''}`}>
                        <div>8-14 jours</div>
                        <div className="font-mono text-zinc-200">{car.pricing.range8to14} DH</div>
                      </div>
                      <div className={`p-1 rounded text-center ${selectedDurationBracket === '15+' ? 'bg-amber-500/15 text-amber-300 font-semibold' : ''}`}>
                        <div>15+ jours</div>
                        <div className="font-mono text-amber-400 font-semibold">{car.pricing.range15Plus} DH</div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    {car.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button: Direct WhatsApp Reservation */}
                  <div className="pt-2">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-zinc-950 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-zinc-950" />
                      <span>Réserver sur WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FleetShowcase;
