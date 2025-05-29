import { Product, ProductFilters } from '../types';

export const filterProducts = (products: Product[], filters: ProductFilters): Product[] => {
  const { searchQuery, gender, color, type, priceRange } = filters;
  const query = searchQuery.toLowerCase();

  return products.filter(product => {
    const searchMatch = query === '' || 
      product.name.toLowerCase().includes(query) ||
      product.color.toLowerCase().includes(query) ||
      product.type.toLowerCase().includes(query);
    
    const genderMatch = gender === '' || product.gender === gender;
    const colorMatch = color === '' || product.color === color;
    const typeMatch = type === '' || product.type === type;
    
    const priceMatch = priceRange === '' || 
      (priceRange === '0-250' && product.price <= 250) ||
      (priceRange === '251-450' && product.price > 250 && product.price <= 450) ||
      (priceRange === '451+' && product.price > 450);

    return searchMatch && genderMatch && colorMatch && typeMatch && priceMatch;
  });
};

export const getUniqueValues = (products: Product[], key: keyof Product): string[] => {
  return [...new Set(products.map(p => p[key].toString()))];
}; 