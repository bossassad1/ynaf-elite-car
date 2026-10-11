'use client';

import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Sparkles, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export const Conditions: React.FC = () => {
  const conditions = [
    {
      id: 'documents',
      icon: FileText,
      badge: 'Formalités Allégées',
      title: "Permis & Pièce d'Identité",
      subtitle: 'Passeport ou CNI + Permis de conduire original',
      description:
        "Formalités administratives simplifiées en 5 minutes. Il vous suffit de présenter votre permis de conduire original (national ou international) ainsi que votre passeport ou carte nationale d'identité lors de la remise des clés.",
      perks: [
        'Permis national étranger ou marocain accepté',
        'Contrat digital instantané sur smartphone',
        'Deuxième conducteur gratuit sur demande',
      ],
    },
    {
      id: 'sans-caution',
      icon: ShieldCheck,
      badge: 'Exclusivité Ynaf Elite',
      title: 'Offre Sans Caution',
      subtitle: 'Valable pour conducteurs avec permis > 5 ans',
      description:
        "Profitez d'une tranquillité d'esprit totale sans bloquer des milliers d'euros sur votre carte bancaire. Si votre permis de conduire date de plus de 5 ans, aucune caution n'est retenue pour la location de votre véhicule.",
      perks: [
        '0 DH de pré-autorisation bancaire',
        'Pas de franchise abusive ni de retenue',
        'Accessible aux résidents & vacanciers MRE/touristes',
      ],
      highlight: true,
    },
    {
      id: 'assurance',
      icon: CheckCircle2,
      badge: 'Protection Intégrale',
      title: 'Assurance Tous Risques Incluse',
      subtitle: 'Zéro frais caché, transparence totale',
      description:
        'Chaque véhicule de notre flotte bénéficie d’une couverture d’assurance complète avec responsabilité civile, dommages collision, bris de glace, et assistance dépannage 24h/24 7j/7 partout au Maroc.',
      perks: [
        'Assistance routière 24/7 incluse',
        'Kilométrage illimité sur tous les forfaits',
        'Véhicule de remplacement en cas d’imprévu',
      ],
    },
    {
      id: 'livraison',
      icon: Clock,
      badge: 'Ponctualité VIP',
      title: 'Livraison Gratuite 24/7',
      subtitle: 'Aéroport Fès-Saïss & Hôtels / Centre-Ville',
      description:
        "Que vous atterrissiez à minuit ou au petit matin, notre agent vous remet les clés directement au terminal de l'Aéroport Fès-Saïss ou à votre hôtel / riad dans Fès sans aucun supplément.",
      perks: [
        'Suivi des vols en temps réel (zéro stress retard)',
        'Remise et retour express en moins de 3 minutes',
        'Livraison directe aux riads de la Médina & Ville Nouvelle',
      ],
    },
  ];

  return (
    <section id="conditions" className="py-20 bg-[#09090b] text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Conditions & Engagements Clairs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Louez en Toute Sérénité à Fès
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Une politique de location transparente, sans surprise à la réception et pensée pour un séjour sans tracas.
          </p>
        </div>

        {/* 4 Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {conditions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl p-7 lg:p-8 transition-all duration-300 flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border-2 border-amber-500/60 shadow-[0_10px_35px_rgba(245,158,11,0.15)]'
                    : 'bg-zinc-900/60 hover:bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/30 shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-400/90 mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Perks List */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                  {item.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Inquiry Bar */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-amber-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 items-center justify-center text-amber-400 shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Une question sur vos documents ou la caution ?</h4>
              <p className="text-xs text-zinc-400">Notre équipe vous répond immédiatement sur WhatsApp 24h/24.</p>
            </div>
          </div>
          <a
            href="https://wa.me/212620759032?text=Bonjour%20Ynaf%20Elite%20Car%2C%20j%27ai%20une%20question%20sur%20les%20conditions%20de%20location."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-zinc-950 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-zinc-950" />
            <span>Poser une question sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Conditions;
