#pragma strict
import UnityEngine.UI;
//declare variables
var levelToLoad : String;
var Exit : boolean = false;

function changeScene()
{
		if(Exit){
			Application.Quit();
		}
		else{
			Application.LoadLevel(levelToLoad);
		}
}