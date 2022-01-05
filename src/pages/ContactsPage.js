import ContactList from "../components/ContactsList/ContactsList";
import Filter from "../components/Filter/Filter";
import ModalContatcForm from "../components/Modal/Modal";

export default function ContactsPage() {
  return (
    <>
      <h1>Phonebook</h1>
      <ModalContatcForm />
      <Filter />
      <ContactList />
    </>
  );
}
