using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System;

public class loadNewScene : MonoBehaviour {

	public string myString;
	public Text myText;

	void  OnTriggerEnter(Collider myTrigger){
		
		if(myTrigger.gameObject.name == "PivotDoor001")
		{
			Application.LoadLevel(myString);
				
		}
		else if(myTrigger.gameObject.tag == "StringQuest")
		{//load part 1 the string challenge
			Application.LoadLevel("StringMovieStart");
			Destroy(myTrigger.gameObject);
		}
			//enters scene where user must enter input
			else if(myTrigger.gameObject.tag == "StringChallenge")
			{
				Application.LoadLevel("String1Q");
				Destroy(myTrigger.gameObject);
			}
			else if(myTrigger.gameObject.tag == "StringChallenge1")
			{//load part 2 of string challenge
				Application.LoadLevel("StringQuest1");
				Destroy(myTrigger.gameObject);
			}
			else if(myTrigger.gameObject.tag == "StringChallenge2")
			{
				Application.LoadLevel("StringQuest2");
				Destroy(myTrigger.gameObject);
			}
			
		else if(myTrigger.gameObject.tag == "bool")
		{
			Application.LoadLevel("BooleanMovie");
			Destroy(myTrigger.gameObject);
		}
		else if (myTrigger.gameObject.tag == "Integer")
		{
			Application.LoadLevel("NumericMovie");
			Destroy(myTrigger.gameObject);
		}

		myText.text = "";
	}

}

	
	