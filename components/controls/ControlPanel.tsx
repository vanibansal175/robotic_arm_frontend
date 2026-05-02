"use client";

import SliderControl from "./SliderControl";

export default function ControlPanel({ angles, setAngles }: any) {

  const updateAngle = (joint: string, value: number) => {
    setAngles((prev: any) => ({
      ...prev,
      [joint]: value,
    }));
  };

  const sendJoint = async (joint: string, value: number) => {
    try {
      await fetch("http://0.0.0.0:8000/actions/move", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ joint, value }),
      });
    } catch (err) {
      console.error("API error:", err);
    }
  };

  const handleChange = (joint: string, value: number) => {
    updateAngle(joint, value);
    sendJoint(joint, value);
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      
      <h2 className="text-white text-lg font-semibold mb-4">
        Manual Control
      </h2>

      <SliderControl
        label="Base Rotation"
        value={angles.base}
        onChange={(val) => handleChange("base", val)}
      />

      <SliderControl
        label="Shoulder"
        value={angles.shoulder}
        onChange={(val) => handleChange("shoulder", val)}
      />

      <SliderControl
        label="Elbow"
        value={angles.elbow}
        onChange={(val) => handleChange("elbow", val)}
      />

      <SliderControl
        label="Wrist Tilt"
        value={angles.wristTilt}
        onChange={(val) => handleChange("wristTilt", val)}
      />

      <SliderControl
        label="Wrist Rotation"
        value={angles.wristRotation}
        onChange={(val) => handleChange("wristRotation", val)}
      />

      <SliderControl
        label="Gripper"
        value={angles.gripper}
        onChange={(val) => handleChange("gripper", val)}
      />

    </div>
  );
}