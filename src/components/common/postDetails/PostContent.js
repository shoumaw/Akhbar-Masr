

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    title:{
        margin: theme.spacing(0,0,2)
      },
      descriptionSection: {
        margin: theme.spacing(1, 4),
      },
  }));  
  
export const PostContent = (props) => {
  const classes = useStyles();

  const {title, description} = props

  return (
        <div className={classes.descriptionSection}>
          <Grid container alignItems="center" className={classes.title}>
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                {title}
              </Typography>
            </Grid>
          </Grid>
          {
            description !== "" && (
              <Typography color="textSecondary" variant="body2">
                {description}
              </Typography>
            )
          }
        </div>
  );
}







