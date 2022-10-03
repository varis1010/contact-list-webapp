export const styles = (theme) => ({
  contactListTableContainer: {
    maxHeight: "500px",
    overflow: "auto",
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    // '&::-webkit-scrollbar-track': {
    //   boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    //   webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    // },
    // '&::-webkit-scrollbar-thumb': {
    //   background: 'linear-gradient(150deg, rgba(255,215,150,1) 0%, rgba(232,78,110,1) 50%, rgba(230,34,138,1) 100%)',
    //   outline: '0px solid slategrey'
    // }
  },
  table: {
    minWidth: 650,
    [theme.breakpoints.down('md')]: {
      minWidth: 500,
    },
  },
  contactListTableHead: {
    position: "- webkit - sticky",
    position: 'sticky',
    overflow: "visible",
    top: "0",
    zIndex: "1"
  },
  contactListTableRow: {
    background: "#f0f0f0",
    border: "none"
  },
  cellAlignLeft: {
    paddingLeft: '35px'
  },
  contactListTableCell: {
    borderBottom: 'none'
  },
  contactListTableBody: {
    cursor: "pointer",
  },
  BlankSpace: {
    borderSpacing: "30px"
  },
  deleteIcon: {
    paddingRight: "15px",
    fontSize: '17px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7rem',
      fontWeight: 'bold',
    },
    "&:hover": {
      color: '#ff2525de',
    }
  },
  editIcon: {
    fontSize: '17px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7rem',
      fontWeight: 'bold',
    },
    "&:hover": {
      color: '#4050e8de',
    }
  },
  actionButtonContainer: {
    position: "relative"
  },
  companyText: {
    fontSize: '17px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7rem',
      fontWeight: 'bold',
    },
  }
});