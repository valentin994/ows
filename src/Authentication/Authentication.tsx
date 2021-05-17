import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  TextField,
  Paper,
  Grid,
  FormGroup,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    display: "flex",
    "& .MuiInput-input": {
      color: "#e9ecef",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f8f9fa",
    },
    "& .MuiInputLabel-root": {
      color: "#ced4da",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1),
      color: "#343a40",
      backgroundColor: "#ced4da",
    },
    "& .MuiTypography-root": {
      padding: theme.spacing(1),
      color: "#f8edeb",
    },
  },
  paperRoot: {
    width: "100%",
    height: "auto",
    backgroundColor: "#495057",
  },
  formHelper: {
    padding: "20px",
  }
}));

function Authentication(props: any) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setErrorMessage(false);
    if (password && username && email) {
      props.setLoggedIn(true);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className={classes.root}>
      <Grid item={true} xs={8} sm={6} md={4} lg={3} xl={3}>
        <Paper className={classes.paperRoot}>
          <form onSubmit={handleLogin}>
            <div className={classes.formHelper}>
              <Typography variant="h4">Login</Typography>
              <FormGroup>
                <TextField
                  className={classes.root}
                  id="username"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <TextField
                  id="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
                {errorMessage ? (
                  <Typography variant={"caption"}>
                    Fill in all fields
                  </Typography>
                ) : (
                  ""
                )}
                <div style={{ textAlign: "right" }}>
                  <Button type="submit" size="large">
                    Login
                  </Button>
                </div>
              </FormGroup>
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default Authentication;
