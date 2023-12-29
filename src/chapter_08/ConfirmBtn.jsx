import React, { useState } from "react";

// <------------함수 컴포넌트 문법------------>
function ConfirmBtn(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled = {isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}



export default ConfirmBtn;