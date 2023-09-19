import { Component } from 'react';

// get components link from 'components' directory
import { DataIn } from '../DataIn/DataIn';
import { DataOut } from '../DataOut/DataOut';
import { FindContacts } from '../FindContacts/FindContacts';

// add css modules
import phoneSec from './PhoneBookSection.module.css';

export class PhoneBookSection extends Component {
  render() {
    // <DataIn> - this component performs save input data and validation.
    // here change THIS state and main state in App.
    // <FindContacts - this component change 'filter' property in App 'state'
    // this value use in <Dataout> component for out users
    return (
      <div className={phoneSec.section}>
        <DataIn change={this.props.users} />

        <p>Contacts</p>
        <FindContacts
          findFilter={this.props.userFilter}
          findData={this.props.data}
        />

        <ul className={phoneSec.list}>
          {this.props.data.contacts.map(result => {
            return (
              <DataOut
                key={result.id}
                userData={this.props.data}
                print={result}
                del={this.props.userDel}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
