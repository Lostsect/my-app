import React from "react";

function MailBox (props) {
    const unreadMessages = 13;

    return (
        <div>
            <h1>안녕하세요!</h1>
            {unreadMessages > 0 &&
                <h2>현재 {unreadMessages}개의 읽지 않은 메시지가 있습니다.</h2>
            }
        </div>
    );
}

export default MailBox;