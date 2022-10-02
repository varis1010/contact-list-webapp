import { createContext, useContext, useEffect, useState } from 'react';
import { contacts } from '../Data/contacts'

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contact, setContact] = useState(contacts);

  useEffect(() => {
    setContact(contact);
  }, [contact])

  return <ContactContext.Provider value={
    {
      contact,
      setContact,
    }}>{children}</ContactContext.Provider>
}

export const ContactState = () => {
  return useContext(ContactContext);
}


export default ContactProvider;