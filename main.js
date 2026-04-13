
const wapper = document.getElementById("container");

fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(data => {
    render (data)
  })
  .catch(error => console.error("xatolik yuz berdi", error));

function render(users) {
    const cards = users.map(el =>`
        <div class = "card">
            <h2>${el.name}</h2>
            <p>${el.username}</p>
            <a href="#">${el.email}</a>
</div>
        `).join("")
        wapper.innerHTML = cards;
}