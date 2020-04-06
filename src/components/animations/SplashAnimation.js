import * as React from "react";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    "body": {
        "width": "100vw",
        "height": "100vh",
        "overflow": "hidden",
        "padding": "0",
        "margin": "0",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "perspective": "500px",
        "background": "#FFE66D"
    },
    "container": {
        "width": "250px",
        "height": "250px",
        "display": "flex",
        "placeContent": "center",
        "overflow": "hidden",
        "background": "#333333",
        "borderRadius": "30px"
    },
    "item": {
        "width": "56%",
        "overflow": "visible",
        "stroke": "#fff",
        "strokeWidth": "2",
        "strokeLinejoin": "round",
        "strokeLinecap": "round"
    }
  }));  

  
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

export const SplashAnimation = () => 
{
    const classes = useStyles();
    return(
        <div className={classes.body}>
            <div className={classes.container}>
                <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className={classes.item}
                >
                <motion.path
                    d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
                </motion.svg>
            </div>
        </div>
    )
}
