import React from 'react';
import styled from '@emotion/styled';
import { useCart } from '../hooks/useCart';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0 0 10px 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  font-weight: bold;
  color: #007bff;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c82333;
  }
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-align: right;
`;

const TotalAmount = styled.h2`
  margin: 0;
  color: #28a745;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 40px;
  color: #6c757d;
`;

export const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container>
        <EmptyCart>
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart to see them here!</p>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id}>
          <ItemImage src={item.imageURL} alt={item.name} />
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
            <p>Type: {item.type}</p>
            <p>Color: {item.color}</p>
            <p>Gender: {item.gender}</p>
            <ItemPrice>₹{item.price}</ItemPrice>
            <QuantityContainer>
              <QuantityButton
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </QuantityButton>
              <span>{item.quantity}</span>
              <QuantityButton
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                disabled={item.quantity >= item.quantity}
              >
                +
              </QuantityButton>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Remove
              </RemoveButton>
            </QuantityContainer>
          </ItemDetails>
        </CartItem>
      ))}
      <TotalContainer>
        <TotalAmount>Total: ₹{getTotal()}</TotalAmount>
      </TotalContainer>
    </Container>
  );
}; 