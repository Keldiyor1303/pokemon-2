const main = document.querySelector("main")
const section2 = document.createElement("section")
section2.className = "section-2 container mt-5 mb-5"
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

    const p2 = document.createElement("p")
    p2.className = "p-1 text-center mt-4"
    p2.innerText = pokemons[value]["name"]
    div.appendChild(p2)


    const aside = document.querySelector("aside")
    const modal = document.querySelector("#modal")

    div.addEventListener("click", function () {
        aside.classList.add("aside-open")
        const modalImg = document.querySelector("#modal img")
        modalImg.src = pokemons[value]["img"]

        const modalP = document.querySelector("#modal p")
        modalP.className = "p-1 text-center mt-4"
        modalP.innerText = pokemons[value]["name"]

    })

    aside.addEventListener("click", function () {
        aside.classList.remove("aside-open")
    })


    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            aside.classList.remove("aside-open")
        }
    })


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
})




// SELECT UCHUN SEARCH


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