
import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AppBar from '../../components/common/AppBar'
import {Post} from '../../components/common/postListing/Post'
import {getPostsApi,submitPostApi} from '../../services/postListingApi'
import { useAuth } from "../../components/hooks/useAuth";
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Dialog } from '@material-ui/core';
import NewPostForm from '../../components/common/NewPostForm'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow:1,
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    padding:"10px",
    borderRadius: "10px",
    boxShadow: "0 5px 6px 0 rgba(118, 118, 118, 0.16)",
    height: "100%",
    flexGrow:1,
    marginRight:theme.spacing(30),
    marginLeft:theme.spacing(30)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  post: {
    height:"100%",
    marginTop:"20px",
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

export const PostListingPage = () => {
  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false)
  const history = useHistory();
  const {user, signin} = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const handleClose = () => {
    setOpen(false);
  };
  let tempUser = true
  /*useEffect( () => {
    if (!user && history.location.search.includes("?state=fe211bebc52eb3da9bef8db6e63104d3"))
    {
         signin().then((signedUser)=> {
          console.log("Signed in and then getting posts")
          getPostsApi(signedUser).then(data => {
            setPosts(data)
          })

         })
    }
    else if(user){
          console.log("Getting posts")
          getPostsApi(user).then(data => {
            setPosts(data)
          })
        }},
		[]
	);*/
 useEffect( () => {
    if (!tempUser){
      console.log("user not defined")
      //return;
    }
    console.log("Getting Posts")
    //submitPostApi(tempUser)
		getPostsApi(tempUser).then(data => {
      setPosts(data)
    })},
		[]
  );
  return (
    <div className={classes.root}>
        <AppBar/>
        <Toolbar/>
        <Dialog fullScreen onClose={handleClose} open = {open}>
          <NewPostForm/>
        </Dialog>
      <GridList cols={3} spacing={12}>
          {tempUser ?
          posts.map(post => (
            post.title
                ? (
                  <GridListTile style={{height:"100%", marginBottom:"30px"}} cols={3} rows={1}>
                    <Paper className={classes.paper}  style={{background: theme.palette.secondary.main}} elevation={6} onClick={() => history.push(`/details/${post.id}`,post)}>
                      <Post data = {post}/>
                    </Paper>
                  </GridListTile>
                )
                : null
          )): <Typography>Please sign in to view content!</Typography>}
      </GridList>
      <Fab className={classes.fab} color="primary" aria-label="add" onClick = {() => setOpen(true)}>
        <AddIcon />
      </Fab>
    </div>
  );
}







