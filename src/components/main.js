export default function Main(project) {
  const main = document.createElement('main');
  main.classList.add('row-start-3', 'row-end-13', 'col-start-4', 'col-end-13');
  main.classList.add('bg-zinc-300', 'border-black', 'dark:border-white', 'dark:bg-zinc-700', 'border', 'border-2',  'rounded-lg', )

  if(project===undefined)
    return main;

  const heading = document.createElement('h1');
  heading.innerText = project["title"];
  heading.classList.add('text-black', 'dark:text-white', 'font-xl');
  main.appendChild(heading);

  return main;
}