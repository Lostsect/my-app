import React, {useRef} from "react";

function TextInputWithFocusButton (props) {
    const inputElem = useRef(null);

    const onButtonClick = () => {
        // current는 마운트된 input element를 가리킴
        inputElem.current.focus();
    }


return (
    <> {/* <--- 일종의 가상의 돔을 만들어 내는 표기 */}
        <input ref={inputElem} type="text"></input>
        <button onClick={onButtonClick}>Focus the input</button>
    </>
);
}

export default TextInputWithFocusButton;