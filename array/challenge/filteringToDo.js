const todos = [
    {
        text: 'ToDo 1',
        completed: true
    },

    {
        text: 'ToDo 2',
        completed: false
    },

    {
        text: 'ToDo 3',
        completed: false
    },

    {
        text: 'ToDo 4',
        completed: true
    },

    {
        text: 'ToDo 5',
        completed: false
    }
]


const getThingsToDo = function(todos){
    return todos.filter(function (todo) {
        // return todo.completed === false
        return !todo.completed
    })
}

console.log(getThingsToDo(todos));

// sorting the to do's not completed
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const sortTodos = function(todos){
    todos.sort(function (a) {
        if (a.completed){
            return 1
        }else {
            return -1
        }

    })
}

sortTodos(todos)
console.log(todos)
