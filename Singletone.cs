using UnityEngine;
using System.Collections;

public class Singletone {

	protected Singletone(){}
	private static Singletone _instance = null;
	
	public static Singletone Instance {get {
		return Singletone._instance == null ?
			new Singletone() : Singletone._instance;
	}}
}
