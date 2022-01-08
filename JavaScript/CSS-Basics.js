
//Background box  0
function bgcolor() {
    document.getElementById("bg_color").style.display = "block";
    document.getElementById("bg_image").style.display = "none";
    document.getElementById("bg_repeat").style.display = "none";
    document.getElementById("bg_norepeat").style.display = "none";
    document.getElementById("bg_repeatx").style.display = "none";
    document.getElementById("bg_repeaty").style.display = "none";
    document.getElementById("bg_repeatspace").style.display = "none";
    document.getElementById("bg_repeataround").style.display = "none";
}
function bgimage() {
    document.getElementById("bg_color").style.display = "none";
    document.getElementById("bg_image").style.display = "block";
    document.getElementById("bg_repeat").style.display = "none";
    document.getElementById("bg_norepeat").style.display = "none";
    document.getElementById("bg_repeatx").style.display = "none";
    document.getElementById("bg_repeaty").style.display = "none";
    document.getElementById("bg_repeatspace").style.display = "none";
    document.getElementById("bg_repeataround").style.display = "none";
}
function bgrepeat() {
    document.getElementById("bg_color").style.display = "none";
    document.getElementById("bg_image").style.display = "none";
    document.getElementById("bg_repeat").style.display = "block";
    document.getElementById("bg_norepeat").style.display = "none";
    document.getElementById("bg_repeatx").style.display = "none";
    document.getElementById("bg_repeaty").style.display = "none";
    document.getElementById("bg_repeatspace").style.display = "none";
    document.getElementById("bg_repeataround").style.display = "none";
}
function bgnorepeat() {
    document.getElementById("bg_color").style.display = "none";
    document.getElementById("bg_image").style.display = "none";
    document.getElementById("bg_repeat").style.display = "none";
    document.getElementById("bg_norepeat").style.display = "block";
    document.getElementById("bg_repeatx").style.display = "none";
    document.getElementById("bg_repeaty").style.display = "none";
    document.getElementById("bg_repeatspace").style.display = "none";
    document.getElementById("bg_repeataround").style.display = "none";
}
function bgrepeatx() {
    document.getElementById("bg_color").style.display = "none";
    document.getElementById("bg_image").style.display = "none";
    document.getElementById("bg_repeat").style.display = "none";
    document.getElementById("bg_norepeat").style.display = "none";
    document.getElementById("bg_repeatx").style.display = "block";
    document.getElementById("bg_repeaty").style.display = "none";
    document.getElementById("bg_repeatspace").style.display = "none";
    document.getElementById("bg_repeataround").style.display = "none";
}
function bgrepeaty() {
    document.getElementById("bg_color").style.display = "none";
    document.getElementById("bg_image").style.display = "none";
    document.getElementById("bg_repeat").style.display = "none";
    document.getElementById("bg_norepeat").style.display = "none";
    document.getElementById("bg_repeatx").style.display = "none";
    document.getElementById("bg_repeaty").style.display = "block";
    document.getElementById("bg_repeatspace").style.display = "none";
    document.getElementById("bg_repeataround").style.display = "none";
}
function bgrepeatspace() {
    document.getElementById("bg_color").style.display = "none";
    document.getElementById("bg_image").style.display = "none";
    document.getElementById("bg_repeat").style.display = "none";
    document.getElementById("bg_norepeat").style.display = "none";
    document.getElementById("bg_repeatx").style.display = "none";
    document.getElementById("bg_repeaty").style.display = "none";
    document.getElementById("bg_repeatspace").style.display = "block";
    document.getElementById("bg_repeataround").style.display = "none";
}
function bgrepeataround() {
    document.getElementById("bg_color").style.display = "none";
    document.getElementById("bg_image").style.display = "none";
    document.getElementById("bg_repeat").style.display = "none";
    document.getElementById("bg_norepeat").style.display = "none";
    document.getElementById("bg_repeatx").style.display = "none";
    document.getElementById("bg_repeaty").style.display = "none";
    document.getElementById("bg_repeatspace").style.display = "none";
    document.getElementById("bg_repeataround").style.display = "block";
}


 //Background box 1

 let bg2;
 bg2=document.getElementsByClassName("b2")

