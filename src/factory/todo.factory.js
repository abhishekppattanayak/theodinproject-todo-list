export default function Todo(title, desc, date, priority) {
  let name = name;
  let desc = desc;
  let date = date;
  let priority = priority;

  function setTitle(newTitle){
    title = newTitle;
  }

  function setDesc(newDesc){
    desc = newDesc;
  }

  function setDate(newDate){
    date = newDate;
  }

  function setPriority(newPriority){
    priority = newPriority;
  }

  return {title, desc, date, priority, setDate, setDesc, setTitle, setPriority};
}