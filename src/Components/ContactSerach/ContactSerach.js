import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { styles } from "./styles";

const useStyles = makeStyles(styles);

export default function ContactSerach({ term, setTerm }) {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search Contacts"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search ' }}
      />
    </div>
  );
}