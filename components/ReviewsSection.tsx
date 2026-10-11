'use client';

import React from 'react';
import { Star, CheckCircle2, ShieldCheck, ThumbsUp, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Karim Berrada',
      origin: 'Paris / Fès',
      rating: 5,
      vehicle: 'Renault Clio 5 Édition Luxe',
      date: 'Octobre 2026',
      content:
        'Service 5 étoiles avec Wadie ! Accueil direct au terminal Saïss avec une Clio 5 automatique dans un état neuf irréprochable. La formule sans caution avec mon permis de 8 ans m’a évité de bloquer 1500€ sur ma carte. Je recommande les yeux fermés à tous les voyageurs.',
      highlight: 'Accueil direct au terminal Saïss & sans caution',
    },
    {
      name: 'Thomas & Sophie Morel',
      origin: 'Lyon, France',
      rating: 5,
      vehicle: 'Nissan Magnite SUV',
      date: 'Septembre 2026',
      content:
        'Le Nissan Magnite était parfait pour visiter Fès, Meknès et Volubilis. Chauffeur très ponctuel à l’aéroport malgré 1h de retard de vol. Aucun supplément imprévu, réservation rapide par WhatsApp en 2 minutes. Bravo Ynaf Elite Car pour ce professionnalisme.',
      highlight: 'Chauffeur ponctuel malgré retard de vol',
    },
    {
      name: 'Amine El Fassi',
      origin: 'Casablanca',
      rating: 5,
      vehicle: 'Dacia Sandero Stepway',
      date: 'Août 2026',
      content:
        'Excellente agence locale. Prix très compétitif sur 10 jours de location. Voiture propre, climatisation parfaite, et équipe disponible à toute heure. La meilleure agence de location de voiture à Fès sans hésitation.',
      highlight: 'Prix très compétitif & voiture impeccable',
    },
  ];

  return (
    <section id="avis" className="py-20 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Google 4.9/5 Rating Banner */}
        <div className="mb-16 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-amber-500/30 p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Google Big Score & Stars */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl bg-zinc-950 border border-amber-500/30 flex flex-col items-center justify-center p-2 shadow-inner shrink-0">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-500 font-mono">
                  4.9
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">sur 5.0</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  <span>Google Reviews</span>
                  <span className="text-xs bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-2 py-0.5 rounded-full font-semibold">
                    Certifié
                  </span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Basé sur plus de 180 avis vérifiés de voyageurs & résidents
                </p>
              </div>
            </div>

            {/* Right: Key Trust Markers */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-zinc-800/80 lg:pl-8 text-center sm:text-left">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-white flex items-center justify-center sm:justify-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>100% Véritables</span>
                </p>
                <p className="text-[11px] text-zinc-400">Retours de clients ayant réservé à Fès</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-white flex items-center justify-center sm:justify-start gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Zéro Caution Débitée</span>
                </p>
                <p className="text-[11px] text-zinc-400">Respect scrupuleux des engagements</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-white flex items-center justify-center sm:justify-start gap-1.5">
                  <ThumbsUp className="w-3.5 h-3.5 text-amber-400" />
                  <span>Recommandé à 99%</span>
                </p>
                <p className="text-[11px] text-zinc-400">Pour l’accueil à l’Aéroport Fès-Saïss</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ce que nos clients disent de nous
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            La satisfaction de nos conducteurs est le premier moteur de Ynaf Elite Car.
          </p>
        </div>

        {/* 3 Client Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl bg-zinc-900/70 p-7 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)] relative"
            >
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-5 right-5 pointer-events-none" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">{r.date}</span>
                </div>

                <div className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md inline-block">
                  {r.highlight}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{r.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white text-sm">{r.name}</p>
                  <p className="text-[11px] text-zinc-400">{r.origin}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-amber-300 font-medium block">
                    {r.vehicle}
                  </span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 justify-end font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Avis vérifié Google
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
