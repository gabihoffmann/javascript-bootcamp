// const ps = document.querySelectorAll('p')
// ps.forEach( function (p) {
//   if (p.textContent.toLowerCase().includes('the')) p.remove()
// })

const todos = [
  {
    text: 'Get the Show tickets',
    completed: true
  },

  {
    text: 'Buy a new notebook',
    completed: false
  },

  {
    text: 'Pay the buills',
    completed: false
  },

  {
    text: 'JS Homework',
    completed: true
  },

  {
    text: 'Exercise',
    completed: false
  }
]

// filter object
const filter = {
  searchText: '',
  hideCompleted: false
}

// show in paragraph how much todos left
// add a paragraph for each todo above
const renderFilterTodos = function (todo , filter) {
  
  const filteredTodo = todo.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
    const hideCompletedMatch = !filter.hideCompleted || !todo.completed
   
    return searchTextMatch && hideCompletedMatch
  })
  console.log(filteredTodo)

  const todoLeft = filteredTodo.filter(function (todos) {
      return !todos.completed
  })

  document.querySelector('#todos').innerHTML = ''

  const sumaryLeft = document.createElement('h3')
  sumaryLeft.textContent = `You have ${todoLeft.length} todos left`
  document.querySelector('#todos').appendChild(sumaryLeft)

  filteredTodo.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = `${todo.text}`
    document.querySelector('#todos').appendChild(p)
  })
  
}

renderFilterTodos(todos,filter)


// todos.forEach(function (todo) {
//   const p = document.createElement('p')
//   p.textContent = `${todo.text}`
//   document.querySelector('#todos').appendChild(p)
  
// })

// Listening for a new todo create
// document.querySelector('button#new-todo').addEventListener('click', function (e) {
//   console.log('Add a new todo!')
  
// })



document.querySelector('#search-todos').addEventListener('input', function (e) {
  //console.log(e.target.value)
  filter.searchText = e.target.value
  renderFilterTodos(todos, filter)

})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(e.target.elements.newTodo.value)
  todos.push({
    text: e.target.elements.newTodo.value,
    completed: false
  }) 
  e.target.elements.newTodo.value = ''
  renderFilterTodos(todos,filter)
})


document.querySelector('#check-complet').addEventListener('change', function (e) {
  filter.hideCompleted = e.target.checked
  console.log(`checkbox: ${filter.hideCompleted}`)
  renderFilterTodos(todos, filter)
})
