#pragma strict
var signiNFO: Canvas;

function Start(){
	signiNFO.renderMode = RenderMode.WorldSpace;
}

function Update(){
	if(Input.GetKeyDown("i"))
	{
		signiNFO.renderMode = RenderMode.ScreenSpaceOverlay;
	}
	if(Input.GetKeyUp("i"))
	{
		signiNFO.renderMode = RenderMode.WorldSpace;
	}
}

