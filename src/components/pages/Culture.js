import classes from "./Culture.module.css";
import CardList from "../ui/CardList";
import CardLeft from "../ui/CardLeft";

import europeCulture from "../images/europeCulture.gif";
import europeArch from "../images/EuropeanArchitecture.jpg";
import art from "../images/art.jpg";
import cardImg0 from "../images/europeCulture2.jpg";
import cardImg1 from "../images/europeCulture3.jpg";
import CardRight from "../ui/CardRight";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const CARDS = [
  {
    id: "1",
    image: art,
    link: "/Art",
    header: "Art",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const CARD1 = [
  {
    image: cardImg0,
    header: "Philosophy",
    text: "Est ullamcorper eget nulla facilisi etiam dignissim. Feugiat nisl pretium fusce id velit ut tortor. Facilisi nullam vehicula ipsum a arcu. Laoreet non curabitur gravida arcu ac tortor dignissim. Ornare lectus sit amet est placerat in egestas. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Pretium quam vulputate dignissim suspendisse in est. Tincidunt eget nullam non nisi. Ornare suspendisse sed nisi lacus sed viverra. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Volutpat blandit aliquam etiam erat velit scelerisque. Ut porttitor leo a diam sollicitudin tempor. Sagittis orci a scelerisque purus semper eget.",
  },
];
const CARD2 = [
  {
    image: cardImg1,
    header: "Tradition",
    text: "Est ullamcorper eget nulla facilisi etiam dignissim. Feugiat nisl pretium fusce id velit ut tortor. Facilisi nullam vehicula ipsum a arcu. Laoreet non curabitur gravida arcu ac tortor dignissim. Ornare lectus sit amet est placerat in egestas. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Pretium quam vulputate dignissim suspendisse in est. Tincidunt eget nullam non nisi. Ornare suspendisse sed nisi lacus sed viverra. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Volutpat blandit aliquam etiam erat velit scelerisque. Ut porttitor leo a diam sollicitudin tempor. Sagittis orci a scelerisque purus semper eget.",
  },
];
const CARD3 = [
  {
    image: cardImg0,
    header: "Lorem",
    text: "Est ullamcorper eget nulla facilisi etiam dignissim. Feugiat nisl pretium fusce id velit ut tortor. Facilisi nullam vehicula ipsum a arcu. Laoreet non curabitur gravida arcu ac tortor dignissim. Ornare lectus sit amet est placerat in egestas. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Pretium quam vulputate dignissim suspendisse in est. Tincidunt eget nullam non nisi. Ornare suspendisse sed nisi lacus sed viverra. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Volutpat blandit aliquam etiam erat velit scelerisque. Ut porttitor leo a diam sollicitudin tempor. Sagittis orci a scelerisque purus semper eget.",
  },
];

function Culture() {
  return (
    <>
      <Navbar />
      <section className={classes.culture}>
        <div className={classes.cultureFront}>
          <img src={europeCulture}></img>
          <div className={classes.cultureFrontDiv}>
            <div>
              <h1>CULTURE</h1> <br />
              <p>
                The culture of Europe is rooted in its art, architecture, film,
                different types of music, economics, literature, and philosophy.
                European culture is largely rooted in what is often referred to
                as its common cultural heritage.
              </p>
              <br />
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
        <div className={classes.AboutAndArtContainer}>
          <div className={classes.about}>
            <div>
              <h1>About</h1>
              <p>
                Facilisis magna etiam tempor orci eu lobortis elementum. Aliquam
                nulla facilisi cras fermentum. Urna nec tincidunt praesent
                semper feugiat. In fermentum posuere urna nec tincidunt praesent
                semper. Eu consequat ac felis donec et odio. Cursus mattis
                molestie a iaculis at erat. Curabitur gravida arcu ac tortor.
                Sed elementum tempus egestas sed sed risus pretium quam
                vulputate. Odio morbi quis commodo odio aenean. Eget nunc
                scelerisque viverra mauris in aliquam. Volutpat consequat mauris
                nunc congue. Dui nunc mattis enim ut tellus elementum sagittis
                vitae. Etiam dignissim diam quis enim lobortis scelerisque
                fermentum. Quisque non tellus orci ac auctor. Lobortis
                scelerisque fermentum dui faucibus in ornare quam. Eget mauris
                pharetra et ultrices neque ornare. Consequat mauris nunc congue
                nisi vitae.
              </p>
            </div>
          </div>
          <div className={classes.cards}>
            <CardList cards={CARDS}></CardList>
          </div>
        </div>
        {CARD1.map((card) => (
          <CardLeft header={card.header} image={card.image} text={card.text} />
        ))}
        {CARD2.map((card) => (
          <CardRight header={card.header} image={card.image} text={card.text} />
        ))}
        <div className={classes.text}>
          <div className={classes.textText}>
            <div>
              <h1>RELIGION</h1>
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
                elementum. Fermentum posuere urna nec tincidunt.Quam vulputate
                dignissim suspendisse in est ante in nibh. Nulla posuere
                sollicitudin aliquam ultrices sagittis orci a scelerisque.
                Pellentesque sit amet porttitor eget dolor morbi non arcu risus.
                Vel pretium lectus quam id leo. Tortor aliquam nulla facilisi
                cras fermentum odio eu feugiat. Ultrices vitae auctor eu augue
                ut lectus arcu. Ullamcorper eget nulla facilisi etiam dignissim
                diam quis. Mattis aliquam faucibus purus in massa tempor.
              </p>
            </div>
          </div>
          <div className={classes.textImage}></div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Culture;
