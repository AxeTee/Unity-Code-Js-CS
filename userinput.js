#pragma strict

var UserAnswer : String;
var inputField : UnityEngine.UI.InputField;
var displayAnswer : UnityEngine.UI.Text;
var player : GameObject;
//var countLength : int ;
//var charAtTest : char;
function Update(){
	UserAnswer = inputField.text;
	
	if(Input.GetKeyDown(KeyCode.Return))
	{
		/**for (countLength = 0; countLength < UserAnswer.length; countLength++) 
		{ 
			charAtTest = UserAnswer[countLength];
			if(charAtTest != int)
			{
				displayAnswer.text = "Good";
			}else
			{
				displayAnswer.text = "bad";
			}
		}*/
		if(inputField != "")
		{
			displayAnswer.text = UserAnswer;
			Debug.Log(displayAnswer);
			//yield WaitForSeconds(1f);
			displayAnswer.text = "Correct !!";
			//yield WaitForSeconds(3f);
			LoadNext();
		}
		else
		{
			displayAnswer.text = "Please enter a answer";
		}
		
	}
}

function LoadNext(){
	
	yield WaitForSeconds(3f);
	
	Application.LoadLevel("StringCha2");
}

function Awake(){
		player   = new GameObject();
		player = transform.gameObject;
		gameObject.GetComponent("player");
		DontDestroyOnLoad(player);
	}
