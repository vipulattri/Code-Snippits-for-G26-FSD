export interface Product {
  id: string;
  name: string;
  type: string;
  color: string;
  gender: 'Men' | 'Women';
  price: number;
  quantity: number;
  imageURL: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  gender: string;
  color: string;
  type: string;
  priceRange: string;
}

export interface ProductFilters {
  gender: string;
  color: string;
  type: string;
  priceRange: string;
  searchQuery: string;
} 