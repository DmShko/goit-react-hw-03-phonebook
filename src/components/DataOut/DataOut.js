import { Component } from 'react';

// add css modules
import o from '../DataOut/DataOut.module.css';

export class DataOut extends Component {
  // chage data in App 'state' (delete user)
  deleteUser = evt => {
    this.props.del(evt.target.name);
  };

  render() {
    // out data in App 'state' if user name or number contain filter
    return this.props.print.name
      .toLowerCase()
      .includes(this.props.userData.filter) ? (
      <li className={o.item}>
        <p>{this.props.print.name}</p>
        <button
          className={o.button}
          name={this.props.print.id}
          type="button"
          onClick={this.deleteUser}
        >
          Delete
        </button>
      </li>
    ) : (
      ''
    );
  }
}
