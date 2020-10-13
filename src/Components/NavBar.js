import React, { Component } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { ThemeContext } from '../Contexts/ThemeContexts'

class NavBar extends Component {
    static contextType = ThemeContext
    render() {         
        return ( 
            <AuthContext.Consumer>{(authContext) => {   
                return (
                    <ThemeContext.Consumer>{(themeContext) => {
                const { isAuthenticated, toggleAuth } = authContext;       
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                    <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul> 
                        <div style={{cursor:"pointer", onHover:{color: "green"}}}onClick={toggleAuth}>
                        { 
                        isAuthenticated ? <span>Is Authenticated!</span> : <span>Is Not Authenticated</span>
                        }
                        </div>
                        
                    </nav> 
                )}}
                </ThemeContext.Consumer>
                )}}
            </AuthContext.Consumer>
            
            
         );
    }
}
 
export default NavBar;