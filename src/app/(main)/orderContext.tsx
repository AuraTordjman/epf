// contexts/OrderContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Order {
  id: number;
  nom: string;
  contenu: string;
  prix: number;
  heure: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (newOrder: Order) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
//@ts-ignore
export const OrderProvider: React.FC = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (newOrder: Order) => {
    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
