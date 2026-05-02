"use client";

export default function Header() {
  return (
    <div className="w-full bg-slate-950 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      
      <div className="text-white text-lg font-semibold">
        Robotic Arm Dashboard
      </div>

      <div className="flex items-center gap-6 text-sm">
        
        <div className="text-green-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Connected
        </div>

        <div className="text-gray-400">
          192.168.1.10
        </div>

      </div>
    </div>
  );
}