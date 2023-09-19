import { Component } from 'react';

// add css modules
import di from './DataIn.module.css';

export class DataIn extends Component {
  state = {
    name: '',
    number: '',
    inputNameValid: true,
    inputNumberValid: true,
  };

  
  // transfer THIS 'state' to method in App 'state', so that change his properties (App 'state')
  addUser = evt => {
    // transfer data only, if valid fields is valid
    if (
      this.state.inputNameValid === false &&
      this.state.inputNumberValid === false
    ) {
      evt.preventDefault();
      // to method in App
      this.props.change(this.state);
    } else {
      evt.preventDefault();
    }
  };

  checkValid = data => {
    // VARIAN 1 CHAGE 'VALID' PROPERTIES OF state ON BASE PREVIOUS VALUE
    if (data.validity.patternMismatch === false) {
      data.name === 'name'
        ? this.setState(state => ({
            inputNameValid:
              state.inputNameValid && data.validity.patternMismatch,
          }))
        : this.setState(state => ({
            inputNumberValid:
              state.inputNumberValid && data.validity.patternMismatch,
          }));
    } else {
      data.name === 'name'
        ? this.setState(state => ({
            inputNameValid:
              state.inputNameValid || data.validity.patternMismatch,
          }))
        : this.setState(state => ({
            inputNumberValid:
              state.inputNumberValid || data.validity.patternMismatch,
          }));
    }

  };

  stateChange = data => {
    const { name, value } = data;

    // change 'state' without use previous value
    this.setState({ [name]: value });
  };

  inputChange = evt => {
    // change valid properties of 'state', so that output users only, if bouth input fields contain valid value
    this.checkValid(evt.target);
    // change 'name' and 'number' fields in 'data'
    this.stateChange(evt.target);
  };

  render() {
    return (
      <>
        <form onSubmit={this.addUser} className={di.form}>
          <label className={di.lable}>
            <p className={di.text}>Name</p>
            <input
              className={di.input}
              value={this.state.name}
              name="name"
              type="text"
              onChange={this.inputChange}
              pattern="\w{0}[a-zA-Zа-яА-Я]+\s\w{0}[a-zA-Zа-яА-Я]+"
              title="Please, use only letters and space in the following form: * *!"
              placeholder="Only letters # #"
              required
            ></input>
          </label>

          <label className={di.lable}>
            <p className={di.text}>Number</p>
            <input
              className={di.input}
              value={this.state.number}
              name="number"
              type="tel"
              onChange={this.inputChange}
              pattern="\d{3}[0-9]-\d{1}[0-9]-\d{1}[0-9]"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +
              in the following form: ####-##-##!"
              placeholder="Only digits ####-##-##"
              required
            ></input>
          </label>

          <button className={di.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
