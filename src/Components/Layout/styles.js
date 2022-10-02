const drawerWidth = 70;

export const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  page: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    background: "#f0f0f0",
  },
  contentContainer: {
    maxWidth: '100%',
    minHeight: '100vh',
    padding: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(150deg, rgba(255,215,150,1) 0%, rgba(232,78,110,1) 50%, rgba(230,34,138,1) 100%)',
    overflow: 'hidden',
  },
  active: {
    background: "#c90061",
  },
  title: {
    padding: "17px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconList: {
    padding: "8px",
    color: '#fff'
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: "#fff",
    borderBottom: "1px solid #f0f0f0"
  },
  toolbar: theme.mixins.toolbar,
  space: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
});
