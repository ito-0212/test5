document.write("問1<br>");
function menseki(hankei){
    return "面積は"+hankei*hankei*3.14+"㎠です。";
}

document.write(menseki(5));
document.write("<br>");

document.write(menseki(7));
document.write("<br>");

document.write(menseki(10));



document.write("<br>")
document.write("<br>")
document.write("問2<br>");
function nyujouryou(otona,kodomo){
    return (otona*500)+(kodomo*200);
}
function hyouji(group, otona, kodomo){
    return group+"グループの合計金額は"+nyujouryou(otona, kodomo)+"円です。"+"<br>";
}


document.write("Aグループの合計金額は"+nyujouryou(2,4)+"円です。"+"<br>");

document.write("Bグループの合計金額は"+nyujouryou(1,5)+"円です。"+"<br>");

document.write("Cグループの合計金額は"+nyujouryou(3,7)+"円です。"+"<br>");

document.write(hyouji("D", 10, 100));