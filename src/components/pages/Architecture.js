import classes from "./Architecture.module.css";

import PostList from "../ui/PostList";

import architecture1 from "../images/castle1.jpg";
import architecture2 from "../images/castle2.jpg";
import architecture3 from "../images/castle3.jpg";
import architecture4 from "../images/castle4.jpg";
import architecture5 from "../images/castle5.jpg";
import architecture6 from "../images/castle6.jpg";
import architecture7 from "../images/castle7.jpg";
import city1 from "../images/city1.jpg";
import city2 from "../images/city2.jpg";
import city3 from "../images/city3.jpg";
import city4 from "../images/city4.jpg";
import city5 from "../images/city5.jpg";
import Navbar from "../layouts/Navbar";

const CASTLES = [
  {
    id: 1,
    image: architecture1,
    header: "Neuschwanstein Castle",
    text: "This famous castle is known as the inspiration for Walt Disney’s Disneyland and Disney World. Here, the original Bavarian castle is set far up on a large hill above the village of Hohenschwangau, set in the southern region of Germany. First commissioned by Ludwig II of Bavaria, this Romanesque castle was built as a homage to classical composer Richard Wagner. It has original 18th-century furniture in the throne hall, while the dining room is known for its spooky, somewhat dark, medieval vibe.",
  },
  {
    id: 2,
    image: architecture2,
    header: "Belvedere Palace",
    text: "Though many know it as an art gallery today, the Belvedere is so much more. The site is home to two Baroque palaces, the Orangery, and the Palace Stables, which was first built as a summer residence for Prince Eugene of Savoy. However, this site was also used for the Habsburg dynasty. Its size is compelling, so bring the walking shoes. Alongside the gilded ceiling paintings and extravagant apartment suites, the palatial gardens—styled after Versailles landscape design with sculptures of nymphs and goddesses crowning a round fountain—are a must-see.",
  },
  {
    id: 3,
    image: architecture3,
    header: "Vianden Castle",
    text: "Luxembourg is a small country, but it’s worth the pit stop. Off the beaten path in the northern region of the country is one of the largest fortified castles in western Europe, dating back to the 10th century. Built in the Romanesque style, it was the seat of power for King William I of Holland until the Grand Duke of Luxembourg took over in 1977. This castle, roughly an hour’s drive from Luxembourg City, has a mystical vibe—many parts of it are lit solely by candlelight. On select weekends, it holds book fairs and calligraphy workshops, as well as medieval-themed plays for children.",
  },
  {
    id: 4,
    image: architecture4,
    header: "Royal Palace",
    text: "Set in the heart of the Swedish capital, this palatial palace, where the Swedish monarch still lives today, has 1,430 rooms. There are apartments for the royal family, meeting rooms, and a chapel, as well as the former National Library of Sweden. The most stunning design can be found in the Pink Drawing Room, painted mint green and filled with rose-hued furniture. This palace is truly a pastel dream. After a walk through the state rooms, stop by the palace café for afternoon tea and cake.",
  },
  {
    id: 5,
    image: architecture5,
    header: "Eltz Castle",
    text: "Nestled in the hills above the Moselle River between Koblenz and Trier, Eltz Castle is truly a beauty to behold. Soaring 35 meters into the sky, its eight majestic towers resemble a scene from a fairy tale. Remarkably, Eltz is one of only two castles on the left bank of the Rhine which has remained unscathed by wars; the other is Lissingen Castle. Indeed, its stunning architecture and many of the original furnishings of the past eight centuries still remain in place. It is still owned by a branch of the same family that lived there in the 12th century.",
  },
  {
    id: 6,
    image: architecture6,
    header: "Sooneck Castle",
    text: "Perched on a steep slope and partially hidden by roses, Sooneck Castle resembles something from Sleeping Beauty. That said, its troubled past is far from a fairy tale. Although the castle was initially built for the abbey of Cornelimunster in the 11th century, it was destroyed twice. The first time was by King Rudolph I and his troops who besieged it in 1282. Under different ownership, the castle was rebuilt in 1349 to include corner turrets, a keep, and a great hall. However, in 1688, ill fate struck once again and the French troops of King Louis XIV destroyed it. In 1823, a member of the Prussian royal family purchased the ruins and began restoring them in 1842. Today, the castle is a popular attraction in Rhineland and people come from all over to admire its impressive interior and fantastic view from the top.",
  },
  {
    id: 7,
    image: architecture7,
    header: "Reichenstein Castle",
    text: "Dating back to the 11th century, Reichenstein Castle was once the dwelling place of German lords, churchmen, bailiffs, and notorious robber knights. As the legend goes, they often charged illegal toll fees to anyone traveling in the Rhine Valley. Over the centuries, parts of the castle were burnt down, attacked, rebuilt, and restored. The Kirsch-Puricelli family took over the castle in 1899 and oversaw most of its renovation, rebuilding it into a neo-Gothic English-style residence. Today, a descendant of the Kirsch-Puricellis owns the castle and you can take a tour of its private rooms, ancestral gallery, library, and music room. You can also enjoy a guided audio tour of the castle museum and explore a collection of ancient weapons, armory, and hunting trophies. You can also marvel at the breathtaking view of the Rhine from the battlement walkways.",
  },
];

