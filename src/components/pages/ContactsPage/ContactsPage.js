import ContactList from "../../../components/ContactsList/ContactsList";
import Filter from "../../../components/Filter/Filter";
import ModalContatcForm from "../../../components/Modal/Modal";
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
