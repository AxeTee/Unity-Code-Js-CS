#pragma strict

function Start () {

}

function Update () {

}
function OnTriggerEnter(collisionInfo : Collider)
{	
	if(collisionInfo.gameObject.tag == "trap")
	{		
		playerCollider.collectedBattery--;	
		
	}
}