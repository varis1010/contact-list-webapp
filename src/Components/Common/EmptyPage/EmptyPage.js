import React from 'react'
import { Typography } from '@material-ui/core'

export default function EmptyPage({ children }) {
  return (
    <Typography variant="h6" component="h4">{children}</Typography>
  )
}
