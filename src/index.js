const $ = require("jquery");

const hello = () => console.log('hello from webpack!');

hello();

$('body')
    .html("<h1>Hello from JQuery</h1>")
    .css('background-color', 'grey');