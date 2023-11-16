import PostList from "../ui/PostList";
import classes from "./Race.module.css";

import race1 from "../images/nordic.jpg";
import race2 from "../images/dinaric.jpg";
import race3 from "../images/baltic.jpg";
import race4 from "../images/mediterranean.jpg";
import race5 from "../images/alpine.jpg";
import Navbar from "../layouts/Navbar";

const RACES = [
  {
    id: 1,
    image: race1,
    header: "Nordic Race",
    text: "The Nordic race is tall and slender. The long legs contribute towards the stately height, which for the man averages about 1.74 metres. The Nordic race is long-headed and narrow-faced. The Nordic head is often strikingly narrow about the temples, as though it were pressed in here from both sides. The face is narrow, with a fairly narrow forehead, narrow high-standing nose, and a narrow under jaw with an angularly-set, clear-cut chin. The cast of features in the Nordic race has often a characteristically bold effect owing to the threefold break in the line of the profile: first at the flattish, backward-bent forehead, then at the high-bridged nose, straight or bending outwards, and lastly at the firm, sharp-cut chin. The line where the eyelids meet (from corner to corner of the eye) is horizontal, or rather droops slightly about the outer corners. The lips are mostly thin; the groove from nose to mouth is narrow and sharp-cut. The skin of the Nordic race is rosy and fair. The veins shine through (at least in youth) and show 'the blue blood'. Nordic hair is best termed gold-blond, but it should be borne in mind that both the lighter (especially in childhood) and the darker (especially after childhood) blond hair is found.In men and women who are light blond in youth there is often a later darkening to dark blond, or even to dark brown hair. This last case is probably to be explained on the supposition that with such persons inherited Nordic tendencies in hair-colouring are overlaid later by tendencies other than Nordic. Examples: Avicii, Pewdiepie, Charles XII, Travis Fimmel, Dolph Lundgren, Basshunter.",
  },
  {
    id: 2,
    image: race2,
    header: "Dinaric Race",
    text: "Characteristics were defined as very tall, mostly mesomorph bodily build, with relatively long legs and short trunk and a long arm span. The type has been described as follows: The vertical height of the cranium is high. Eyes are set relatively close and the surrounding tissue defines them as wide open. The iris is most often brown, with a significant percentage of light pigmentation in the Dinaric population. The nose is large, narrow and convex. The face is long and orthognathic, with a prominent chin, and also wide. The form of the forehead is variable, but not rarely it is bulbous. The hair color is usually dark brown, with black-haired and blond individuals in minority, blondness being the characteristic of the more Central European, morphologically similar Noric race (a race intermediate between Nordic and Dinaric races). The skin is lacking the rosy color characteristic for Northern Europe as well as the relatively brunet pigmentation characteristic for the southernmost Europe and on a geographical plane it is of medium pigmentation and often it is variable. Examples: Martin Luther, Leonardo di ser Piero da Vinci, Nikola Tesla, Colm Feore, Saadet Aksoy, Mats Hummels, Martina Markota, Ivana Vuleta.",
  },
  {
    id: 3,
    image: race3,
    header: "East Baltic Race",
    text: "East-Baltic Race was characterised as short-headed, broad-faced, with heavy, massive under-jaw, chin not prominent, flat, rather broad, short nose with low bridge; stiff, light (ash-blond) hair; light (grey or pale blue) eyes, standing out; light skin with a greyish undertone. Examples: Mika Häkkinen, Taxi2g, Fyodor Dostoevsky, Tatyana Arntgolts, Ginta Lapina, Evgenia Tarasova, Maria Sharapova.",
  },
  {
    id: 4,
    image: race4,
    header: "Mediterranean Race",
    text: "The first physical and social description of the Mediterranean race (then termed 'Celtic race') was given by the Scottish scientist William Rhind in 1851: The Celtic Race (anc. Galatae, Pyreni), are characterised by a well-formed head, elongated from front to back, and moderate in breadth; face oval; features well defined and elegantly formed; complexion dark; dark brown or black eyes; black hair turning early grey; form middle size, handsome; feet and hands small. Examples: Al Pacino, Sophia Loren, Inma Cuesta, Tamar Novas.",
  },
  {
    id: 5,
    image: race5,
    header: "Alpine Race",
    text: "This race is short, stocky, and square-built, thus offering, although of nearly the same height, an appearance which is quite different from that of the Mediterranean race. The latter is elegant and slender, the Alpine race is thick-set and broad. The average height of the Alpine man is about 1.63 metres. This small height is brought about by the relatively short, squat legs. This broadness and shortness is repeated in all the details: in the broadness of the hand and its short fingers, in the short, broad feet, in the thick, short calves. Seen in relation to its height the Mediterranean body gives an effect of heaviness. The pelvis in the woman would seem to be narrower than in the other European races. The shape of the head is likewise broad. Steeply rising forehead, vaulted backwards, the rather low bridge to the nose, the short, rather flat nose, set clumsily over the upper lip, the unprominent, broad, rounded chin. Examples: Niall Horan, Evanna Lynch, Ewan McGregor, Douglas Henshall, James McAvoy, Devon Murray, Louise Stewart, Eleanor McEvoy.",
  },
];

function Race() {
  return (
    <>
      <Navbar />
      <section className={classes.raceContainer}>
        <div className={classes.race}>
          <h1>Race</h1>
          <hr />
          <h2>Five Main Races of Europe</h2>
          <PostList posts={RACES} />
        </div>
      </section>
    </>
  );
}

export default Race;
