


function dark()
{
    if(document.body.style.backgroundColor == "black")
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.style.backgroundImage = "url('https://image.freepik.com/free-vector/abstract-paper-hexagon-white-background_51543-7.jpg')";
        // document.getElementsByTagName("a").style.color = "white";
        document.body.style.transition = "0.5s linear";
    }
    else
    {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.backgroundImage = "url('https://i.ibb.co/5Ym5n1D/blackbg.jpg')";
        // document.getElementsByTagName("a").style.color = "white";
        document.body.style.transition = "0.5s linear";
    }

}








