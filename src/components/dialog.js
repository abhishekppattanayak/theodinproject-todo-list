import Project from "../factory/project.factory"
import Todo from "../factory/todo.factory"
import Main from "./main"

function InputDiv(_input=undefined, type=undefined, id=undefined, text=undefined, placeholder=undefined, required=false){
  const div = document.createElement('div')
  div.classList.add('flex', 'gap-8', 'justify-center', 'items-center', 'my-2')

  const label = document.createElement('label')
  label.classList.add('text-black', 'dark:text-white', 'font-bold', 'py-4', 'text-center')

  const input = document.createElement(_input)
  input.classList.add('text-black', 'dark:text-white', 'grow', 'px-2', 'py-1', 'rounded-md', 'bg-zinc-300', 'dark:bg-zinc-800', 'h-min', 'hover:bg-zinc-400', 'focus:bg-zinc-400', 'dark:hover:bg-zinc-900', 'dark:focus:bg-zinc-900',)
  
  label.htmlFor = id
  input.id = id

  label.innerText = text
  input.placeholder = placeholder

  if(_input!=='textarea'){
    input.type = type
  }

  input.name = name
  input.required = required

  div.appendChild(label)
  div.appendChild(input)

  return div
}

function PriorityInput(){
  const div = document.createElement('div')
  div.classList.add('flex', 'gap-2', 'font-bold', 'text-black', 'dark:text-white', 'items-center', 'grow')
  const span = document.createElement('label')
  span.innerText = 'Priority'
  div.appendChild(span)

  const field = document.createElement('fieldset')
  field.classList.add('flex', 'gap-4', 'grow', 'justify-evenly')
  const text = ['High', 'Medium', 'Low']
  const colors = ['red', 'amber', 'green']
  
  for(let i=0; i<3; ++i){

    const div = document.createElement('div')
    div.classList.add('inline', 'flex', 'gap-2')

    const input = document.createElement('input')
    const label = document.createElement('label')

    input.type = 'radio'
    input.required = true
    input.name = 'priority'
    input.id = colors[i]
    input.classList.add('peer', 'sr-only')
    
    label.htmlFor = input.id
    const a = `peer-checked:bg-${colors[i]}-400`
    const b = `hover:bg-${colors[i]}-400`
    label.classList.add(a, b, 'rounded-lg', 'px-4', 'py-2')
    label.innerText = text[i]

    div.appendChild(input)
    div.appendChild(label)
    field.appendChild(div)
  }

  div.appendChild(field)
  return div 
}

function Buttons(key){
  const div = document.createElement('div')
  div.classList.add('self-center', 'flex', 'gap-4', )

  const btn = document.createElement('button')
  btn.type = 'submit'
  btn.innerText = 'Add task'
  btn.classList.add('px-4', 'py-2', 'border', 'border-2', 'border-black', 'dark:border-white', 'bg-black','dark:bg-white', 'text-white', 'dark:text-black', 'font-bold', 'rounded-lg', 'md:w-24', 'lg:w-44')
  div.appendChild(btn)

  const close = document.createElement('button')
  close.innerText = 'Close'
  close.classList.add('px-4', 'py-2', 'border', 'border-2', 'border-black', 'dark:border-white', 'dark:bg-black','bg-white', 'dark:text-white', 'text-black', 'font-bold', 'rounded-lg', 'md:w-24', 'lg:w-44')
  close.addEventListener('click', ()=>{ 
    document.querySelector('dialog').close() 
    document.querySelector('body').removeChild(document.querySelector('dialog'))
  })
  div.appendChild(close)
  return div
}

function Form(key) {
  const form = document.createElement('form')
  form.classList.add('w-full', 'h-full','bg-zinc-300', 'dark:bg-zinc-800', 'rounded-lg', 'xl:px-28', 'lg:px-24', 'md:px-20', 'sm:px-16', 'px-4','py-8', 'flex', 'flex-col', 'gap-2', 'text-xl', 'overflow-scroll')

  form.appendChild(InputDiv('input', 'text', 'todoTitle', 'Title', 'A meaningful title!', true))
  form.appendChild(InputDiv('textarea', undefined, 'todoDesc', 'Description', 'Add a little description if needed ^^'))
  form.appendChild(InputDiv('input', 'date', 'todoDate', 'Date', "", true))
  form.appendChild(PriorityInput())
  form.appendChild(Buttons(key))

  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(form.checkValidity()){
      const title = document.querySelector('#todoTitle').value
      const desc = document.querySelector('#todoDesc').value
      const date = document.querySelector('#todoDate').value
      const priority = document.querySelector('input[name="priority"]:checked').id

      try{
        const data = JSON.parse(localStorage.getItem(key))
        let todos = data["todos"]
        todos = [...todos, Todo(title, desc, date, priority)]
        localStorage.setItem(key, JSON.stringify(Project(data["title"], todos)))
  
        document.querySelector('dialog').close();
        document.querySelector('body').removeChild(document.querySelector('dialog'))
        document.querySelector('body').removeChild(document.querySelector('main'))
        document.querySelector('body').appendChild(Main(key))
      }
      catch{
        alert('This project has been deleted.')
        location.reload();
      }

    }
  })

  return form
}

export default function Dialog(key) {
  const dialog = document.createElement('dialog')
  dialog.classList.add('h-2/3', 'w-2/3', 'rounded-lg', 'border', 'border-black', 'dark:border-white', 'border-2', 'backdrop:bg-neutral-400','dark:backdrop:bg-neutral-900')
  dialog.appendChild(Form(key))
  return dialog
}