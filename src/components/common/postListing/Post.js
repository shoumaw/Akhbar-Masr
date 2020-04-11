

import React from 'react';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PlaceHolderImage from '../../../assets/images/placeholder.png'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(7),
        display: 'flex',
        alignItems: 'center',
        marginRight: 160,
        marginLeft: 160,
        marginTop: 30,
        marginBottom: 30,  
        borderRadius: "5px",
        boxShadow: "0 5px 6px 0 rgba(118, 118, 118, 0.16)"
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
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
      
}));

export const Post = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const {title, score, numComments, author, createdDate} = props.data
  const postColor = score >= 1 ? theme.palette.legit.main : theme.palette.rumour.main
  return (
    <Paper className={classes.paper}  style={{background: theme.palette.secondary.main}} elevation={6} onClick={props.onClick}>
      <Grid container spacing={2}>
        <Typography className={classes.score}  style={{color: postColor}} data-testid="score">
          {score} 
        </Typography>
        <div className={classes.thumbnailWrapper}>
          <div
            className={classes.thumbnail}
            data-testid="thumbnail"
          >
            <Avatar alt="Placeholder" src={PlaceHolderImage} className={classes.small} />

          </div>
        </div>
        <div className={classes.content}>
          <Typography variant="h2" className={classes.title}  data-testid="title">
            {title}
          </Typography>
          <div className={classes.postInfo} data-testid="info">
            <Typography variant="caption">
              Posted by {author} <strong>• </strong>  about {createdDate} <strong>• </strong> {numComments}{' '}comments
            </Typography>
          </div>
        </div>
      </Grid>
    </Paper>
  );
}







