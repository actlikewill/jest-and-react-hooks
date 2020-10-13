import React, {useState} from 'react';

const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Song Name:</label>
            <input required type="text" value={title} name="song" onChange={(e) => setTitle(e.target.value)} id="song"/>
            <input type="submit"/>
        </form>
     );
}
 
export default NewSongForm;