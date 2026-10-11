'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Calculator, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  MessageCircle, 
  Car as CarIcon, 
  CheckCircle2, 
  Sparkles,
  Plane
} from 'lucide-react';
import { CARS_DATA, calculateQuote, buildWhatsAppLink } from '@/data/cars';

export const BookingCalculator: React.FC = () => {
  const [selectedCarId, setSelectedCarId] = useState<string>('renault-clio5-luxury-black');
  const [rentalDays, setRentalDays] = useState<number>(7);
  const [pickupLocation, setPickupLocation] = useState<string>('Aéroport Fès-Saïss (FEZ)');
  const [hasLicense5Years, setHasLicense5Years] = useState<boolean>(true);
  const [needChildSeat, setNeedChildSeat] = useState<boolean>(false);
  const [flightNumber, setFlightNumber] = useState<string>('');

  const selectedCar = CARS_DATA.find((c) => c.id === selectedCarId) || CARS_DATA[0];
  const quote = calculateQuote(selectedCar, rentalDays);

  const locations = [
    'Aéroport Fès-Saïss (Terminal Arrivées - 24/7)',
    'Gare Fès-Ville (Train ONCF)',
    'Centre-ville Fès / Ville Nouvelle',
    'Médina de Fès (Riad / Hôtel)',
    'Livraison sur mesure à Fès & Région',
  ];

  const handleWhatsAppBooking = () => {
    const lines = [
      `*Demande de Réservation - Ynaf Elite Car Fès*`,
      `Véhicule : ${selectedCar.name} (${selectedCar.transmission}, ${selectedCar.fuel})`,
      `Durée : ${rentalDays} jours`,
      `Lieu de prise en charge : ${pickupLocation}`,
      hasLicense5Years ? `Permis de conduire : > 5 ans (Formule Sans Caution 0 DH)` : `Permis de conduire : < 5 ans`,
      flightNumber ? `N° de Vol : ${flightNumber}` : null,
      needChildSeat ? `Option : Siège enfant demandé` : null,
      `Tarif calculé : ${quote.dailyRate} MAD/j × ${rentalDays}j = *${quote.total} MAD* (env. ${(quote.total / 10.8).toFixed(0)} €)`,
      `Merci de confirmer la réservation.`,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/212620759032?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="conditions" className="py-20 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulateur & Devis Instantané</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Calculez Votre Tarif & Réservez en 1 Clic
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Aucun frais caché. Choisissez votre voiture, le nombre de jours et obtenez immédiatement votre tarif officiel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Settings */}
          <div className="lg:col-span-7 bg-zinc-900/80 rounded-2xl p-6 sm:p-8 border border-zinc-800 space-y-6 shadow-xl">
            
            {/* Step 1: Car Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <CarIcon className="w-4 h-4 text-amber-400" />
                <span>1. Choisissez le Véhicule</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CARS_DATA.map((car) => {
                  const isSelected = car.id === selectedCarId;
                  return (
                    <button
                      key={car.id}
                      type="button"
                      onClick={() => setSelectedCarId(car.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="relative w-12 h-10 rounded-lg overflow-hidden shrink-0 bg-zinc-900">
                        <Image
                          src={car.image}
                          alt={car.name}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-white truncate">{car.name}</p>
                        <p className="text-[11px] text-zinc-400 truncate">
                          {car.transmission} &middot; {car.fuel}
                        </p>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400 whitespace-nowrap">
                        {car.pricing.range3to7} DH
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration Slider / Stepper */}
            <div className="space-y-3 pt-2 border-t border-zinc-800">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>2. Durée de Location : <strong className="text-amber-400 text-sm font-mono">{rentalDays} jours</strong></span>
                </label>
                <span className="text-xs text-amber-400 font-medium">
                  {quote.savingsRate}
                </span>
              </div>

              <input
                type="range"
                min="3"
                max="30"
                value={rentalDays}
                onChange={(e) => setRentalDays(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>3 jours (min)</span>
                <span>7 jours</span>
                <span>14 jours</span>
                <span>30 jours</span>
              </div>
            </div>

            {/* Step 3: Location Dropdown */}
            <div className="space-y-2 pt-2 border-t border-zinc-800">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>3. Lieu de Prise en Charge</span>
              </label>
              <select
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
              >
                {locations.map((loc, idx) => (
                  <option key={idx} value={loc} className="bg-zinc-950 text-white">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Optional Flight & Extras */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-800">
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5 flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-amber-400" />
                  <span>N° de Vol (Optionnel - suivi aéroport)</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: RAM AT456 / Ryanair FR210"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* License Condition toggle */}
              <div className="flex items-center gap-3 pt-4 sm:pt-6">
                <input
                  type="checkbox"
                  id="license"
                  checked={hasLicense5Years}
                  onChange={(e) => setHasLicense5Years(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 bg-zinc-950 border-zinc-700 focus:ring-amber-500"
                />
                <label htmlFor="license" className="text-xs text-zinc-300 cursor-pointer">
                  Permis &gt; 5 ans (<span className="text-amber-400 font-semibold">Sans Caution 0 DH</span>)
                </label>
              </div>
            </div>

          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                Devis Transparent
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-4">Récapitulatif de Votre Devis</h3>

            {/* Selected Car Preview */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-zinc-800">
              <Image
                src={selectedCar.image}
                alt={selectedCar.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute bottom-2.5 left-3">
                <p className="text-base font-bold text-white">{selectedCar.name}</p>
                <p className="text-xs text-amber-300">{selectedCar.category} &middot; {selectedCar.color}</p>
              </div>
            </div>

            {/* Quote details list */}
            <div className="space-y-3 text-xs border-b border-zinc-800 pb-5">
              <div className="flex justify-between text-zinc-300">
                <span>Durée choisie</span>
                <span className="font-semibold text-white font-mono">{rentalDays} jours</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Tarif journalier appliqué</span>
                <span className="font-mono text-amber-400 font-bold">{quote.dailyRate} MAD / jour</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Caution exigée</span>
                <span className="font-semibold text-emerald-400">
                  {hasLicense5Years ? '0 DH (Sans Caution)' : 'Caution standard restituable'}
                </span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Assurance tous risques</span>
                <span className="text-emerald-400 font-medium">Incluse</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Livraison & Récupération</span>
                <span className="text-emerald-400 font-medium">Gratuite (Fès & Saïss)</span>
              </div>
            </div>

            {/* Total Price Display */}
            <div className="py-5 flex items-baseline justify-between">
              <div>
                <p className="text-xs text-zinc-400">Total estimé tout compris</p>
                <p className="text-[11px] text-zinc-500">Payable à la prise en charge</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-white font-mono tabular-nums">
                  {quote.total}
                </span>
                <span className="text-sm font-bold text-amber-400 ml-1">MAD</span>
                <div className="text-[11px] text-zinc-400 font-mono">
                  &asymp; {(quote.total / 10.8).toFixed(0)} EUR
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Confirmation Button */}
            <button
              onClick={handleWhatsAppBooking}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-sm text-zinc-950 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 fill-zinc-950 text-zinc-950" />
              <span>Envoyer ce devis sur WhatsApp</span>
            </button>

            <p className="text-center text-[11px] text-zinc-400 mt-3">
              Réponse instantanée &middot; Chauffeur disponible 24/7 au +212 620-759032
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BookingCalculator;
