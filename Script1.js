// JavaScript source code


var num = 0;

var upgrade1 = document.getElementById("upgrade1");

var x = 1;

var cookie = document.getElementById("cookie");
function cookieClick() {
    num += x;
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num; 
}

function cookieAdd() {
    num += 1;
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;
}

function cookieAdd5() {
    num += 5;
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;
}

var accordion = document.getElementsByClassName('label');

    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.parentElement.classList.toggle('active')
        })
}

function upgrade1Click() {
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num; 
    if (num < 10) {
        alert("Masz za malo PJATKow!");
    }
    else {
        num -= 10;
        setInterval(cookieAdd, 1400);
    }
}
function upgrade2Click() {
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;
    if (num < 50) {
        alert("Masz za malo PJATKow!");
    }
    else {
        num -= 50;
        x += 2;
    }
}
function upgrade3Click() {
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;
    if (num < 150) {
        alert("Masz za malo PJATKow!");
    }
    else {
        num -= 150;
        setInterval(cookieAdd5, 1400);
    }
}
function upgrade4Click() {
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;
    if (num < 500) {
        alert("Masz za malo PJATKow!");
    }
    else {
        num -= 500;
        x += 20;
    }
}