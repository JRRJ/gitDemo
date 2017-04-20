var camilaFunction = function() {

}

var johnFunction = function() {
  return "Hello";
}

var louisFunction = function() {

}

var maliaFunction = function() {

}

var mattFunction = function() {
  // this is from Matt
}

var ourFunctions = [camilaFunction, johnFunction, louisFunction, maliaFunction, mattFunction]

ourFunctions.forEach(function(fun){
  console.log(fun());
})