const CITIES = [
  {
    id: 1,
    image: city1,
    header: "Edinburgh Scotland",
    text: "Edinburgh is a unique capital in Western Europe. Where else can you find a medieval Old Town, extinct volcano, regal castle, and 'New Town' from the 1800s in one city? Check out the city's newly revamped National Museum of Scotland (particularly its Art, Fashion, and Design wing); grab dinner at Timberyard; and test out the city's growing independent brewing scene at Hanging Bat.",
  },
  {
    id: 2,
    image: city2,
    header: "Zurich Switzerland",
    text: "Zurichs location in the heart of Western Europe makes it a perfect jumping off point for a wine tour of Alsace, or a short trip to Venice. (You can now even travel from Zurich to Milan via the worlds longest train tunnel.) But theres convincing reason to stick around: In recent years, the city has become a haven for young artistic and culinary creatives, and its central river is so clean that you can actually swim in it. Ninety-nine percent of the citys residents report that they are fully satisfied with life economic powerhouse—and they are obviously onto something.",
  },
  {
    id: 3,
    image: city3,
    header: "Amsterdam The Netherlands",
    text: "Windmills, cycling, Van Gogh, and canals are all part of Amsterdams storied charm, but theres more to the Dutch capital than its most apparent associations. For a taste of the “new” Amsterdam, grab a drink at Droog, a renovated 17th-century hotel with just one room; float in a weightless state in the saltwater pods at Koan Float; or try innovative takes on seasonal fruits and vegetables at De Kas, a restaurant housed in the former Amsterdam City Greenery.",
  },
  {
    id: 4,
    image: city4,
    header: "Prague Czech Republic",
    text: "Picturesque Prague beats with a bohemian heart Get off the beaten bath at any number of historic pubs (try U Zlateho Tygra or U Jelinku) or head up to Petrin Hill for incredible views of the city. Come Christmastime, the city's Wenceslas Square transforms into a scene straight from a postcard.",
  },
  {
    id: 5,
    image: city5,
    header: "Stockholm Sweden",
    text: "One of the worlds most beautiful capitals, Stockholm isnt just scenic: Its also the cultural, political, media, and economic center of Sweden. Make like a local and stroll narrow cobblestone streets, hang by the citys colorful waterfront, and take advantage of the country's fika culture. Though many travelers spend most of their time in the medieval center, Stockholm actually comprises 14 islands of an archipelago, which makes it a perfect jumping off point for island hopping— Fjaderholmarna, one of the closest, is a mere 20 minutes by boat.",
  },
];
function Architecture() {
  return (
    <>
      <Navbar />
      <section className={classes.architectureContainer}>
        <div className={classes.architecture}>
          <h1>Architecture</h1>
          <hr />
          <h2>Castles and Palaces</h2>
          <PostList posts={CASTLES} />
          <hr />
          <h2>European Cities</h2>
          <PostList posts={CITIES} />
        </div>
      </section>
    </>
  );
}

export default Architecture;
