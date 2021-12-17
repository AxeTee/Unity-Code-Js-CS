#pragma strict
var BooleanSign : RawImage;
var BooleanNo :Texture2D;
var BooleanYes :Texture2D;
var IdlePic : Texture2D;
var points : int = 5;
var questionText : Text;
var pointsText :Text;
var boolText : Text;
var boolText1 : Text;
var boolText2 : Text;
var boolText3 : Text;
var boolText4 : Text;
var boolText5 : Text;

//declare particle objects
var signageHint1: ParticleSystem;
var signageHint2: ParticleSystem;
var signageHint3: ParticleSystem;
//var signageHint4: ParticleSystem;
var signageHint5: ParticleSystem;
var signageHint6: ParticleSystem;
//var signageHint7: ParticleSystem;
//booleans for count
var bool1: boolean = false;
var bool2: boolean = false;
var bool3: boolean = false;
var bool4: boolean = false;
var bool5: boolean = false;

//declare sound objects
var correctSound : AudioClip;
var wrongSound : AudioClip;
var DoneSound : AudioClip;

function Start () {
	questionText.text = "";
	boolText.text = "";
	pointsText.text = "Questions Left :" ;
	boolText1.text ="|";
	boolText2.text ="|";
	boolText3.text ="|";
	boolText4.text ="|";
	boolText5.text ="|";
	BooleanSign.enabled = true;
	signageHint1.enableEmission = true;
	signageHint2.enableEmission = true;
	signageHint3.enableEmission = true;
	//signageHint4.enableEmission = true;
	signageHint5.enableEmission = true;
	signageHint6.enableEmission = true;
	//signageHint7.enableEmission = true;
	BooleanSign.texture = IdlePic; 
}

function Update () {
	if(bool1 == true)
	{
		boolText1.text = "";
	}
	if(bool2 == true)
	{
		boolText2.text = "";
	}
	if(bool3 == true)
	{
		boolText3.text = "";
	}
	if(bool4 == true)
	{
		boolText4.text = "";
	}
	if(bool5 == true)
	{
		boolText5.text = "";
	}
	
}

function OnTriggerStay(trig : Collider)
{
	if(trig.gameObject.tag == "tree")
	{
		questionText.text = "Question: True or False,\n This tree has green leaves? \n Answer using the T button for true or the  F button for false.";
		if(Input.GetKeyDown("t"))
			{
				//which is the correct answer then give points
				
				bool1 = true;
				boolText.text = "CORRECT";
				audio.PlayOneShot(correctSound);
				BooleanSign.texture = BooleanYes;
				signageHint5.enableEmission = false;
			}
			else if(Input.GetKeyDown("f"))
			{//wrong answer
				BooleanSign.texture = BooleanNo; 
				boolText.text = "WRONG";
				audio.PlayOneShot(wrongSound);
			}
			yield WaitForSeconds(10f);
			questionText.text = "";
			boolText.text = "";
			BooleanSign.texture = IdlePic;
	}
	else if(trig.gameObject.tag == "tree2")
	{
		questionText.text = "Question: True Or False \n Is this tree suppose to be in the road? \n Answer using the T button for true or the  F button for false.";
		if(Input.GetKeyDown("t"))
			{//wrong answer
				BooleanSign.texture = BooleanNo; 
				boolText.text = "WRONG";
				audio.PlayOneShot(wrongSound);
			}
			else if(Input.GetKeyDown("f"))
			{
				//which is the correct answer then give points
				bool2 = true;
				boolText.text = "CORRECT";
				audio.PlayOneShot(correctSound);
				BooleanSign.texture = BooleanYes;
				signageHint2.enableEmission = false;
			}
			yield WaitForSeconds(10f);
			questionText.text = "";
			boolText.text = "";
			BooleanSign.texture = IdlePic;
	}
	else if(trig.gameObject.tag == "tree3")
	{
		questionText.text = "Question: True Or False \n This tree is smaller than all the other trees? \n Answer using the T button for true or the  F button for false.";
		if(Input.GetKeyDown("f"))
			{
				//wrong answer don't give points and show picture
				BooleanSign.texture = BooleanNo;
				boolText.text = "WRONG";
				audio.PlayOneShot(wrongSound);
			}
		else if(Input.GetKeyDown("t"))//which is the correct answer then give points
			{

				BooleanSign.texture = BooleanYes; 
				bool3 = true;
				boolText.text = "CORRECT";
				audio.PlayOneShot(correctSound);
				signageHint3.enableEmission = false;
			}
			
			yield WaitForSeconds(10f);
			questionText.text = "";
			boolText.text = "";
			BooleanSign.texture = IdlePic;
			
	}
	else if(trig.gameObject.tag == "tree4")
	{
		questionText.text = "Question: True Or False \n There is no street light next to this tree? \n Answer using the T button for true or the  F button for false.";
		if(Input.GetKeyDown("t"))
			{
				//wrong answer don't give points and show picture
				BooleanSign.texture = BooleanNo;
				boolText.text = "WRONG";
				audio.PlayOneShot(wrongSound);
			}
		else if(Input.GetKeyDown("f"))//which is the correct answer then give points
			{
				bool4 = true;
				BooleanSign.texture = BooleanYes; 
				boolText.text = "CORRECT";
				audio.PlayOneShot(correctSound);
				signageHint1.enableEmission = false;
			}
			
			yield WaitForSeconds(10f);
			questionText.text = "";
			boolText.text = "";
			BooleanSign.texture = IdlePic;

	}
	else if(trig.gameObject.tag == "streetlight")
	{
		questionText.text = "Question: True Or False\n This street light is on? \n Answer using the T button for true or the  F button for false.";
		if(Input.GetKeyDown("t"))
			{//wrong answer
				BooleanSign.texture = BooleanNo; 
				boolText.text = "WRONG";
				audio.PlayOneShot(wrongSound);
			}
			else if(Input.GetKeyDown("f"))
			{
				//which is the correct answer then give points
				boolText.text = "CORRECT";
				bool5 = true;
				audio.PlayOneShot(correctSound);
				BooleanSign.texture = BooleanYes;
				signageHint6.enableEmission = false;
			}
			yield WaitForSeconds(10f);
			questionText.text = "";
			boolText.text = "";
			BooleanSign.texture = IdlePic;
		
	}
	//Go to free world once player has collected all the points needed to complete the challenge
	if(signageHint1.enableEmission == false && signageHint2.enableEmission == false &&
		signageHint3.enableEmission == false /*&& signageHint4.enableEmission == false */&&
		signageHint5.enableEmission == false && signageHint6.enableEmission == false /*&&
		signageHint7.enableEmission == false*/)
	{
		questionText.text = "You have successfully completed this challenge";
		audio.PlayOneShot(DoneSound);
		yield WaitForSeconds(6f);
		Application.LoadLevel("Free World");
	}
	
}