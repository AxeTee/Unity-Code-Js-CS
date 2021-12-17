using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SwitchPanoramas : MonoBehaviour
{
    public GameObject currentPano;
    public GameObject switchToThisPano;

    public void Switch()
    {
        switchToThisPano.SetActive(true);
        currentPano.SetActive(false);
    }
}
