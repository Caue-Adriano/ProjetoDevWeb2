//url
//let url = "https://picsum.photos/425/500" //endpoint 1

//botões
const nextImg = document.getElementById("next-img")
//console.log(nextImg)
const saveImg = document.getElementById("save-img")

//elementos html
const imgContainer = document.getElementById("img-container")
const image = document.getElementById("image")
const savedImg = document.getElementById("saved-imgs-body")


let width = imgContainer.offsetWidth
console.log(width)
let height = imgContainer.offsetHeight
console.log(height)

//Funçoes
nextImg.addEventListener('click', function(event) {
  let url = `https://picsum.photos/${width}/${height}?random=` + new Date().getTime()
  image.src = url;
  console.log(image.src)
})

saveImg.addEventListener('click', function(event) {
  let placeholder = image.src
  
  savedImg.innerHTML += `
    <div class="saved-imgs-container">
      <div class="img">
        <img src="${placeholder}" id="${placeholder}">
      </div>
      <h4 id="title">Placeholder</h4>
      <button onclick="openModal(event)">Editar</button>
      <button onclick="removeCard(event)">Apagar</button>
    </div>

    <div id="modal-background">
        <div class="modal-header">
            <button onclick="closeModal(event)">&times;</button>
        </div>
        <div class="modal-content">
            <form id="form-question">
                <label for="newtitle">Nome da Imagem</label><br>
                <input type="text" name="inputTextName" id="newtitle"><br><br>
                <input type="submit">
            </form>
        </div>
    </div>
  `
  let form = document.getElementById("form-question")
  let title = document.querySelector("#title").textContent
  console.log(title)
  form.addEventListener('submit', function(event) {
    event.preventDefault()

    let newTitle = document.getElementById("newtitle").value
    //console.log(newTitle)
    document.querySelector("#title").textContent = newTitle
    //console.log(title)
    const modal = document.getElementById("modal-background")
    modal.style.display = "none"
  })
})

const openModal = (event) => {
  const modal = document.getElementById("modal-background")
  modal.style.display = "flex"
}

const closeModal = (event) => {
  const modal = document.getElementById("modal-background")
  modal.style.display = "none"
}

const removeCard = (event) => {
  event.target.closest('.saved-imgs-container').remove()
}