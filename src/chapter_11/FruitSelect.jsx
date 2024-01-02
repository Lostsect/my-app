import React, { useState } from "react";

const data = [
    { id: 1, type: 'apple', name: '사과', },
    { id: 2, type: 'banana', name: '바나나', },
    { id: 3, type: 'grape', name: '포도', },
    { id: 4, type: 'orange', name: '오렌지', },
]

function FruitSelect(props) {
    const [value, setValue] = useState('grape');

    const handleChange = (event) => { setValue(event.target.value); }

    const handleSubmit = (event) => {
        alert('선택한 과일: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                    {/* <option value={"apple"}>사과</option>
                    <option value={"banana"}>바나나</option>
                    <option value={"grape"}>포도</option>
                    <option value={"watermelon"}>수박</option> */}
                    {data.map((e) =>
                        <option key={e.id} value={e.type}>{e.name}</option>
                    )};
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default FruitSelect;