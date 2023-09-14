//Даний код змінює місцями червоне та зелене значення пікселя.

function swapRedGreen(nameImg){
    var img = new SimpleImage(nameImg);
    for (var pix of img.values()){
       var r = pix.getRed();
       var g = pix.getGreen();
       pix.setRed(g);
       pix.setGreen(r);
    }
    return img;
}

var img = new SimpleImage("hilton.jpg");
print (img);
print(swapRedGreen(img));
