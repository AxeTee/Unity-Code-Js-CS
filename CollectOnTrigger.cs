using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollectOnTrigger : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if(other.tag == "Player")
        {
            switch (this.gameObject.tag)
            {
                case "blue":
                    FindObjectOfType<PortalPuzzle>().blueObjectBool = true;
                    Destroy(this.gameObject);
                    break;

                case "pink":
                    FindObjectOfType<PortalPuzzle>().pinkObjectBool = true;
                    Destroy(this.gameObject);
                    break;

                case "green":
                    FindObjectOfType<PortalPuzzle>().greenObjectBool = true;
                    Destroy(this.gameObject);
                    break;

                default:
                    break;
            }
            FindObjectOfType<PortalPuzzle>().CheckAllCollected();
        }
    }
}
