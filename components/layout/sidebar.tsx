"use client";

import {
  LayoutDashboard,
  Gamepad2,
  Bookmark,
  Camera,
  Settings,
  Info,
  Cpu,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#0b1220] text-white p-5 border-r border-blue-500/20 flex flex-col justify-between">
      
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Cpu className="text-blue-400" />
          <div>
            <h1 className="text-sm font-bold tracking-wide">
              ROBOTIC ARM
            </h1>
            <p className="text-xs text-blue-400">
              CONTROL PANEL
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          
          <NavItem
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            active
          />

          <NavItem
            icon={<Gamepad2 size={18} />}
            label="Manual Control"
          />

          <NavItem
            icon={<Bookmark size={18} />}
            label="Presets"
          />

          <NavItem
            icon={<Camera size={18} />}
            label="Live Feed"
          />

          <NavItem
            icon={<Settings size={18} />}
            label="Settings"
          />

          <NavItem
            icon={<Info size={18} />}
            label="About"
          />
        </div>
      </div>

      <div className="rounded-xl border border-blue-500/20 p-4 bg-blue-900/10 backdrop-blur">
        
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          ESP32 Status
        </div>

        <div className="text-green-400 font-semibold text-lg mb-3">
          Connected
        </div>

        <div className="text-xs text-gray-400">IP Address</div>
        <div className="text-sm mb-2">192.168.1.10</div>

        <div className="text-xs text-gray-400">Uptime</div>
        <div className="text-sm">00:12:45</div>
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200
      ${
        active
          ? "bg-blue-600/20 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          : "text-gray-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}