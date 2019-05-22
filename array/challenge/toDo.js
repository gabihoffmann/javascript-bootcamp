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

//1. Convert array to array of objects -> text , completed(boolean)
//2. Creat function to remove a todo by text value

const deleteToDo = function (toDoList, toDoText) {
    const index = toDoList.findIndex(function (todo) {
        return todo.text.toLowerCase() === toDoText.toLowerCase()
    })
    if (index > -1) {
        toDoList.splice(index, 1)
    } else {
        console.log('This note not exist')
    }
}

deleteToDo(todos, 'asdf 5')
console.log(todos)  