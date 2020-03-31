//my first funvti<button class="btn float-right">X</button>onality is to be able to add an item to these othe list items;
//1.capture what is in the input field
const AddTodo = document.querySelector("#AddTodo");
const input = document.querySelector("input")
//console.log(window);
//2. I am going to  create a function to do this;
AddTodo.addEventListener("click",(e)=>{
    
	const inputValue = input.value;
	//console.log(inputValue);
	//3.we need to convert it to a string
	let listText = document.createTextNode(inputValue);
	console.log(listText);
	//4.we create a list element
	const li = document.createElement("li");
	//console.log(li)
	//5.assign attributes to this element
	li.className="list-group-item";
	//add a btn to it
	const btn = document.createElement("button");
	btn.className="btn float-right";
	btn.innerHTML = "X";
	li.appendChild(btn);
	li.appendChild(listText);
	var ul = document.querySelector("#list-group");
	var firstChild = ul.firstElementChild;
	ul.insertBefore(li,firstChild);
})