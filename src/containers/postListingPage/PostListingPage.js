
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AppBar from '../../components/common/AppBar'
import {Post} from '../../components/common/postListing/Post'
import {getPostsApi} from '../../services/postListingApi'
import { useAuth } from "../../components/hooks/useAuth";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default,
    height: "100vh"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  post: {
    padding: 3,
    textAlign: "center",
    marginRight: 4,
    marginTop: 10
  }
}));

export const PostListingPage = () => {
  const [posts, setPosts] = useState([])
  const history = useHistory();
  const {user, signin} = useAuth();
  const classes = useStyles();
  useEffect( () => {
    if (!user && history.location.search.includes("?state=fe211bebc52eb3da9bef8db6e63104d3"))
    {
         signin().then((signedUser)=> {
          console.log("Signed in and then getting posts")
          getPostsApi(signedUser).then(data => {
            setPosts(data)
          })

         })}
        else if(user){
          console.log("Getting posts")
          getPostsApi(user).then(data => {
            setPosts(data)
          })
        }},
		[]
	);
 /* useEffect( () => {
    if (!user){
      console.log("user not defined")
      return;
    }
    console.log("Getting Posts")
		getPostsApi(user).then(data => {
      setPosts(data)
    })},
		[]
  );*/
  return (
    <div className={classes.root}>
      <AppBar/>
      {/*posts.map(post => (
        post.title
            ? (
              <Post className={classes.post} data = {post} onClick ={() => history.push(`/details/${post.id}`,post)}/>
            )
            : null
      ))*/}
      {user ?
      posts.map(post => (
        post.title
            ? (
              <Post className={classes.post} data = {post} onClick ={() => history.push(`/details/${post.id}`,post)}/>
            )
            : null
      )): <Typography>Please sign in to view content!</Typography>}
    </div>
  );
}







