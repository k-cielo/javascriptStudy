// Whole-script strice mode syntax
// JavaScript is very flexible
// flexible=== dangerous
// added ECMAScript 5 

'use strict';

// 2. Variable , rw(read/write)
// let (added in ES6)
let globalName = 'global name';

{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);



//3. Constant, r(read only)
//use const whenever possible
//only use let if variable needs to change

const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in Js
//favor immutable type always for a few reasons:
//  -security
//  -thread safety
//  -reduce human mistakes




//4. variable types
// primitive, single item: number, string, boolean, null, underfined, symbol 
//object, box container
//function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`vlaue: ${size}, type: ${typeof size}`);


//number - speicla numeric values:
const infinity = 1 / 0 ;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1232108374981326082834n;
console.log(`value: ${bigInt}, type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: 4{typeof helloBob}`);


//boolean
//false: 0, null, underfined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//underfined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); 



//* Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));//h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));//에러발생

