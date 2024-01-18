export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </p>
            <button onClick={() => deleteContact(contact.id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
