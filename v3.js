/**
 * Created by kaleemmf on 8/9/17.
 */

//requirement 1
var todos = {
    todos: ['item 1','item 2','item 3'],
    // requirement 2
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    //requirement 3
    addTodos: function (newTodo) {
        this.todos.push(newTodo);
        this.displayTodos();
    }
};