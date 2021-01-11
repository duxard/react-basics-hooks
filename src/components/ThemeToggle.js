import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  // get context from ThemeContext.Provider wrapper
  static contextType = ThemeContext;
  render() {
    // "toggleTheme" method is being provided from ThemeContext.Provider wrapper
    const { toggleTheme } = this.context;
    return ( <button onClick={toggleTheme}>Toggle the theme</button>);
  }
}

export default ThemeToggle;
