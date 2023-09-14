//Даний код створює градієнт від зеленого до червоного (зі значенням синього 150)

function GreenToRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;
    var green = 225;
    //додаю синій, бо так колір гарніший
    var blue = 150;
    for(var pix of picture.values()){
        if(pix.getX() == 0){
            red = 0;
            green = 220;
        }
        pix.setRed(red);
        pix.setGreen(green);
        pix.setBlue(blue);
        red+=1;
        green -= 1;
    }
    return picture;
}

var result = changeRed(256,200);
print(result);
