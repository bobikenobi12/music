const { Playable } = require('./Playable');
const {
  getNextId,
  checkMaxLength,
  checkMaxValue,
  checkMinValue,
  checkMinLength,
  checkType,
  checkInstance,
} = require('./utils');
class Audio extends Playable {
  _length;
  set length(val) {
    checkType(val, 'number', 'length');
    checkMaxValue(0, val, 'length');
    this._length = val;
  }
  get length() {
    return this._length;
  }

  play() {
    return `${super.play()} - [${this.length}]`;
  }

  constructor(title, author, length) {
    super(title, author);
    this.length = length;
  }
}

module.exports.Audio = Audio;
