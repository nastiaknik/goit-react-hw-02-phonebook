import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Layout } from 'components/Layout/Layout';
import { Section } from 'components/Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    favourites: [],
  };

  addContact = contact => {
    if (
      this.state.contacts.some(item => {
        return item.name === contact.name;
      })
    ) {
      Notify.warning('Contact with this name already exist!');
      return;
    }
    if (
      this.state.contacts.some(item => {
        return item.number === contact.number;
      })
    ) {
      Notify.warning('This number is already in base!');
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    Notify.success('Contact added!');
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
    Notify.success('Contact deleted!');
  };

  addContactToFav = contact => {
    if (this.state.favourites.includes(contact)) {
      this.setState(({ favourites }) => ({
        favourites: favourites.filter(({ id }) => id !== contact.id),
      }));
      Notify.success('Contact removed from favourites!');
      return;
    }
    this.setState(({ favourites }) => ({
      favourites: [...favourites, contact],
    }));
    Notify.success('Contact added to favourites!');
  };

  handleSetFilterValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFilterContact = () => {
    if (
      this.state.contacts.filter(contact => {
        return (
          contact.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase().trim()) ||
          contact.number.includes(this.state.filter.trim())
        );
      }).length === 0
    ) {
      Notify.failure('Sorry, there are no contact matching your search. :(', {
        showOnlyTheLastOne: true,
      });
    }

    return this.state.contacts
      .filter(contact => {
        return (
          contact.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase().trim()) ||
          contact.number.includes(this.state.filter.trim())
        );
      })
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  };

  render() {
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <ContactFilter
              value={this.state.filter}
              onFilter={this.handleSetFilterValue}
            />
            <ContactList
              contacts={this.handleFilterContact()}
              onDelete={this.deleteContact}
              onFavorite={this.addContactToFav}
              favourites={this.state.favourites}
            />
          </Section>
        )}
      </Layout>
    );
  }
}
