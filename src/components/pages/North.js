import classes from "./North.module.css";
import CardList from "../ui/CardList";
import WidgetList from "../ui/WidgetList";
import Footer from "../layouts/Footer";

import europeArch from "../images/EuropeanArchitecture.jpg";
import race from "../images/race.jpg";
import nature from "../images/nature.jpg";
import funfact1 from "../images/funfact1.jpg";
import funfact2 from "../images/funfact2.jpg";
import funfact3 from "../images/funfact3.jpg";
import funfact4 from "../images/funfact4.jpg";
import europeanStars from "../images/europeanStars.png";
import Navbar from "../layouts/Navbar";

const CARDS = [
  {
    id: "0",
    header: "ARCHITECTURE",
    link: "/Architecture",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: europeArch,
  },
  {
    id: "1",
    header: "RACE",
    link: "/Race",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: race,
  },
  {
    id: "2",
    header: "NATURE",
    link: "/Nature",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: nature,
  },
];

const WIDGETS = [
  {
    id: "0",
    top: funfact1,
    header: "Fun Fact",
    bottom:
      "The Continent of Europe is Home to More than 400 UNESCO World Heritage Sites.",
  },
  {
    id: "1",
    top: funfact2,
    header: "Fun Fact",
    bottom: "Donald Duck is an essential part of Christmas in Sweden.",
  },
  {
    id: "2",
    top: funfact3,
    header: "Fun Fact",
    bottom: "There Are More Bicycles Than People in the Netherlands.",
  },
  {
    id: "3",
    top: funfact4,
    header: "Fun Fact",
    bottom:
      "More Chocolate Is Bought at Brussels Airport Than Any Other Place in the World.",
  },
];

function North() {
  return (
    <>
    <Navbar />
      <section className={classes.north}>
        <div className={classes.northFront}>
          <img src={europeanStars} alt=""></img>
          <div className={classes.northFrontDiv}>
            <div>
              <h1>EUROPE</h1> <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <br />
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={classes.cards}>
          <CardList cards={CARDS}></CardList>
        </div>
        <div className={classes.text}>
          <div className={classes.textImage}></div>
          <div className={classes.textText}>
            <div>
              <h1>TRAVELING</h1>
              <p>
                Scelerisque in dictum non consectetur a. Sit amet consectetur
                adipiscing elit pellentesque habitant morbi tristique. Eu
                feugiat pretium nibh ipsum consequat nisl vel. Vestibulum morbi
                blandit cursus risus at ultrices. Vulputate mi sit amet mauris
                commodo quis imperdiet massa tincidunt. Imperdiet dui accumsan
                sit amet nulla facilisi morbi tempus iaculis. Mus mauris vitae
                ultricies leo integer. Malesuada pellentesque elit eget gravida
                cum sociis. Purus non enim praesent elementum facilisis leo.
                Nibh venenatis cras sed felis. Malesuada bibendum arcu vitae
                elementum. Fermentum posuere urna nec tincidunt.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.mission}>
          <div className={classes.missionHeader}>
            <p>Our Mission</p>
          </div>
          <div className={classes.missionText}>
            <p>
              Donec et odio pellentesque diam volutpat commodo sed. Feugiat
              scelerisque varius morbi enim nunc faucibus a pellentesque sit.
              Quis enim lobortis scelerisque fermentum. Et tortor at risus
              viverra adipiscing at in. Interdum varius sit amet mattis.
            </p>
          </div>
        </div>
        <div className={classes.design}>
          <WidgetList widgets={WIDGETS} />
        </div>

        <Footer />
      </section>
    </>
  );
}

export default North;
