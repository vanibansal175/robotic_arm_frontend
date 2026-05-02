"use client";

import { Home, CheckCircle, Box, Download, StopCircle } from "lucide-react";

export default function ActionButtons() {

  const sendAction = async(action:string) => {
    try {
      await fetch(`http://0.0.0.0:8000/actions/${action}`, {
      method: "POST",
    });
    }
    catch (err) {
      console.error("API error",err);
    }
  };

  
  return (
    <div className="w-full h-full p-4 bg-[#0b1220] rounded-xl border border-blue-500/20">
      
      <h2 className="text-blue-400 text-sm font-semibold mb-4">
        QUICK ACTIONS
      </h2>

      <div className="grid grid-cols-4 gap-4 mb-4">
        
        <ActionCard
          label="Home"
          icon={<Home size={22} />}
          color="blue"
          onClick={() => sendAction("home")}
        />

        <ActionCard
          label="Ready"
          icon={<CheckCircle size={22} />}
          color="green"
          onClick={() => sendAction("ready")}
        />

        <ActionCard
          label="Pick"
          icon={<Box size={22} />}
          color="purple"
          onClick={() => sendAction("pick")}
        />

        <ActionCard
          label="Place"
          icon={<Download size={22} />}
          color="yellow"
          onClick={() => sendAction("place")}
        />
      </div>

      <button
        onClick={() => sendAction("stop")}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-lg
        border border-red-500/50 text-red-400 bg-red-900/20
        hover:bg-red-800/30 hover:shadow-[0_0_10px_rgba(255,0,0,0.5)]
        transition-all duration-200">
        
        <StopCircle size={18} />
        <span className="font-semibold tracking-wide">STOP ALL</span>
      </button>
    </div>
  );
}

function ActionCard({
  label,
  icon,
  color,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "purple" | "yellow";
  onClick?: () => void;
}) {
  const styles = {
    blue: "text-blue-400 border-blue-500/40 bg-blue-900/20 hover:shadow-[0_0_12px_rgba(59,130,246,0.6)]",
    green: "text-green-400 border-green-500/40 bg-green-900/20 hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]",
    purple: "text-purple-400 border-purple-500/40 bg-purple-900/20 hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]",
    yellow: "text-yellow-400 border-yellow-500/40 bg-yellow-900/20 hover:shadow-[0_0_12px_rgba(234,179,8,0.6)]",
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 
      h-24 rounded-xl border backdrop-blur-sm
      transition-all duration-200 hover:scale-105 ${styles[color]}`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}