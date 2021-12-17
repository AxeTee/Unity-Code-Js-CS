using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StairsPuzzle : MonoBehaviour
{
    public GameObject stairs;

    void Start()
    {
        stairs.SetActive(false);
    }

    public void ActivateStairs()
    {
        stairs.SetActive(true);
    }
}
