import classes from "./ShopItem.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

import { ShopContext } from "../context/ShopContext";
import React, { useContext } from "react";

function ShopItem(props) {
  const { id, name, price, image, value } = props;
  const { addToCart, removeFromCart, resetCart, cartItems } =
    useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.itemImage}>
          <img src={image}></img>
        </div>
        <div className={classes.itemDescription}>
          <div className={classes.itemDescriptionInner}>
            <h3>{name}</h3>
            <p>{price}</p>
            {cartItemAmount === 0 ? (
              <button
                className={classes.cartButton}
                onClick={() => addToCart(id)}
              >
                Add to cart
              </button>
            ) : (
              <div className={classes.quantity}>
                <div className={classes.quantityMinusPlus}>
                  <button onClick={() => removeFromCart(id)}>
                    <AiOutlineMinus />
                  </button>
                  <div className={classes.spanDiv}>
                    <span>{cartItemAmount}</span> IN CART
                  </div>
                  <button onClick={() => addToCart(id)}>
                    <AiOutlinePlus />
                  </button>
                </div>
                <div className={classes.quantityRemove}>
                  <button onClick={() => resetCart(id)}>Remove</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopItem;
