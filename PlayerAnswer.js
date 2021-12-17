#pragma strict
import UnityEngine.UI;

static var charge : int = 0;
var Answer : RawImage;
var charge1tex : Texture2D; 
var charge2tex : Texture2D; 
var charge3tex : Texture2D; 
var charge4tex : Texture2D; 
var charge0tex : Texture2D;


function Start () {
	Answer.enabled = true;
	charge = 0;
}

function Update () {
	
	if(charge == 1){  
		Answer.texture = charge1tex;  
		 Answer.enabled = true;
	}
	else if(charge == 2){    
		Answer.texture = charge2tex;  
	}  
	else if(charge == 3){    
		Answer.texture = charge3tex;  
	}  
	else if(charge >= 4){    
		Answer.texture = charge4tex;  
	}
	else{  
		Answer.texture = charge0tex; 
	}	  
		   
}