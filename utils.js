let nextId = 0;
const getNextId = () => {
  nextId += 1;
  return nextId;
};
const checkMinLength = (value, minLength, fieldName) => {
  if (value.length < minLength) {
    throw new Error(`The ${fieldName} must be longer than ${minLength}!`);
  }
};
const checkMaxLength = (value, maxLength, fieldName) => {
  if (value.length > maxLength) {
    throw new Error(`The ${fieldName} must be shorter than ${maxLength}!`);
  }
};
const checkMinValue = (value, minValue, fieldName) => {
  if (value < minValue) {
    throw new Error(`The ${fieldName} must be greater than ${minValue}!`);
  }
};
const checkMaxValue = (value, maxValue, fieldName) => {
  if (value > maxValue) {
    throw new Error(`The ${fieldName} must not be greater than ${maxValue}!`);
  }
};
const checkType = (value, requiredType, fieldName) => {
  if (typeof value !== requiredType) {
    throw new Error(`The ${fieldName} must be of type ${requiredType}!`);
  }
};
const checkInstance = (value, classInstance, fieldName) => {
  if (!(value instanceof classInstance)) {
    throw new Error(`${fieldName} must be instance of ${classInstance}!`);
  }
};
// module.exports.getNextId = getNextId;
// module.exports.checkMaxLength = checkMaxLength;
// module.exports.getNextId = getNextId;
module.exports = {
  getNextId,
  checkMaxLength,
  checkMaxValue,
  checkMinLength,
  checkMinValue,
  checkType,
  checkInstance
};
