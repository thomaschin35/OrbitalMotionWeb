/* 
 12/01/21
 Thomas Chin
 This is the Javascript file where I am conductin all my calculations and interactions
 */
//declaring constants
const EARTH_RADIUS = 6.37 * Math.pow(10, 6);
const GRAVITATIONAL_CONSTANT = 6.67 * Math.pow(10, -11);
//velocity functions
function velVelocity(distance, bodyMass)
{
    //checking for empty space and if user enters wrong number
    if (distance == "" || bodyMass == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(distance) || isNaN(bodyMass))
    {
        alert("Please enter any number");
        return;
    }
    if (bodyMass < 0 || distance < 0)
    {
        alert("Please enter a positive mass or distance")
    }
    var vel = Math.sqrt((bodyMass * GRAVITATIONAL_CONSTANT) / (distance * 1000 + EARTH_RADIUS));
    document.getElementById("velVelocityAnswer").innerHTML = vel + " m/s";
}
function velDistance(velocity, bodyMass) //GM / v^2
{
    //checking for empty space and if user enters wrong number
    if (velocity == "" || bodyMass == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(velocity) || isNaN(bodyMass))
    {
        alert("Please enter any number");
        return;
    }
    if (bodyMass < 0)
    {
        alert("Please enter a positive mass");
        return;
    }
    var distance = (GRAVITATIONAL_CONSTANT * bodyMass) / (velocity * velocity);
    document.getElementById("velDistanceAnswer").innerHTML = distance + " m";
}
function velBodyMass(velocity, distance) //v^2r / G
{
    //checking for empty space and if user enters wrong number
    if (distance == "" || distance == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(distance) || isNaN(distance))
    {
        alert("Please enter any number");
        return;
    }
    if (distance < 0)
    {
        alert("Please enter a positive distance");
        return;
    }
    var mass = (velocity * velocity * (distance * 1000 + EARTH_RADIUS)) / GRAVITATIONAL_CONSTANT;
    document.getElementById("velMassAnswer").innerHTML = mass + " kg";
}
//acceleratio factor functions
function accelAcceleration(distance, mass)
{
    //checking for empty space and if user enters wrong number
    if (distance == "" || mass == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(distance) || isNaN(mass))
    {
        alert("Please enter any number");
        return;
    }
    if (mass < 0 || distance < 0)
    {
        alert("Please enter a positive mass or distance")
        return;
    }
    var vel = Math.sqrt((mass * GRAVITATIONAL_CONSTANT) / (distance * 1000 + EARTH_RADIUS));
    var acceleration = (vel * vel) / (distance * 1000 + EARTH_RADIUS);
    document.getElementById("accelAccelerationAnswer").innerHTML = acceleration + "<html>m/s<sup>2</sup></html>";
}
function accelDistance(acceleration, mass)
{
    //checking for empty space and if user enters wrong number
    if (acceleration == "" || mass == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(acceleration) || isNaN(mass))
    {
        alert("Please enter any number");
        return;
    }
    if (mass < 0)
    {
        alert("Please enter a positive mass");
        return;
    }
    var distance = Math.sqrt((GRAVITATIONAL_CONSTANT * mass) / acceleration);
    document.getElementById("accelDistanceAnswer").innerHTML = distance + " m";
}
function accelBodyMass(acceleration, distance)
{
    //checking for empty space and if user enters wrong number
    if (acceleration == "" || distance == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(acceleration) || isNaN(distance))
    {
        alert("Please enter any number");
        return;
    }
    if (distance < 0)
    {
        alert("Please enter a positive distance");
        return;
    }
    var mass = (Math.abs(acceleration) * (distance * 1000 + EARTH_RADIUS) * (distance * 1000 + EARTH_RADIUS)) / GRAVITATIONAL_CONSTANT;
    document.getElementById("accelMassAnswer").innerHTML = mass + " kg";
}
//force factor functions
function forForce(distance, velocity, mass)
{
    //checking for empty space and if user enters wrong number
    if (distance == "" || velocity == "" || mass == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(velocity) || isNaN(distance) || isNaN(mass))
    {
        alert("Please enter any number");
        return;
    }
    if (distance < 0 || mass < 0)
    {
        alert("Please enter a positive distance and mass");
        return;
    }
    var force = (velocity * velocity * mass) / (distance * 1000 + EARTH_RADIUS);
    document.getElementById("forForceAnswer").innerHTML = force + " N";
}
function forDistance(force, velocity, mass)
{
    //checking for empty space and if user enters wrong number
    if (force == "" || velocity == "" || mass == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(velocity) || isNaN(force) || isNaN(mass))
    {
        alert("Please enter any number");
        return;
    }
    if (mass < 0)
    {
        alert("Please enter a positive mass");
        return;
    }
    var distance = (velocity * velocity * mass) / Math.abs(force);
    document.getElementById("forDistanceAnswer").innerHTML = distance + " m";
}
function forVelocity(force, distance, mass)
{
    //checking for empty space and if user enters wrong number
    if (distance == "" || force == "" || mass == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(force) || isNaN(distance) || isNaN(mass))
    {
        alert("Please enter any number");
        return;
    }
    if (distance < 0 || mass < 0)
    {
        alert("Please enter a positive distance and mass");
        return;
    }
    var velocity = Math.sqrt((Math.abs(force) * (distance * 1000 + EARTH_RADIUS)) / mass);
    document.getElementById("forVelocityAnswer").innerHTML = velocity + " m/s";
}
function forMass(force, distance, velocity)
{
    //checking for empty space and if user enters wrong number
    if (distance == "" || velocity == "" || force == "")
    {
        alert("Please enter any number");
        return;
    }
    if (isNaN(velocity) || isNaN(distance) || isNaN(force))
    {
        alert("Please enter any number");
        return;
    }
    if (distance < 0)
    {
        alert("Please enter a positive distance");
        return;
    }
    var mass = ((Math.abs(force) * (distance * 1000 + EARTH_RADIUS)) / (velocity * velocity));
    document.getElementById("forMassAnswer").innerHTML = mass + " kg";
}




