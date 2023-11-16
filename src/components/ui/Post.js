import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.architectureContainer}>
      <div className={classes.architectureImage}>
        <img src={props.image}></img>
      </div>
      <h3>{props.header}</h3>
      <div className={classes.architectureText}>{props.text}</div>
    </div>
  );
}

export default Post;
