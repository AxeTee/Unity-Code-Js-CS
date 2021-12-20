using System.Collections;
using System.Collections.Generic;
using UnityEngine;
//cool 
public class ActivateOnTrigger : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "red")
        {
            FindObjectOfType<StairsPuzzle>().ActivateStairs();
        }
    }
}
