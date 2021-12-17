using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PanoramaManager : MonoBehaviour
{
    private Panorama[] panoramas;

    private 

    void Start()
    {

        panoramas = FindObjectsOfType<Panorama>(true);

        foreach (var item in panoramas)
        {
            item.gameObject.SetActive(true);
        }

        for (int i = 0; i < panoramas.Length; i++)
        {
            if(panoramas[i].mainPano == false)
            {
                panoramas[i].gameObject.SetActive(false);
            }
        }
    }
}
