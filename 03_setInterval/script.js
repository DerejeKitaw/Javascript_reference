/***************************************************************
*
*	The setInterval() method of the WindowOrWorkerGlobalScope mixin repeatedly calls a function or * *  * * executes a code snippet, with a fixed time delay between each call. 
* It returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval(). This method is offered on the Window and Worker interfaces.
*
****************************************************************/

var nIntervId;
function changeColor() {
  nIntervId = setInterval(flashText, 1000);
}

function flashText() {
  var oElem = document.getElementById('my_box');
  oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
  // oElem.style.color == 'red' ? 'blue' : 'red' is a ternary operator.
}

function stopTextColor() {
  clearInterval(nIntervId);
}
