/* Script Provided by Will Goldstone as part of Unity Game Development Essentials book assets */
/* Please Do Not Remove this comment - this script is for reference only */

//static var charge : int = 0;

var charge1tex : Texture2D;
var charge2tex : Texture2D;
var charge3tex : Texture2D;
var charge4tex : Texture2D;
var charge0tex : Texture2D;

function Start(){	
	guiTexture.enabled = false;	
	charge = 0;
}

function Update () {
	if(playerCollider.collectedBattery == 1){
		guiTexture.texture = charge1tex;
		guiTexture.enabled = true;
	}
	else if(playerCollider.collectedBattery == 2){
		guiTexture.texture = charge2tex;
	}
	else if(playerCollider.collectedBattery == 3){
		guiTexture.texture = charge3tex;
	}
	else if(playerCollider.collectedBattery == 4){
		guiTexture.texture = charge4tex;
	}
	else{
		guiTexture.texture = charge0tex;
		}
	
}