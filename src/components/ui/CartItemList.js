import CartItem from "./CartItem";
import { ShopContext } from "../context/ShopContext";
import React, { useContext } from "react";

function CartItemList(props) {
  const { cartItems } = useContext(ShopContext);
  return (
    <ul>
      {props.products.map(
        (product) =>
          cartItems[product.id] > 0 && (
            <CartItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          )
      )}
    </ul>
  );
}

export default CartItemList;
