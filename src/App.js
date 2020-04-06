import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { Route, Switch   } from "react-router-dom";
import configureStore from "./store/configureStore";
import {PostListingPage} from "./containers/postListingPage/PostListingPage"
import theme from "./theme";
import { PostDetailsPage } from './containers/postDetailsPage/PostDetailsPage';
import { Page404 } from './containers/page404/Page404';
import WithSplashScreen from './components/hocs/WithSplashScreen'
const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"> <PostListingPage/>  </Route>
            <Route exact path="/details/:newsId?"> <PostDetailsPage/> </Route>
            <Route> <Page404/> </Route>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
  </Provider>
  );
}
export default WithSplashScreen(App);
