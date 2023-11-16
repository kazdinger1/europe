import Widget from "./Widget";
import classes from "./WidgetList.module.css";

function WidgetList(props) {
  return (
    <ul className={classes.widgetList}>
      {props.widgets.map((widget) => (
        <Widget
          key={widget.id}
          id={widget.id}
          top={widget.top}
          header={widget.header}
          bottom={widget.bottom}
        />
      ))}
    </ul>
  );
}

export default WidgetList;
