function upDate(previewPic) {
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
}

function addTabindex() {
    var images = document.getElementsByClassName('preview');
    for (var i = 0; i < images.length; i++) {
        images[i].tabIndex = i + 1; // Assigning tabindex dynamically
    }
}

window.onload = addTabindex;
