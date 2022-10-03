import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import BasicInfo from '../Common/BasicInfo/BasicInfo';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Box, Typography } from '@material-ui/core';

import EmptyPage from '../Common/EmptyPage/EmptyPage';

import { styles } from "./styles";


const useStyles = makeStyles(styles);

export default function ContactsList({ contactList, setSelectedRecord, handleDelete, handleToggleEdit }) {
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);

  const handleClick = (id, item) => {
    const selectedIndex = selected.map(e => e.id).indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected.push(item);
    } else if (selectedIndex === 0) {
      newSelected = selected.slice(1);
    }
    setSelectedRecord(newSelected)
    setSelected(newSelected);
  }

  const isSelected = (id) => selected.map(e => e.id).indexOf(id) !== -1;

  return (
    <TableContainer className={classes.contactListTableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.contactListTableHead}>
          <TableRow className={classes.contactListTableRow}>
            <TableCell className={classes.contactListTableCell}>
              <Box
                component="span"
                fontFamily="'Trebuchet MS', sans-serif"
                fontSize="15px"
                fontWeight='bold'
              >
                +
              </Box>
            </TableCell>
            <TableCell className={[classes.contactListTableCell, classes.cellAlignLeft]}>
              <Box
                component="span"
                fontFamily="'Trebuchet MS', sans-serif"
                fontSize="15px"
                fontWeight='bold'
              >
                Basic Info
              </Box>
            </TableCell>
            <TableCell className={classes.contactListTableCell}>
              <Box
                component="span"
                fontFamily="'Trebuchet MS', sans-serif"
                fontSize="15px"
                fontWeight='bold'
              >
                company
              </Box>
            </TableCell>
            <TableCell className={classes.contactListTableCell}>
              <Box
                component="span"
                color="textSecondary"
                fontFamily="'Trebuchet MS', sans-serif"
                fontSize="15px"
                fontWeight='bold'
              >
                Action
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactList.length > 0 ? contactList?.map((row, index) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow
                hover
                onClick={(event) => handleClick(row.id, row)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.id}
                selected={isItemSelected}
                className={classes.contactListTableBody}
              >
                <TableCell className={classes.contactListTableCell} padding="checkbox">
                  <Checkbox
                    checked={isItemSelected}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </TableCell>
                <TableCell className={classes.contactListTableCell}>
                  <BasicInfo contacts={row} />
                </TableCell>
                <TableCell className={classes.contactListTableCell}>
                  <Typography className={classes.companyText} listItemTexttype="body2">{row.company}</Typography>
                </TableCell>
                <TableCell className={classes.contactListTableCell}>
                  <Box className={classes.actionButtonContainer}>
                    <DeleteIcon className={classes.deleteIcon} onClick={() => handleDelete(row.id)} />
                    <EditIcon className={classes.editIcon} onClick={() => handleToggleEdit(row)} />
                  </Box>
                </TableCell>
              </TableRow>
            )
          }) : (
            <EmptyPage>No Contact's Found.</EmptyPage>
          )}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
