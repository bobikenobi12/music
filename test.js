const { Playlist, Audio, Video, Player } = require('./Player');

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
