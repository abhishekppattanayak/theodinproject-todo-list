export default function Heading(text, ...classes) {
  const heading = document.createElement('div')
  heading.innerText = text;
  classes.forEach(c=>heading.classList.add(c))
  return heading;
}