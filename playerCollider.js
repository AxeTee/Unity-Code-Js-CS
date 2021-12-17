#pragma strict

private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0;
private var currentDoor : GameObject;
var doorOpenTime : float = 3.0;
static var collectedBattery: int = 0;
//var doorOpenSound : AudioClip;
//var doorShutSound : AudioClip;


function Update()
{
	if(doorIsOpen)
	{
		doorTimer += Time.deltaTime;
	}	
	if(doorTimer > 3)
	{
		shutDoor();
		doorTimer = 0.0;
	}
}
function OpenDoor()
{
	//audio.PlayOneShot(doorOpenSound);
	doorIsOpen = true;
	var myOutpost : GameObject = GameObject.Find("outpost");
	myOutpost.animation.Play("dooropen");
}

function OnControllerColliderHit(hit: ControllerColliderHit)
{
	if(hit.gameObject.tag == "outpostDoor" && doorIsOpen == false && collectedBattery == 4)
	{
		OpenDoor();
	}
}

function shutDoor()
{
	//audio.PlayOneShot(doorShutSound);
	doorIsOpen = false;
	var myOutpost : GameObject = GameObject.Find("outpost");
	myOutpost.animation.Play("doorshut");
}

function OnTriggerEnter(collisionInfo : Collider)
{	
	if(collisionInfo.gameObject.tag == "battery")
	{		
		collectedBattery++;	
		//audio.PlayOneShot(batteryCollect);		
		Destroy(collisionInfo.gameObject);		
	}
}

/*function Door(aClip : AudioClip, openCheck : boolean, animName :
String, thisDoor : GameObject)
{
	//audio.PlayOneShot(aClip);
	doorIsOpen = openCheck;
	thisDoor.transform.parent.animation.Play(animName);
}
@script RequireComponent(AudioSource)*/