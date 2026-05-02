"use client";

import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useEffect } from "react";
import * as THREE from "three";

export default function RobotModel() {
  const obj = useLoader(OBJLoader, "/models/robot.obj");

  useEffect(() => {
    obj.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#9ca3af", 
          metalness: 0.6,
          roughness: 0.4,
        });
      }
    });
  }, [obj]);

  return (
    <primitive
      object={obj}
      scale={0.1}   
      position={[-3, -5, 0]}
    />
  );
}