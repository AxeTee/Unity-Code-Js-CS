using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraRotate : MonoBehaviour
{
    public GameObject x;
    public GameObject y;
    public GameObject myGameObj;
    public float speed = 2f;

    void Update()
    {
        RotateCamera();
    }

    void RotateCamera()
    {
        if (Input.GetMouseButton(0))
        {
            x.transform.RotateAround(myGameObj.transform.position,
                                            x.transform.up,
                                            -Input.GetAxis("Mouse X") * speed);

            y.transform.RotateAround(myGameObj.transform.position,
                                            y.transform.right,
                                            Input.GetAxis("Mouse Y") * speed);
        }
    }
}
