

import React from 'react';
import {makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PlaceHolderImage from '../../../assets/images/post.png'
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles(theme => ({
      post:{
      },
      paper: {
          borderRadius: "5px",
          boxShadow: "0 5px 6px 0 rgba(118, 118, 118, 0.16)",
          height: "100%",
          flexGrow:1,
          marginRight:theme.spacing(30),
          marginLeft:theme.spacing(30)
        },
      score: {
        fontWeight: 700,
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
        fontSize: '1.3rem',
        fontWeight: 800,
        marginBottom: theme.spacing(0.5),
      },
      description: {
        fontSize: '0.9rem',
        fontWeight: 300,
        marginBottom: theme.spacing(0.5),
      },
      postInfo: {
        display: 'flex',
      },
      subredditName: {
        color: theme.palette.text.primary,
        fontWeight: 700,
      },
      postImage: {
        width: "50% !important",
        height: "50% !important",
        padding: theme.spacing(2),
        marginLeft:theme.spacing(5)      },
      
}));

const PrettoSlider = withStyles(theme => ({
  root: {
    color: '#52af77',
    height: theme.spacing(2),
    width: "100px !important",
    marginLeft:theme.spacing(6),
    margin: theme.spacing(1)
  },
  thumb: {
    height: 0,
    width: 0,
    backgroundColor: '#fff',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    color: theme.palette.legit.main,
    borderRadius: 4,
    height: theme.spacing(2),

  },
  rail: {
    borderRadius: 4,
    height: theme.spacing(2),
    color: theme.palette.primary.maize,

  },
}))(Slider);
export const Post = (props) => {

  const classes = useStyles();
  const theme = useTheme();
  const {title, score, description, numComments, author, createdDate} = props.data
  return (
        <Paper className={classes.paper}  style={{background: theme.palette.secondary.main}} elevation={6} onClick={props.onClick}>
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <Grid container spacing={0} justify="center" alignItems="flex-start" direction="column">
                <Grid item xs={11} >
                  <Avatar className={classes.postImage} variant="square" alt="Placeholder" src={PlaceHolderImage}/>
                </Grid>
                <Grid item xs={1}>
                  <PrettoSlider disabled value={20} valueLabelDisplay="off" aria-label="pretto slider" defaultValue={0} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container justify="center" direction="column" spacing={3}>
                <Grid item xs>
                  <Typography variant="caption">
                    {author} <strong>•  </strong>  about {createdDate} <strong>•  </strong> {numComments}{' '}comments
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle1" className={classes.title}>
                    {title}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="h2" className={classes.description}>
                    {description}
                  </Typography>
                </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Paper>
  );
}







