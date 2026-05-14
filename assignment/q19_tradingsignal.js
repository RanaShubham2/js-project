// Q25. Build a stock trading signal system: Based on price change %, volume, and RSI indicator — generate
// Buy/Hold/Sell signal.

// Stock Trading Signal System

function tradingSignal(priceChange, volume, rsi) {

    // Buy Signal
    if (priceChange > 0 && volume > 10000 && rsi < 30) {
        console.log("Signal: BUY");
    }

    
    else if (priceChange < 0 && rsi > 70) {
        console.log("Signal: SELL");
    }

  
    else {
        console.log("Signal: HOLD");
    }
}


tradingSignal(5, 20000, 25);   

tradingSignal(-3, 15000, 80);  

tradingSignal(1, 5000, 50);    