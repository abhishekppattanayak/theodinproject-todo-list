export default function Project(title, desc, todos){

  function setTitle(newTitle){
    title = newTitle;
  }

  function setDesc(newDesc){
    desc = newDesc;
  }

  function addTodo(todo){
    todos = [...todos, todo]
  }

  return {title, desc, todos, setTitle, setDesc, addTodo};
}