//Даний код змінює зображення, розміщуючи на ньому три вертикальні смуги: червону, зелену та синю.     

function threeRowsH(nameImg){
    var img = new SimpleImage(nameImg);
    var w = img.getWidth();
    for (var pix of img.values()){
        if (pix.getX()<w/3){
            pix.setRed(225);
        } else if (pix.getX()<(2*w)/3){
                pix.setGreen(225);
        } else {
                pix.setBlue(225);
        }
    }
    return img;
}

var img = new SimpleImage("hilton.jpg");
print (img);
print(threeRowsH(img));
