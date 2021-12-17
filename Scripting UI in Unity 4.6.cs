using UnityEngine;
using UnityEngine.UI;
using System.Collections;
 
public class fadeEffects : MonoBehaviour {
 
    public Text undeadText;
    public float fadeSpeed = 5f;
    public bool entrance;
    public GameObject undeadCemetery;
 
void Awake () 
 
        {
 
        undeadText = undeadCemetery.GetComponentInChildren<Text> ();
        undeadText.color = Color.clear;
 
        }
 
void Update () 
 
    {
        ColorChange();
    }
 
    void OnTriggerEnter (Collider col)
    {
        if (col.gameObject.tag == "Player")
                {
                        entrance = true;
                } 
 
    }
 
    void OnTriggerExit (Collider col)
    {
        if (col.gameObject.tag == "Player")
        {
            entrance = false;                       
 
        } 
 
    }
 
    void ColorChange () 
 
    {
 
    if (entrance)
        {
            undeadText.color = Color.Lerp (undeadText.color, Color.white, fadeSpeed * Time.deltaTime);
 
        }
 
    if (!entrance)
        {
            undeadText.color = Color.Lerp (undeadText.color, Color.clear, fadeSpeed * Time.deltaTime);
        }
 
}
}