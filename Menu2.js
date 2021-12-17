#pragma strict

var mySkin:GUISkin;
var xSide:float;
var ySide:float;
var myClip:AudioClip;

function OnGUI()
{
	GUI.skin=mySkin;
	var sideX=((Screen.width*0.5)-(xSide*0.5));
	var sidey=((Screen.width*0.5)-(ySide*0.5));
	
	GUILayout.BeginArea(Rect(xSide,ySide,sideX,sidey));
	
	if(GUILayout.Button("Play"))
	{
		Openlevel("Scene1");
	}
	else if(GUILayout.Button("Instructions"))
	{
		Openlevel("Instructions");
	}
	else if(GUILayout.Button("Exit"))
	{
		Application.Quit();
	}
	GUILayout.EndArea();
}

function Openlevel(level:String)
{
	audio.PlayOneShot(myClip);
	yield WaitForSeconds(0.35);
	Application.LoadLevel(level);
}
@script RequireComponent(AudioSource)