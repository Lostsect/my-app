import React from "react";

function Tick() {
    return (
        <div>
            <h1>안녕, 리엑트</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
                         {/* {} 이 표시로 자바 스크립트 문법을 사용가능하게 해줌  */}
        </div>
    )
}

export default Tick;