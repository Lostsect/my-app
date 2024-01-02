import React, {useState} from "react";

function Cnt (props) {
    const [ count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            {/* {count && <h1>현재 카운트: {count}</h1>} */}
                    {/* 위 아래가 같은 동작을 함 */}
            {count ? <h1>현재 카운트: {count}</h1> : "" }
            <button onClick={increaseCount}>증가</button>
        </div>
    );
}

export default Cnt;
