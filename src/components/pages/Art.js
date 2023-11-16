import classes from "./Art.module.css";

import PostList from "../ui/PostList";

import art1 from "../images/art1.jpg";
import art3 from "../images/art3.png";
import art4 from "../images/art4.jpg";
import art5 from "../images/art5.jpg";
import art6 from "../images/art6.jpg";
import art7 from "../images/art7.jpg";
import art8 from "../images/art8.jpg";
import Navbar from "../layouts/Navbar";

const ARTS = [
  {
    id: 1,
    image: art1,
    header: "Siege of Vienna",
    text: "The Battle of Vienna took place at Kahlenberg Mountain near Vienna on 12 September 1683 after the imperial city had been besieged by the Ottoman Empire for two months. The battle was fought by the Holy Roman Empire (led by the Habsburg monarchy and the Polish–Lithuanian Commonwealth, both under the command of King John III Sobieski) against the Ottomans and their vassal and tributary states. The battle marked the first time the Commonwealth and the Holy Roman Empire had cooperated militarily against the Ottomans, and it is often seen as a turning point in history, after which 'the Ottoman Turks ceased to be a menace to the Christian world'. In the ensuing war that lasted until 1699, the Ottomans lost almost all of Hungary to the Holy Roman Emperor Leopold I.",
  },
  {
    id: 3,
    image: art3,
    header: "Passage of a Dream",
    text: "Drawing on the techniques of 20th-century realists Andrew Wyeth and Lucian Freud, Serge Marshennikov captures his female subjects in moments of repose and reflection. Portraits like Sleeping Beauty (2011), which entice the viewer with depictions of partially nude women dozing amongst piles of twisted bedsheets and pillows, convey a comfortable sensuality. Marshennikov studied at the Repin Academy of Fine Art in St. Petersburg, Russia. In 2008, he was the recipient of the Chairman’s Choice Award at the International ARC Salon Competition and was named a Top 30 figurative artist by the Portrait Society of America. Marshennikov has exhibited across Russia, England, Denmark, France, and Japan, and his works can be found in the Grace Museum and the El Paso Museum of Art.",
  },
  {
    id: 4,
    image: art4,
    header: "Venice pays tribute to Caterina Cornaro",
    text: "Makart's first history painting, Venice pays tribute to Caterina Cornaro was an unprecedented success; people flocked in their thousands to see it in Vienna before it toured throughout Europe. The grandiloquence of the painting seems rather at odds, however, with its subject matter. Caterina, a fifteenth-century Cypriot Queen, was of minor literal or symbolic importance to the contemporary history painter. But the attraction of the work lies not so much in its subject-matter but rather in its variety and vividness. In her book Hans Makart: Painter of the Senses, Stephanie Auer referred to the painting as 'a hymn to life and an act of homage to colour' rather than an earnest veneration of the long-dead monarch. According to Auer, indeed, Makart had succeeded in 'transporting the viewer into an ideal world, a fairy-tale past that intentionally lies beyond the bounds of historical reality'. Whereas historical painting was typically the vehicle for a contextually significant event and/or message, here the opposite is the case. Markart summoned the past to escape, portal-like, into the textural beauty of marble, fabric and flesh. Some sympathetic contemporary critics called Makart the new Paulo Veronese with one declaring: 'Nothing more glorious has been created since the glittering golden age of Italian art'.",
  },
  {
    id: 5,
    image: art5,
    header: "Virgin of the Rocks",
    text: "The Virgin of the Rocks (Italian: Vergine delle rocce), sometimes the Madonna of the Rocks, is the name of two paintings by the Italian Renaissance artist Leonardo da Vinci, of the same subject, with a composition which is identical except for several significant details. The version generally considered the prime version, the earlier of the two, is unrestored and hangs in the Louvre in Paris. The other, which was restored between 2008 and 2010, hangs in the National Gallery, London. The works are often known as the Louvre Virgin of the Rocks and London Virgin of the Rocks respectively. The paintings are both nearly 2 metres (over 6 feet) high and are painted in oils. Both were originally painted on wooden panels, but the Louvre version has been transferred to canvas. Both paintings show the Mary and child Jesus with the infant John the Baptist and an angel Uriel, in a rocky setting which gives the paintings their usual name. The significant compositional differences are in the gaze and right hand of the angel. There are many minor ways in which the works differ, including the colours, the lighting, the flora, and the way in which sfumato has been used. Although the date of an associated commission is documented, the complete histories of the two paintings are unknown, leading to speculation about which of the two is earlier.",
  },
  {
    id: 6,
    image: art6,
    header: "Neapolitan family with a puppeteer on a terrace on the Gulf",
    text: "The finely executed watercolor was probably created during Hopfgarten's stay in Italy between 1827 and 1833.",
  },
  {
    id: 7,
    image: art7,
    header: "The Brazen Serpent",
    text: "The Brazen Serpent is a 1630–1640 painting by the Aragonese artist Jusepe Leonardo, now in the Real Academia de Bellas Artes de San Fernando in Madrid. It shows the story from Book of Numbers 21: 6–9. In one of the recurrent protests of the Israelites against God and Moses, they are punished by sending poisonous snakes that cause the death of many by their bite. Repentant, they beg Moses to help them. God commands Moses to make a metal sculpture (copper or bronze depending on the version) and for those bitten to fix their eyes on it. Those who do are cured of the sting. Moses, wearing a red tunic, indicates with his rod the saving action offered to the wounded.",
  },
  {
    id: 8,
    image: art8,
    header: "Chloe",
    text: "Painted in 1806/1808, ‘Chloe’ is the only surviving large-format work by Hans Jakob Oeri with a mythological subject and one of the few in which the landscape plays an important role.",
  },
];

function Art() {
  return (
    <>
      <Navbar />
      <section className={classes.artContainer}>
        <div className={classes.art}>
          <h1>Art</h1>
          <hr />
          <h2>Painting Artworks</h2>
          <PostList posts={ARTS} />
        </div>
      </section>
    </>
  );
}

export default Art;
