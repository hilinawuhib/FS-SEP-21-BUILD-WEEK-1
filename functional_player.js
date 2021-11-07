// imports the Lottie library via Skypack
import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

const playIconContainer = document.getElementById('play-pause-icon')
const audioPlayerContainer = document.getElementById('audio-player-container')
const seekSlider = document.getElementById('seek-slider')
const volumeSlider = document.getElementById('volume-slider')
const muteIconContainer = document.getElementById('mute-icon')

// variable that will store the button’s current state (play or pause)
let playState = 'play'
let muteState = 'unmute'

// loads the animation that transitions the play icon into the pause icon into the referenced button, using Lottie’s loadAnimation() method
const playAnimation = lottieWeb.loadAnimation({
    container: playIconContainer,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Play Animation",
})

const muteAnimation = lottieWeb.loadAnimation({
    container: muteIconContainer,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/mute/mute.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Mute Animation",
})

playAnimation.goToAndStop(14, true);

// adds an event listener to the button so that when it is clicked, the the player toggles between play and pause
playIconContainer.addEventListener('click', () => {
    if (playState === 'play') {
        playAnimation.playSegments([14, 27], true)
        playState = 'pause'
    } else {
        playAnimation.playSegments([0, 14], true)
        playState = 'play'
    }
})

muteIconContainer.addEventListener('click', () => {
    if (muteState === 'unmute') {
        muteAnimation.playSegments([0, 15], true)
        muteState = 'mute'
    } else {
        muteAnimation.playSegments([15, 25], true)
        muteState = 'ummute'
    }
})

const showRangeProgress = (rangeInput) => {
    if (rangeInput === seekSlider) {
        audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%')
    }
}

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target)
})
volumeSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target)
})