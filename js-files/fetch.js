async function getData() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const d = await resp.json();

  return d;
}

export default getData;
