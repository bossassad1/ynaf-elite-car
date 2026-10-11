'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09090b] border-t border-amber-500/20 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Presentation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center font-extrabold text-zinc-950 text-xs shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                YEC
              </div>
              <div>
                <span className="text-base font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 uppercase">
                  Ynaf Elite Car
                </span>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400">Fès · Maroc</p>
              </div>
            </div>
            
            <p className="text-zinc-400 leading-relaxed text-xs">
              Agence de référence pour la location de voitures à Fès et à l&apos;Aéroport International Fès-Saïss. Flotte récente, formule exclusive sans caution pour permis de plus de 5 ans et service personnalisé 24h/24.
            </p>

            <div className="flex items-center gap-2 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Agrément officiel & Assurance tous risques incluse</span>
            </div>
          </div>

          {/* Col 2: Locations & Horaires */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Nos Adresses à Fès</span>
            </h4>
            
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800">
                <p className="font-semibold text-white text-xs">Aéroport International Fès-Saïss</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Terminaux 1 & 2 · Parking Arrivées Loueurs (FEZ)
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800">
                <p className="font-semibold text-white text-xs">Agence Centre-Ville</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Avenue Hassan II, Ville Nouvelle, Fès 30000
                </p>
              </div>

              <div className="flex items-center gap-2 text-zinc-300 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Horaires : <strong className="text-amber-400">24h/24 &middot; 7j/7</strong> non-stop</span>
              </div>
            </div>
          </div>

          {/* Col 3: Contact & Direct WhatsApp */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contact & Réservation</span>
            </h4>

            <p className="text-xs text-zinc-400">
              Réservation immédiate et assistance client 24h/24 :
            </p>

            <div className="space-y-2.5">
              <a
                href="https://wa.me/212620759032?text=Bonjour%20Ynaf%20Elite%20Car"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white hover:text-amber-300 font-mono text-sm font-bold transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>+212 620-759032</span>
              </a>

              <a
                href="tel:+212620759032"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-white text-xs transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Appel direct disponible</span>
              </a>

              <div className="flex items-center gap-2.5 text-zinc-400 text-xs">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>contact@ynafelitecar.com</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/212620759032?text=Bonjour%20Ynaf%20Elite%20Car%2C%20je%20souhaite%20un%20devis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-zinc-950 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950" />
                <span>Bloquer un Véhicule sur WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 4: SEO Links for Car Rental in Fes */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Location Voiture Fès (SEO)
            </h4>

            <ul className="space-y-2 text-xs">
              <li>
                <a href="#flotte" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Location Clio 5 Fès</span>
                  <span className="text-[10px] text-amber-500/80 font-mono">Dès 300 DH</span>
                </a>
              </li>
              <li>
                <a href="#flotte" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Location Clio 5 Luxe Automatique</span>
                  <span className="text-[10px] text-amber-500/80 font-mono">Dès 380 DH</span>
                </a>
              </li>
              <li>
                <a href="#flotte" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Location Nissan Magnite SUV Fès</span>
                  <span className="text-[10px] text-amber-500/80 font-mono">Dès 420 DH</span>
                </a>
              </li>
              <li>
                <a href="#flotte" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Location Dacia Sandero Stepway</span>
                  <span className="text-[10px] text-amber-500/80 font-mono">Dès 320 DH</span>
                </a>
              </li>
              <li>
                <a href="#flotte" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Location Dacia Logan & Peugeot 208</span>
                  <span className="text-[10px] text-amber-500/80 font-mono">Dès 260 DH</span>
                </a>
              </li>
              <li>
                <a href="#aeroport" className="hover:text-amber-300 transition-colors">
                  Location voiture Aéroport Fès-Saïss sans caution
                </a>
              </li>
              <li>
                <a href="#conditions" className="hover:text-amber-300 transition-colors">
                  Location sans caution permis &gt; 5 ans
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Tagline & Keywords Strip */}
        <div className="mt-12 pt-8 border-t border-zinc-900 space-y-3">
          <div className="text-[11px] text-zinc-500 leading-relaxed">
            <strong className="text-zinc-400">Ynaf Elite Car Maroc :</strong> Spécialiste de la location de voitures à Fès, Aéroport Fès-Saïss (FEZ), Meknès et Ifrane. Réservation en ligne directe par WhatsApp, tarifs dégressifs de 3 à 30 jours, kilométrage illimité, boîte manuelle et automatique, motorisation diesel et essence. Service de navette aéroport gratuit et assistance 24/7.
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 pt-2">
            <p>&copy; {new Date().getFullYear()} Ynaf Elite Car. Tous droits réservés. Fès, Maroc.</p>
            <div className="flex items-center gap-4">
              <a href="#conditions" className="hover:text-amber-400 transition-colors">Conditions Générales</a>
              <span>&middot;</span>
              <a href="#aeroport" className="hover:text-amber-400 transition-colors">Aéroport Saïss</a>
              <span>&middot;</span>
              <a href="#avis" className="hover:text-amber-400 transition-colors">Avis Google (4.9/5)</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
