import { Car } from '@/types/car';

export const CARS_DATA: Car[] = [
  {
    id: 'dacia-logan-diesel-grey',
    name: 'Dacia Logan',
    brand: 'Dacia',
    model: 'Logan 1.5 dCi',
    category: 'Economic',
    transmission: 'Manual',
    fuel: 'Diesel',
    color: 'Gris Métallisé',
    seats: 5,
    doors: 4,
    luggage: 3,
    airConditioning: true,
    pricing: {
      range3to7: 260,
      range8to14: 230,
      range15Plus: 200,
      currency: 'MAD',
    },
    image: '/images/car_dacia_logan_1791743897812.jpg',
    features: [
      'Climatisation automatique',
      'Consommation 4.1L/100km',
      'Coffre spacieux 528L',
      'Écran tactile Bluetooth & Carplay',
      'Sans caution (Permis > 5 ans)',
      'Assurance tous risques',
    ],
    depositFree: true,
    isPopular: false,
    isLuxury: false,
    badge: 'Éco Robuste',
  },
  {
    id: 'peugeot-208-diesel-grey',
    name: 'Peugeot 208',
    brand: 'Peugeot',
    model: '208 BlueHDi',
    category: 'Economic',
    transmission: 'Manual',
    fuel: 'Diesel',
    color: 'Gris Platinium',
    seats: 5,
    doors: 5,
    luggage: 2,
    airConditioning: true,
    pricing: {
      range3to7: 280,
      range8to14: 250,
      range15Plus: 220,
      currency: 'MAD',
    },
    image: '/images/car_peugeot_208_1791743909195.jpg',
    features: [
      'i-Cockpit 3D digital',
      'Feux de jour LED signature',
      'Régulateur / Limiteur de vitesse',
      'Faible consommation Diesel',
      'Sans caution (Permis > 5 ans)',
      'Assurance tous risques',
    ],
    depositFree: true,
    isPopular: false,
    isLuxury: false,
    badge: 'Design Moderne',
  },
  {
    id: 'renault-clio5-diesel-grey',
    name: 'Renault Clio 5',
    brand: 'Renault',
    model: 'Clio V dCi 100',
    category: 'Economic',
    transmission: 'Manual',
    fuel: 'Diesel',
    color: 'Gris Titane',
    seats: 5,
    doors: 5,
    luggage: 2,
    airConditioning: true,
    pricing: {
      range3to7: 300,
      range8to14: 270,
      range15Plus: 240,
      currency: 'MAD',
    },
    image: '/images/car_clio5_grey_1791743923036.jpg',
    features: [
      'Écran tactile Easy Link',
      'Radar de recul & Caméra',
      'Projecteurs Full LED Pure Vision',
      'Confort routier exceptionnel',
      'Sans caution (Permis > 5 ans)',
      'Assurance tous risques',
    ],
    depositFree: true,
    isPopular: true,
    isLuxury: false,
    badge: 'Best-Seller Fès',
  },
  {
    id: 'renault-clio5-luxury-black',
    name: 'Renault Clio 5 (Édition Luxe)',
    brand: 'Renault',
    model: 'Clio V Intens Auto',
    category: 'Luxury Edition',
    transmission: 'Automatic',
    fuel: 'Diesel',
    color: 'Noir Étoilé',
    seats: 5,
    doors: 5,
    luggage: 2,
    airConditioning: true,
    pricing: {
      range3to7: 380,
      range8to14: 340,
      range15Plus: 300,
      currency: 'MAD',
    },
    image: '/images/car_clio5_luxury_1791743773122.jpg',
    features: [
      'Boîte automatique EDC 7 rapports',
      'Finition Intérieure Cuir Noir & Ambiance LED',
      'Grand écran tactile 9.3" GPS intégré',
      'Aide au stationnement 360°',
      'Sans caution (Permis > 5 ans)',
      'Assurance tous risques',
    ],
    depositFree: true,
    isPopular: true,
    isLuxury: true,
    badge: 'Édition Prestige',
  },
  {
    id: 'dacia-sandero-stepway-grey',
    name: 'Dacia Sandero Stepway',
    brand: 'Dacia',
    model: 'Stepway 1.5 dCi',
    category: 'Mini SUV',
    transmission: 'Manual',
    fuel: 'Diesel',
    color: 'Gris Comète',
    seats: 5,
    doors: 5,
    luggage: 3,
    airConditioning: true,
    pricing: {
      range3to7: 320,
      range8to14: 280,
      range15Plus: 250,
      currency: 'MAD',
    },
    image: '/images/car_dacia_stepway_1791743932444.jpg',
    features: [
      'Garde au sol surélevée spéciale routes Maroc',
      'Barres de toit modulables',
      'Système Media Display Android Auto / Apple CarPlay',
      'Espace généreux passagers & bagages',
      'Sans caution (Permis > 5 ans)',
      'Assurance tous risques',
    ],
    depositFree: true,
    isPopular: false,
    isLuxury: false,
    badge: 'Crossover Économique',
  },
  {
    id: 'nissan-magnite-black',
    name: 'Nissan Magnite',
    brand: 'Nissan',
    model: 'Magnite CVT Turbo',
    category: 'Compact SUV',
    transmission: 'Automatic',
    fuel: 'Essence',
    color: 'Noir Onyx',
    seats: 5,
    doors: 5,
    luggage: 3,
    airConditioning: true,
    pricing: {
      range3to7: 420,
      range8to14: 380,
      range15Plus: 340,
      currency: 'MAD',
    },
    image: '/images/car_nissan_magnite_1791743785153.jpg',
    features: [
      'Boîte automatique X-Tronic souple & réactive',
      'Caméra 360° Around View Monitor',
      'Tableau de bord numérique 7" haute définition',
      'Garde au sol SUV 205 mm & Confort royal',
      'Sans caution (Permis > 5 ans)',
      'Assurance tous risques',
    ],
    depositFree: true,
    isPopular: true,
    isLuxury: true,
    badge: 'SUV Automatique VIP',
  },
];

