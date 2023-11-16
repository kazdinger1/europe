import classes from "./CardLeft.module.css";

function CardLeft(props) {
  return (
    <div className={classes.cardLeft}>
      <div className={classes.cardLeftImage}>
        <img src={props.image}></img>
      </div>
      <div className={classes.cardLeftText}>
        <div>
          <h2>{props.header}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardLeft;
