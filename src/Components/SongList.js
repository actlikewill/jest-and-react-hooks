import React, {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: uuid()},
        {title: 'memory gospel', id: uuid()},
        {title: 'this wild darkness', id: uuid()},
      ])
      const addSong = (title) => {
          setSongs([
              ...songs,
              {title, id: uuid()}])
      }

      useEffect(() => {
          console.log(uuid());
      })
    return(
        <div className="song-list">
            <ul>
                {songs.map(song => <li key={song.id}>{song.title}</li>)}            
            </ul> 
            <NewSongForm addSong={addSong}/>
        </div>
    )
}

export default SongList;