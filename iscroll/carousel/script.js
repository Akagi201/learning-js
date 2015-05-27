var myScroll;

function loaded() {
    myScroll = new IScroll('#wrapper', {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapSpeed: 400,
        keyBindings: true,
        indicators: {
            el: document.getElementById('indicator'),
            resize: false
        }
    });
}

document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);

$("#prev").on("click", function () {
    console.log("prev");
});

$("#next").on("click", function() {
    console.log("next");
});