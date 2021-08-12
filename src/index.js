import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import reportWebVitals from "./reportWebVitals";
const theme = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
    primary: {
      light: "F6F4EC",
      main: "#399375",
    },
    secondary: {
      light: "#54D695",
      main: "#F3BF7A",
      contrastText: "#292929",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
