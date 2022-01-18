const main = document.querySelector("main")
const section2 = document.createElement("section")
section2.className = "section-2 container mt-5"
main.appendChild(section2)

function chiqar(value) {
    const div = document.createElement("div")
    div.id = "div-1"
    div.className = "text-center"
    section2.appendChild(div)

    const img = document.createElement("img")
    img.id = "hayvon"
    img.src = pokemons[value]["img"]
    div.appendChild(img)

    const span = document.createElement("span")
    div.appendChild(span)

    const div2 = document.createElement("div")
    div2.className = "bottom"
    div.appendChild(div2)

    const div3 = document.createElement("div")
    div3.className = "info-1 d-flex justify-content-between align-items-center"
    div2.appendChild(div3)

    const p2 = document.createElement("p")
    p2.className = "p-1"
    p2.innerText = pokemons[value]["name"]
    div3.appendChild(p2)

    const img2 = document.createElement("img")
    img2.src = "./img/Mask.png"
    div3.appendChild(img2)

    const p1 = document.createElement("p")
    p1.className = "p-2 text-start"
    p1.innerText = pokemons[value]["candy"]
    div2.appendChild(p1)

    const div4 = document.createElement("div")
    div4.className = "info-2 d-flex align-items-center gap-3"
    div2.appendChild(div4)

    const p3 = document.createElement("p")
    p3.className = "p-1"
    p3.innerText = pokemons[value]["weight"]
    div4.appendChild(p3)

    const p4 = document.createElement("p")
    p4.className = "p-1"
    p4.innerText = pokemons[value]["height"]
    div4.appendChild(p4)
}

for (let i = 0; i < pokemons.length; i++) {
    chiqar(i)
}


const input = document.getElementById("search")

input.addEventListener("keyup", function () {

    const divRemove = document.querySelectorAll("#div-1")
    for (i = 0; i < divRemove.length; i++) {
        section2.removeChild(divRemove[i])
    }

    for (i = 0; i < pokemons.length; i++) {
        let name = pokemons[i].name.toUpperCase()
        if (name.search(input.value.toUpperCase()) >= 0) chiqar(i)
    }
    if (input.value.trim() == "") {
        for (let j = 0; j < pokemons.length; j++) chiqar(j)
    }
})



// const select = document.querySelector(".form-select")

// for (let i = 0; i < pokemons.length; i++) {

//     const option = document.createElement("option")
//     option.innerText = pokemons[i]["name"]
//     select.appendChild(option)

//     chiqar(i)
// }

// select.addEventListener("change", function () {

//     const divRemove = document.querySelectorAll("#div-1")
//     for (i = 0; i < divRemove.length; i++) {
//         section2.removeChild(divRemove[i])
//     }

//     for (i = 0; i < pokemons.length; i++) {
//         if (select.value == pokemons[i].name) chiqar(i)

//         if (select.value == "Pokemonni topish") {
//             for (i = 0; i < pokemons.length; i++) chiqar(i)
//         }
//     }
// })