function bgpositionll()
 {
     for(let i=0;i<bg2.length;i++)
     {
         if(i==0)
         {
            bg2[i].style.display = "block";
         }
         else
         {
            bg2[i].style.display = "none";
         }
          
     }
 }
 function bgpositionlb()
 {
     for(let i=0;i<bg2.length;i++)
     {
         if(i==1)
         {
            bg2[i].style.display = "block";
         }
         else
         {
            bg2[i].style.display = "none";
         }
          
     }
 }

 function bgpositionlt()
 {
     for(let i=0;i<bg2.length;i++)
     {
         if(i==2)
         {
            bg2[i].style.display = "block";
         }
         else
         {
            bg2[i].style.display = "none";
         }
          
     }
 }
 function bgpositionrt()
 {
     for(let i=0;i<bg2.length;i++)
     {
         if(i==3)
         {
            bg2[i].style.display = "block";
         }
         else
         {
            bg2[i].style.display = "none";
         }
          
     }
 }
 function bgpositionrc()
 {
     for(let i=0;i<bg2.length;i++)
     {
         if(i==4)
         {
            bg2[i].style.display = "block";
         }
         else
         {
            bg2[i].style.display = "none";
         }
          
     }
 }
 function bgpositionct()
 {
     for(let i=0;i<bg2.length;i++)
     {
         if(i==5)
         {
            bg2[i].style.display = "block";
         }
         else
         {
            bg2[i].style.display = "none";
         }
          
     }
 }
 function bgpositionpercentage()
 {
     for(let i=0;i<bg2.length;i++)
     {
         if(i==6)
         {
            bg2[i].style.display = "block";
         }
         else
         {
            bg2[i].style.display = "none";
         }
          
     }
 }
 function bgpositionpixel()
 {
     for(let i=0;i<bg2.length;i++)
     {
         if(i==7)
         {
            bg2[i].style.display = "block";
         }
         else
         {
            bg2[i].style.display = "none";
         }
          
     }
 }



//Background box 2

let bg3;
bg3=document.getElementsByClassName("b3")

function bgattachmentscroll()
{
    for(let i=0;i<bg3.length;i++)
    {
        if(i==0)
        {
           bg3[i].style.display = "block";
        //    document.getElementsByClassName("instruction").style.display = "none";
        }
        else
        {
           bg3[i].style.display = "none";
        }
         
    }
}
function bgattachmentfixed()
{
    for(let i=0;i<bg3.length;i++)
    {
        if(i==1)
        {
           bg3[i].style.display = "block";
        }
        else
        {
           bg3[i].style.display = "none";
        }
         
    }
}
function bgattachmentlocal()
{
    for(let i=0;i<bg3.length;i++)
    {
        if(i==2)
        {
           bg3[i].style.display = "block";
        }
        else
        {
           bg3[i].style.display = "none";
        }
         
    }
}
function bgsizelength()
{
    for(let i=0;i<bg3.length;i++)
    {
        if(i==3)
        {
           bg3[i].style.display = "block";
        }
        else
        {
           bg3[i].style.display = "none";
        }
         
    }
}
function bgsizepercentage()
{
    for(let i=0;i<bg3.length;i++)
    {
        if(i==4)
        {
           bg3[i].style.display = "block";
        }
        else
        {
           bg3[i].style.display = "none";
        }
         
    }
}
function bgsizecontain()
{
    for(let i=0;i<bg3.length;i++)
    {
        if(i==5)
        {
           bg3[i].style.display = "block";
        }
        else
        {
           bg3[i].style.display = "none";
        }
         
    }
}
function bgsizecover()
{
    for(let i=0;i<bg3.length;i++)
    {
        if(i==6)
        {
           bg3[i].style.display = "block";
        }
        else
        {
           bg3[i].style.display = "none";
        }
         
    }
}























