import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { PRODUCTS } from "../products/products";
import { RxCross1 } from "react-icons/rx";

import europeLogo from "../images/europeLogo.svg";

import { ShopContext } from "../context/ShopContext";
import React, { useContext } from "react";
import CartItemList from "../ui/CartItemList";

function Navbar() {
  const { cartItems, getAllItems, getTotalPrice, resetWholeCart, cartAmount } =
    useContext(ShopContext);
  const myRef = useRef();
  const myRef2 = useRef();
  const [arrowReady, setArrowReady] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setArrowReady(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  if (
    document.readyState !== "loading" &&
    document.getElementById("arrow1") !== null
  ) {
    arrowReady
      ? (document.getElementById("arrow1").style.opacity = 0)
      : (document.getElementById("arrow1").style.opacity = 1);
    arrowReady
      ? (document.getElementById("navbarScrolls").style.transform =
          "translate(0%,-100%)")
      : (document.getElementById("navbarScrolls").style.transform =
          "translate(0,0)");
    arrowReady
      ? (document.getElementById("navbarScrolls").style.pointerEvents = "none")
      : (document.getElementById("navbarScrolls").style.pointerEvents = "auto");
  }
  const showCart = () => {
    document.getElementById("cartContainer").style.transform = "translate(0,0)";
  };
  const hideCart = () => {
    document.getElementById("cartContainer").style.transform =
      "translate(100%,0)";
  };
  const nextPage = () => {
    return window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className={classes.navbars}>
      <ul className={classes.firstNavbar}>
        <li className={classes.contact}>Contact us: +381 64 3941847</li>
        <li>
          <Link
            to="/contact"
            onClick={() => {
              nextPage();
            }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/art"
            onClick={() => {
              nextPage();
            }}
          >
            Art
          </Link>
        </li>
        <li>
          <Link
            to="/nature"
            onClick={() => {
              nextPage();
            }}
          >
            Nature
          </Link>
        </li>
        <li>
          <Link
            to="/race"
            onClick={() => {
              nextPage();
            }}
          >
            Race
          </Link>
        </li>
        <li>
          <Link
            to="/architecture"
            onClick={() => {
              nextPage();
            }}
          >
            Architecture
          </Link>
        </li>
      </ul>
      <ul ref={myRef} className={classes.secondNavbar}>
        <img src={europeLogo}></img>
        <li>
          <Link
            to="/"
            onClick={() => {
              nextPage();
            }}
          >
            Europe
          </Link>
        </li>
        <li>
          <Link
            to="/culture"
            onClick={() => {
              nextPage();
            }}
          >
            Culture
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            onClick={() => {
              nextPage();
            }}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            onClick={() => {
              nextPage();
            }}
          >
            Gallery
          </Link>
        </li>
        <div className={classes.loginContainer}>
          <li className={classes.login}>
            <Link
              to="/login"
              onClick={() => {
                nextPage();
              }}
            >
              Log in
            </Link>
          </li>
          <li className={classes.signup}>
            <Link
              to="/signup"
              onClick={() => {
                nextPage();
              }}
            >
              Sign up
            </Link>
          </li>
          <button
            className={classes.cart}
            onClick={() => {
              showCart();
            }}
          >
            <CiShoppingCart />
            <div className={classes.cartNumber}>{getAllItems()}</div>
          </button>
        </div>
      </ul>
      <div
        id="arrow1"
        ref={myRef2}
        className={classes.arrow}
        onClick={scrollUp}
      >
        <BsChevronDoubleUp />
      </div>
      <div id="navbarScrolls" className={classes.navbarScrolls}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                nextPage();
              }}
            >
              Europe
            </Link>
          </li>
          <li>
            <Link
              to="/culture"
              onClick={() => {
                nextPage();
              }}
            >
              Culture
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={() => {
                nextPage();
              }}
            >
              Shop
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="/contact"
              onClick={() => {
                nextPage();
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/art"
              onClick={() => {
                nextPage();
              }}
            >
              Art
            </Link>
          </li>
          <li>
            <Link
              to="/nature"
              onClick={() => {
                nextPage();
              }}
            >
              Nature
            </Link>
          </li>
          <li>
            <Link
              to="/race"
              onClick={() => {
                nextPage();
              }}
            >
              Race
            </Link>
          </li>
          <li>
            <Link
              to="/architecture"
              onClick={() => {
                nextPage();
              }}
            >
              Architecture
            </Link>
          </li>
        </ul>
        <div className={classes.loginContainer}>
          <li className={classes.login}>
            <Link
              to="/login"
              onClick={() => {
                nextPage();
              }}
            >
              Log in
            </Link>
          </li>
          <li className={classes.signup2}>
            <Link
              to="/signup"
              onClick={() => {
                nextPage();
              }}
            >
              Sign up
            </Link>
          </li>
          <button
            className={classes.cart}
            onClick={() => {
              showCart();
            }}
          >
            <CiShoppingCart />
            <div className={classes.cartNumber}>{getAllItems()}</div>
          </button>
        </div>
      </div>
      <div id="cartContainer" className={classes.cartContainer}>
        <div className={classes.cartHeader}>
          <h1>Cart</h1>{" "}
          <button
            onClick={() => {
              hideCart();
            }}
          >
            <RxCross1 />
          </button>
        </div>
        <hr></hr>
        <div className={classes.cartItemsList}>
          <CartItemList products={PRODUCTS}></CartItemList>
        </div>
        <hr></hr>
        {cartAmount() > 0 && (
          <div className={classes.checkoutButton}>
            <p>TOTAL {getTotalPrice().toFixed(2)}€</p> <br />
            <Link
              // to="/checkout"
              onClick={() => {
                resetWholeCart()
              }}
            >
              CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
