import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class BookList extends Component {
  /**
   * contextType will take value provided by ThemeContext.Provider
   * and attach it to this (Navbar) component
   */
  static contextType = ThemeContext;
  render() {

    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>book 1</li>
          <li style={{ background: theme.ui }}>book 2</li>
          <li style={{ background: theme.ui }}>book 3</li>
        </ul>
      </div>
    );
  }
}
