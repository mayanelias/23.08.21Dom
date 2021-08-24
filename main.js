
var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var year = document.getElementById("year");
var id = document.getElementById("id");
var city = document.getElementById("city");
var button = document.getElementById("but");
var p = document.getElementById("p");
var button1 = document.getElementById("button")
var search = document.getElementById("search")
var p1 = document.getElementById("p1");
var array = [];
button.addEventListener("click", function () {
    var myDate = new Date();
    var object = { firstName: fName.value, lastName: lName.value, year: Number(year.value), id: Number(id.value), city: city.value, dateOfTest: myDate.getDate(), hourOfTest: myDate.getHours() }
    for (var i = 0; i < array.length; i++){
        if (array[i].id == id.value) {
            console.log("the id already exist");
            return;
        }
    }
    array.push(object);
    console.log(array);
    p.innerHTML += (`<tr><table><td class="td">${fName.value}</td> <td class="td">${lName.value}</td> <td class="td">${Number(year.value)}</td> <td class="td" >${Number(id.value)}</td> <td class="td" >${city.value} </td><td class="td" >${myDate.getDate()}</td> <td class="td">${myDate.getHours()}</td></tr></table>`);
});
button1.addEventListener("click", function () {
    var findMe = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i].firstName == search.value) {
            p1.innerHTML += (`name: ${array[i].firstName} last name: ${array[i].lastName} year: ${Number(array[i].year)} id: ${Number(array[i].id)} city: ${array[i].city} date: ${array[i].dateOfTest} hour: ${array[i].hourOfTest}`);
            findMe = true;

        }
    }
    if (!findMe) {
        p1.innerHTML = "the name is not exist";
    }
});
fName.addEventListener("input",function(){
fName.value=fName.value.toUpperCase()
});
lName.addEventListener("input",function(){
    lName.value=lName.value.toUpperCase()
    });
    city.addEventListener("input",function(){
        city.value=city.value.toUpperCase()
        });    
var searchId=document.getElementById("findId");
var button2=document.getElementById("but2")
var p2=document.getElementById("p2")
button2.addEventListener("click", function () {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == searchId.value) {
            p2.innerHTML += (`name: ${array[i].firstName} last name: ${array[i].lastName} year: ${Number(array[i].year)} id: ${Number(array[i].id)} city: ${array[i].city} date: ${array[i].dateOfTest} hour: ${array[i].hourOfTest}`);
            return
        }
    }
    p2.innerHTML+="the id is not exist"
});
//!CHALLENGE//
var div1=document.getElementById("myDiv1"); 
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();
function time() {
    window.setInterval(() => {
        if (seconds == 60) {
            seconds = 0
            minutes++
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes == 60) {
            minutes = 0
            hours++
        }
        if (minutes < 10) {
            minutes = "0" + Number(minutes);
        }
        if (hours == 24) {
            hours = 0
        }
        div1.innerHTML = `<div id="time">${hours}:${minutes}:${seconds}</div>`
        seconds++
    }, 1000);
}
time()
  

    

