// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createcanvas(800,400);
    ball = new CannonBall(100,100,25)


}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
}


function keyReleased() {
    shoot();
    // Call the shoot method for the cannon.
}