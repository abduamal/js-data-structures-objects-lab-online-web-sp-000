// Write your solution in this file!

const driver = {}


function updateDriverWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, {[key]: value})
  
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  
  obj[key] = value
  return obj

}

function deleteFromDriverByKey(obj, key) {

  const newDriver = Object.assign({}, key)
  delete newDriver[key]
  return newDriver
  
}

function destructivelyDeleteFromDriverByKey(obj, key){

  delete obj[key];
  return obj;
  
}