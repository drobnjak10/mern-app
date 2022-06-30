import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "./actions/postsActions";

function App() {
  const posts = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={"./images/memories.png"}
          alt="icon"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts posts={posts} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
