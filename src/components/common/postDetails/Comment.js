

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    text: {
      margin: theme.spacing(0.5),
      padding: "5px 5px 20px 5px",
      borderRadius: "6px",
			border: `0.5px solid #000000`,
      fontSize: "12px",
      backgroundColor: "#ededed",
    },
    comment:{
      margin: "auto",
      width : "40%",
    },
    commentSection:{
      display: 'flex',
      flexDirection: 'column'
    },
    commentInfoSection:{
      display: 'flex',
      flexDirection: 'row'
    }
  }));  

export const Comment = (props) => {
  const classes = useStyles();

  const {author, ups, downs, createdDate, numComments, description} = props

  return (
        <ListItem className= {classes.comment}>
          <div className={classes.commentSection}>
              <ListItemIcon>
              <ArrowUpward />
              </ListItemIcon>
              <ListItemIcon>
              <ArrowDownward />
              </ListItemIcon>
          </div>  
          <div className={classes.commentSection}>
            <div className={classes.commentInfoSection}>
              <Typography variant="caption">
                    <strong>Posted by {author}•</strong>&nbsp; about {createdDate} <strong>•  </strong>&nbsp; {numComments}{' '}replies
              </Typography>
            </div>
            <ListItemText className={classes.text} primary={description}/>
          </div>
        </ListItem>
  );
}







