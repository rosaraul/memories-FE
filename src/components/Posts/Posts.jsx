import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setcurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  if (!posts.length && !isLoading) return "No posts";
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={posts._id} item xs={12} sm={12} md={6} lg={4}>
          <Post post={post} setcurrentId={setcurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
