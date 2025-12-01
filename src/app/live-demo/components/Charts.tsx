'use client';

import React from 'react';

interface ChartProps {
    data: number[];
    color: string;
    height?: number;
    width?: string;
    fillOpacity?: number;
}

export function AreaChart({ data, color, height = 60, width = "100%", fillOpacity = 0.1 }: ChartProps) {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;

    const points = data.map((val, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((val - min) / range) * 100;
        return `${x},${y}`;
    }).join(' ');

    const fillPath = `0,100 ${points} 100,100`;

    return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width, height, overflow: 'visible' }}>
            <defs>
                <linearGradient id={`gradient-${color}`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={fillOpacity + 0.2} />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path
                d={`M ${fillPath}`}
                fill={`url(#gradient-${color})`}
                stroke="none"
            />
            <polyline
                points={points}
                fill="none"
                stroke={color}
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function BarChart({ data, color, height = 40, width = "100%" }: ChartProps) {
    const max = Math.max(...data);

    return (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height, width }}>
            {data.map((val, i) => (
                <div
                    key={i}
                    style={{
                        flex: 1,
                        height: `${(val / max) * 100}%`,
                        backgroundColor: color,
                        opacity: 0.8,
                        borderRadius: '2px 2px 0 0',
                        transition: 'height 0.3s ease'
                    }}
                />
            ))}
        </div>
    );
}

export function TrendIndicator({ value }: { value: number }) {
    const isPositive = value >= 0;
    const color = isPositive ? '#10B981' : '#EF4444';

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color, fontSize: '0.75rem', fontWeight: 600 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {isPositive ? (
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                ) : (
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                )}
                {isPositive ? <polyline points="17 6 23 6 23 12" /> : <polyline points="17 18 23 18 23 12" />}
            </svg>
            <span>{Math.abs(value)}%</span>
        </div>
    );
}
