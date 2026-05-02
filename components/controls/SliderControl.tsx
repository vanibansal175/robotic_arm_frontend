"use client"

type Props = {

    label: string;
    value: number;
    onChange: (val : number) => void;
}


export default function SliderControl({label, value, onChange }: Props ){
    return (
        <div className="mb-6">
  
            <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{label}</span>
                <span className="text-blue-400">{value}°</span>
            </div>

            <input
                type="range"
                min="0"
                max="180"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full cursor-pointer"
            />

            <div className="flex justify-between text-xs text-gray-500">
                <span>0°</span>
                <span>180°</span>
            </div>

        </div>
    );
}