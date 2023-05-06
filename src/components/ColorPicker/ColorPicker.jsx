import React, { Component } from 'react';

export class ColorPicker extends Component {
  state = {
    activeStateInx: 0,
  };

  setActiveIndex = index => {
    this.setState({
      activeStateInx: index,
    });
  };

  render() {
    const { options } = this.props;
    const { activeStateInx } = this.state;
    const { label } = options[activeStateInx];
    
    return (
      <div>
        <h2>Color Picker</h2>
        <p>Вибраний колір : {label}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          {options.map(({ label, color }, index) => {
            return (
              <button
                type="button"
                key={label}
                style={{
                  backgroundColor: color,
                  width: '20px',
                  height: '20px',
                  display: 'block',
                  border:
                    index === activeStateInx
                      ? '2px solid black'
                      : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => this.setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
