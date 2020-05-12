var m = new Map();
m.set("hello", "something");
m.set(s, 34);
console.log(m.get(s)==34);

var s = new Set();
s.add("hello").add("something").add("hello");

console.log(s.size === 2);
console.log(s.has("hello") === true );

// var wm = new WeakMap();
// wm.set("sss", {extra: 42});
// var objRef = new Object();
// wm.set(objRef, {extra: 42});

var ws = new WeakSet();
ws.add({data: 42});


// destructuring

var [a, b] = [1, 2, 3];
a === 1;
b === 3;

// object matching

var o = {p:42, q:true};
var {p:foo, q:bar} = o;

console.log(foo); //42
console.log(bar); //true

// object matching default variables
var {a=10, b=5} = {a:3};

console.log(a);
console.log(b);


// destructuring + default arguments
function r({x, y, w = 10, h=10}){
    return x+ y + w +h;
}

console.log( r({x:1, y:2}));  //23

// destructuring in function arguments


// multiline strings and template literals
console.log(`string is in line 1
string in line 2`);

// enescaped template strings
String.raw`In ESS "\n" is a line feed.`

// interpolate variable bindings
var name="Bob", enemy = "Py";
`Hello ${name}, are you ${enemy}?`

// symbols are new primitive types
// symbols are tokens that serve as unique IDs

Symbol("foo") != Symbol("foo");   //false
var sym = new Symbol();     //TypeError


// function* generator(array){
//     for( var value in array){
//         yield value;
//     }
// }


// yeild keyword is sused to pause and 
// resume a generator function

function* fibonacci(){
    var fn1 =  0;
    var fn2 = 1;
    while (true) {
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        var reset = yield current;
        if(reset){
            fn1 = 0;
            fn2 = 1;
        }
    }
}

var sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);


// built in iterators are strings, array, tyoed array, map , set, weakmap, weakmap

var myIterable ={}
myIterable[Symbol.iterator] =function* (){
    yield 1;
    yield 2; 
    yield 3;
};


// promises
function timeout(duration = 0){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, duration);
    });
}

timeout(300).then(()=>{
    return timeout(2000);
}).then(()=>{
    // do something else
});

