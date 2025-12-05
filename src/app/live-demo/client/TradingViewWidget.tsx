'use client';

import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
  interval?: string;
}

function TradingViewWidget({ symbol = "OANDA:XAUUSD", interval = "D" }: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      // Clear previous widget
      container.current.innerHTML = '';
      
      // Create widget container
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'tradingview-widget-container__widget';
      widgetDiv.style.height = 'calc(100% - 32px)';
      widgetDiv.style.width = '100%';
      container.current.appendChild(widgetDiv);

      // Create copyright
      const copyrightDiv = document.createElement('div');
      copyrightDiv.className = 'tradingview-widget-copyright';
      copyrightDiv.style.cssText = 'font-size: 11px; color: #6b7280; text-align: center; padding: 4px;';
      copyrightDiv.innerHTML = '<a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank" style="color: #3b82f6; text-decoration: none;"><span>Track all markets on TradingView</span></a>';
      container.current.appendChild(copyrightDiv);

      // Create script
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "allow_symbol_change": true,
          "calendar": false,
          "details": false,
          "hide_side_toolbar": true,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": false,
          "interval": "${interval}",
          "locale": "en",
          "save_image": true,
          "style": "1",
          "symbol": "${symbol}",
          "theme": "light",
          "timezone": "Etc/UTC",
          "backgroundColor": "#ffffff",
          "gridColor": "rgba(46, 46, 46, 0.06)",
          "watchlist": [],
          "withdateranges": false,
          "compareSymbols": [],
          "studies": [],
          "autosize": true
        }`;
      container.current.appendChild(script);
    }
  }, [symbol, interval]);

  return (
    <div 
      className="tradingview-widget-container" 
      ref={container} 
      style={{ height: "100%", width: "100%" }}
    />
  );
}

export default memo(TradingViewWidget);
