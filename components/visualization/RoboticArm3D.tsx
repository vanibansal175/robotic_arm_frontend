"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RobotModel from "./RobotModel";

export default function RoboticArm3D() {
  return (
    <div className="w-full h-full bg-black rounded-lg">
      <Canvas camera={{ position: [5, 3, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />

        <RobotModel />

        <OrbitControls />
      </Canvas>
    </div>
  );
}