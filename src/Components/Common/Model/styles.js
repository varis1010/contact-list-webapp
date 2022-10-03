export const styles = (theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      height: 600
    },
  },
  buttonContainer: {
    color: "#fff",
    width: "130px",
    padding: "8px",
    background: 'linear-gradient(90deg, rgba(255,215,150,1) 0%, rgba(232,78,110,1) 50%, rgba(230,34,138,1) 100%)',
    [theme.breakpoints.down('md')]: {
      width: "120px",
      padding: "6px",
    },
    [theme.breakpoints.down('md')]: {
      width: "110px",
      padding: "6px",
    },
  },
  buttonCancelContainer: {
    color: "#fff",
    background: '#b85353',
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '27ch',
    '& .MuiOutlinedInput-input': {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
      },
    }
  },
  dailogActionContainer: {
    margin: "15px"
  },
  buttonSaveContainer: {
    color: "#fff",
    background: 'linear-gradient(90deg, rgba(255,215,150,1) 0%, rgba(232,78,110,1) 50%, rgba(230,34,138,1) 100%)',
  },
});