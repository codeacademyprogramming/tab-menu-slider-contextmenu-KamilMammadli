let position = 1;
slideshow(position);

function nextslide(n) {
    slideshow(position += n);
}

function currentslide(n) {
    slideshow(position = n);
}

function slideshow(n) {
    const slides = document.getElementsByClassName("containers");
    const buttons = document.getElementsByClassName("button");
    if (n > slides.length) { position = 1 }
    if (n < 1) { position = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" enable", "");
    }
    slides[position - 1].style.display = "block";
    buttons[position - 1].className += " enable";
}