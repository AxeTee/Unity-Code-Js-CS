#pragma strict
private var myString: String;
function Start () {

}

function Update () {

}

function OnControllerColliderHit(hit: ControllerColliderHit)
{
	if(hit.gameObject.tag == "Qust1")
	{
		TextHint.message = "Please press enter to continue to the character data type quest";
		TextHint.textOn = true;
	}
	if(hit.gameObject.name == "PivotDoor001")
		{
			Application.LoadLevel(myString);
			//Destroy(myTrigger.gameObject); 
		}
}