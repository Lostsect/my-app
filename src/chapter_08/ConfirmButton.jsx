import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props); //부모 생성자 호출

        this.state = {
            isConfirmed: false,
        }; //state 선언

        // this.handleConfirm = this.handleConfirm.bind(this);
        // // bind를 써줌으로서 위 클래스에 집어 넣음
    }

    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         //prevState <-- 이전의 상태(이 예제에서는 false)
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    handleConfirm = () => {
        this.setState((prevState) => ({
            //         //prevState <-- 이전의 상태(이 예제에서는 false)
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}>

                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;