export const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  paper: {
    minHeight: "90vh",
    padding: theme.spacing(2),
    justifyContent: "center",
  },

  contactsCaptionContainer: {
    position: "relative",
  },

  contactLogo: {
    position: "absolute",
    width: '30px',
    height: '30px',
    borderRedius: '15px 50px 30px 5px;',
    left: '30px',
    top: '15px'
  },

  contactsLogoText: {
    position: "absolute",
    left: '70px',
    top: '10px'
  },

  contactLogoCaption: {
    position: "absolute",
    left: '70px',
    top: '30px'
  },
});
