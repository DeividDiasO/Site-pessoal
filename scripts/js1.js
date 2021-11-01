const div = document.querySelector('div.tempo')
const a1 = document.querySelector('div#a1')
const a2 = document.querySelector('div#a2')
const h1 = document.querySelector('h1.comp')
const h2 = document.querySelector('h1.comp2')
const a = document.querySelector('p.a')

const d = new Date
const h = d.getHours()

const tempo = {
    manha: () => {
        h1.innerHTML = "Bom Dia!"
        h2.innerHTML = "Bom Dia!"
        a1.style = 'background-image: url(img/manha1.jpg);'
        a2.style = 'background-image: url(img/manha2.jpg);'
    },
    tarde: () => {
        h1.innerHTML = "Boa Tarde!"
        h2.innerHTML = "Boa Tarde!"
        a1.style = 'background-image: url(img/tarde1.jpeg);'
        a2.style = 'background-image: url(img/tarde2.jpg);'
    },
    noite: () => {
        h1.innerHTML = "Boa Noite!"
        h2.innerHTML = "Boa Noite!"
        a1.style = 'background-image: url(img/noite1.jpg);'
        a2.style = 'background-image: url(img/noite2.jpg);'
    },
}
if (h >= 6 && h < 12) {
    tempo.manha()
} else if (h >= 12 && h < 19) {
    tempo.tarde()
} else if (h >= 19 && h < 24) {
    tempo.noite()
} else if (h >= 0 && h < 6) {
    tempo.noite()
}



const button = (costume = () => { }) => {
    const but = document.createElement('button')
    const img = document.createElement('img')
    img.setAttribute('src', 'img/44698.png')

    costume(but, img)

    document.body.insertAdjacentElement('beforeend', but)
    but.insertAdjacentElement('beforeend', img)
}



button((but, img) => {
    but.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
    })

    but.classList.toggle('but')
    img.classList.toggle('seta')

    but.style.opacity = "0"
    but.style.cursor = "auto"
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 50) {
            but.style.opacity = "1"
            but.style.cursor = "pointer"
        } else {
            but.style.opacity = "0"
            but.style.cursor = "auto"
        }
    }


})