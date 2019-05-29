// const ps = document.querySelectorAll('p')
// ps.forEach( function (p) {
//   if (p.textContent.toLowerCase().includes('the')) p.remove()
// })

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

// show in paragraph how much todos left
// add a paragraph for each todo above

//
const todoLeft = todos.filter(function (todos) {
  return !todos.completed
})

const sumaryLeft = document.createElement('p')
sumaryLeft.textContent = `You have ${todoLeft.length} todos left`
document.querySelector('body').appendChild(sumaryLeft)


todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = `${todo.text}`
  document.querySelector('body').appendChild(p)
  
})

// Listening for a new todo create
document.querySelector('button#new-todo').addEventListener('click', function (e) {
  console.log('Add a new todo!')
  
})