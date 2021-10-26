window.onload = () => {


    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=sting", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a36c60d940msh0ae17a1bc05c924p1fd7eajsn59086dffd2ef"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const goodMorningContainer = document.querySelector('.good-morning-main-container')
            goodMorningContainer.innerHTML = ''
            for (let i = 0; i < 10; i++) {
                const cardContainer = document.createElement('div')
                cardContainer.classList.add('good-morning-card-container')
                const image = document.createElement('img')
                const title = document.createElement('div')
                image.src = data.data[i].album.cover
                title.innerText = data.data[i].title
                cardContainer.appendChild(image)
                cardContainer.appendChild(title)
                goodMorningContainer.appendChild(cardContainer)
            }
        })
        .catch(err => {
            console.error(err);
        });





    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=post-punk", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a36c60d940msh0ae17a1bc05c924p1fd7eajsn59086dffd2ef"
        }
    })
        .then(response => response.json())
        .then(receivedData => {
            console.log(receivedData)
            const centreSection = document.querySelector('.centre-section-container')
            const sectionTitle = document.createElement('h4')
            sectionTitle.classList.add('py-3')
            sectionTitle.innerHTML = "<strong>The Latest Post-Punk</strong>"
            centreSection.prepend(sectionTitle)
            const newSection = document.createElement('div')
            newSection.classList.add('container-fluid')
            newSection.classList.add('d-flex')
            newSection.classList.add('flex-wrap')
            sectionTitle.insertAdjacentElement('afterend', newSection)
            const countAlbumsDiv = document.createElement('div')
            countAlbumsDiv.classList.add('my-3')
            countAlbumsDiv.innerHTML = `
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Count Albums
          </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-dark" id="exampleModalLabel">Number of albums in section</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                             ${ receivedData.data.length }
                </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
            newSection.insertAdjacentElement('beforebegin', countAlbumsDiv)
            const countUniqueButton = document.createElement('button')
            countUniqueButton.innerText = 'Count Unique Albums'
            countUniqueButton.classList.add('btn')
            countUniqueButton.classList.add('btn-secondary')
            countUniqueButton.addEventListener('click', countUnique)
            countAlbumsDiv.insertAdjacentElement('afterbegin', countUniqueButton)
            for (let i = 0; i < receivedData.data.length; i++) {
                const cardContainer = document.createElement('div')
                cardContainer.classList.add('card')
                cardContainer.classList.add('mx-1')
                const cardImg = document.createElement('img')
                cardImg.src = receivedData.data[i].album.cover
                const cardBody = document.createElement('div')
                cardBody.classList.add('card-body')
                cardBody.innerText = receivedData.data[i].album.title
                cardBody.classList.add('text-white')
                newSection.appendChild(cardContainer)
                cardContainer.appendChild(cardImg)
                cardContainer.appendChild(cardBody)
            }
        })
        .catch(err => {
            console.error(err);
        });

}

const countUnique = function () {
    const albumTitles = document.querySelectorAll('.card-body')
    console.log(albumTitles[0].innerText)

}