export const ContactForm = ({ onInputChange, addContact, name, number }) => {
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={e => addContact(e)}>
        <label>
          Name
          <input
            value={name}
            onChange={e => onInputChange(e)}
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Number
          <input
            value={number}
            onChange={e => onInputChange(e)}
            type="tel"
            name="number"
            required
          />
        </label>
        <button>Add contact</button>
      </form>
    </>
  );
};
