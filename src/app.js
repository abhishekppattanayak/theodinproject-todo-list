import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Main from "./components/main";
import Dialog from "./components/dialog";
import getProjects from "./factory/get.project";

const body = document.querySelector('#root');
body.classList.add('min-w-fit', 'grid', 'grid-cols-12', 'grid-rows-12', 'bg-black','dark:bg-white', 'text-black', 'dark:text-white', 'font-sans');

export default function App(){
  body.appendChild( Sidebar( getProjects() ))
  body.appendChild( Header( getProjects()[0] ) )
  body.appendChild( Main( getProjects()[0] ) )
}