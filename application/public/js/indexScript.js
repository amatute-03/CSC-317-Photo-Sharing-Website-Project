var ab = 0;

function fetchPhotos() {
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            let what = document.getElementById('indexCardDivAll')

            let allCards = document.createElement('div')
            allCards.setAttribute('id', 'indexCardDiv')
            let frag = document.createDocumentFragment()
            data.forEach((item) => {
                buildCardsUsingJSAPI(frag, item)
                ++ab
            })
            let count = document.createElement('p')

            count.setAttribute('id', 'hello')
            count.innerText = "Photos Displayed: " + ab

            what.appendChild(count)
            what.appendChild(allCards)
            allCards.appendChild(frag)
        })
        .catch((error) => {
            console.log(error);
        })
}

function buildCardsUsingJSAPI(bin, data) {
    let div = document.createElement('div')
    div.setAttribute('class', 'null what')
    div.addEventListener('click', (e) => {
        e.currentTarget.remove()
        document.getElementById('hello').innerText = "Photos Displayed: " + --ab
    })
    div.style.cursor = 'pointer'

    let pic = document.createElement('img')
    pic.setAttribute('src', data.thumbnailUrl)
    pic.setAttribute('class', 'indexImageScaling')

    let title = document.createElement('p')
    title.setAttribute('class', 'indexBlockTexts')
    title.appendChild(document.createTextNode(data.title))

    div.appendChild(pic)
    div.appendChild(title)

    bin.appendChild(div)

}

fetchPhotos();