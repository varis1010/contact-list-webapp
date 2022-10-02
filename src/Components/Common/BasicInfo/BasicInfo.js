import React, { memo } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, makeStyles } from '@material-ui/core';

import { getCaptionName } from '../../../Utils/utils'

import { styles } from "./styles";


const useStyles = makeStyles(styles);

const BasicInfo = ({ contacts }) => {
  const classes = useStyles();

  const randomColor = () => {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
    return color;
  }

  return (
    <List className={classes.root}>
      <ListItem className={classes.BasicInfoListItem}>
        <ListItemAvatar>
          <Avatar style={{
            backgroundColor: randomColor()
          }}>{getCaptionName(contacts?.firstName, contacts?.lastName)}</Avatar>
        </ListItemAvatar>
        <ListItemText
          style={{ textTransform: "capitalize" }}
          primary={`${contacts?.firstName} ${contacts?.lastName}`}
          secondary={contacts.email} />
      </ListItem>
    </List>
  );
}

export default memo(BasicInfo);