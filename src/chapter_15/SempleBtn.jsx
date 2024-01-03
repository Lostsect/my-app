import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border: 1px solid black;
`;
// 위에 만든 컴포넌트에 스타일을 추가하기
const RoundedButton = styled(Button)`
    border-radius: 16px;
`

function SampleBtn(props) {
    return (
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <RoundedButton>Rounded</RoundedButton>
            <RoundedButton dark>DarkRounded</RoundedButton>
        </div>
    );
}

export default SampleBtn;