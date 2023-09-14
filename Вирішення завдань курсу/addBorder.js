//Даний код додає на зображення чорну рамку шириною 10 пікселів

function setBlack(pixel){
    pixel.setRed(0);        
    pixel.setGreen(0);        
    pixel.setBlue(0);       
}

function addBorder(nameImage){
    var img = new SimpleImage(nameImage);
    var w = img.getWidth();
    var h = img.getHeight();
    for (var pix of img.values()){
        if (pix.getY() < 10 || pix.getY() > h-10){
            setBlack(pix);       
        }
        if (pix.getX() < 10 || pix.getX() > w-10){
            setBlack(pix);       
        } 
    }
    return img;
}

var image = new SimpleImage("astrachan.jpg");
print (image);
print (addBorder("astrachan.jpg"));
