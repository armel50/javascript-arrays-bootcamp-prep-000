var chocolateBars= ["snickers","hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,adding){
  var newArray=array.unshift(adding);
  array.shift();
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,adding){
  
  array.unshift(adding);
  return array;
}

function addElementToEndOfArray(array,adding){
  var newArray=array.push(adding);
  array.pop();
  return newArray;
}
function destructivelyAddElementToEndOfArray(array,adding){
  array.push(adding);
  return array;
}