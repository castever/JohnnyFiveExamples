/**
 * simple johnny-five program to make a servo sweep
 * 
 */
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var servo = new five.Servo(10);
   servo.sweep();
});