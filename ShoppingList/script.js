var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");

function DeleteListElement(event){
	// remove Event Listener for the element
	event.target.removeEventListener("click", DeleteListElement, false);

	event.target.parentNode.remove();
}

// add event listener to items already exist.
for(var i=0; i<deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", DeleteListElement, false)
}

// toggle class status "toDo" or "done"
function ChangeDoneStatus(toDoId){

	var toDo = document.getElementById(toDoId);
	var liElement = toDo.parentNode;

	if(liElement.className === "toDo" ){
		liElement.className = "done";
	} else {
		liElement.className = "toDo";
	}
}


// "toDo" "done" class change for element made by JavaScript.
function ChangeDoneStatusForCreatedItems(event){

	var toDoId = event.target.id;
	ChangeDoneStatus(toDoId);
}

function inputLength() {
	return input.value.length;
}

// Create New Todo Element
function createListElement() {

	var span = document.createElement("span");

	span.appendChild(document.createTextNode(input.value));
	span.id = input.value;
	span.value = span.id;
	span.onclick = ChangeDoneStatusForCreatedItems;

	var li = document.createElement("li");

	li.className = "toDo";
	ul.appendChild( li );
	li.appendChild( span );

	var delBtn = document.createElement( "button" );
	delBtn.appendChild(document.createTextNode("Delete"));
	delBtn.className = "delete";
	delBtn.onclick = DeleteListElement;
	li.insertBefore( delBtn, span );

	ul.appendChild( li );

	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick, false);

input.addEventListener("keypress", addListAfterKeypress, false);