import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/index";
import Authentication from "./Authentication/Authentication";
import Posts from "./Posts/Posts";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#212529",
    color: "#f5f3f4",
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log(loggedIn);
  });
  return (
    <div className={classes.root}>
      {loggedIn ? (
        <Posts setLoggedIn={setLoggedIn} />
      ) : (
        <Authentication setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
