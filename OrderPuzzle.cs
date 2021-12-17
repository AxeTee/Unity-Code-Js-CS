using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OrderPuzzle : MonoBehaviour
{
    public GameObject portal;

    public bool pinkObjectBool = false;
    public bool blueObjectBool = false;
    public bool greenObjectBool = false;

    public GameObject[] collectables;

    private int index = 0;

    private Coroutine co;

    void Start()
    {
        portal.SetActive(false);
        SapwnCollectables();
    }

    void SapwnCollectables()
    {
        pinkObjectBool = false;
        blueObjectBool = false;
        greenObjectBool = false;

        for (int i = 0; i < collectables.Length; i++)
        {
            collectables[i].SetActive(true);
            collectables[i].GetComponent<MeshRenderer>().enabled = true;
            collectables[i].GetComponent<BoxCollider>().enabled = true;
        }
        index = 0;
    }

    public void CheckOrder(GameObject collectable)
    {
        if(collectable == collectables[index])
        {
            index++;
            if (pinkObjectBool && blueObjectBool && greenObjectBool)
            {
                portal.SetActive(true);
            }
        }
        else
        {
            if(co == null)
            {
                co = StartCoroutine(RespawnObjects());
            }
            else if(co != null)
            {
                StopCoroutine(co);
                co = StartCoroutine(RespawnObjects());
            }
        }
    }

    IEnumerator RespawnObjects()
    {
        yield return new WaitForSeconds(3f);
        SapwnCollectables();
    }
}