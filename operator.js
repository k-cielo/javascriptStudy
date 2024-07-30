//1. String concatenation
console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1 +2}`);


//2. Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1);//divide
console.log(1*1)//multiply
console.log(5%2);//remainder
console.log(2 ** 3);//exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
//preincrement = counter;

//4.Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
x-= y;
x *= y;
x /= y;


//6. Logical operators: || (or), && (and), !(not), or연산자는 처음으로 true가 나오면 거기서 멈춤
const value1 = true;
const value2 = 4 < 2;

// ||(or)
console.log(`or: ${value1 || value2 || check()}`);

//&&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);


//often use to compress long if- statement
//nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }

function check() {
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('안돼')
    }
    return true;
}

//!(not)
console.log(!value1);

//7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


//object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);



//equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log(''==false);
console.log(''===false);
console.log(null == undefined);
console.log(null === undefined);

//8.Conditional operators: if
//if, else if, else