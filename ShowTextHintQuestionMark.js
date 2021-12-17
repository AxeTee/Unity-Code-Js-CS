#pragma strict
import UnityEngine.UI;

var ShowGUI: boolean = false;
var levelToLoad : String;

function OnTriggerEnter()
{
	ShowGUI = true;
	if(ShowGUI == true)
	{
		OnGUI();
	}
}

function OnTriggerExit()
{
	ShowGUI = false;
}

function OnGUI()
{
	if(ShowGUI == true)
	{
		GUI.Label(Rect(500,400,150,240),"Should you press the \n enter button this will test your knowledge on character data types");
		if(Input.GetKeyDown(KeyCode.Return))//or use  Input.GetButtonDown("[Enter]")
		{
			Application.LoadLevel(levelToLoad);
		}
		if(Input.GetButtonDown("Return"))
		{
			Application.LoadLevel(levelToLoad);
		}
	}
}