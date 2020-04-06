import { createMuiTheme } from "@material-ui/core/styles";
import { colors, fontSizes } from "./theme-constants";
const theme = createMuiTheme({
	props: {
		MuiButtonBase: {
			disableRipple: true, // No more ripple, on the whole application 💣!
		},
	},
	palette: {
		primary: {
			main: colors.primaryColors.maize
		},
		secondary: {
			main: colors.secondary.cream
		},
		rumour:{
			main: colors.secondary.rumour
		},
		legit:{
			main: colors.secondary.legit
		},
		background: {
			default: '#f2f2f2'
		},
		text: {
			primary: '#333',
			secondary: '#666666',
			maize: '#COA8CO'
		}
	},

	typography: {
		fontFamily: "Monda, sans-serif",
		fontSize: fontSizes.default,
		color: '#333333',
		caption: {
			fontSize: fontSizes.caption
		},
		body2: {
			fontSize: fontSizes.body,
		},
		h6: {
			fontSize: fontSizes.h6,
		},
		h5: {
			fontSize: fontSizes.h5,
		},
		h3: {
			fontSize: fontSizes.h3,
		}
	}
});

theme.overrides = {
	//     /******************************** Buttons ********************************/
	MuiButton: {
		root: {
			borderRadius: 6,
			textTransform: "capitalize",
			padding: "1px 29px",
			boxShadow: "none",
			fontSize: 20,
			color: colors.secondary.buttontext,
			textAlign: "center",
			lineHeight: "1.25rem",
			height: 50
		},
		contained: {
			boxShadow: "none"
		},
		containedSecondary: {
			backgroundColor: "#fff",
			border: `1px solid ${colors.secondary.button}`,
			color: colors.secondary.text,
			"&:hover": {
				backgroundColor: colors.secondary.text + " .01",
				borderColor: colors.secondary.button
			}
		},
		outlined: {
			border: "solid 1px",
			boxShadow: "none",
			padding: "1px 29px"
		},
		outlinedSecondary: {
			borderColor: colors.secondary.button,
			color: colors.secondary.text,
			"&:hover": {
				backgroundColor: colors.secondary.text + " .01",
				borderColor: colors.secondary.button
			}
		},
		containedPrimary: {
			"&:hover": {
				color: colors.secondary.buttontext,
			}
		},
		sizeLarge: {
			borderRadius: "6px",
			padding: "1px 29px",
			boxShadow: "none",
			fontSize: "1.25rem",
			textAlign: "center",
			lineHeight: "1.4rem",
			height: "50px"
		},
		sizeSmall: {
			padding: "6px 6px",
			minWidth: "38px",
			height: "38px"
		}
	},
	MuiLink: {
		root: {
			fontFamily: "VodafoneRg",
			fontSize: 16
		}
	},
	MuiTooltip: {
		tooltip: {
			backgroundColor: colors.secondary.tooltip,
		},
		popper: {
			opacity: 1
		}
	},
	MuiOutlinedInput: {
		root: {
			border: " solid 1px #999999",
			borderRadius: "6px",
			"&$focused $notchedOutline": {
				borderColor: "none"
			}
		}
	},
	MuiSelect: {
		select: {
			"&:focus": {
				backgroundColor: "initial"
			}
		}
	},
	MuiTypography: {
		colorPrimary: {
			color: colors.primaryColors.text
		}
	},
	MuiBackdrop: {
		root: {
			backgroundColor: "rgba(255, 255, 255)",
			opacity: ".9 !important",
			boxShadow: "inset 0 0px 6px 100vh rgba(166,166,166,.1)"
		}
	},
	MuiDialog: {
		paper: { borderRadius: 8 }
	},
	MuiSwitch: {
		root: {
			width: 42,
			height: 26,
			padding: 0,
		},
		colorSecondary: {
			padding: 1,
			'&$checked': {
				transform: 'translateX(16px)',
				color: '#fff',
				'& + $track': {
					backgroundColor: '#007c92',
					opacity: 1,
					border: 'none',
				},
			},
			'$thumb': {
				color: '#007c92',
				border: '6px solid #fff',
			},
		},
		thumb: {
			width: 24,
			height: 24,
		},
		track: {
			borderRadius: 15,
			borderColor: theme.palette.grey[400],
			backgroundColor: theme.palette.grey[400],
			opacity: 1,
			transition: theme.transitions.create(['background-color', 'border']),
		}
	}
};

export default theme;
