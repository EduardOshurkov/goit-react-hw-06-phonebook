

import Phonebook from "./PhonebookForm/PhonebookForm";
import PhonebookList from "./PhonebookList/PhonebookList";
import Filter from "./Filter/Filter";
import styled from '@emotion/styled';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "Redux/filterSlice";
import { addContact, removeContact } from "Redux/contactSlice";
import { getVisibleFilter, getFilter } from "Redux/selectors";


export function App() {
  const contacts = useSelector(getVisibleFilter);
  const filter = useSelector(getFilter);
  

  const dispatch = useDispatch();

  const onAddContacts = (payload) => {
   const existingContact = contacts.find(
      el => el.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase()
    );
    if (existingContact) {
      alert(`${payload.name} is already in your contacts`);
      return;
    }
    dispatch(addContact(payload));

  };

  const onRemoveContacts = (payload) => {
    dispatch(removeContact(payload));
  }

  const onSetFilter = ({target}) => {
    dispatch(setFilter(target.value))
  }
    
    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <Phonebook onSubmit={onAddContacts} />

        <TitlePhonebook>Contacts</TitlePhonebook>
        <Filter onChangeFilter={onSetFilter} value={filter} />

        <PhonebookList contacts={contacts} DeleteContact={onRemoveContacts}/>
        
        </Container>
    )
  
}


const Container = styled.div`
    text-align: center;
    padding: 40px;
`;

const TitlePhonebook = styled.h2`
font-family: Kdam Thmor Pro;
font-size: 24px;
`