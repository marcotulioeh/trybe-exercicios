import React from 'react';

class MyInput extends React.Component {
  render() {
    const { type, name, value, func, description } = this.props;
    return (
      <label htmlFor={ type }>
        { description }
        <input 
          type={ type }
          name={ name }
          value={ value }
          onChange={ func }
        />
      </label>
    );
  }
}

export default MyInput;