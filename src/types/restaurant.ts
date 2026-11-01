export type MenuCategory = 'all' | 'entrees' | 'mains' | 'desserts' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  frenchName: string;
  category: 'entrees' | 'mains' | 'desserts' | 'drinks';
  description: string;
  price: number;
  image: string;
  isChefSpecial?: boolean;
  dietary?: string[];
  winePairing?: string;
  preparationTime?: string;
}

export interface ChefSpecial {
  id: string;
  title: string;
  frenchTitle: string;
  description: string;
  tastingNotes: string;
  winePairing: string;
  origin: string;
  price: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'cellar' | 'culinary' | 'private';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface ReservationFormData {
  guests: number;
  date: string;
  time: string;
  seatingArea: string;
  occasion: string;
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
  dietaryNotes: string;
}

export interface ConfirmedReservation extends ReservationFormData {
  referenceCode: string;
  bookingTimestamp: string;
}
