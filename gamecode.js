/*
Here is the JavaScript Code for my game page
The first function created here is going to change my header into one of the the eight 
options that are able to be rolled in the Magic 8 Ball.
*/ 

function updateText(){
    var heading = Math.ceil(Math.random()*8);
    document.getElementById("heading").innerHTML = heading;

    if (heading == 1)
    {
        document.getElementById("heading").innerHTML = "-It is Certain.";
    }
    else if (heading == 2)
    {
        document.getElementById("heading").innerHTML = "-Reply hazy, Try Again.";
    }
    else if (heading == 3)
    {
        document.getElementById("heading").innerHTML = "-Don't Count On It.";
    }
    else if (heading == 4)
    {
        document.getElementById("heading").innerHTML = "-It is Decidedly So.";
    }
    else if (heading == 5)
    {
        document.getElementById("heading").innerHTML = "-Concentrate and Ask again.";
    }
    else if (heading == 6)
    {
        document.getElementById("heading").innerHTML = "-My Sources Tell Me No.";
    }
    else if (heading == 7)
    {
        document.getElementById("heading").innerHTML = "-You may Rely On It.";
    }
    else if (heading == 8)
    {
        document.getElementById("heading").innerHTML = "-Very Doubtful."; 
    }


}   

