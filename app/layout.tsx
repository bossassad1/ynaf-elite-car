import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Ynaf Elite Car - Location de Voiture Fès & Aéroport Saïss',
  description: 'Location de voiture de prestige et économique à Fès & Aéroport Fès-Saïss sans caution. Clio 5, Nissan Magnite, livraison gratuite 24/7.',
  openGraph: {
    title: 'Ynaf Elite Car - Location de Voiture Fès & Aéroport Saïss',
    description: 'Location de voiture de prestige et économique à Fès & Aéroport Fès-Saïss sans caution. Clio 5, Nissan Magnite, livraison gratuite 24/7.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ynaf Elite Car - Location de Voiture Fès & Aéroport Saïss',
    description: 'Location de voiture de prestige et économique à Fès & Aéroport Fès-Saïss sans caution. Clio 5, Nissan Magnite, livraison gratuite 24/7.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
