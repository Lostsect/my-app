import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다`}</h1>
            {/* `` esc 밑에 있는 이 표시를 이용하여 jsx에서 글씨를 쓸수 있음 */}
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    );
}

export default Book;
// Book이라는 컴포넌트를 하나 만들었음