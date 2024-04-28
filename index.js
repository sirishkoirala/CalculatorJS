
let displayData = document.getElementById('display');

function handleClick(ele) {
   // const getID = ele.id;
   const expression = displayData.value + ele.innerText;
   displayData.value = expression;
   console.log(expression);
   const futureData = expression;

   return handleResult(futureData);


}
function handleResult(ele) {
   const result = eval(ele);
   displayData.value = result;
}

function clearData() {
   const reset = 0;
   displayData.value = reset;
}