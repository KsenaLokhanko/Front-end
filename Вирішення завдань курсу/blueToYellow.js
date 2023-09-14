//Даний код змінює місцями червоне та зелене значення пікселя.

function swapRedGreen(nameImg){
    var img = new SimpleImage(nameImg);
    for (var pix of img.values()){
        if (pix.getRed()<250){
            pix.setRed(255);
            pix.setGreen(255);
            pix.setBlue(0);
        }
    }
    return img;
}

var img = new SimpleImage("duke_blue_devil.png");
print (img);
print(swapRedGreen(img));
