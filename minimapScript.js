#pragma strict

var target: Transform;


function Update () {
	gameObject.transform.position.x = target.transform.position.x;
	gameObject.transform.position.z = target.transform.position.z;
}