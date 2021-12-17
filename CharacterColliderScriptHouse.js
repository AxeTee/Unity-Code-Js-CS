import UnityEngine.UI;
#pragma strict

private var TimeLeft : float = 240;
private var CharPoints : int = 0;
var timer: Text;
var challengeComplete: Text;

var  myC1Text : Text ;
var  myHText : Text ;
var  myA1Text : Text ;
var  myR1Text : Text ;
var  myA2Text : Text ;
var  myC2Text : Text ;
var  myTText : Text ;
var  myEText : Text ;
var  myR2Text : Text ;
var tryagainSound : AudioClip;
var DoneSound : AudioClip;
var C1LetterCheck : boolean ;
var C2LetterCheck : boolean ;
var HLetterCheck : boolean ;
var A1LetterCheck : boolean ;
var A2LetterCheck : boolean ;
var ELetterCheck : boolean ;
var R1LetterCheck : boolean ;
var R2LetterCheck : boolean ;
var TLetterCheck : boolean;

function Start () {

}
function Update()
{
	TimeLeft -= Time.deltaTime;
	if(TimeLeft >= 0)
	{
		timer.text = "Time : " + TimeLeft.ToString("N0");
	}
	else //ask if user wants to try again but show new scene first
	{	//asking is going to be done on new scene
		Application.LoadLevel("Free World");
	}
}

function OnTriggerEnter(collisionInfo : Collider)
{
	TimeLeft -= Time.deltaTime;
	if(TimeLeft >= 0)
	{
		if(C1LetterCheck == false || TLetterCheck == false || C2LetterCheck == false ||
		   A1LetterCheck == false || A2LetterCheck == false || HLetterCheck == false || 
		   R1LetterCheck == false || R2LetterCheck == false || ELetterCheck == false)
		{
				if(collisionInfo.gameObject.tag == "C")
			{		
				Destroy(collisionInfo.gameObject);	
				C1LetterCheck = true;
				//audio.PlayOneShot(correctSound);
				myC1Text.text = "C"; 
			}
			else if(collisionInfo.gameObject.tag == "H")
			{
				Destroy(collisionInfo.gameObject);	
				CharPoints += 5;
				HLetterCheck = true;
				//audio.PlayOneShot(correctSound);
				myHText.text = "H";
			}
			else if(collisionInfo.gameObject.tag == "A")
			{		
				Destroy(collisionInfo.gameObject);	
				CharPoints += 5;
				A1LetterCheck = true;
				//audio.PlayOneShot(correctSound);
				myA1Text.text = "A";
			}
			else if(collisionInfo.gameObject.tag == "R")
			{
				Destroy(collisionInfo.gameObject);	
				CharPoints += 5;
				R1LetterCheck = true;
				//audio.PlayOneShot(correctSound);
				myR1Text.text = "R";
			}
			else if(collisionInfo.gameObject.tag == "A2")
			{		
				Destroy(collisionInfo.gameObject);	
				CharPoints += 5;
				A2LetterCheck = true;
				//audio.PlayOneShot(correctSound);
				myA2Text.text = "A";
			}
			else if(collisionInfo.gameObject.tag == "C2")
			{		
				Destroy(collisionInfo.gameObject);	
				C2LetterCheck = true;
				//audio.PlayOneShot(correctSound);
				myC2Text.text = "C";
			}
			else if(collisionInfo.gameObject.tag == "T")
			{		
				Destroy(collisionInfo.gameObject);	
				TLetterCheck = true;
				//audio.PlayOneShot(correctSound);
				myTText.text = "T";
			}
			else if(collisionInfo.gameObject.tag == "E")
			{
				Destroy(collisionInfo.gameObject);	
				ELetterCheck = true;
				//audio.PlayOneShot(correctSound);
				myEText.text = "E";
			}
			else if(collisionInfo.gameObject.tag == "R2")
			{
				Destroy(collisionInfo.gameObject);	
				R2LetterCheck = true;
				//audio.PlayOneShot(correctSound);
				myR2Text.text = "R";
			}
		}
		if(C1LetterCheck == true && TLetterCheck == true && C2LetterCheck == true &&
				A1LetterCheck == true && A2LetterCheck == true && HLetterCheck == true && 
				R1LetterCheck == true && R2LetterCheck == true && ELetterCheck == true)
		{
			challengeComplete.text ="You have completed the challenge successfully";
			//audio.PlayOneShot(DoneSound);
			Application.LoadLevel("Free World");
			
		}
		if(collisionInfo.gameObject.tag == "number")
		{
			audio.PlayOneShot(tryagainSound);
		}

	}
	else //ask if user wants to try again but show new scene first
	{	//asking is going to be done on new scene
		Application.LoadLevel("CharacterOverScene");
	}
	
}