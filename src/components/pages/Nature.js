import classes from "./Nature.module.css";
import PostList from "../ui/PostList";

import nature1 from "../images/nature1.jpg";
import nature2 from "../images/nature2.jpg";
import nature3 from "../images/nature3.jpg";
import nature4 from "../images/nature4.jpg";
import nature5 from "../images/nature5.jpg";
import Navbar from "../layouts/Navbar";

const RACES = [
  {
    id: 1,
    image: nature1,
    header: "Preikestolen, Norway",
    text: "The Fjords in Norway are a place of incredible natural beauty, as well as exciting destinations for hiking lovers.",
  },
  {
    id: 2,
    image: nature2,
    header: "Bernese Oberland Region, Switzerland",
    text: "When you think 'Swiss Alps', this is the region you're dreaming of. In a concentrated area south of the Swiss capital of Bern, you'll find snow capped mountains, alpine lakes, and charming mountain towns, all connected by a challenging but well-marked system of hiking paths and reliable trains.",
  },
  {
    id: 3,
    image: nature3,
    header: "Chamonix, France",
    text: "If you can't decide between France, Switzerland, or Italy, the French region of Chamonix-Mont-Blanc is the answer. It makes a great year-round destination for nature lovers because of the great skiing it offers in the winter and the excellent multi-day trekking in offers in the summer.",
  },
  {
    id: 4,
    image: nature4,
    header: "Gullfoss, Iceland",
    text: "A list of natural wonders of Europe must include Iceland’s most dramatic waterfall. Gullfoss, in the country’s Haukadalur Valley, is an unforgettable sight, especially if you visit on a sunny day when hundreds of rainbows appear in clouds of spray. During the summer, water cascades down Gullfoss in two stages, falling 32 metres into a deep crevice below. The waterfall can freeze into glistening ice in extreme winters.",
  },
  {
    id: 5,
    image: nature5,
    header: "Finland, Lapland",
    text: "Lapland, a region in Northern Finland, located above the Arctic Circle. You might see there the north lights, and with some luck perhaps the Santa Claus too.",
  },
];

function Nature() {
  return (
    <>
      <Navbar />
      <section className={classes.natureContainer}>
        <div className={classes.nature}>
          <h1>Nature</h1>
          <hr />
          <h2>Beauty of The European Continent</h2>
          <PostList posts={RACES} />
        </div>
      </section>
    </>
  );
}

export default Nature;
