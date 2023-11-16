import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products/products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const resetCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
  };
  const resetWholeCart = () => {
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      setCartItems((prev) => ({ ...prev, [i]: (prev[i] = 0) }));
    }
  };
  const getAllItems = () => {
    let allItems = 0;
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      if (cartItems[i] !== 0) allItems += 1;
    }
    return allItems;
  };
  const cartAmount = () => {
    let cartAmount = 0;
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      if (cartItems[i] !== 0) cartAmount += 1;
    }
    return cartAmount;
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      if (cartItems[i] !== 0)
        totalPrice += PRODUCTS[i - 1].price * cartItems[i];
    }
    return totalPrice;
  };

  const contextValue = {
    cartItems,
    getDefaultCart,
    addToCart,
    resetWholeCart,
    cartAmount,
    removeFromCart,
    resetCart,
    getAllItems,
    getTotalPrice,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
