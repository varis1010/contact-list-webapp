import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

import { getCaptionName } from '../../Utils/utils';
import EmptyPage from '../Common/EmptyPage/EmptyPage';

import { styles } from "./styles";


const useStyles = makeStyles(styles);

export default function ContactDetails({ selectedRecord }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">

      {selectedRecord && selectedRecord.length > 0 ? (
        <CardContent className={classes.contectContent}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <Avatar
              className={[classes.orange, classes.large]}>
              {getCaptionName(selectedRecord[0]?.firstName, selectedRecord[0]?.lastName)}
            </Avatar>
            <Typography
              variant="h5"
              color="textPrimary"
              style={{ textTransform: "capitalize" }}>
              {`${selectedRecord[0]?.firstName} ${selectedRecord[0]?.lastName}`}
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            style={{ textTransform: "capitalize" }}
            color="textSecondary"
          >
            {
              (selectedRecord[0]?.designation
                || selectedRecord[0]?.company)
                ? (
                  `${selectedRecord[0]?.designation} at ${selectedRecord[0]?.company}`)
                : ("No Information Provided.")
            }
          </Typography>
          <Box className={classes.tableRoot}>
            <TableContainer className={classes.tableContainer}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableCellKey}>
                      <Typography variant="subtitle1" color="textSecondary">
                        Full Name:
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCellValue}>
                      <Box
                        style={{ textTransform: "capitalize" }}
                        component="span"
                        fontFamily="'Trebuchet MS', sans-serif"
                        fontSize="15px"
                        fontWeight='bold'
                      >
                        {`${selectedRecord[0]?.firstName} ${selectedRecord[0]?.lastName}`}
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell className={classes.tableCellKey}>
                      <Typography variant="subtitle1" color="textSecondary">
                        Email:
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCellValue}>
                      <Box
                        component="span"
                        fontFamily="'Trebuchet MS', sans-serif"
                        fontSize="15px"
                        fontWeight='bold'
                      >
                        {selectedRecord[0]?.email}
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell className={classes.tableCellKey}>
                      <Typography variant="subtitle1" color="textSecondary">
                        Phone:
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCellValue}>
                      <Box
                        component="span"
                        fontFamily="'Trebuchet MS', sans-serif"
                        fontSize="15px"
                        fontWeight='bold'
                      >
                        {selectedRecord[0]?.phone}
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell className={classes.tableCellKey}>
                      <Typography variant="subtitle1" color="textSecondary">
                        Company:
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCellValue}>
                      <Box
                        component="span"
                        fontFamily="'Trebuchet MS', sans-serif"
                        fontSize="15px"
                        fontWeight='bold'
                      >
                        {selectedRecord[0]?.company
                          ? selectedRecord[0]?.company
                          : "No Information Provided."}
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell className={classes.tableCellKey}>
                      <Typography variant="subtitle1" color="textSecondary">
                        Address:
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCellValue}>
                      <Box
                        component="span"
                        fontFamily="'Trebuchet MS', sans-serif"
                        fontSize="15px"
                        fontWeight='bold'
                      >
                        {selectedRecord[0]?.address}
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </CardContent>
      ) : (
        <Box className={classes.emptyPageStyle}>
          <EmptyPage>No Contact's Selected.</EmptyPage>
        </Box>
      )}
    </Card >
  );
}