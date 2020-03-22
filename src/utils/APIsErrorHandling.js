import { ReactComponent as WarningSVG } from '../assets/svg/warning.svg';
import { ReactComponent as TimeoutSVG } from '../assets/svg/APIErrors/timeout.svg';
import { ReactComponent as ServerSVG } from '../assets/svg/APIErrors/server.svg';
import { ReactComponent as NetworkSVG } from '../assets/svg/APIErrors/network.svg';

/* APIs error handler used with Axios interceptors */
export const APIErrorHandlerFunc = store => error => {
	const statusCode = error.response && error.response.status ? error.response.status : 0;

	/* Define API Error popup content */
	let title = 'app.APIErrorPopup.networkError';
	let SVGIcon = NetworkSVG;

	if (statusCode || statusCode === 0) {
		switch (statusCode) {
			case 401:
				title = 'app.APIErrorPopup.unauthorized';
				SVGIcon = WarningSVG;
				break;

			case 408:
				title = 'app.APIErrorPopup.timeout';
				SVGIcon = TimeoutSVG;
				break;

			case 500:
				title = 'app.APIErrorPopup.internalServerError';
				SVGIcon = ServerSVG;
				break;

			default:
				break;
		}
	}

	return Promise.reject(error);
};
