
import React , {useEffect, useState, Fragment}  from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {getCommentsApi} from '../../services/postListingApi'
import AppBar from '../../components/common/AppBar'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ArrowBackRounded from '@material-ui/icons/ArrowBackRounded';
import {Comment} from '../../components/common/postDetails/Comment'
import {PostInfo} from '../../components/common/postDetails/PostInfo'
import {PostContent} from '../../components/common/postDetails/PostContent'
import { useLocation } from "react-router-dom";
import { useAuth } from "../../components/hooks/useAuth";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  text: {
    margin: theme.spacing(0.5),
    fontSize: 12
  },
  title:{
    margin: theme.spacing(0,0,2)
  },
  button: {
    margin: theme.spacing(1),
    border:1
  },
  buttonSection: {
    margin: theme.spacing(1, 2, 1),
  },
  commentsSection:{
    display: 'flex',
    flexDirection: 'column',
  }
}));  

export const PostDetailsPage = (props) => {
  const history = useHistory();
  const {user} = useAuth();
  const [comments, setComments] = useState([])
  const {id, title, description, score, numComments, author, createdDate}  = useLocation().state;
  useEffect( () => {
    if (!user)
      return
		getCommentsApi(user, id).then(data => {
      setComments(data)
    })},
		[]
	);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar/>
      {user ? 
      (<Fragment>
        <div className={classes.buttonSection}>
            <Button color="primary" variant="outlined" aria-label="back" className={classes.button} size="small" onClick ={() => history.goBack()}>
              <ArrowBackRounded fontSize="inherit" />
              <Typography className={classes.text}  variant="button">Go back to news page</Typography>
            </Button>
        </div>
        <PostContent title={title} description={description}/>
        <PostInfo author={author} createdDate={createdDate} score={score} numComments={numComments}/>
        <Divider variant="middle" />
        <div className={classes.commentsSection}>
          <List dense>
            {comments && comments.map(comment => (
              <Comment author={comment.author} ups={comment.ups} downs={comment.downs} description={comment.description}/>
            ))}
          </List>
        </div>  
      </Fragment>) : 
      (<Typography>Please sign in to view content!</Typography>)}
    </div>
  );
}







