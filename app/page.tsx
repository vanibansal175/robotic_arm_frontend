"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/Header";
import ControlPanel from "@/components/controls/ControlPanel";
import StatusCard from "@/components/dashboard/StatusCard";
import ActionButtons from "@/components/dashboard/ActionButtons";
import RoboticArm3D from "@/components/visualization/RoboticArm3D"; 
import ActivityLogs from "@/components/dashboard/ActivityLogs";

export default function Home() {

  const [angles, setAngles] = useState({
      base: 90,
      shoulder: 90,
      elbow: 90,
      wristTilt: 90,
      wristRotation: 90,
      gripper: 20,
    });

  return (
    <div className="flex h-[100dvh] bg-[#020617] text-white overflow-hidden">
      
      <Sidebar />

      <div className="flex flex-col flex-1">

        <Header />

        <div className="p-4 flex flex-col gap-4 flex-1 overflow-hidden">

          <div className="grid grid-cols-5 gap-3">
            {["Power", "Current", "Temperature", "Wi-Fi", "Servos"].map(
              (item, i) => (
                <div
                  key={i}
                  className="bg-[#031029] border border-slate-800 rounded-xl p-3 text-sm flex flex-col justify-center"
                >
                  <span className="text-gray-400 text-xs">{item}</span>
                  <span className="text-green-400 font-semibold text-sm">
                    {i === 0 && "12.1 V"}
                    {i === 1 && "1.25 A"}
                    {i === 2 && "32 °C"}
                    {i === 3 && "-45 dBm"}
                    {i === 4 && "6 / 6"}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="grid grid-cols-5 gap-4 flex-1 min-h-0">

            <div className="col-span-2 flex flex-col gap-4 min-h-0">

              <div className="bg-[#031029] border border-slate-800 rounded-xl overflow-y-auto max-h-[55%]">
                <ControlPanel angles={angles} setAngles={setAngles} />
              </div>

              <div className="bg-[#031029] border border-slate-800 rounded-xl flex-1 overflow-hidden">
                <ActionButtons />
              </div>

            </div>

            <div className="col-span-2 bg-[#031029] border border-slate-800 rounded-xl p-4 flex flex-col min-h-0">

              <h2 className="text-blue-400 text-sm mb-2">
                3D VISUALIZATION
              </h2>

              <div className="flex-1 rounded-lg overflow-hidden">
                <RoboticArm3D angles={angles} />
              </div>

            </div>

            <div className="col-span-1 flex flex-col gap-4 min-h-0">

              <div className="bg-[#031029] border border-slate-800 rounded-xl">
                <StatusCard />
              </div>

              <div className="bg-[#031029] border border-slate-800 rounded-xl p-4 flex-1 text-gray-500 text-sm">
                <div className="bg-[#031029] border border-slate-800 rounded-xl p-4 flex-1 overflow-hidden">
                  <ActivityLogs />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}