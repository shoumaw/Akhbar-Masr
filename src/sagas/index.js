import { fork, all } from 'redux-saga/effects';
import * as appSaga from './appSaga';

export default function* rootSaga() {
	yield all([
		//App sagas
		fork(appSaga.blank),
	]);
}
