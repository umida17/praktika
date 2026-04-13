


const wapper = document.getElementById("container");

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    render (data)
  })
  .catch(error => console.error("xatolik yuz berdi", error));

function render(users) {
    const cards = users.map(el =>`
        <div class = "card">
            <h2>${el.title}</h2>
            <p>${el.url}</p>
            <a href="#">${el.thumbnailUrl}</a>
</div>
        `).join("")
        wapper.innerHTML = cards;
}



