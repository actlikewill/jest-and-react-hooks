import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContexts';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        return ( 
            <button onClick={this.context.toggleTheme}>Toggle Theme</button>
         );
    }
}
 
export default ThemeToggle;