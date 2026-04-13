
const wapper = document.getElementById("container");

fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(data => {
    render (data)
  })
  .catch(error => console.error("xatolik yuz berdi", error));

function render(users) {
    const cards = users.map(el =>`
        
        `)
}