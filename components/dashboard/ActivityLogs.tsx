"use client";

import { useEffect, useRef, useState } from "react";

type Log = {
  id: number;
  message: string;
  type: "info" | "success" | "error";
  time: string;
};

export default function ActivityLogs() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [status, setStatus] = useState<"connecting" | "connected" | "error">(
    "connecting"
  );

  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    let retryTimeout: NodeJS.Timeout;

    const connect = () => {
      const ws = new WebSocket("ws://0.0.0.0:8000/ws/logs");
      wsRef.current = ws;

      setStatus("connecting");

      ws.onopen = () => {
        console.log("Logs connected");
        setStatus("connected");
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        const newLog: Log = {
          id: Date.now(),
          message: data.message,
          type: data.type,
          time: new Date().toLocaleTimeString(),
        };

        setLogs((prev) => [newLog, ...prev].slice(0, 20));
      };

      ws.onerror = () => {
        console.log("WebSocket error");
        setStatus("error");
      };

      ws.onclose = () => {
        console.log("Logs disconnected");
        setStatus("error");

        retryTimeout = setTimeout(connect, 2000);
      };
    };

    connect();

    return () => {
      wsRef.current?.close();
      clearTimeout(retryTimeout);
    };
  }, []);

  return (
    <div className="h-full flex flex-col">
      
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-blue-400 text-sm">
          ACTIVITY / LOGS
        </h2>

        <span
          className={`text-[10px] px-2 py-1 rounded ${
            status === "connected"
              ? "bg-green-900 text-green-400"
              : status === "connecting"
              ? "bg-yellow-900 text-yellow-400"
              : "bg-red-900 text-red-400"
          }`}
        >
          {status.toUpperCase()}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {logs.length === 0 && (
          <div className="text-gray-500 text-xs">
            {status === "connected"
              ? "No logs yet..."
              : "Connecting to server..."}
          </div>
        )}

        {logs.map((log) => (
          <div
            key={log.id}
            className="text-xs p-2 rounded-lg bg-[#020617] border border-slate-800 flex justify-between items-center"
          >
            <span
              className={`${
                log.type === "success"
                  ? "text-green-400"
                  : log.type === "error"
                  ? "text-red-400"
                  : "text-gray-300"
              }`}
            >
              {log.message}
            </span>

            <span className="text-gray-500 text-[10px]">
              {log.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}