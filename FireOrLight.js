#pragma strict
var varLight : Light;
var box : GameObject;

function Start () {

varLight.enabled = false;
}
function OnTriggerEnter(game: Collider)
{
	if(game.gameObject.tag =="lightOn")
	{
		varLight.enabled = true;
		//clone = Instantiate(projectile, transform.position, transform.rotation);
		//var clone : Rigidbody;
		Instantiate(box, transform.position, transform.rotation);
	}
	else if(game.gameObject.tag =="lightOff")
	{
		varLight.enabled = false;
	}
}
//


function Update () {

}