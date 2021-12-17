using UnityEngine;
using System.Collections;

public class LoadGame : MonoBehaviour {
	public string myLevel;
	//public AudioClip buttonPlayAudio;
	public void StartGameLevel ()
		
	{
		//audio.PlayOneShot(buttonPlayAudio);
		Application.LoadLevel (myLevel); 
	}
}
