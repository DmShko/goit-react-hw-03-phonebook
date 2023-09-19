import { Component } from 'react';

// add css modules
import fi from '../FindContacts/FindContacts.module.css';

export class FindContacts extends Component {
  findContact = evt => {
    // chage property 'filter' in App 'state' (add filter)
    this.props.findData.filter = evt.target.value.toLowerCase();
    this.props.findFilter(this.props.findData);
  };

  render() {
    return (
      <>
        <label className={fi.label}>
          Find contact by name
          <input
            className={fi.input}
            name="userFind"
            type="text"
            onChange={this.findContact}
          ></input>
        </label>
      </>
    );
  }
}
