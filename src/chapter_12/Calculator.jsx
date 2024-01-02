import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";


function toCelsius(fahrenheit) { //화씨에서 섭씨로 변환
    return (fahrenheit - 32) * 5 / 9;
}



function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}




function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (event) => {
        setTemperature(event.target.value);
        setScale('c');
    }

    const handleFahrenheitChange = (event) => {
        setTemperature(event.target.value);
        setScale('f');
    }

   
    
    
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
   
    
    
    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;