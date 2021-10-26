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
            const newSection = document.createElement('div')
            newSection.classList.add('container-fluid')
            newSection.classList.add('d-flex')
            centreSection.prepend(newSection)
            const sectionTitle = document.createElement('h4')
            sectionTitle.classList.add('py-3')
            sectionTitle.innerHTML = "<strong>The Latest Post-Punk</strong>"
            newSection.appendChild(sectionTitle)
            for (let i = 0; i < receivedData.data.length; i++) {
                const cardContainer = document.createElement('div')
                cardContainer.classList.add('card')
                const cardImg = document.createElement('img')
                cardImg.src = receivedData.data.album.cover
                const cardBody = document.createElement('div')
                cardBody.classList.add('card-body')
                newSection.appendChild(cardContainer)
                cardContainer.appendChild(cardImg)
                cardContainer.appendChild(cardBody)
            }
        })
        .catch(err => {
            console.error(err);
        });

}