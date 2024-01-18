import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from 'components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = e => {
    e.preventDefault();
    const { name, contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [
        { id: nanoid(), name: prevState.name, number: prevState.number },
        ...prevState.contacts,
      ],
    }));

    this.setState({ name: '', number: '' });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <>
        <ContactForm
          name={name}
          number={number}
          onInputChange={this.onInputChange}
          addContact={this.addContact}
        />
        <Filter filter={filter} onInputChange={this.onInputChange} />
        <ContactList
          contacts={this.filterContacts(filter)}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
