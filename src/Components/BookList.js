import React, {useContext} from 'react';
import { ThemeContext } from '../Contexts/ThemeContexts';

const BookList = () => {     
            const { isLightTheme, light, dark } = useContext(ThemeContext);
            const theme = isLightTheme ? light : dark;
            return (<div style={{ background: theme.bg, color: theme.syntax }} className="book-list">
                <ul>
                    <li style={{ background:theme.ui }}>the way of Kings</li>
                    <li style={{ background:theme.ui }}>the name of the wind</li>
                    <li style={{ background:theme.ui }}>the final empire</li>
                </ul>
            </div>)
}
 
export default BookList;

