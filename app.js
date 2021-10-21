const toggleSunMoon = function () {
    const sunIcon = document.getElementById('sun-icon')
    const moonIcon = document.getElementById('moon-icon')
    sunIcon.classList.toggle('d-none')
    moonIcon.classList.toggle('d-none')
    const spotifyLogoWhite = document.getElementById('main-logo-white')
    const spotifyLogoBlack = document.getElementById('main-logo-black')
    spotifyLogoWhite.classList.toggle('d-none')
    spotifyLogoBlack.classList.toggle('d-none')
}

const toggleLightMode = function () {
    const mainRow = document.querySelector('body>div.row')
    mainRow.classList.toggle('light-mode')
    const navbarColumn = document.querySelector('.navbar-column')
    navbarColumn.classList.toggle('light-mode')
    const mainLinksContainer = document.querySelector('.main-links-container')
    mainLinksContainer.classList.toggle('light-mode')
    const secondaryLinksContainer = document.querySelector('.secondary-links-container')
    secondaryLinksContainer.classList.toggle('light-mode')
    const playlistLinksContainer = document.querySelector('.playlist-links-container')
    playlistLinksContainer.classList.toggle('light-mode')
    const goodMorningContainerFluid = document.querySelector('.good-morning-container-fluid')
    goodMorningContainerFluid.classList.toggle('light-mode')
    const centreSectionContainer = document.querySelector('.centre-section-container')
    centreSectionContainer.classList.toggle('light-mode')
    const footer = document.querySelector('footer')
    footer.classList.toggle('light-mode')
    toggleSunMoon()
}

// toggleLightMode()