import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { ThemeContext } from '../Contexts/ThemeContexts'


const NavBar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);       
    const { isLightTheme, light, dark } = useContext(ThemeContext);
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
     );
}
 
export default NavBar;
 