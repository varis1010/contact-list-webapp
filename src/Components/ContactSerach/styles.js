import { alpha } from '@material-ui/core/styles';

export const styles = (theme) => ({
  search: {
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: alpha(theme.palette.primary.dark, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.dark, 0.25),
    },
    marginLeft: 0,
    width: '250px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '0px',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width: "300px",
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: '15px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
});