/**
 * Computes daily rate and total for a vehicle given the number of rental days
 */
export function calculateQuote(car: Car, days: number): { dailyRate: number; total: number; savingsRate: string } {
  let dailyRate: number;
  let savingsRate = 'Tarif Standard (3-7 jours)';

  if (days >= 15) {
    dailyRate = car.pricing.range15Plus;
    savingsRate = 'Tarif Longue Durée (15j+)';
  } else if (days >= 8) {
    dailyRate = car.pricing.range8to14;
    savingsRate = 'Tarif Moyen Séjour (8-14j)';
  } else {
    dailyRate = car.pricing.range3to7;
    savingsRate = 'Tarif Court Séjour (3-7j)';
  }

  const total = dailyRate * Math.max(1, days);
  return { dailyRate, total, savingsRate };
}

/**
 * Builds direct WhatsApp URL with pre-filled booking parameters
 */
export function buildWhatsAppLink(options: {
  phone?: string;
  carName: string;
  days?: number;
  pickupLocation?: string;
  dates?: string;
  estimatedPrice?: number;
}): string {
  const phone = options.phone || '212620759032';
  const lines = [
    `Bonjour Ynaf Elite Car Fès,`,
    `Je souhaite réserver la voiture suivante : *${options.carName}*`,
  ];

  if (options.pickupLocation) {
    lines.push(`Lieu de prise en charge : ${options.pickupLocation}`);
  }
  if (options.dates) {
    lines.push(`Dates souhaitées : ${options.dates}`);
  }
  if (options.days) {
    lines.push(`Durée : ${options.days} jours`);
  }
  if (options.estimatedPrice) {
    lines.push(`Tarif estimé : ${options.estimatedPrice} MAD`);
  }
  lines.push(`Merci de me confirmer la disponibilité.`);

  const message = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${phone}?text=${message}`;
}
