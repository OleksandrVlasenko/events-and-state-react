import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.modules.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      console.log(e.keyCode);
      this.props.onClose();
    }
  };

  handlebackdropClick = e => {
    if (e.currentTarget === e.target) {
      console.log('aaa');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handlebackdropClick}>
        <div className="Modal__content">
          {this.props.children}
          <button type="button" onClick={this.props.onClose}>
            Close modal
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}
