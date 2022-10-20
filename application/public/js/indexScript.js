var cards = 0;

(function fetchPhotos() {
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let cardsAndCounter = document.getElementById('indexCardDivAll')

            let allCards = document.createElement('div')
            allCards.setAttribute('id', 'indexCardDiv')
            let frag = document.createDocumentFragment()

            data.forEach((image) => {
                buildCardsUsingJSAPI(frag, image)
                ++cards
            })
            let count = document.createElement('p')

            count.setAttribute('id', 'cardCounterText')
            count.innerText = "Photos Displayed: " + cards

            cardsAndCounter.appendChild(count)
            allCards.appendChild(frag)

            cardsAndCounter.appendChild(allCards)
        })
        .catch((error) => {
            console.log(error);
        })
})()

function buildCardsUsingJSAPI(bin, data) {
    let div = document.createElement('div')
    div.setAttribute('class', 'cards')

    div.addEventListener('click', (e) => {
        e.currentTarget.style.pointerEvents = "none";
        fadeOut(e)
        document.getElementById('cardCounterText').innerText = "Photos Displayed: " + --cards
    })

    div.style.cursor = 'pointer'

    let pic = document.createElement('img')
    pic.setAttribute('src', data.thumbnailUrl)
    pic.setAttribute('class', 'imageScaling')

    let title = document.createElement('p')
    title.setAttribute('class', 'indexBlockTexts')
    title.appendChild(document.createTextNode(data.title))

    div.appendChild(pic)
    div.appendChild(title)

    bin.appendChild(div)
}

function fadeOut(e) {
    var target = e.currentTarget
    var change = 1;

    var fade = setInterval(function () {
        change += 0.15
        if (!target.style.opacity) {
            target.style.opacity = 1;
        }
        if (target.style.opacity > 0) {
            target.style.opacity = 2 - change;
        }
        else {
            clearInterval(fade);
            target.remove()
        }
    }, 25);
}
