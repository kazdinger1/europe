import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import classes from "./Gallery.module.css";

import galleryItem1 from "../images/gallery1.jpg";
import galleryItem2 from "../images/gallery4.jpg";
import galleryItem3 from "../images/gallery2.jpeg";
import galleryItem4 from "../images/gallery3.jpeg";
import galleryItem5 from "../images/gallery4.jpeg";
import galleryItem6 from "../images/gallery4.jpg";
import galleryItem7 from "../images/gallery6.jpeg";

import GalleryItemList from "../ui/GalleryItemList";

const GALLERYITEMS = [
  {
    id: 1,
    image: galleryItem1,
  },
  {
    id: 2,
    image: galleryItem2,
  },
  {
    id: 3,
    image: galleryItem3,
  },
  {
    id: 4,
    image: galleryItem4,
  },
  {
    id: 5,
    image: galleryItem5,
  },
  {
    id: 6,
    image: galleryItem6,
  },
  {
    id: 7,
    image: galleryItem7,
  },
];

function Gallery() {
  return (
    <>
      <Navbar />
      <section className={classes.galleryContainer}>
        <GalleryItemList galleryItems={GALLERYITEMS} />
      </section>
      <Footer />
    </>
  );
}

export default Gallery;
