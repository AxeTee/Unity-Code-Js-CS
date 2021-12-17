using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class LoadSceneAndExit : MonoBehaviour
{
    void Start()
    {
        
    }

    public void LoadSceneByName(string sceneName)
    {
        SceneManager.LoadScene("PickupTest");
    }
}
