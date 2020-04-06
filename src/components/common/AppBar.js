import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SvgIcon } from '@material-ui/core';

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <SvgIcon viewBox="0 0 100 100" className={classes.menuButton}>
              <path d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"/>
            </SvgIcon>
            <Typography variant="h6" className={classes.title}>
              Akhbar Masr
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
  );
}
