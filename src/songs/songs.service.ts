import { Injectable } from '@nestjs/common';
import { SongsModel } from './songs.model';

@Injectable()
export class SongsService {
  songs = []; // Array para almacenar canciones

  constructor() {
    let song = {
      "id": "1",
      "name": "Givenchy",
      "artist": "DUKI"
    };
    this.songs.push(song);
    
    song = {
      "id": "2",
      "name": "Cupido",
      "artist": "TINI"
    };
    this.songs.push(song);
    
    song = {
      "id": "3",
      "name": "Little things",
      "artist": "1D"
    };
    this.songs.push(song);
  }

  getAllSongs() {
    return this.songs;
  }

  getSongByName(name: string) {
    for (let i = 0; i < this.songs.length; i++) {
      const songByName = this.songs[i];
      if (songByName.name === name) {
        return songByName;
      }
    }
  }

  getSongByArtist(artist: string) {
    for (let i = 0; i < this.songs.length; i++) {
      const songByArtist = this.songs[i];
      if (songByArtist.artist === artist) {
        return songByArtist;
      }
    }
  }

  postSongs(song: SongsModel) {
    let newSong = {
      "id": song.id,
      "name": song.name,
      "artist": song.artist
    };
    this.songs.push(newSong);
    return newSong;
  }

  deleteSongById(id: number){
    for (let j = 0; j < this.songs.length; j++) {
        const songById = this.songs[j];
        if (songById.id === id) {
          return { message: 'La canción ha sido eliminada'}
          
        }
        
    }
  }

  deleteAllSongs() {
    this.songs = []; 
    return { message: 'All songs have been deleted successfully.' };
  }
}
    
   
