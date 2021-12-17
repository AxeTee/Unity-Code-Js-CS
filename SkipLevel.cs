	// When the audio component has stopped playing, play otherClip
using UnityEngine;
using System.Collections;

public class SkipLevel: MonoBehaviour {
    public AudioClip otherClip;
    AudioSource audio;
    
    void Start() {
    	audio = GetComponent<AudioSource>();
    }
    
    void Update() {
        if (!audio.isPlaying) {
            audio.clip = otherClip;
            audio.Play();
        }
    }
}