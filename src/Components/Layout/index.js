import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import Header from "./header";
import Sidebar from "./sidebar";
import { styles } from "./styles";

const useStyle = makeStyles(styles);

function Layout({ children }) {
  const classes = useStyle();

  return (
    <>
      <div className={classes.root}>
        {/* app bar header */}
        <Header />
        {/* side drewer */}
        <Sidebar />

        <div className={classes.page}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.contentContainer}>
            {children}
          </Container>
        </div>
      </div>
    </>
  );
}

export default Layout;
