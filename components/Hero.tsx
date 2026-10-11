'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  Car as CarIcon, 
  Send,
  Fuel,
  Gauge,
  Calendar,
  CheckCheck
} from 'lucide-react';
import { CARS_DATA, buildWhatsAppLink } from '@/data/cars';

export const Hero: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<'clio' | 'magnite'>('clio');
  const [typingStep, setTypingStep] = useState<number>(3); // fully rendered by default, interactive switch
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const clio = CARS_DATA.find((c) => c.id === 'renault-clio5-luxury-black')!;
  const magnite = CARS_DATA.find((c) => c.id === 'nissan-magnite-black')!;

  const activeCar = selectedVehicle === 'clio' ? clio : magnite;
  const quoteDays = 5;
  const ratePerDay = activeCar.pricing.range3to7;
  const totalAmount = ratePerDay * quoteDays;

  const handleCarSwitch = (vehicle: 'clio' | 'magnite') => {
    if (vehicle === selectedVehicle) return;
    setIsTyping(true);
    setSelectedVehicle(vehicle);
    setTimeout(() => {
      setIsTyping(false);
    }, 450);
  };

  const whatsappReservationUrl = buildWhatsAppLink({
    carName: activeCar.name,
    days: quoteDays,
    pickupLocation: 'Aéroport Fès-Saïss (FEZ)',
    estimatedPrice: totalAmount,
  });

  return (
    <section className="relative overflow-hidden bg-[#09090b] text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Ambience & Airport Silhouette */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <Image
          src="/images/hero_luxury_fleet_1791743759968.jpg"
          alt="Ynaf Elite Car à l'Aéroport Fès-Saïss"
          fill
          priority
          className="object-cover object-center filter brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker / Location Badge */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] text-xs text-amber-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Service VIP Fès Ville & Aéroport Fès-Saïss (Terminal Arrivées)</span>
          </div>
        </div>

        {/* 2-Column Split: Editorial Value Proposition & Interactive WhatsApp Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Pillars */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Location de Voiture de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">
                Prestige
              </span>{' '}
              à Fès & Aéroport Saïss
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Expérimentez la route au Maroc avec une sérénité absolue. Flotte récente, tarifs transparents dégressifs, et prise en charge personnalisée dès votre atterrissage.
            </p>

            {/* 3 Core Guarantee Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-amber-500/25 shadow-md">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Sans Caution</p>
                  <p className="text-[11px] text-zinc-400">Permis &gt; 5 ans</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-amber-500/25 shadow-md">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Tous Risques</p>
                  <p className="text-[11px] text-zinc-400">Assurance incluse</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-amber-500/25 shadow-md">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Livraison 24/7</p>
                  <p className="text-[11px] text-zinc-400">Gratuite à Fès & Saïss</p>
                </div>
              </div>

            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              
              {/* Gold Gradient CTA Button */}
              <a
                href={whatsappReservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] hover:from-[#f59e0b] hover:to-[#fbbf24] shadow-[0_0_30px_rgba(245,158,11,0.45)] hover:shadow-[0_0_40px_rgba(245,158,11,0.65)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-zinc-950 text-zinc-950" />
                <span>Réserver via WhatsApp</span>
              </a>

              {/* Secondary Fleet Jump Button */}
              <a
                href="#flotte"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-sm sm:text-base text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-500/40 transition-colors whitespace-nowrap"
              >
                <CarIcon className="w-4 h-4 text-amber-400" />
                <span>Découvrir la Flotte (6 Véhicules)</span>
              </a>

            </div>

            {/* Quick Micro Proof Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Contrat clair & transparent
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Kilométrage illimité
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Assistance dépannage 24/7
              </span>
            </div>

          </div>

          {/* Right Column: Animated WhatsApp Chat Widget Mockup */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative rounded-2xl bg-gradient-to-b from-zinc-800/90 via-zinc-900 to-zinc-950 p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.15)] border border-amber-500/30">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-2xl bg-amber-500/10 blur-xl pointer-events-none" />

              {/* Chat Container */}
              <div className="relative rounded-2xl bg-[#0d1117] overflow-hidden flex flex-col">
                
                {/* Chat Top Bar */}
                <div className="bg-[#161b22] px-4 py-3.5 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 p-[1px]">
                        <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center font-bold text-amber-300 text-xs">
                          YEC
                        </div>
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-zinc-950" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-sm text-white">Ynaf Elite Car</span>
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded font-medium">VIP</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">Devis Instantané &middot; En ligne 24/7</p>
                    </div>
                  </div>

                  {/* Vehicle Switcher Pill */}
                  <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-[11px]">
                    <button
                      onClick={() => handleCarSwitch('clio')}
                      className={`px-2 py-1 rounded font-medium transition-all ${
                        selectedVehicle === 'clio'
                          ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Clio 5 Luxe
                    </button>
                    <button
                      onClick={() => handleCarSwitch('magnite')}
                      className={`px-2 py-1 rounded font-medium transition-all ${
                        selectedVehicle === 'magnite'
                          ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Nissan SUV
                    </button>
                  </div>
                </div>

                {/* Chat Body Mockup */}
                <div className="p-4 space-y-3.5 bg-[#090d13]/95 min-h-[380px] flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    
                    {/* Timestamp Tag */}
                    <div className="text-center">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
                        Aujourd&apos;hui &middot; Réponse en &lt; 2 min
                      </span>
                    </div>

                    {/* Customer Simulated Message */}
                    <motion.div
                      key={`user-${selectedVehicle}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex justify-end"
                    >
                      <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-amber-500/15 border border-amber-500/30 p-3 text-xs text-amber-100 shadow-sm">
                        <p className="font-medium">
                          Bonjour ! Je recherche la {activeCar.name} pour 5 jours avec remise des clés à l&apos;Aéroport Saïss Fès.
                        </p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-amber-400/80 font-mono">
                          <span>11:35</span>
                          <CheckCheck className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Agent Instant Quote Response */}
                    <AnimatePresence mode="wait">
                      {isTyping ? (
                        <motion.div
                          key="typing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-1.5 p-3 rounded-2xl rounded-tl-none bg-[#161b22] border border-zinc-800 w-24 text-zinc-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" />
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.15s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.3s]" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`agent-${selectedVehicle}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-2 max-w-[95%]"
                        >
                          {/* Quote Detail Box */}
                          <div className="rounded-2xl rounded-tl-none bg-[#161b22] border border-zinc-700/80 p-3.5 shadow-md space-y-2.5 text-xs text-zinc-200">
                            
                            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                              <span className="font-bold text-white text-sm">{activeCar.name}</span>
                              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                                DISPONIBLE
                              </span>
                            </div>

                            {/* Mini Car Thumbnail & Specs */}
                            <div className="flex gap-3 items-center bg-zinc-950/60 p-2 rounded-xl border border-zinc-800/80">
                              <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border border-zinc-800">
                                <Image
                                  src={activeCar.image}
                                  alt={activeCar.name}
                                  fill
                                  className="object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div className="space-y-0.5 text-[11px] text-zinc-300">
                                <p className="font-medium text-amber-300">{activeCar.category}</p>
                                <p className="text-zinc-400">{activeCar.transmission} &middot; {activeCar.fuel} &middot; {activeCar.color}</p>
                                <p className="text-zinc-400">{activeCar.seats} Places &middot; Climatisation</p>
                              </div>
                            </div>

                            {/* Quote Calculation breakdown */}
                            <div className="space-y-1.5 pt-1 text-[11px]">
                              <div className="flex justify-between text-zinc-400">
                                <span>Tarif journalier (séjour 5 jours)</span>
                                <span className="font-mono text-white font-medium">{ratePerDay} MAD / jour</span>
                              </div>
                              <div className="flex justify-between text-zinc-400">
                                <span>Caution exigée (Permis &gt; 5 ans)</span>
                                <span className="text-amber-400 font-semibold">0 DH (Sans Caution)</span>
                              </div>
                              <div className="flex justify-between text-zinc-400">
                                <span>Livraison Aéroport Saïss (FEZ)</span>
                                <span className="text-emerald-400 font-medium">Offerte (24/7)</span>
                              </div>
                              
                              <div className="flex justify-between pt-2 border-t border-zinc-800 font-semibold text-xs text-white">
                                <span>Total estimé (5 jours) :</span>
                                <span className="text-amber-400 text-sm font-mono tabular-nums">
                                  {totalAmount} MAD
                                </span>
                              </div>
                            </div>

                            <p className="text-[11px] text-zinc-400 italic pt-1">
                              &ldquo;Chauffeur avec pancarte nominative à la sortie des bagages.&rdquo;
                            </p>

                            <div className="flex items-center justify-end gap-1 text-[10px] text-zinc-500 font-mono">
                              <span>11:36</span>
                              <CheckCheck className="w-3.5 h-3.5 text-blue-400" />
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                  {/* Interactive Chat CTA Bar */}
                  <div className="pt-2">
                    <a
                      href={whatsappReservationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-105 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-zinc-950" />
                      <span>Bloquer cette {activeCar.name} sur WhatsApp</span>
                    </a>
                    <p className="text-center text-[10px] text-zinc-500 mt-1.5">
                      Sans engagement &middot; Confirmation en direct avec Wadie & l&apos;équipe
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
