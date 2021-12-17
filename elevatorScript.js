#pragma strict

function Start () {

}

function Update () {

}

function OnControllerColliderHit(enter: ControllerColliderHit)
{
	if(enter.gameObject.name == "upEle")
	{
		var myOutpost : GameObject = GameObject.Find("upEle");
		myOutpost.animation.Play("go up");
	}
}

