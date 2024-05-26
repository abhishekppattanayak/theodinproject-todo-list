export default function Header() {
  const header = document.createElement('header');
  header.classList.add('row-start-1', 'row-end-3', 'col-start-4', 'col-end-13')
  header.classList.add('bg-neutral-300', 'border-black', 'dark:bg-neutral-800', 'dark:border-white', 'border', 'border-2',  'rounded-lg', )

  return header;
}