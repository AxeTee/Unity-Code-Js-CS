 import UnityEngine.UI;
#pragma strict
var TimeLeft : float;
var myString: String;

 (renderer.material.mainTexture as MovieTexture).Play();

 function Update()
{
	TimeLeft -= Time.deltaTime;
	if(TimeLeft <= 0)
	{
		Application.LoadLevel(myString);
	}
	
}