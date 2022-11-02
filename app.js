

const Container = document.querySelector('.container1')
const result = document.querySelector('#result')
const Button1 = document.querySelector('.btn1')
const Button2 = document.querySelector('.btn2')

const Content1 = document.createElement('div')
Content1.classList.add('Content1')
Content1.innerHTML = "<h1>"+"Test Calculator"+"</h1>"

const Content2 = document.createElement('div')
Content2.classList.add('Boxinput1')
Content2.innerHTML = "Weight :"+"<br>"

const Content3 = document.createElement('div')
Content3.classList.add('Boxinput2')
Content3.innerHTML = "Height :"+"<br>"

const UserInputW = document.createElement('input')
UserInputW.id = "inputW"
UserInputW.classList.add('UserInputW')
UserInputW.placeholder = "กรอกข้อมูล Weight";

const UserInputH = document.createElement('input')
UserInputH.id = "inputH"
UserInputH.classList.add('UserInputH')
UserInputH.placeholder = "กรอกข้อมูล Height";

function CalculaterP(){
    let inputW = document.querySelector('.UserInputW').value
    let inputH = document.querySelector('.UserInputH').value
    let WH = inputW*inputH

    return WH.toFixed(2);

}

function Display(){
   document.getElementById('result').innerHTML= "<h1>" +"ผลรวม =" + " " +CalculaterP() + "</h1>"

   console.log(CalculaterP)
}

function Dclear(){

    document.getElementById('inputW').value= " "
    document.getElementById('inputH').value= " "
    document.getElementById('result').innerHTML= "<h1>" +"ผลรวม"+ "</h1>"
 }

 



Content3.append(UserInputH)
Content2.append(UserInputW)
Content1.append(Content2,Content3,Button1,Button2)
Container.append(Content1)