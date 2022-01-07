


function dark()
{
    if(document.body.style.backgroundColor == "black")
    {
        document.body.style.backgroundColor = "white";
        document.body.style.transition = "0.5s linear";
        document.body.style.color = "black";
        document.getElementsByTagName("a").style.color = "white";
    }
    else
    {
        document.body.style.backgroundColor = "black";
        document.body.style.transition = "0.5s linear";
        document.body.style.color = "white";
        document.getElementsByTagName("a").style.color = "white";
    }

}








