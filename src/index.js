import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";

import ContactProvider from './Context/ContactProvider';
import App from "./App.js";
import "./index.css";
import theme from "./theme";

ReactDOM.render(
  <ContactProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ContactProvider>,
  document.getElementById("root")
);
