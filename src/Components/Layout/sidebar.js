import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, useLocation } from "react-router-dom";

import { styles } from "./styles";

const useStyles = makeStyles(styles);

const MENU = [
  {
    text: "home",
    icon: <HomeOutlinedIcon />,
    path: "/home",
  },
  {
    text: "contacts",
    icon: <PersonIcon />,
    path: "/",
  },
  {
    text: "reports",
    icon: <DescriptionIcon />,
    path: "/description",
  },
  {
    text: "history",
    icon: <AccessTimeIcon />,
    path: "/time-sheet",
  },
  {
    text: "phone",
    icon: <PhoneIphoneIcon />,
    path: "/phone-book",
  },
  {
    text: "calendar",
    icon: <CalendarTodayIcon />,
    path: "/calendar",
  },
];

const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <div>
        <Typography
          onClick={() => history.push("/")}
          className={classes.title}
        >
          <MenuIcon className={classes.iconList} />
        </Typography>
      </div>

      <List>
        {MENU.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon className={classes.iconList}>{item.icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
