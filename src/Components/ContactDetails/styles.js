import { deepOrange } from '@material-ui/core/colors';

export const styles = (theme) => ({
  root: {
    display: 'flex',
    width: "500px",
    minHeight: "500px",
    justifyContent: "center",
    marginLeft: '15px',
    marginTop: '75px',
    background: "#f0f0f0",
    borderBottom: "none",
    [theme.breakpoints.down('md')]: {
      width: 350,
      minHeight: 400,
    },
  },
  contectContent: {
    width: '250px',
    textAlign: 'center',
    paddingTop: '30px',
    [theme.breakpoints.down('md')]: {
      width: '170px',
      textAlign: 'center',
      paddingTop: '20px',
    },

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  large: {
    width: '80px',
    height: '80px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '50px',
      height: '50px',
      margin: '0 auto',
    },
  },
  title: {
    fontSize: 14,
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
    },
  },
  titleName: {
    fontSize: "22px",
    paddingTop: 10,
    fontWeight: '550',
    [theme.breakpoints.down('md')]: {
      fontSize: "18px",
      paddingTop: 10,
      fontWeight: '550',
    },
  },
  pos: {
    marginBottom: 12,
    [theme.breakpoints.down('md')]: {
      marginBottom: 8,
    },
  },
  tableRoot: {
    position: 'relative'
  },
  tableContainer: {
    position: 'absolute',
    width: "450px",
    right: "-85px",
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: "250px",
      right: "-20px",
    },
  },
  tableCellKey: {
    width: "150px",
    borderBottom: 0,
    padding: "25px 0 0px 5px",
    [theme.breakpoints.down('md')]: {
      width: "100px",
      borderBottom: 0,
      padding: "5px 0 10px 0px",
    },
  },
  tableCellValue: {
    width: "450px",
    borderBottom: 0,
    padding: "25px 0 0px 15px",
    [theme.breakpoints.down('md')]: {
      width: "180px",
      borderBottom: 0,
      padding: "5px 0 10px 15px",
    },
  },
  tableTextKey: {
    fontSize: "15px",
    [theme.breakpoints.down('md')]: {
      fontSize: "12px",
    },
  },
  tableCellBoxValue: {
    fontFamily: "'Trebuchet MS', sans-serif",
    fontSize: "15px",
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: "10px",
    },
  },
  emptyPageStyle: {
    display: "flex",
    width: "100%",
    fontFamily: 'Raleway, Arial',
    justifyContent: "center",
    alignItems: "center",
  }
});