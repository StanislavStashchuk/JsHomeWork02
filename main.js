// One
//  Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 
// 1 – если первое больше, чем второе; и 0 – если числа равны.

function calculator (a, b) {
            if ( a < b) {
                console.log(-1);
            } else if ( a > b) {
                console.log(1);
            } else {
                console.log(0);
            }
        }

calculator(18 , 12);

// Two
// Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(a) {
    if (a < 0) {
        console.log("Число від'ємне");
    } else if (a === 0) {
        console.log("1");
    } else {
        let f = 1;
        for (let i = 1; i <= a; i++) {
            f = f * i;
        }
        console.log(f);
    }
}

factorial(5);

// Three
//Написать функцию, которая принимает три отдельные 
//цифры и превращает их в одно число. 
//Например: цифры 1, 4, 9 превратятся в число 149.

function a (x, y, z) {

    if (x <= 9  && y <=9 && z <=9 ) {
        console.log((x * 100) + (y * 10) + z);
    } else {
        console.log("incorect input!");
    }

}
a(0,2,1);

//  Four
// Написать функцию, которая принимает длину и ширину 
//прямоугольника и вычисляет его площадь. Если в функцию 
//передали 1 параметр, то она вычисляет площадь квадрата.

function rectanleArea (a, b) {
    if (a ===undefined ) {
        console.log(b * b);
    } else if (b ===undefined ) {
        console.log(a * a);
    } else {
        console.log(a *b);
    }
}

rectanleArea(10, 2);

// Five 
//-Написать функцию, которая проверяет, является ли 
// переданное ей число совершенным. Совершенное число – 
// это число, равное сумме всех своих собственных делителей.

// Six 
// Написать функцию, которая принимает минимальное и максимальное 
// значения для диапазона, и выводит только те числа из диапазона, которые 
// являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

// Seven 
// -Написать функцию, которая принимает время (часы, минуты, секунды) 
// и выводит его на экран в формате «чч:мм:сс».Если при вызове функции 
// минуты и/или секунды не были переданы, то выводить их как 00.

function time (hours, minutes, seconds) {
    if (hours > 0 && hours < 10) {
        hours = "0" + hours;
    } else if (hours === undefined || hours === 24) {
        hours = "00";
    } else if (hours > 23) {
        hours = hours % 24;
    } else {
        hours = hours;
    }

    if (minutes > 0 && minutes < 10) {
        minutes = "0" + minutes;
    } else if (minutes === undefined || minutes === 60) {
        minutes = "00";
    } else if (minutes > 59) {
        minutes = minutes % 60;
    } else {
        minutes = minutes;
    }

    if (seconds > 0 && seconds < 10) {
        seconds = "0" + seconds;
    } else if (seconds === undefined || seconds === 60) {
        seconds = "00";
    } else if (seconds > 59) {
        seconds = seconds % 60;
    } else {
        seconds = seconds;
    }

    console.log("''" + hours + ":" + minutes + ":" + seconds + "''");
}

time(493,493,4944);

// Eight
// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

