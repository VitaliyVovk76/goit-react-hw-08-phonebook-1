import ContactList from "components/ContactsList";
import Filter from "components/Filter";
import ModalContatcForm from "components/Modal";
import styles from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <>
      <h1 className={styles.title}>Phonebook</h1>
      <ModalContatcForm />
      <Filter />
      <ContactList />
    </>
  );
}
