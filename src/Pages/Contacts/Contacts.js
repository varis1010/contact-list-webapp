import React, { useState } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';

import CustomModel from '../../Components/Common/Model/CustomModel';
import ContactDetails from '../../Components/ContactDetails/ContactDetails';
import ContactSerach from '../../Components/ContactSerach/ContactSerach';
import ContactsList from '../../Components/ContactsList/ContactsList';
import { ContactState } from '../../Context/ContactProvider';
import useFilter from '../../Hooks/useFilter';

import { styles } from "./styles";

const useStyles = makeStyles(styles);

export default function Contacts() {
  const { contact } = ContactState();
  const classes = useStyles();
  const [term, setTerm] = useState('');
  const [contactRecord, setContactRecord] = useState(contact);
  const [selectedRecord, setSelectedRecord] = useState([]);
  const [currentContactData, setCurrentContactData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const { filterData } = useFilter(contactRecord, term)

  const getUserFormData = (formData) => {
    const addUserRecord = { ...formData, id: uuidv4() }
    setContactRecord([addUserRecord, ...contactRecord])
  };

  const handleDelete = (id) => {
    setContactRecord(contactRecord.filter(item => item.id !== id))
  }

  const handleToggleEdit = (singleContactRecord) => {
    setIsEdit(true)
    setCurrentContactData(singleContactRecord)
  }

  const handleUpdate = (updatedRecords) => {
    setContactRecord(contactRecord.map(item => item.id === updatedRecords.id ? updatedRecords : item))
    setIsEdit(false)
  }

  return (
    <Box display="flex" marginTop="75px">
      <Box className={classes.leftPaper} xs={6}>
        <Box className={classes.actionContainer} xs={6}>
          <Box className={classes.searchBar}>
            <ContactSerach term={term} setTerm={setTerm} />
          </Box>
          <Box className={classes.addButton}>
            <CustomModel getUserFormData={getUserFormData} isEdit={isEdit} setIsEdit={setIsEdit} currentContactData={currentContactData} handleUpdate={handleUpdate} />
          </Box>
        </Box>
        <Box className={classes.contactListContainer}>
          <ContactsList contactList={filterData} setSelectedRecord={setSelectedRecord} handleDelete={handleDelete} handleToggleEdit={handleToggleEdit} />
        </Box>
      </Box>
      <Box className={classes.rightPaper} xs={6}>
        <ContactDetails selectedRecord={selectedRecord} />
      </Box>
    </Box>
  )
}
