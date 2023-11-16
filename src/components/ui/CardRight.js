import classes from "./CardRight.module.css";

function CardRight(props) {
  return (
    <div className={classes.cardRight}>
      <div className={classes.cardRightText}>
        <div>
          <h2>{props.header}</h2>
          <p>{props.text}</p>
        </div>
      </div>
      <div className={classes.cardRightImage}>
        <img src={props.image}></img>
      </div>
    </div>
  );
}

export default CardRight;
