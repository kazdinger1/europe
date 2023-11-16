import classes from "./Widget.module.css";

function Widget(props) {
  return (
    <div className={classes.widget}>
      <div className={classes.widgetTop}>
        <img src={props.top}></img>
      </div>
      <div className={classes.widgetBottom}>
        <h1>{props.header}</h1>
        <p>{props.bottom}</p>
      </div>
    </div>
  );
}

export default Widget;
