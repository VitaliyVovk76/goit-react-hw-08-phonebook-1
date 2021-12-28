import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import s from "./ContactsList.module.css";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => dispatch(deleteContact(contactId));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contactsWrapper}>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <span>{name}: </span>
              <span>{number}</span>
              <button
                className={s.contactButton}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
