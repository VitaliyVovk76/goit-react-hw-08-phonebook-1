import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import styles from "./ContactsList.module.css";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => dispatch(deleteContact(contactId));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactsWrapper}>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.contactItem} key={id}>
              <span>{name}: </span>
              <span>{number}</span>
              <Button
                className={styles.contactButton}
                variant="danger"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
