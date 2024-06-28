var pressed = false;

function title() {
    const array = ["X", "Xi", "Xin", "Xinv", "Xinvi", "Xinvic", "Xinvict", "Xinvictu", "Xinvictus"];
    let index = 0;
    const updateTitle = () => {
        document.title = array[index];
        index = (index + 1) % array.length;
    };
    setInterval(updateTitle, 500);
}

function play() {
    const audio = document.getElementById("audio");
    audio.volume = 0.1;
    audio.play();
}

document.addEventListener('click', function() {
    if (pressed == false) {
            pressed = true;
            document.body.classList.add("blur-off");
            title();
            play();
        }
    }
)
