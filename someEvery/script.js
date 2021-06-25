function hasOddNumber(array) {
  return array.some(function(value) {
    return value % 2 != 0;
  })
}

function hasAZero(number) {
  return number.toString().split('').some(function(value){
    return value === '0';
  })
}

function hasOnlyOddNumbers(array) {
  return array.every(function(value) {
    return value % 2 != 0;
  })
}

function hasNoDuplicates(array) {
  return array.every(function(val){
    return array.indexOf(val) === array.lastIndexOf(val);
  })
}

function hasCertainKey(array, key) {
  return array.every(function(value){
    return value[key] !== undefined;
  })
}

function hasCertainValue(array, key, value) {
  return array.every(function(object){
    return object[key] == value;
  })
}
