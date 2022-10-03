export const styles = (theme) => ({
  leftPaper: {
    width: "60%",
    padding: theme.spacing(2),
    height: "70vh",
    marginLeft: '40px',
    justifyContent: "center",
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
      marginLeft: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      marginLeft: '0px',
    },
  },
  rightPaper: {
    width: "40%",
    height: "75vh",
    padding: theme.spacing(2),
    justifyContent: "center",
    // [theme.breakpoints.down('sm')]: {
    //   width: "30%",
    //   padding: theme.spacing(1),
    //   // marginLeft: 10
    // },
  },
  actionContainer: {
    position: 'relative',
    width: '100%'
  },
  searchBar: {
    position: 'absolute',
  },
  addButton: {
    position: 'absolute',
    left: '270px',
    [theme.breakpoints.down('md')]: {
      left: '222px',
    },
    [theme.breakpoints.down('sm')]: {
      left: '200px',
    },
  },
  contactListContainer: {
    marginTop: '75px'
  }
});