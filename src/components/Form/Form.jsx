import React, { Component } from 'react';
import shortid from 'shortid';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
    experiens: 'junior',
  };

  nameId = shortid.generate();
  tagId = shortid.generate();
  radioId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
      this.setState({ name: '', tag: '', experiens: 'junior' });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameId}
          />
        </label>
        <label htmlFor={this.tagId}>
          Tag
          <input
            name="tag"
            type="text"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagId}
          />
        </label>

        <label htmlFor={this.radioId}>
          <input
            type="radio"
            name="experiens"
            id={this.radioId}
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experiens === 'junior'}
          />
          junior
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experiens"
            id={this.radioId}
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experiens === 'middle'}
          />
          middle
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experiens"
            id={this.radioId}
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experiens === 'senior'}
          />
          senior
        </label>

        <button type="submit" onSubmit={this.handleSubmit}>
          Send
        </button>
      </form>
    );
  }
}
