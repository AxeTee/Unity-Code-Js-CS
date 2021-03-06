
#pragma strict
 
var animator : Animator; //stores the animator component
var v : float; //vertical movements
var h : float; //horizontal movements
var sprint : float;
 
function Start () {
 
animator = GetComponent(Animator); //assigns Animator component when we start the game
 
}
 
function Update () {
 
v = Input.GetAxis("Vertical");
h = Input.GetAxis("Horizontal");
Sprinting();
 
}
 
function FixedUpdate () {
 
//set the "Walk" parameter to the v axis value
animator.SetFloat ("Walk", v);
animator.SetFloat ("Turn", h);
animator.SetFloat("Sprint", sprint);
 
}
 
function Sprinting () {
if(Input.GetButton("Fire1")) {
sprint = 0.2;
}
else {
 
sprint = 0.0;
}
 
}