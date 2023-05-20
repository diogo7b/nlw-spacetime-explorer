const navEl = document.querySelector("nav")

const text =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique"

const dateRealization = document.createElement("small")
const title = document.createElement("h1")
const divImage = document.createElement("div")
const image = document.createElement("img")
const description = (document.createElement("p").innerHTML = text)
const memory = document.createElement("a")

image.setAttribute("src", "./assets/jornada.png")
divImage.appendChild(image)

memory.setAttribute("href", "")
memory.setAttribute("class", "memory")
memory.setAttribute("target", "_blank")
memory.appendChild(dateRealization)
memory.appendChild(title)
memory.appendChild(divImage)
memory.appendChild(description)

const showMemories = () => {
  navEl.appendChild(memory)
}

for (let i = 0; i < 10; i++) {}
showMemories()
