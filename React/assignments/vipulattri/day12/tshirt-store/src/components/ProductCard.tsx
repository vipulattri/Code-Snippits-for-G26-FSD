import React from 'react';
import styled from '@emotion/styled';
import { Product } from '../types';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

const Price = styled.p`
  margin: 0;
  font-weight: bold;
  color: #007bff;
`;

const AddButton = styled.button`
  padding: 8px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card>
      <Image src={product.imageURL} alt={product.name} />
      <Name>{product.name}</Name>
      <p>Type: {product.type}</p>
      <p>Color: {product.color}</p>
      <p>Gender: {product.gender}</p>
      <Price>₹{product.price}</Price>
      <AddButton 
        onClick={() => onAddToCart(product)}
        disabled={product.quantity === 0}
      >
        {product.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
      </AddButton>
    </Card>
  );
}; 