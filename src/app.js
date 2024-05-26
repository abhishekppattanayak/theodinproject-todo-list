import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Main from "./components/main";

const body = document.querySelector('#root');
body.classList.add('min-w-fit', 'grid', 'grid-cols-12', 'grid-rows-12', 'bg-black','dark:bg-white', 'text-black', 'dark:text-white', 'font-sans');

let projects = []
for(let i=0; i<localStorage.length; ++i){
  projects.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
}

export default function App(){
  body.appendChild( Sidebar( projects ) )
  body.appendChild( Header() )
  body.appendChild( Main(projects[0]) )
}