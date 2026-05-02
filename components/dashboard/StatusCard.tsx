"use client";

export default function StatusCard(){
    return (
        <div className="card-glow p-5 rounded-2xl">
            <h3 className="title-blue mb-4">SYSTEM STATUS</h3>

            <div className="space-y-3 text-sm text-gray-300">

                <div className="flex justify-between">
                <span>Power</span>
                <span className="text-green-400">ON</span>
                </div>

                <div className="flex justify-between">
                <span>Temperature</span>
                <span>32°C</span>
                </div>

                <div className="flex justify-between">
                <span>Current</span>
                <span>1.25A</span>
                </div>

                <div className="flex justify-between">
                <span>Wi-Fi</span>
                <span className="text-green-400">Connected</span>
                </div>
            </div>
        </div>
    );
}