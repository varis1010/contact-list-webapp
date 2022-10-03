export const styles = (theme) => ({
  root: {
    // width: '100%',
    maxWidth: 360,
    paddingTop: "0px",
    paddingBottom: "0px",
    border: "none",
    [theme.breakpoints.down('md')]: {
      maxWidth: 160,
      fontSize: 5,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 140,
      fontSize: 5,
    },
  },
  BasicInfoListItem: {
    paddingTop: "0px",
    paddingBottom: "0px",
    marginTop: "0px",
    marginBottom: "0px",
    borderBottom: "none"
  },
  AvatarSize: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  AvatarCaptionSize: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    },
  },
  listPrimaryItemText: {
    fontSize: '17px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7rem',
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6rem',
      fontWeight: 'bold',
    },
  },
  listSecondaryItemText: {
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.5rem',
    },
  }
});