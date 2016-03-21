// Array to store item.
var inputBank = [];
//var totalItems = [];

// Textbox to input item.
var listerInputEl = document.getElementById('listerInput');
// Button to submit item.
var addEl = document.getElementById('add');
// Button to clear list.
var clearEl = document.getElementById('clear');
// List content
//var check = '<input type="checkbox"></input>\r\n'+ '<br>';
var listDisplayEl = document.getElementById('listDisplay');
//var storedListEl = document.querySelector('.storedList');

//Render function 
addEl.addEventListener('click', function render() {
	//Clears html inside of section/array.
	listDisplayEl.innerHTML = '';
	//var itemCountEl = document.getElementById('itemCount').innerHTML+=check;
	listDisplayEl.innerHTML= inputBank.join('<br> <br>');
});
clearEl.addEventListener('click', function() {
	inputBank.splice(0);
	listDisplayEl.innerHTML = '';
})

// Lister clicks button.
function submitInput() {
	//Logs item.
	console.log(listerInputEl.value);
	//Stores item into array.
	inputBank.push(listerInputEl.value);
	//Clears textbox for new item.
	clearInput();
};
//Clears textbox for new item.
function clearInput() {
	listerInputEl.value = '';
};

