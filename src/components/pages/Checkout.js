import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import classes from "./Checkout.module.css";

import { PRODUCTS } from "../products/products";
import CartItemList from "../ui/CartItemList";

function Checkout() {
  return (
    <>
      <Navbar />
      <section className={classes.checkoutContainer}>
        <div className={classes.checkoutLeft}>
          <div className={classes.checkoutCart}>
            <h2>Your order</h2> <hr />
            <CartItemList products={PRODUCTS} />
          </div>

          <div className={classes.checkoutForm}>
            <form>
              <input></input> <br />
              <br />
              <input></input> <br />
              <br />
              <input></input>
            </form>
          </div>
        </div>
        <div className={classes.checkoutRight}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11330.453012488197!2d20.4800159!3d44.7683016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd12e2aad5590e385!2sThe%20School%20of%20Electrical%20and%20Computer%20Engineering%20of%20Applied%20Studies!5e0!3m2!1sen!2srs!4v1674671590134!5m2!1sen!2srs"
            width="100%"
            height="100%"
            frameBorder="none"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Checkout;
