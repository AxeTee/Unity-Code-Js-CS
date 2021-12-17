#pragma strict
import UnityEngine.UI;

//var myText :Text ;
var splashbar : Image ;
var counter : float = 0;
var myLevel : String;
function Start () {
	
	//myText.text = "loading textures";

	var level = Application.loadedLevelName;
	if (level)
	{
		yield WaitForSeconds(3f);
		Application.LoadLevel(myLevel);
	}
}

function Update () {
	counter += Time.deltaTime;
	splashbar.fillAmount = Mathf.Lerp(splashbar.fillAmount,1f,Time.deltaTime * 1f);
	/**if(counter >= 5)
	{
		myText.text = "loading AI";
	}
	else if(counter >= 3)
	{
		myText.text = "loading Scenes";
	}
	else if(counter >= 1)
	{
		myText.text = "loading miscellaneous";
	}*/
}