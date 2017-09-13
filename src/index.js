const $ = require("jquery");
const data = require("./data.js");
const math = require('./math');
const sayHello = require("./say-hello");

const hello = () => console.log('Hello from webpack!');

sayHello();
hello();

console.log(data.arnie);

console.log(math.add(3,10));



$('body')
    .html("<h1>Hello from JQuery</h1>")
    .css('background-color', 'grey');
