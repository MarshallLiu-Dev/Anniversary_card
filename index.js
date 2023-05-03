const button = document.querySelector('#baloon');
const canvas = document.querySelector('#canvas_confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () =>{
    jsConfetti.addConfetti({
        emojis: ['💻', '❤️','😍'],
        emojiSize: 50,
        confettiNumber: 30,
    })
    console.log("clicou");
    jsConfetti.addConfetti()
    jsConfetti.addConfetti({
        confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
    })

} )


function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

function pauseAudio() {
    var audio = document.getElementById("myAudio");
    audio.pause();
}