import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import classes from "./Shop.module.css";

import ShopItemList from "../ui/ShopItemList";

import { PRODUCTS } from "../products/products";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Shop() {
  const [checked, setChecked] = useState(false);
  const [tshirts, setTshirts] = useState(false);
  const [hoodies, setHoodies] = useState(false);
  const [mugs, setMugs] = useState(false);
  const [jackets, setJackets] = useState(false);

  var checkedList1 = ["tshirts", "hoodies", "jackets", "mugs"];
  var checkedList = [];
  const handleChangeShirts = (event) => {
    setTshirts(event.target.checked);
    setChecked(event.target.checked);
  };
  const handleChangeHoodies = (event) => {
    setHoodies(event.target.checked);
    setChecked(event.target.checked);
  };
  const handleChangeMugs = (event) => {
    setMugs(event.target.checked);
    setChecked(event.target.checked);
  };
  const handleChangeJackets = (event) => {
    setJackets(event.target.checked);
    setChecked(event.target.checked);
  };
  const checkedOn = () => {
    tshirts && checkedList.push("tshirts");
    hoodies && checkedList.push("hoodies");
    mugs && checkedList.push("mugs");
    jackets && checkedList.push("jackets");

    checkedList1.map((obj) => {
      if (checkedList.includes(obj)) {
        PRODUCTS.map((obj1) => {
          if (obj1.value == obj) {
            obj1.state = true;
          }
          return obj1;
        });
      } else {
        PRODUCTS.map((obj1) => {
          if (obj1.value == obj) {
            obj1.state = false;
          }
          return obj1;
        });
      }
    });
  };
  const checkedOff = () => {
    !tshirts
      ? checkedList.filter((word) => word !== "tshirts")
      : checkedList.push("tshirts");
    !hoodies
      ? checkedList.filter((word) => word !== "hoodies")
      : checkedList.push("hoodies");
    !mugs
      ? checkedList.filter((word) => word !== "mugs")
      : checkedList.push("mugs");
    !jackets
      ? checkedList.filter((word) => word !== "jackets")
      : checkedList.push("jackets");

    checkedList1.map((obj) => {
      if (checkedList.includes(obj)) {
        PRODUCTS.map((obj1) => {
          if (obj1.value == obj) {
            obj1.state = true;
          }
          return obj1;
        });
      } else {
        PRODUCTS.map((obj1) => {
          if (obj1.value == obj) {
            obj1.state = false;
          }
          return obj1;
        });
      }
    });

    if (checkedList == 0) {
      for (let i = 0; i < PRODUCTS.length; i++) {
        PRODUCTS[i].state = true;
      }
    }
  };

  return (
    <>
      {checked ? checkedOn() : checkedOff()}

      <Navbar />
      <section className={classes.shop}>
        <div className={classes.shopFront}>
          <div className={classes.shopFrontDiv}>
            <div>
              <h1>SHOP</h1> <br />
              <p>
                Shop the latest trends and stay connected to your favorite
                brands, all in one - place.
              </p>
              <br />
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={classes.storeContainer}>
          <div className={classes.storeCheckbox}>
            <div className={classes.storeCheckboxInner}>
              <label className={classes.container}>
                TShirts
                <input
                  type="checkbox"
                  id="tshirts"
                  name="tshirts"
                  value="tshirts"
                  onChange={handleChangeShirts}
                />
                <span className={classes.checkmark}></span>
              </label>
              <br />
              <label className={classes.container}>
                Hoodies
                <input
                  type="checkbox"
                  id="hoodies"
                  name="hoodies"
                  value="hoodies"
                  onChange={handleChangeHoodies}
                />
                <span className={classes.checkmark}></span>
              </label>
              <br />
              <label className={classes.container}>
                Mugs
                <input
                  type="checkbox"
                  id="mugs"
                  name="mugs"
                  value="mugs"
                  onChange={handleChangeMugs}
                />
                <span className={classes.checkmark}></span>
              </label>
              <br />
              <label className={classes.container}>
                Jackets
                <input
                  type="checkbox"
                  id="jackets"
                  name="jackets"
                  value="jackets"
                  onChange={handleChangeJackets}
                />
                <span className={classes.checkmark}></span>
              </label>
            </div>
          </div>
          <div className={classes.store}>
            <ShopItemList items={PRODUCTS} />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Shop;
