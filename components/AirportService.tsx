'use client';

import React from 'react';
import Image from 'next/image';
import { Plane, Clock, ShieldCheck, MapPin, CheckCircle, MessageCircle, Sparkles } from 'lucide-react';

export const AirportService: React.FC = () => {
  return (
    <section id="aeroport" className="py-20 bg-[#09090b] text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Airport Photograph and Real Saiss terminal presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.15)]">
              <Image
                src="/images/hero_luxury_fleet_1791743759968.jpg"
                alt="Aéroport Fès-Saïss livraison Ynaf Elite Car"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Service VIP Aéroport</p>
                  <p className="text-sm font-bold text-white">Fès-Saïss (FEZ) Terminal 1 & 2</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Livraison 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Service details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300">
                <Plane className="w-3.5 h-3.5" />
                <span>Accueil Personnalisé aux Arrivées</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Votre Véhicule Vous Attend Dès l&apos;Atterrissage à Fès
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Oubliez les files d&apos;attente interminables aux comptoirs d&apos;aéroport. Notre agent vous accueille directement au hall des arrivées avec une pancarte à votre nom. Le véhicule est garé sur le parking officiel, inspecté et prêt à partir.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Suivi de Vol en Temps Réel</h4>
                  <p className="text-xs text-zinc-400">
                    Même si votre vol a du retard, notre chauffeur s&apos;adapte automatiquement sans surcoût.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Sans Caution pour Conducteurs Confirmés</h4>
                  <p className="text-xs text-zinc-400">
                    Si votre permis a plus de 5 ans, profitez de notre formule sans blocage de caution bancaire.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Restitution Express au Départ</h4>
                  <p className="text-xs text-zinc-400">
                    Au retour, déposez les clés au dépose-minute de l&apos;aéroport en moins de 3 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/212620759032?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20une%20voiture%20avec%20livraison%20%C3%A0%20l%27A%C3%A9roport%20F%C3%A8s-Sa%C3%AFss."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-zinc-950 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950" />
                <span>Programmer ma livraison Aéroport Saïss</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AirportService;
