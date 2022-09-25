let คะแนน = prompt("กรอกคะแนนของคุณ")

if(คะแนน >= 80){
    
    document.getElementById("ผลลัพท์").innerHTML = "คุณได้เกรด Α"

}else if(คะแนน >=70){

    document.getElementById("ผลลัพท์").innerHTML = "คุณได้เกรด Β"

}else if(คะแนน >=60){

    document.getElementById("ผลลัพท์").innerHTML = "คุณได้เกรด C"

}else if(คะแนน >=50){

    document.getElementById("ผลลัพท์").innerHTML = "คุณได้เกรด D"

}//else if(คะแนน < 50){

    //document.getElementById("ผลลัพท์").innerHTML = "คุณได้เกรด F คุณสอบตก"

//}
else{
   document.getElementById("ผลลัพท์").innerHTML = "คุณได้เกรด F คุณสอบตก"
}



