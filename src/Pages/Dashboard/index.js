import React from "react";
import { makeStyles, Grid, Paper, Typography, Box } from "@material-ui/core";

import Contacts from "../Contacts/Contacts";

import { styles } from "./styles";


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={12}>
      <Paper className={classes.paper} xs={12}>
        <Box className={classes.contactsCaptionContainer}>
          <img className={classes.contactLogo} src="contacts_logo.png" alt="contact_logo" />
          <Typography variant="h6" className={classes.contactsLogoText} gutterBottom>
            Contacts
          </Typography>
          <Typography variant="caption" className={classes.contactLogoCaption} display="block" gutterBottom>
            Welcome to Contacts List
          </Typography>
        </Box>
        <Box >
          <Contacts />
        </Box>
      </Paper>
    </Grid>
  );
}
