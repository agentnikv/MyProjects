var todo = ["Buy new house"];

var input = prompt("What would you like to do?")
while(input !== "quit"){
	if (input === "list") {
		console.log(todo);
	} else if(input === "new") {
		var newTodo = prompt("Enter new todo");
		todo.push(newTodo);
	}
	input = prompt("What would you like to do?");
}
console.log("Quited Application");