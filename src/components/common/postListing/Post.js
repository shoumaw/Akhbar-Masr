

import React from 'react';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
      },
      score: {
        fontWeight: 700,
        width: 40,
        paddingRight: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
      },
      thumbnailWrapper: {
        height: 60,
        flex: '0 0 80px',
        marginRight: theme.spacing(2),
      },
      thumbnail: {
        width: '100%',
        height: '100%',
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      content: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0',
        alignSelf: 'stretch',
      },
      title: {
        fontSize: '1rem',
        fontWeight: 500,
        marginBottom: theme.spacing(0.5),
      },
      postInfo: {
        display: 'flex',
      },
      subredditName: {
        color: theme.palette.text.primary,
        fontWeight: 700,
      },
}));

export const Post = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const {title, score, numComments, author, createdDate} = props.data
  const postColor = score >= 1 ? theme.palette.legit.main : theme.palette.rumour.main

  return (
    <Paper className={classes.paper}  style={{background: theme.palette.secondary.main}} elevation={3} onClick={props.onClick}>
      <Typography className={classes.score}  style={{color: postColor}} data-testid="score">
        {score} 
      </Typography>
      <div className={classes.thumbnailWrapper}>
        <div
          className={classes.thumbnail}
          data-testid="thumbnail"
        >
          {<CommentIcon />}
        </div>
      </div>
      <div className={classes.content}>
        <Typography variant="h2" className={classes.title}  data-testid="title">
          {title}
        </Typography>
        <div className={classes.postInfo} data-testid="info">
          <Typography variant="caption">
            Posted by {author} <strong>• </strong>  about {createdDate} hours ago <strong>• </strong> {numComments}{' '}comments
          </Typography>
        </div>
      </div>
    </Paper>
  );
}







