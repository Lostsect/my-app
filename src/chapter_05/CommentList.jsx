import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요, 소플입니다.",
    },

    {
        name: "고길동",
        comment: "리액트 재밌어요~",
    },
    
    {
        name: "이길동",
        comment: "저도 리액트 배워 보고 싶어요",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((e) => {
                return (
                    <Comment name={e.name} comment={e.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;