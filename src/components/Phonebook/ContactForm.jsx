import { Button, Title } from 'styles/Shared.styles';
import { Input, Label, Phonebook } from './ContactForm.styled';

export const ContactForm = ({ onInputChange, addContact, name, number }) => {
  return (
    <>
      <Title>Phonebook</Title>
      <Phonebook onSubmit={e => addContact(e)}>
        <Label>
          Name
          <Input
            value={name}
            onChange={e => onInputChange(e)}
            type="text"
            name="name"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            value={number}
            onChange={e => onInputChange(e)}
            type="tel"
            name="number"
            required
          />
        </Label>
        <Button>Add contact</Button>
      </Phonebook>
    </>
  );
};
