const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

let request = new XMLHttpRequest()

request.open('GET', 'https://narutodb.xyz/api/akatsuki')

request.onload = function () {
  let data = JSON.parse(this.response)["akatsuki"];
  data.forEach( (character) => {
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    
    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'name')
    h2.textContent = character['name'];

    let img = document.createElement('img')
    img.setAttribute('class', 'image')
    img.setAttribute('src', character['images'][0]
)
    container.appendChild(card)

    card.appendChild(h2)
    card.appendChild(img)
  });
}

request.send()
