import React, {useState} from "react";
import { flushSync } from "react-dom";

const scaleNames = {
    c: '섭씨',
    f: '화씨',
    k: '절대온도',
};

function TemperatureInput(props) {
    const {scale, temperature, onTemperatureChange} = props;
    

    return (
        <fieldset>
            <legend>온도를 입력해 주세요.(단위: {scaleNames[props.scale]})</legend>
            <input 
                value={props.temperature}
                onChange={onTemperatureChange} />
        </fieldset>
    );
}

export default TemperatureInput;