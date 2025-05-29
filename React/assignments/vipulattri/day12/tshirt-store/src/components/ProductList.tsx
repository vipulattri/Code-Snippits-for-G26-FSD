import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Product, FilterState } from '../types';
import { API_URL } from '../constants/filters';
import { filterProducts, getUniqueValues } from '../utils/filterUtils';
import { useCart } from '../hooks/useCart';
import { ProductCard } from './ProductCard';
import { FilterBar } from './FilterBar';
import { SearchBar } from './SearchBar';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #6c757d;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #dc3545;
`;

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    gender: '',
    color: '',
    type: '',
    priceRange: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    const filtered = filterProducts(products, { ...filters, searchQuery });
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    const filtered = filterProducts(products, { ...newFilters, searchQuery });
    setFilteredProducts(filtered);
  };

  if (isLoading) {
    return <LoadingMessage>Loading products...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  const colorOptions = getUniqueValues(products, 'color');
  const typeOptions = getUniqueValues(products, 'type');

  return (
    <Container>
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSearch={handleSearch}
      />
      
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        colorOptions={colorOptions}
        typeOptions={typeOptions}
      />

      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </ProductGrid>
    </Container>
  );
}; 