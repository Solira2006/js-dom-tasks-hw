// BEGIN
export default function wrapBodyLines() {
  const lines = document.body.innerHTML.trim().split('\n');
  document.body.innerHTML = lines
    .filter(line => line.trim())
    .map(line => `<p>${line.trim()}</p>`)
    .join('\n  ');
}

wrapBodyLines();
// END