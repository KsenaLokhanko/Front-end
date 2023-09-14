//Даний код змінює значення червоного у пікселях, де початкове значення менше 14

function changeRedVal(nameImg, newR){
    var img = new SimpleImage (nameImg);
    for (var pixel of img.values()){
        if (pixel.getRed() <14){
        pixel.setRed(newR);}
    }
    return img;
}

var img = new SimpleImage("smallhands.png");
print(img);
var res = changeRedVal(img, 125);
print(res);
