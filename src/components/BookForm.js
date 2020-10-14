import React, {useState, useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import { v4 as uuid} from 'uuid';

const BookForm = () => {
    const { bookActionDispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        bookActionDispatch({type:'ADD_BOOK',book :{title, author, id:uuid()}});
        setTitle('');
        setAuthor('');
    }   
    return ( 
        <form onSubmit={handleSubmit}>
            <input placeholder="book title" required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="book author" required type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="Add book"/>
        </form>
     );
}
 
export default BookForm;