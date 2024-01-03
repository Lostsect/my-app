import React, { createContext, useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";


function fahrenheitToCelsius(fahrenheit) { //화씨에서 섭씨로 변환
    return (fahrenheit - 32) * 5 / 9;
}

function kelvinToCelsius(kelvin) { // 절대에서 섭씨로 변환
    return kelvin - 273;
}

function celsiusToFahrenheit(celsius) { //섭씨에서 화씨로 변환
    return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) { //섭씨에서 절대로 변환
    return celsius + 273;
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

    const handleKelvinChange = (event) => {
        setTemperature(event.target.value);
        setScale('k');
    }
    
    
    
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    switch(scale) {
        case 'c':
            celsius = temperature;
            fahrenheit = tryConvert(celsius, celsiusToFahrenheit);
            kelvin = tryConvert(celsius, celsiusToKelvin);
            break;

        case 'f':
            fahrenheit = temperature;
            celsius = tryConvert(fahrenheit, fahrenheitToCelsius);
            kelvin = tryConvert(celsius, celsiusToKelvin);
            break;

        case 'k':
            kelvin = temperature;
            celsius = tryConvert(kelvin, kelvinToCelsius);
            fahrenheit = tryConvert(celsius, celsiusToFahrenheit);
            break;
    }

    
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
            <TemperatureInput
                scale="k"
                temperature={kelvin}
                onTemperatureChange={handleKelvinChange}
            />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;