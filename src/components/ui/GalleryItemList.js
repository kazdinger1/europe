import { useState } from "react";
import classes from "./GalleryItemList.module.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsXLg,
} from "react-icons/bs";

function GalleryItemList(props) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (id) => {
    setSlideNumber(id);
    setOpenModal(true);
  };
  const slideRight = (id) => {
    slideNumber === props.galleryItems.length
      ? setSlideNumber(1)
      : setSlideNumber(id + 1);
  };
  const slideLeft = (id) => {
    slideNumber === 1
      ? setSlideNumber(props.galleryItems.length)
      : setSlideNumber(id - 1);
  };
  return (
    <>
      {openModal && (
        <div className={classes.sliderWrap}>
          <BsXLg
            className={classes.buttonClose}
            onClick={() => {
              setOpenModal(false);
            }}
          />

          <BsFillArrowLeftCircleFill
            className={classes.buttonLeft}
            onClick={() => {
              slideLeft(slideNumber);
            }}
          />
          <img src={props.galleryItems[slideNumber - 1].image}></img>
          <BsFillArrowRightCircleFill
            className={classes.buttonRight}
            onClick={() => {
              slideRight(slideNumber);
            }}
          />
        </div>
      )}
      <div className="row">
        <div className="col-12">
          <div className="row">
            {props.galleryItems.map((galleryItem) => (
              <div className="col-4">
                <div
                  className={classes.galleryItem}
                  key={galleryItem.id}
                  onClick={() => {
                    handleOpenModal(galleryItem.id);
                  }}
                >
                  <img src={galleryItem.image}></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default GalleryItemList;
