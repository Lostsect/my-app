import React from "react";
// 리엑트의 기본 값을 가져옴(스타일 시트 같은 느낌)
import Book from "./Book";
// 만들어 놨던 Book이라는 컴포넌트를 불러옴

// props는 기본으로 그냥 들어가면 됨
function Library(props)  {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리엑트" numOfPage={500} />
        </div>
        // name과 numOfPage의 값이 컴포넌트 Book에 들어있음
    );
}

export default Library;
// export default를 마지막에 꼭 사용(파일 밖에서 사용 가능하게끔 내보내기 기능), 뒤에 오는 건 만든 컴포넌트의 이름