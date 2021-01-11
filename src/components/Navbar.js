import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/**
 * 1st variant of implementing this functionality - to use ThemeContext.Consumer
 * and attach it to this (Navbar) component
 * It has the following pros:
 * - it can be used in functional components (as opposed to "contextType" method
 *   which is being used in "BookList" component
 * - ThemeContext.Consumer can consume multiple contexts
 */
export default class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
      {
        (context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div>
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          )
        }
      }
      </ThemeContext.Consumer>
    );
  }
}

// 2nd variant of implementing the same functionality - to use
// contextType property
// export default class Navbar extends Component {
//   /**
//    * contextType will take value provided by ThemeContext.Provider
//    * and attach it to this (Navbar) component
//    */
//   static contextType = ThemeContext;
//   render() {
//
//     console.log(this.context);
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//
//     return (
//       <div>
//         <nav style={{ background: theme.ui, color: theme.syntax }}>
//           <h1>Context App</h1>
//           <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//           </ul>
//         </nav>
//       </div>
//     );
//   }
// }
