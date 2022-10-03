import React, { memo } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, makeStyles, Typography } from '@material-ui/core';

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
          <Avatar className={classes.AvatarSize} md={{ height: '20px', width: '20px' }} style={{
            backgroundColor: randomColor()
          }}>
            <Typography className={classes.AvatarCaptionSize}>
              {getCaptionName(contacts?.firstName, contacts?.lastName)}
            </Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          disableTypography
          style={{ textTransform: "capitalize", fontSize: '10px' }}
          primary={
            <Typography
              className={classes.listPrimaryItemText}
              listItemTexttype="body2">
              {`${contacts?.firstName} ${contacts?.lastName}`}
            </Typography>}
          secondary={
            <Typography
              className={classes.listSecondaryItemText}
              listItemTexttype="caption">
              {contacts?.email}
            </Typography>
          } />
      </ListItem>
    </List>
  );
}

export default memo(BasicInfo);