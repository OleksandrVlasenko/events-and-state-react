import React, { Component } from 'react';

export class DropDown extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState(currentState => ({ visible: !currentState.visible }));
    console.log(this.state.visible);
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.show}>
          {this.state.visible ? 'Сховати' : 'Показати'}
        </button>

        {this.state.visible && <div>Випадаюче меню</div>}
      </div>
    );
  }
}
