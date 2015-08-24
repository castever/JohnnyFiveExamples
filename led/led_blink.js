/**
 * this example comes from the Johnny-Five web site Hello World example
 * put here for learning purposes
 * 
 * http://johnny-five.io/examples/
 * see also https://github.com/rwaldron/johnny-five/blob/master/eg/led-blink.js
 * which is slightly different than the hello world example
 * 
 */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` component instance
  var led = new five.Led(13);

  // "blink" the led in 500ms on-off phase periods
  led.blink(500);
});