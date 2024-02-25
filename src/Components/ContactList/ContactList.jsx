import Contact from "../Contact/Contact";
export default function ContactList({ data, onDelete }) {
  return (
    <ul>
      {data.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
