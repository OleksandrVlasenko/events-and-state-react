import React, { Component } from 'react';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({
      message: e.currentTarget.value,
    });
  };

  handleSudmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSudmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    );
  }
}
