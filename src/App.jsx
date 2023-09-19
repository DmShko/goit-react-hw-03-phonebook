import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { PhoneBookSection } from './components/PhoneBookSection/PhoneBookSection';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  /* life cycle methods*/
  componentDidUpdate(prevState) {
    // add data, if state was changed
    if(prevState !== this.state) localStorage.setItem("phonebook", JSON.stringify(this.state));
    
  }

  componentDidMount() {

    if(JSON.parse(localStorage.getItem("phonebook", ))) this.setState(JSON.parse(localStorage.getItem("phonebook", )));

  }
 /* life cycle methods*/

  changeContacts = newstate => {
    if (
      this.state.contacts.find(
        element => element.name === [newstate.name, newstate.number].join(' ')
      ) !== undefined
    ) {
      Notiflix.Notify.warning(`"${newstate.name}" is already in contacts!`, {position: 'center-top', fontSize: '24px',});
      return;
    } 

    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: [newstate.name, newstate.number].join(' '), id: nanoid() },
      ],
    });

  };

  changeFilter = newFilter => this.setState({ filter: newFilter.filter });

  deleteContact = deleteById =>
    this.setState({
      contacts: this.state.contacts.filter(
        element => element.id !== deleteById
      ),
    });

  render() {
    return (
      <>
        <p>Phonebook</p>
        <PhoneBookSection
          users={this.changeContacts}
          userDel={this.deleteContact}
          userFilter={this.changeFilter}
          data={this.state}
        />
      </>
    );
  }
}
