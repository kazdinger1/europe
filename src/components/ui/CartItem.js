import classes from "./CartItem.module.css";

import { ShopContext } from "../context/ShopContext";
import React, { useContext } from "react";

function CartItem(props) {
  const { resetCart, cartItems } = useContext(ShopContext);
  const { id, name, price, image } = props;
  return (
    <div className={classes.cartItem}>
      <div className={classes.cartItemImage}>
        <img src={image}></img>
      </div>
      <div className={classes.cartItemDescription}>
        <p>
          {name} <br />
          {price}€ <br />
          x{cartItems[id]}
        </p>
      </div>
      <div className={classes.cartItemPrice}>
        <p>
          {(cartItems[id]*price).toFixed(2)}€<button className={classes.cartRemove} onClick={()=>{resetCart(id)}}>x</button>
        </p>
      </div>
    </div>
  );
}

export default CartItem;
