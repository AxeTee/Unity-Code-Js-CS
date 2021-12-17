using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollectOnTriggerTimed : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Player")
        {
            switch (this.gameObject.tag)
            {
                case "blue":
                    FindObjectOfType<TimePuzzle>().blueObjectBool = true;
                    this.gameObject.SetActive(false);
                    break;

                case "pink":
                    FindObjectOfType<TimePuzzle>().pinkObjectBool = true;
                    this.gameObject.SetActive(false);
                    break;

                case "green":
                    FindObjectOfType<TimePuzzle>().greenObjectBool = true;
                    this.gameObject.SetActive(false);
                    break;

                default:
                    break;
            }
            FindObjectOfType<TimePuzzle>().CheckOrder(this.gameObject);
        }
    }
}
