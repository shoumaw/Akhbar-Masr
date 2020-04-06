import React from "react";
import PropTypes from 'prop-types';
import { Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const EmptyPage = ({
  IconComponent,
  isFullScreen = false
}) => {
  const history = useHistory();
  const theme = useTheme();
  return (
    <Grid
      container
      style={{
        height: isFullScreen ? "100%" : "60vh",
        background: "white",
        borderRadius: 12
      }}
    >
      <Grid container spacing={1} justify='center' alignItems='center' direction='column'>
        <Grid item>
          <IconComponent />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 34, fontFamily: 'VodafoneLt' }}>
            Something went wrong!
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 24 , fontFamily: 'VodafoneLt' }}>
            Page not found.
          </Typography>
        </Grid>

        <Grid item>
          <Button
            style={{ marginTop: "2vh", width: 191, maxWidth: 335 }}
            size="large"
            onClick={() => history.replace('/')}
          >
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

EmptyPage.propTypes = {
  isFullScreen: PropTypes.bool,
  IconComponent: PropTypes.object.isRequired,
  titleTranslationId: PropTypes.string.isRequired,
  subTitleTranslationId: PropTypes.string,
  buttonTranslationId: PropTypes.string.isRequired
};

export default EmptyPage;