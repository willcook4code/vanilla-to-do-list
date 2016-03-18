// Textbox to input item.
var listerInputEl = document.getElementById('listerInput');
// Button to submit item.
var addEl = document.getElementById('add');
// Button to clear list.
var clearEl = document.getElementById('clear');
// List content
var listDisplayEl = document.getElementById('listDisplay');
// List item number.
var itemCountEl = document.getElementById('itemCount');
// Array to store item.
var inputBank = [];
var totalItems =[];

// Lister clicks button.
function submitInput() {
	var counter = 0;
	//Logs item.
	console.log(listerInputEl.value);
	//Stores item into array.
	inputBank.push(listerInputEl.value);
	counter = (inputBank.length);
	totalItems.push('Item ' + counter.toString() + ': ');
	console.log(counter);
	console.log(totalItems);
	//Clears textbox for new item.
	clearInput();
	console.log(inputBank);
};
//Clears textbox for new item.
function clearInput() {
	listerInputEl.value = '';
};
//Render function 
function render() {
	//Clears html inside of section/array.
	if ((listDisplayEl.innerHTML !== '') && (itemCountEl.innerHTML!=='')) {
		listDisplayEl.innerHTML = '';
		itemCountEl.innerHTML = '';
	}
	// Display list after clear.
	itemCountEl.innerHTML = totalItems.join('<br />');
	listDisplayEl.innerHTML = inputBank.join('<br />');
	inputBank.splice(0);
	totalItems.splice(0);
}

clearEl.addEventListener('click', render);