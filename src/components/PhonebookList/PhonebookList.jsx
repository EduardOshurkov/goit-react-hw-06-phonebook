import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getVisibleFilter } from "Redux/selectors";
import { removeContact } from "Redux/contactSlice";
import { Button, InfoContact, ContactList } from "./PhonebookList.styled";

const PhonebookList = ({  DeleteContact }) => {
    const contacts = useSelector(getVisibleFilter);
     const dispatch = useDispatch();

    const onRemoveContacts = (payload) => {
    dispatch(removeContact(payload));
  }

    return (
        <div>
        <ContactList>
                {contacts.map(({id, name, number}) => (
                    <li key={id}>
            <InfoContact>{name}: </InfoContact>
            <InfoContact>{number}</InfoContact>
            <Button type="button" onClick={() => onRemoveContacts(id)}>Delete</Button>
        </li>))}
            </ContactList>
        </div>
    )
}

export default PhonebookList;
