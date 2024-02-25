import { useId } from "react";
import "./App.css";
import { Formik, Form, Field } from "formik";
import listOfContacts from "../ContactList.json";
import { useState } from "react";
// import { date } from "yup";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const phoneId = useId();
  const nameId = useId();

  //   const handleAdContact = (e) => {};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onAdd({
          id: Date.now(),
          name: values.name,
          number: values.number,
        });
        console.log(values.number);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />

        <label htmlFor={phoneId}>Number</label>
        <Field type="text" name="number" id={phoneId} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
const ContactList = ({ data, onDelete }) => {
  return (
    <ul>
      {data.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <p>Finde contacts by</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
};

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
  console.log(filteredContacts);
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
