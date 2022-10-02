import { deepOrange } from '@material-ui/core/colors';

export const styles = (theme) => ({
  root: {
    display: 'flex',
    width: "500px",
    minHeight: "68vh",
    justifyContent: "center",
    marginLeft: '15px',
    marginTop: '75px',
    background: "#f0f0f0",
    borderBottom: "none"
  },
  contectContent: {
    width: '250px',
    textAlign: 'center',
    paddingTop: '30px'

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
    margin: '0 auto'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  tableRoot: {
    position: 'relative'
  },
  tableContainer: {
    position: 'absolute',
    width: "450px",
    right: "-85px"
  },
  tableCellKey: {
    width: "150px",
    borderBottom: 0,
    padding: "25px 0 0px 5px"
  },
  tableCellValue: {
    width: "450px",
    borderBottom: 0,
    padding: "25px 0 0px 15px"

  },
  emptyPageStyle: {
    display: "flex",
    width: "100%",
    fontFamily: 'Raleway, Arial',
    justifyContent: "center",
    alignItems: "center"
  }
});