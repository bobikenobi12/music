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
class Video extends Playable {
  _imdbRating;
  set imdbRating(val) {
    checkType(val, 'number', 'imdbRating');
    checkMinLength(val, 1, 'imdbRating');
    checkMaxLength(val, 5, 'imdbRating');
    this._imdbRating = val;
  }
  get imdbRating() {
    return this._imdbRating;
  }
  play() {
    return `${super.play()} - [${this.imdbRating}]`;
  }
  constructor(title, author, imdbRating) {
    super(title, author);
    this.imdbRating = imdbRating;
  }
}


module.exports.Video = Video;