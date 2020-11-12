//Make Clear buttons
var backspace = document.getElementById("backspace");
var clearAll = document.getElementById("clearAll");
backspace.addEventListener("click", backItUp);
clearAll.addEventListener("click", clearItAll);

//Add Listener to buttons
document.querySelectorAll(".gridContainer>button").forEach(item => {
	item.addEventListener("click", displayText);
});
var alpha = '';
function displayText(event) {
	alpha += (event.target.innerHTML);
	document.getElementById("inputBar").value = alpha;
}
function backItUp() {
	alpha = alpha.substring(0, alpha.length - 1);
	document.getElementById("inputBar").value = alpha;

}

clearAll.addEventListener("click", clearItAll);
function clearItAll(){
	alpha = '';
	document.getElementById("inputBar").value = '';
}

//Make Equal Button Work
document.getElementById("equal").addEventListener("click", equalFunction);
function equalFunction() {
	var userInput = document.getElementById("inputBar").value;
	var result = eval(userInput);
	
	return document.getElementById("inputBar").value = result;
}