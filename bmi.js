function User()
{
 var Username = document.getElementById('name').value;
 return Username;

}

function CalBmi()
{
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var bmi = weight/((height/100)**2);
    return bmi.toFixed(2)
}


function display()
{
    document.getElementById('resultBMI').innerHTML = User()+" : "+ "ค่าดัชนีมวลกายของคุณคือ"+ " " + CalBmi()

    if(CalBmi() >= 30)
{
    document.getElementById('resultBMI2').innerHTML = "คุณอยู่ในเกณฑ์ อ้วนมาก (โรคอ้วนระดับ 3)"+"<br>"+" ภาวะเสี่ยงต่อโรค : อันตรายระดับที่ 3"
}
else if(CalBmi() >= 25)
{
    document.getElementById('resultBMI2').innerHTML ="คุณอยู่ในเกณฑ์ อ้วน (โรคอ้วนระดับ 2)"+"<br>"+" ภาวะเสี่ยงต่อโรค : อันตรายระดับที่ 2"
}
else if(CalBmi() >= 23)
{
    document.getElementById('resultBMI2').innerHTML ="คุณอยู่ในเกณฑ์ ท้วม (โรคอ้วนระดับ 1)"+"<br>"+" ภาวะเสี่ยงต่อโรค : อันตรายระดับที่ 1"
}
else if(CalBmi() >= 18.50)
{
    document.getElementById('resultBMI2').innerHTML ="คุณอยู่ในเกณฑ์ ปกติ (สุขภาพดี)"+"<br>"+" ภาวะเสี่ยงต่อโรค : ปกติ"
}
else
{
    document.getElementById('resultBMI2').innerHTML ="คุณอยู่ในเกณฑ์ น้ำหนักน้อย (ผอม)"+"<br>"+"ภาวะเสี่ยงต่อโรค : มากกว่าคนปกติ"
}
    
}





