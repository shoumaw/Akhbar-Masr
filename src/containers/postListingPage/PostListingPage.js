
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AppBar from '../../components/common/AppBar'
import {Post} from '../../components/common/postListing/Post'
import {getPosts} from '../../services/postListingApi'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const PostListingPage = () => {
  const [posts, setPosts] = useState([])
  const history = useHistory();

  useEffect( () => {
		getPosts().then(data => {
      setPosts(data)
    })},
		[]
	);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar/>
      {posts.map(post => (
        post.title
            ? (
              <Post data = {post} onClick ={() => history.push(`/details/${post.id}`,post)}/>
            )
            : null
      ))}
    </div>
  );
}







