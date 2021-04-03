const { Playlist } = require('./Playlist');
const { Playable } = require('./Playable');
const { Audio } = require('./Audio');
const { Video } = require('./Video');
const {
  getNextId,
  checkMaxLength,
  checkMinValue,
  checkMinLength,
  checkType,
  checkInstance,
} = require('./utils');

class Player {
  _name;
  _id;
  _playlists = [];

  set name(val) {
    checkType(val, 'string', 'name');
    checkMinLength(val, 3, 'name');
    checkMaxLength(val, 25, 'name');
    this._name = val;
  }

  get name() {
    return this._name;
  }
  set id(val) {
    checkType(val, 'number', 'id');
    checkMinValue(val, 1, 'id');
    this._id = val;
  }

  get id() {
    return this._id;
  }

  get playlists() {
    return this._playlists;
  }

  addPlaylist(playlistToAdd) {
    checkInstance(playlistToAdd, Playlist, 'Playlist');
    this.playlists.push(playlistToAdd);
  }

  getPlaylistById(id) {
    checkType(id, 'number', 'id');
    checkMinValue(id, 1, 'id');
    return this.playlists.find((playlist) => playlist.id === id) || null;
  }

  removePlaylist(id) {
    checkType(id, 'number', 'id');
    checkMinValue(id, 1, 'id');

    for (let i = 0; i < this.playlists.length; i++) {
      if (this.playlists[i].id === id) {
        this.playlists.splice(i, 1);
        return;
      }
    }
    throw new Error(
      'Playlist with the provided id is not contained in the Player!'
    );
  }

  contains(playable, playlist) {
    checkInstance(playable, Playable, 'Playable');
    checkInstance(playlist, Playlist, 'Playlist');
    for (let i = 0; i < this.playlists.length; i++) {
      if (
        this.playlists[i] === playlist &&
        this.playlists[i].playables.includes(playable)
      ) {
        return true;
      }
    }
    return false;
  }

  search(pattern) {
    checkType(pattern, 'string', 'pattern');
    checkMinLength(pattern, 1, 'pattern');
    let result = [];

    for (let i = 0; i < this.playlists.length; i++) {
      const currPlaylist = this.playlists[i];
      for (let j = 0; j < currPlaylist.playables.length; j++) {
        if (currPlaylist.playables[j].title.toLowerCase().includes(pattern)) {
          result.push({
            id: currPlaylist.id,
            name: currPlaylist.name,
          });
          break;
        }
      }
    }
    return result;
  }

  listPlaylists(page, size) {
    checkMinValue(page, 0, 'page')
    checkMaxValue(0, size, 'size')
    let result = [];
    for (let i = page * size; i < page * size + size; i++) {
      if (!this.playlists[i]) {
        break;
      }
      result.push(this.playlists[i]);
    }
    return result;
  }

  constructor(name) {
    this.name = name;
    this.id = getNextId();
  }
}

const player = new Player('Bulgarska Muzika');
for (let i = 0; i < 10; i++) {
  const playlist = new Playlist(`Petur ${i}`);

  for (let j = 0; j < 5; j++) {
    const playable = new Audio(`Zdravei ${i * j}`, 'Az232', i + j + 1);
    playlist.addPlayable(playable);
  }
  player.addPlaylist(playlist);
}

const video = new Video('Test Video', 'Test author', 3);
const playlist123 = new Playlist('Test playlist');
const playlist1234 = new Playlist('Test playlist 1');
const audio = new Audio(` Test Audio`, 'Test author', 4);
playlist123.addPlayable(video);
playlist1234.addPlayable(audio);
player.addPlaylist(playlist123);
player.addPlaylist(playlist1234);
// console.log(player.playlists);
// console.log(player.getPlaylistById(2));
// console.log(player.removePlaylist(2));
// console.log(player.getPlaylistById(2));
// console.log(player.contains(audio, playlist1234));
// console.log(player.search('1'));
console.log(player.listPlaylists(1,4))
