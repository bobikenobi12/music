const {
  getNextId,
  checkMaxLength,
  checkMaxValue,
  checkMinValue,
  checkMinLength,
  checkType,
  checkInstance,
} = require('./utils');
class Playable {
  _id;
  _title;
  _author;

  set title(val) {
    checkType(val, 'string', 'title');
    checkMinLength(val, 3, 'title');
    checkMaxLength(val, 25, 'title');
    this._title = val;
  }
  get title() {
    return this._title;
  }

  set author(val) {
    checkType(val, 'string', 'author');
    checkMinLength(val, 3, 'author');
    checkMaxLength(val, 25, 'author')
    this._author = val;
  }
  get author() {
    return this._author;
  }

  set id(val) {
    checkType(val, 'number', 'id');
    checkMinValue(val, 1, 'id');
    this._id = val;
  }
  get id() {
    return this._id;
  }

  constructor(title, author) {
    this.id = getNextId();
    this.title = title;
    this.author = author;
  }

  play() {
    return `[${this.id}]. [${this.title}] - [${this.author}]`;
  }
}

module.exports.Playable = Playable;
