

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyOutput (firstValue,secondValue) {
  var output = parseInt(firstValue) * parseInt(secondValue);
  document.getElementById("answer").innerHTML = output
  return output;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
//  */
// document.getElementById("multiply").addEventListener("click", multiplyOutput)
function addOutput (firstValue,secondValue) {
  var output = parseInt(firstValue) + parseInt(secondValue);
  document.getElementById("answer").innerHTML = output
  return output;
}
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subOutput (firstValue,secondValue) {
  var output = parseInt(firstValue) - parseInt(secondValue);
  document.getElementById("answer").innerHTML = output
  return output;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideOutput (firstValue,secondValue) {
  var output = parseInt(firstValue) / parseInt(secondValue);
  document.getElementById("answer").innerHTML = output
  return output;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function getNum (firstValue,secondValue,getOperation) {

    switch (getOperation) {
      case ("ADD"):
        addOutput (firstValue,secondValue);
      break;
      case ("SUBTRACT"):
        subOutput (firstValue,secondValue);
      break;
      case ("MULTIPLY"):
        multiplyOutput (firstValue,secondValue);
      break;
      case ("DIVIDE"):
        divideOutput (firstValue,secondValue);
      break;
    }
    return getOperation;

}
//eventlistener for add button
function evtLit () {
document.getElementById("add").addEventListener("click", function (e){
  e.preventDefault();
  if (document.getElementById("firstValue").value !== "") {
      firstValue = document.getElementById("firstValue").value
      } else {
          alert("enter the first value")}
   if(document.getElementById("secondValue").value !== ""){
          secondValue = document.getElementById("secondValue").value
        }else  {
         alert("enter the second value")
      }
  getOperation = e.target.innerHTML;
  getNum(firstValue,secondValue,getOperation)

})
document.getElementById("sub").addEventListener("click", function(e){
  e.preventDefault();
  if (document.getElementById("firstValue").value !== "") {
      firstValue = document.getElementById("firstValue").value
      } else {
          alert("enter the first value")}
   if(document.getElementById("secondValue").value !== ""){
          secondValue = document.getElementById("secondValue").value
        }else  {
         alert("enter the second value")
      }
  getOperation = e.target.innerHTML;
  getNum(firstValue,secondValue,getOperation)
})
document.getElementById("multiply").addEventListener("click", function(e){
  e.preventDefault();
  if (document.getElementById("firstValue").value !== "") {
      firstValue = document.getElementById("firstValue").value
      } else {
          alert("enter the first value")}
   if(document.getElementById("secondValue").value !== ""){
          secondValue = document.getElementById("secondValue").value
        }else  {
         alert("enter the second value")
      }
  getOperation = e.target.innerHTML;
  getNum(firstValue,secondValue,getOperation)
})
document.getElementById("divide").addEventListener("click", function(e){
  e.preventDefault();
  if (document.getElementById("firstValue").value !== "") {
      firstValue = document.getElementById("firstValue").value
      } else {
          alert("enter the first value")}
   if(document.getElementById("secondValue").value !== ""){
          secondValue = document.getElementById("secondValue").value
        }else  {
         alert("enter the second value")
      }
  getOperation = e.target.innerHTML;
  getNum(firstValue,secondValue,getOperation)
})

}
evtLit()
