export default function getProjects(){
  let projects = [];
  for(let i=0; i<localStorage.length; ++i){
    projects.push(localStorage.key(i))
  }
  projects.sort();
  return projects;
}