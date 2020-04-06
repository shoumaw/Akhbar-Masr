

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    text: {
      margin: theme.spacing(0.5),
      fontSize: 12
    },
    infoSection: {
      margin: theme.spacing(2,4),
    }
  }));  
  
export const PostInfo = (props) => {
  const classes = useStyles();

  const {author, createdDate, score, numComments} = props

  return (
        <div className={classes.infoSection}>
          <div>
            <Typography className={classes.text} variant="caption"> {`Author: ${author} • `} </Typography>
            <Typography className={classes.text} variant="caption"> {`Submitted: ${createdDate} hours ago • `}  </Typography>
            <Typography className={classes.text} variant="caption"> {`Score: ${score} • `}  </Typography>
            <Typography className={classes.text} variant="caption"> {`Comments: ${numComments}`} </Typography>
          </div>
        </div>
  );
}







