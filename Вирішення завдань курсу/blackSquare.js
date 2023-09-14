//Цей код створює чорний квадрат посередині зображення який закриває обличчя зображеної людини 

function blackSquare(nameImg){
    var img = new SimpleImage(nameImg);
    for (var pix of img.values()){
        if (pix.getY() > 15 && pix.getY() <210){
            if (pix.getX() > 50 && pix.getX() < 200 ){
            pix.setRed(0);        
            pix.setGreen(0);        
            pix.setBlue(0);        
        }}
    }
    return img;
}

var image = new SimpleImage("astrachan.jpg");
print (image);
print (removeRed("astrachan.jpg"));

