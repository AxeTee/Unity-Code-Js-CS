using UnityEngine;
using System.Collections;
[RequireComponent (typeof (AudioSource))]

public class video : MonoBehaviour 
{
	public MovieTexture movie;
	//public String mylevel;
	void start()
	{
		renderer.material.mainTexture = movie as MovieTexture;
		audio.clip = movie.audioClip;
		movie.Play();
		audio.Play();
	}
	
	void OnMouseDown()
	{
		movie.Stop();
		Application.LoadLevel("free world");
	}
	
	void Update()
	{
		if(!movie.isPlaying)
		{
			Application.LoadLevel("free world");
		}
	}
}