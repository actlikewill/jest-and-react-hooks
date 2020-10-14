import React, {createContext, useReducer, useEffect} from 'react';
import {bookReducer} from '../reducers/bookReducer'
import { v4 as uuid} from 'uuid';

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
    const [books, bookActionDispatch] = useReducer(bookReducer ,[], () => {
        const localData = localStorage.getItem("bookList");
        return localData ? JSON.parse(localData) : []
    });    
    useEffect(() => {
        localStorage.setItem('bookList', JSON.stringify(books))
    }, [books])
    return ( 
        <BookContext.Provider value={{ books, bookActionDispatch}}>
            { children }
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;