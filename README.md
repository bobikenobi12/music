# Music Player
## Class hierarchy
1. `Playable`:
  - base class
  - automatically generates `id`'s
  - has `title`
  - has `author`
  - has `play` method
  - has error handling
2. `Audio` :
    - extends `Playable` class
    - *inherits* `title` from Playable
    - has `length`
    - *inherits* `play` method from Playable
    - adds more *functionalities* to `play` method
3. `Video` :
    - extends `Playable` class
    - *inherits* `title` from Playable
    - *inherits* `author` from Playable
    - has `imdbRating`
    - *inherits* `play` method from Playable
    - adds more *functionalities* to `play` method
4. `Playlist` :
    - has `name`
    - has `id`
    - automatically generates `id`'s
    - has an array of `Playables`
 - ***Has the following methods*** :
    - `addPlayable`
    - `getPlayableById`
    - `removePlayableById`
    - `listPlayables`
5. `Player` :
    - has `name`
    - has ``
