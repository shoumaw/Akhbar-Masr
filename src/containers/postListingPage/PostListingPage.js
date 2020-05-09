
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AppBar from '../../components/common/AppBar'
import {Post} from '../../components/common/postListing/Post'
import {getPostsApi} from '../../services/postListingApi'
import { useAuth } from "../../components/hooks/useAuth";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Toolbar from '@material-ui/core/Toolbar';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow:1,
    backgroundColor: theme.palette.background.default,
    height:"100%",
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
  }
}));

export const PostListingPage = () => {
  const [posts, setPosts] = useState([])
  const history = useHistory();
  const {user, signin} = useAuth();
  const classes = useStyles();
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
		getPostsApi(tempUser).then(data => {
      setPosts(data)
    })},
		[]
  );
  return (
    <div className={classes.root}>
        <AppBar/>
        <Toolbar/>
      <GridList cols={2} spacing={12}>
          {tempUser ?
          posts.map(post => (
            post.title
                ? (
                  <GridListTile style={{height:"200px", marginBottom:"30px"}} cols={2} rows={1}>
                    <Post data = {post} onClick ={() => history.push(`/details/${post.id}`,post)}/>
                  </GridListTile>
                )
                : null
          )): <Typography>Please sign in to view content!</Typography>}
      </GridList>
    </div>
  );
}







