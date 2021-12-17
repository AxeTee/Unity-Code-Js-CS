using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SwitchOffAtStart : MonoBehaviour
{
    void Awake()
    {
        this.gameObject.SetActive(false);
    }
}
