import classes from "./Card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.cardTop}>
        <img src={props.image}></img>
      </div>
      <div className={classes.cardBottom}>
        <h1>{props.header}</h1>
        <Link
          to={props.link}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          See more..
        </Link>
        <p className={classes.cardBottomText}>{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
