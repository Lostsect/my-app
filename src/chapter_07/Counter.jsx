import React, {useState, useEffect} from "react";
            //   훅을 사용가능하게 해주는 파일을 같이 가져옴
function Counter(props) {
    const [count, setCount] = useState(0);
    // const [변수명, set함수명] = useState(초깃값);


    useEffect(() => {
            document.title = `총 ${count}번 클릭했습니다.`;
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            {/* 위에 훅을 이용해 state 값을 줬던 걸 set을 이용해 이어 줘야함 */}
        </div>
    );
}

export default Counter;