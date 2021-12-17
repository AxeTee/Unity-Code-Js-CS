#pragma strict

var UserAnswer : String;
var inputField : UnityEngine.UI.InputField;
var displayAnswer : UnityEngine.UI.Text;
var player : GameObject;
var  myloadTolevel: String;
var rightSound : AudioClip;
var wrongSound : AudioClip;
var cahrAns : char;

function Update(){
	UserAnswer = inputField.text;
	
	if(Input.GetKeyDown(KeyCode.Return))
	{if(inputField != "")
		{
			displayAnswer.text = UserAnswer;
			Debug.Log(displayAnswer);
			
			if(UserAnswer == "b")
			{
				displayAnswer.text = "Correct !!";
				audio.PlayOneShot(rightSound);
				LoadNext();
			}
			else
			{
				displayAnswer.text = "incorrect";
				audio.PlayOneShot(wrongSound);
			}
			
		}
		else
		{
			displayAnswer.text = "Please enter an answer";
		}
		
	}
}

function LoadNext(){
	
	yield WaitForSeconds(3f);
	
	Application.LoadLevel(myloadTolevel);
}

