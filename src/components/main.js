import delete2 from '../assets/delete2.png'
import Project from '../factory/project.factory'

function TodoList(key) {
  const data = JSON.parse(localStorage.getItem(key))
  const todos = data["todos"]
  todos.sort((a,b)=>{return a["date"] > b["date"]})
  const ul = document.createElement('ul')
  ul.classList.add('flex', 'flex-col', 'overflow-scroll', 'py-6')

  for(let i=0; i<todos.length; ++i){
    const todo = todos[i];
    const li = document.createElement('li')
    li.classList.add('flex', 'items-start', 'gap-16', 'text-black', 'dark:text-white', 'rounded-lg', 'hover:bg-zinc-400', 'dark:hover:bg-zinc-900', 'py-2', 'px-4')
    
      const priority = document.createElement('div')
      const bgColor = `bg-${todo["priority"]}-400`
      priority.classList.add(bgColor, 'rounded-lg', 'aspect-square', 'w-8')
      li.appendChild(priority)

      const input = document.createElement('input')
      input.classList.add('peer', 'w-8', 'aspect-square')
      input.type = 'checkbox'
      li.appendChild(input)
  
      const details = document.createElement('details')
      details.classList.add('peer-checked:line-through', 'item-start', 'grow')
  
        const summary = document.createElement('summary')
        summary.classList.add('text-xl', )
        summary.innerText = todo["title"]
        details.appendChild(summary)
  
        const div = document.createElement('div')
          const p = document.createElement('p')
          p.classList.add('text-md', 'text-slate-800', 'dark:text-slate-300')
          p.innerText = todo["desc"]
          div.appendChild(p)
        details.appendChild(div)
  
      li.appendChild(details)
  
      const date = document.createElement('div')
      date.innerText = todo["date"]
      date.classList.add('text-xl')
      li.appendChild(date)
  
      const del = new Image();
      del.src = delete2;
      del.classList.add('w-8', 'aspect-square',)
  
      del.addEventListener('click', (e)=>{
        console.log(i)
        todos.splice(i, 1);

        localStorage.setItem(key, JSON.stringify(Project(data["title"], todos)));
        document.querySelector('main').removeChild(document.querySelector('main > ul'))
        document.querySelector('main').appendChild(TodoList(key))
        e.stopPropagation();
      })
  
      li.appendChild(del)

      ul.appendChild(li)
  }
  return ul
}

export default function Main(key){
  const main = document.createElement('main')
  main.classList.add('row-start-3', 'row-end-13', 'col-start-4', 'col-end-13', 'bg-zinc-300', 'border-black', 'dark:border-white', 'dark:bg-zinc-700', 'border', 'border-2',  'rounded-lg', 'px-4', 'py-3', 'flex', 'flex-col')


  if(key===undefined || key===null){
    main.innerText = "Add projects to get started."
    main.classList.add('italic', 'text-3xl', 'text-center', 'pt-16')
    return main
  }

  main.appendChild(TodoList(key))

  return main
}