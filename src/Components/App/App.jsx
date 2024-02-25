import "./App.css";
import { useState } from "react";
import listOfContacts from "../../../ContactList.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
// import { date } from "yup";

const App = () => {
  const [contacts, setContacts] = useState(listOfContacts);
  const [filter, setFilter] = useState("");

  const adContact = (newContact) => {
    setContacts((prevContacts) => {
      console.log(prevContacts);
      return [...prevContacts, newContact];
    });
  };

  const delContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={adContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList data={filteredContacts} onDelete={delContact} />
    </div>
  );
};
export default App;
