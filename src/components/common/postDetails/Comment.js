

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(theme => ({
    text: {
      margin: theme.spacing(0.5),
      fontSize: 12
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

  const {author, ups, downs, description} = props

  return (
        <ListItem>
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
                <ListItemText className={classes.text} secondary={author}/>
                <ListItemText className={classes.text} secondary={ups}/>
                <ListItemText className={classes.text} secondary={downs}/> 
            </div>
            <ListItemText className={classes.text} primary={description}/>
          </div>
        </ListItem>
  );
}







