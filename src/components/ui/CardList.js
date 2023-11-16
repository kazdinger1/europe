import Card from "./Card";
import classes from "./CardList.module.css";

function CardList(props) {
  return (
    <ul className={classes.cardList}>
      {props.cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          link={card.link}
          header={card.header}
          image={card.image}
          text={card.text}
        />
      ))}
    </ul>
  );
}

export default CardList;
