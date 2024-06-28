function title() {
    const array = ["X", "Xi", "Xin", "Xinv", "Xinvi", "Xinvic", "Xinvict", "Xinvictu", "Xinvictus"];
    let index = 0;
    const updateTitle = () => {
        document.title = array[index];
        index = (index + 1) % array.length;
    };
    setInterval(updateTitle, 500);
}

title();
