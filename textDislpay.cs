using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class display : MonoBehaviour {
	
	//public string myString;
	public Text myText;
	public float fadeTime;
	public bool displayInfo;

	void Start() {
		myText = GameObject.Find ("txtQuestionHint").GetComponent<Text> ();
		myText.color = Color.clear;
	}

	/*void Update () 
	{
		FadeText ();
		if (Input.GetKeyDown (KeyCode.Escape)) 
                {
                        Screen.lockCursor = false;
                }

	}*/
	
	void OnControllerColliderHit(ControllerColliderHit hit )
	{
				
		if(hit.gameObject.tag == "Qust1") 
		{
			displayInfo = true;
		}
		FadeText(); 
	}
	
	void FadeText()
		
	{
		if(displayInfo == true)
		{
			myText.text = "You must press enter in order to take a quiz to test your knowledge on Integers";
			myText.color = Color.Lerp(myText.color, Color.white, fadeTime * Time.deltaTime);
		}
		
		else
		{
			myText.color = Color.Lerp(myText.color, Color.clear, fadeTime * Time.deltaTime);
		}
		
	}
	
	
}