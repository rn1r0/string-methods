
//1.
function capitalizeAndLowercase(str) {
    return str.toUpperCase() + str.toLowerCase();
  }

  console.log(capitalizeAndLowercase("HelLo")); 

//2.
function findMiddleIndex(str){
    return Math.floor(str.length / 2);
}

console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

//3.
function returnFirstHalf(str){
    var middleIndex = findMiddleIndex(str);
    return str.slice(0, middleIndex);
}

console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));