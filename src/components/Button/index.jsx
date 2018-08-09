import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button>{this.props.value}</button>;
  }
}

Button.propTypes = {
  value: PropTypes.string
};

export default Button;
