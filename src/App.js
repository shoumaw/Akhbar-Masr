import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import NewsListingPage from "./containers/newsListingPage/NewsListingPage"
import theme from "./theme";

const { store } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/" exact component={NewsListingPage} />    
        </BrowserRouter>
      </MuiThemeProvider>
  </Provider>
  );
}
