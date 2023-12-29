import React from "react";
import Btn from "./Btn";

function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 학인하셨으면 확인 버튼을 눌러주세요.</p>
            <Btn color='success'>
                확인
            </Btn>
        </div>
    )
}

export default ConfirmDialog;