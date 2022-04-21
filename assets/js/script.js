fetch('https://jsonplaceholder.typicode.com/posts'), {
  method: "POST",
  body: JSON.stringify()
}


.then((response) => response.json())
.then((data) => console;log(data));

