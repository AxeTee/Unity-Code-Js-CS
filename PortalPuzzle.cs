using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PortalPuzzle : MonoBehaviour
{
    public GameObject portal;

    public bool pinkObjectBool = false;
    public bool blueObjectBool = false;
    public bool greenObjectBool = false;

    void Start()
    {
        portal.SetActive(false);
    }

    public void CheckAllCollected()
    {
        if(pinkObjectBool && blueObjectBool && greenObjectBool)
        {
            portal.SetActive(true);
        }
    }
}
