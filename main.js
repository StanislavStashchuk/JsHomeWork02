// One

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
let a, b, c;

function concatination (a, b, c) {
    let x = toString(a);
    let y = toString(b);
    let z = toString(c);
    console.log(x+y+z);
}

concatination( 5, 6, 8);