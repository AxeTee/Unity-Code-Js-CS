using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollectOnTriggerOrderPuzzle : MonoBehaviour
{
    void Start()
    {
        this.gameObject.GetComponent<MeshRenderer>().enabled = false;
        this.gameObject.GetComponent<BoxCollider>().enabled = false;
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.tag == "Player")
        {
            switch (this.gameObject.tag)
            {
                case "blue":
                    FindObjectOfType<OrderPuzzle>().blueObjectBool = true;
                    this.gameObject.SetActive(false);
                    break;

                case "pink":
                    FindObjectOfType<OrderPuzzle>().pinkObjectBool = true;
                    this.gameObject.SetActive(false);
                    break;

                case "green":
                    FindObjectOfType<OrderPuzzle>().greenObjectBool = true;
                    this.gameObject.SetActive(false);
                    break;

                default:
                    break;
            }
            FindObjectOfType<OrderPuzzle>().CheckOrder(this.gameObject);
        }
    }
}
