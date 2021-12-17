using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class FadeToScene : MonoBehaviour {

	public Texture2D fadeOutTexture;
	public float fadespeed =0.9f;
	
	private int drawDepth = -1000;
	private float alpha = 1.0f;
	private int fadeDir = -1;
	
	void OnGui()
	{
		alpha += fadeDir * fadespeed * Time.deltaTime;
		alpha = Mathf.Clamp01(alpha);
		
		GUI.color = new Color (GUI.color.r, GUI.color.g, GUI.color.b, alpha);
		GUI.depth = drawDepth;
		GUI.DrawTexture(new Rect (0,0, Screen.width, Screen.height), fadeOutTexture);
		
		
	}
	
	public float BeginFade(int direction)
	{
		fadeDir = direction;
		return (fadespeed);
	}
	
	void OnLevelWasLoaded()
	{
		BeginFade(-1);
	}
}
