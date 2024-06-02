import Heading from "./heading";
import edit from '../assets/edit.png'
import Sidebar from "./sidebar";
import getProjects from "../factory/get.project";
import Dialog from "./dialog";
const body = document.querySelector('body')

export default function Header(key) {
  const header = document.createElement('header');
  header.classList.add('row-start-1', 'row-end-3', 'col-start-4', 'col-end-13', 'bg-neutral-300', 'border-black', 'dark:bg-neutral-800', 'dark:border-white', 'border', 'border-2',  'rounded-lg')
  header.classList.add('py-2', 'px-8', 'flex', 'items-center')

  if(key===undefined || key===null){
    return header
  }

  let project = JSON.parse(localStorage.getItem(key))

  const img = new Image()
  img.src = edit
  img.classList.add('px-4', 'h-12')
  img.addEventListener('click', ()=>{
    const t = prompt("Enter new project title")
    if(t){
      try {
        const data = JSON.parse(localStorage.getItem(key))
        data['title'] = t
        localStorage.setItem(key, JSON.stringify(data))
        body.removeChild(document.querySelector('header'))
        body.removeChild(document.querySelector('section'))
        body.appendChild(Sidebar(getProjects()))
        body.appendChild(Header(key))
      } catch (error) {
        location.reload();
      }
    }
  })
  header.appendChild(img)
  
  header.appendChild(Heading(project['title'], 'text-5xl', 'font-bold', 'grow'))

  const btn = document.createElement('button')
  btn.innerText = "Add task"
  btn.classList.add( 'text-3xl')
  btn.addEventListener('click', ()=> {
    body.appendChild(Dialog(key))
    const dialog = document.querySelector('dialog')
    if(dialog)
      dialog.showModal();
  })
  header.appendChild(btn)

  return header;
}