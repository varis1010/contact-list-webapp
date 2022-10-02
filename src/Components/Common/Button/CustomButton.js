import React from 'react'
import { makeStyles, Button } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function CustomButton({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary">
        {children}
      </Button>
    </div>
  )
}
