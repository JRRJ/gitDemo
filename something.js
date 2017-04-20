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
  var color = "awesome";

}

var ourFunctions = [camilaFunction, johnFunction, louisFunction, maliaFunction, mattFunction]

ourFunctions.forEach(function(fun){
  console.log(fun());
})