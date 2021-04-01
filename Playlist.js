const {
  getNextId,
  checkMaxLength,
  checkMaxValue,
  checkMinValue,
  checkMinLength,
  checkType,
  checkInstance,
} = require('./utils');
const { Playable } = require('./Playable');
const { Audio } = require('./Audio');
const { Video } = require('./Video');

class Playlist {
  _name;
  _id;
  _playables = [];

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

  get playables() {
    return this._playables;
  }

  addPlayable(playable) {
    checkInstance(playable, Playable, 'Playable');
    this.playables.push(playable);
  }

  getPlayableById(id) {
    checkMinValue(id, 1, 'id');
    return this.playables.find((playable) => playable.id === id) || null;
  }

  removePlayableById(id) {
    checkType(id, 'number', 'id');
    checkMinValue(id, 1, 'id');

    for (let i = 0; i < this.playables.length; i++) {
      if (this.playables[i].id === id) {
        this.playables.splice(i, 1);
        return;
      }
    }
    throw new Error(
      'Playable with the provided id is not contained in the playlist!'
    );
  }

  listPlayables(page, size) {
    checkMinValue(page, 0, 'page');
    // if (size <= 0) {
    //   throw new Error('Size must be a number greater than 0!');
    // }
    checkMaxValue(0, size, 'size');
    let result = [];
    for (let i = page * size; i < page * size + size; i++) {
      if (!this.playables[i]) {
        break;
      }
      result.push(this.playables[i]);
    }
    return result;
  }
  constructor(name) {
    this.name = name;
    this.id = getNextId();
  }
}

module.exports.Playlist = Playlist;
