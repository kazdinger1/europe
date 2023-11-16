import Post from "./Post";
import classes from "./PostList.module.css";

function PostList(props) {
  return (
    <ul className={classes.postList}>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          header={post.header}
          image={post.image}
          text={post.text}
        />
      ))}
    </ul>
  );
}

export default PostList;
