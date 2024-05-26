import Main from './main.js';
import deleteIcon from '../assets/delete.png';
const body = document.querySelector('body');

function getProjects(){
  let projects = [];
  for(let i=0; i<localStorage.length; ++i){
    projects.push(localStorage.key(i))
  }
  return projects;
}

// console.log(getProjects())


function Heading(text, ...classes) {
  const heading = document.createElement('h1')
  heading.innerText = text;
  // heading.classList.add('font-bold', 'text-3xl')
  classes.forEach(clas => {
    heading.classList.add(clas);
  })
  return heading;
}

function ProjectList(projects, ...classes){
  const list = document.createElement('ul');
  classes.forEach(clas => {
    list.classList.add(clas);
  })

  
  projects.forEach(key => {
    let project = JSON.parse(localStorage.getItem(key))
    const li = document.createElement('li')
    li.classList.add('flex', 'py-1', 'px-2', 'rounded-md', 'text-black','dark:text-white', 'hover:bg-stone-400', 'dark:hover:bg-stone-700', 'items-center')
    
    const del = new Image();
    del.src = deleteIcon;
    del.classList.add('h-6', 'aspect-square')
    del.addEventListener('click', (e)=>{
      console.log('image is clicked')
      localStorage.removeItem(key)
      body.removeChild(document.querySelector('section'));
      body.appendChild(Sidebar(getProjects()));
      e.stopPropagation();
    })
    
    li.appendChild(Heading(project["title"], 'grow'))
    li.appendChild(del)

    li.addEventListener('click', ()=>{
      body.removeChild(document.querySelector('main'));
      console.log('li was clicked')
      body.appendChild(Main(project));
    })

    list.appendChild(li)
  })

  const input = document.createElement('input');
  input.classList.add('bg-stone-300', 'py-1', 'px-2', 'rounded-md', 'focus:bg-stone-400', 'hover:bg-stone-400', 'dark:hover:bg-stone-900', 'dark:bg-stone-800', 'dark:focus:bg-stone-900', 'text-black', 'dark:text-white' )

  input.placeholder = "Add project";
  input.addEventListener('keydown', (e)=>{
    if(e.key === "Enter" && input.value !== ""){
      localStorage.setItem(input.value, JSON.stringify({"title": input.value, "desc": undefined}))
      body.removeChild(document.querySelector('section'));
      body.appendChild(Sidebar(getProjects()));
    }
  })

  list.appendChild(input)

  return list;
}

export default function Sidebar(projects){
  // projects   : arrray of string 

  const section = document.createElement('section'); //sidebar div
  section.classList.add('row-start-1', 'row-end-13', 'col-start-1', 'col-end-4');
  section.classList.add('bg-stone-300', 'border-black', 'dark:bg-stone-800', 'dark:border-white', 'border', 'border-2',  'rounded-lg', 'p-8', 'flex', 'flex-col', 'gap-8', )

  section.appendChild(Heading("Project List", 'font-bold', 'text-3xl'));
  section.appendChild(ProjectList(getProjects(), 'overflow-scroll', 'flex', 'flex-col',))

  return section;
}