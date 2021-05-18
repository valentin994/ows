import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Grid,
  Paper,
  Modal,
  TextField,
  FormControl,
  Button
} from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import RestoreIcon from "@material-ui/icons/Restore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    display: "flex",
    "& .MuiBottomNavigation-root": {
      backgroundColor: "inherit",
      margin: theme.spacing(1),
    },
    "& .MuiBottomNavigationAction-label": {
      color: "#f8edeb",
    },
  },
  outerDiv: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: {
    height: "100%",
    justifyContent: "center",
    display: "flex",
    "& .MuiPaper-root:hover": {
      color: "red",
      transition: "200ms ease-in",
    },
    "& .MuiGrid-root":{
      overflow: "scroll",
      maxHeight: "90vh"
    },
  },
  iconColor: {
    color: "#f8edeb",
  },
  paperRoot: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    cursor: "pointer",
    "& .hover": {
      backgroundColor: "red",
      color: "red",
    },
  },
  paper: {
    position: "fixed",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: 150,
    left: "calc(50% - 200px)",
    "& .MuiInput-input":{
      width: "380px",
    },
    "& .MuiButton-root":{
      margin: theme.spacing(1,0,0,0)
    }
  },
}));

function Posts(props: any) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [todos, setTodos] = useState([
    {
      title: "Todo1",
      desc: "Take the trash out",
    },
    {
      title: "Todo2",
      desc: "Clean the dishes",
    },
    {
      title: "Todo3",
      desc: "Walk the dog",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTodo = () => {
    setErrorMessage(false);
    if(!title || !desc){
      setErrorMessage(true)
    }
    else{
      setTodos([...todos, {"title": title, "desc": desc}])
      setTitle("");
      setDesc("");
    }
  }

  const body = (
    <div className={classes.paper}>
      <FormControl>
        <TextField id="title" label="Title" value={title} onChange={(e) => setTitle(e.target.value)}></TextField>
        <TextField id="desc" label="Description" value={desc} onChange={(e) => setDesc(e.target.value)} ></TextField>
        <p>{errorMessage ? "Please fill in all fields." : ""}</p>
        <Button onClick={handleAddTodo}>Add</Button>
      </FormControl>
    </div>
  );

  const removeTodo = (title: string) => {
    let todoList = [...todos];
    setTodos(todoList.filter((item) => item.title !== title));
  };

  return (
    <div className={classes.outerDiv}>
      <div className={classes.content}>
        <div
          style={{
            border: "1px solid red",
            width: "100%",
            position: "absolute",
            display: "none",
            textAlign: "center",
          }}
        >
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
        <Grid item xs={10} sm={10} md={6} lg={4}>
          {todos.map((value, index) => {
            return (
              <Paper
                key={index}
                onClick={() => removeTodo(value.title)}
                className={classes.paperRoot}
              >
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </Paper>
            );
          })}
        </Grid>
      </div>
      <div className={classes.root}>
        <BottomNavigation value={value} showLabels className={classes.root}>
          <BottomNavigationAction
            label="Recents"
            icon={<RestoreIcon className={classes.iconColor} />}
          />
          <BottomNavigationAction
            label="Add Todo"
            onClick={handleOpen}
            icon={<PostAddIcon className={classes.iconColor} />}
          />
          <BottomNavigationAction
            label="Logout"
            onClick={(e) => props.setLoggedIn(false)}
            icon={<ExitToAppIcon className={classes.iconColor} />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}
export default Posts;
