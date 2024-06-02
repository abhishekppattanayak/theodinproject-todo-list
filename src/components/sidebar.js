import Main from './main.js';
import Heading from './heading.js'
import deleteIcon from '../assets/delete.png';
import Project from '../factory/project.factory.js';
import generateKey from '../factory/key.factory.js'
import Header from './header.js';
import getProjects from '../factory/get.project.js'
const body = document.querySelector('body');

function ProjectList(projects, ...classes){
  const list = document.createElement('ul');
  classes.forEach(clas => {
    list.classList.add(clas);
  })

  
  projects.forEach(key => {
    const project = JSON.parse(localStorage.getItem(key))

    const li = document.createElement('li')
    li.classList.add('flex', 'py-1', 'px-2', 'rounded-md', 'text-black','dark:text-white', 'hover:bg-stone-400', 'dark:hover:bg-stone-700', 'items-center')
    
    const del = new Image();
    del.src = deleteIcon;
    del.classList.add('h-6', 'aspect-square')
    del.addEventListener('click', (e)=>{
      console.log('image is clicked')
      localStorage.removeItem(key)
      body.removeChild(document.querySelector('#sidebar'))
      body.appendChild(Sidebar(getProjects()));
      e.stopPropagation();
    })
    
    li.appendChild(Heading(project["title"], 'grow'))

    li.addEventListener('click', ()=>{
      body.removeChild(document.querySelector('main'));
      body.removeChild(document.querySelector('header'));
      body.appendChild(Header(key))
      body.appendChild(Main(key));
    })

    li.addEventListener('mouseover', ()=>{
      li.appendChild(del);
    })
    li.addEventListener('mouseleave', ()=>{
      li.removeChild(del);
    })

    list.appendChild(li)
  })

  const input = document.createElement('input');
  input.classList.add('bg-stone-300', 'py-1', 'px-2', 'rounded-md', 'focus:bg-stone-400', 'hover:bg-stone-400', 'dark:hover:bg-stone-900', 'dark:bg-stone-800', 'dark:focus:bg-stone-900', 'text-black', 'dark:text-white' )
  
  input.maxLength = 20;
  input.placeholder = "Add project";
  input.addEventListener('keydown', (e)=>{
    if(e.key === "Enter" && input.value !== ""){
      localStorage.setItem(generateKey("PRJ"), JSON.stringify(Project(input.value, [])));

      body.removeChild(document.querySelector('#sidebar'));
      body.appendChild(Sidebar(getProjects()));
    }
  })

  list.appendChild(input)

  return list;
}

export default function Sidebar(projects){
  const section = document.createElement('section');
  section.id = 'sidebar'
  section.classList.add('row-start-1', 'row-end-13', 'col-start-1', 'col-end-4', 'bg-stone-300', 'border-black', 'dark:bg-stone-800', 'dark:border-white', 'border', 'border-2',  'rounded-lg', 'p-8', 'flex', 'flex-col', 'gap-8')

  section.appendChild(Heading("Project List", 'font-bold', 'text-3xl'));
  section.appendChild(ProjectList(getProjects(), 'overflow-scroll', 'flex', 'flex-col',))

  return section;
}