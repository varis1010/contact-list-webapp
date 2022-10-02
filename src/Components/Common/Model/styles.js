export const styles = (theme) => ({
  buttonContainer: {
    color: "#fff",
    background: 'linear-gradient(90deg, rgba(255,215,150,1) 0%, rgba(232,78,110,1) 50%, rgba(230,34,138,1) 100%)',
  },
  buttonCancelContainer: {
    color: "#fff",
    background: '#b85353',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
    '& .MuiOutlinedInput-input': {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
      },
    }
  },
  dailogActionContainer: {
    margin: "15px"
  }
});