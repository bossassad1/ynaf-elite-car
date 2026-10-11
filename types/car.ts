export type CarCategory = 'Economic' | 'Mini SUV' | 'Compact SUV' | 'Luxury Edition';

export type TransmissionType = 'Manual' | 'Automatic';

export type FuelType = 'Diesel' | 'Essence';

export interface CarPricing {
  /** Daily price for rentals between 3 and 7 days (MAD) */
  range3to7: number;
  /** Daily price for rentals between 8 and 14 days (MAD) */
  range8to14: number;
  /** Daily price for rentals of 15 days or more (MAD) */
  range15Plus: number;
  /** Currency code, standard 'MAD' */
  currency: string;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: CarCategory;
  transmission: TransmissionType;
  fuel: FuelType;
  color: string;
  seats: number;
  doors: number;
  luggage: number;
  airConditioning: boolean;
  pricing: CarPricing;
  image: string;
  features: string[];
  depositFree: boolean;
  isPopular?: boolean;
  isLuxury?: boolean;
  badge?: string;
}

export type FilterCategory = 'all' | 'economic' | 'suv' | 'luxury' | 'automatic' | 'diesel';

export interface BookingRequest {
  carId: string;
  carName: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  dropoffDate: string;
  pickupTime?: string;
  dropoffTime?: string;
  rentalDays: number;
  pricePerDay: number;
  totalPrice: number;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  drivingExperienceYears?: number;
  licenseOver5Years?: boolean;
  flightNumber?: string;
  notes?: string;
}
