import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";

function NameForm(props) {
    const [value, setvalue] = useState(' ');

    const handleChange = (event) => {
        setvalue(event.target.value.toUpperCase());
                             // toUpperCase --> 소문자를 대문자로 표기
    }

    const handleSubmit = (event) => {
        alert('입력한 이름: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <textarea type="text" value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameForm;