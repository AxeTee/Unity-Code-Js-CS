using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PickupObjects : MonoBehaviour
{
    public Transform cubePos;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(KeyCode.Mouse0))
        {
            Debug.Log("Click Down");
            RaycastHit hit;
            Ray forwardRay = new Ray(this.transform.position, transform.forward);

            if(Physics.Raycast(forwardRay, out hit, 5f))
            {
                Debug.Log(hit.collider.name);
                if(hit.collider.gameObject.tag == "pickup")
                {
                    hit.collider.gameObject.transform.position = cubePos.position;
                }
            }
        }

        if(Input.GetKeyUp(KeyCode.Mouse0))
        {
            Debug.Log("Click Up");
        }
    }
}
