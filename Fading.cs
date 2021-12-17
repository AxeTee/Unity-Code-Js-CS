using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Fading : MonoBehaviour {

	IEnumerator ChangeScene()
	{
		float fadeTime = GameObject.Find("3rd Person Controller").GetComponent<FadeToScene>().BeginFade(1);
		yield return new WaitForSeconds(fadeTime);
		Application.LoadLevel(Application.loadedLevel + 1);
	}
}
