using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LookAtCamera : MonoBehaviour
{
    private Camera m_MainCamera;

    void Start()
    {
        m_MainCamera = Camera.main;
    }

    void Update()
    {
        transform.LookAt(m_MainCamera.transform.position);
    }
}
