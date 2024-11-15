document.write("問1<br>");
for(var i=1; i<=5; i++){
    document.write("★");
}

document.write("<br>");
document.write("<br>");
document.write("問2<br>")
for(var star1=1; star1<=2; star1++){
    for(var star2=1; star2<=3; star2++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("問3<br>")
for(var star1=1; star1<=2; star1++){
    for(var star2=1; star2<=5; star2++){
        document.write("☆")
    }
    document.write("<br>");
}

document.write("<br>");
document.write("問4<br>")
for(var star1=1; star1<=4; star1++){
    for(var star2=1; star2<=5; star2++){
        document.write("★")
    }
    document.write("<br>");
}

document.write("<br>");
document.write("問5<br>")
for(var star1=1; star1<=4; star1++){
    for(var star2=1; star2<=3; star2++){
        document.write("★")
    }
    document.write("<br>");
}

document.write("<br>");
document.write("問6<br>")
for(var a=1; a <4; a++){
    for(var i=0; i<3; i++){
        
        if(i%2 ==0){
            document.write("★");
        } else {
            document.write("☆");
        }
    }
    document.write("<br>");
}


document.write("<br>");
document.write("問7<br>")
for(var a=1; a <5; a++)
{
    for(var i=0; i<5; i++)
    {
        if(i%2 ==0)
        {
            document.write("★");
}else{
    document.write("☆");
    }
        }
    document.write("<br>");
    }


document.write("<br>");
document.write("問8<br>")
for(var a=0; a<5; a++){
    for(var i=0; i<=a; i++){
        document.write("★");
    }
    document.write("<br>");
}


