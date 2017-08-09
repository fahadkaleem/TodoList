/**
 * Created by kaleemmf on 8/9/17.
 */
// v2 requirements
var todos = ['item 1','item 2','item 3'];

//requirement 1
function displayTodos(){
    console.log("My todos: ",todos);
}

// requirement 2
function addTodo(newTodo){
    todos.push(newTodo);
    displayTodos();
}

// requirement 3
function changeTodo(position,newValue){
    todos[position] = newValue;
    displayTodos();
}