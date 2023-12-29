import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    { id: 1, message: "안녕하세요, 오늘 일정을 알려드립니다.", },

    { id: 2, message: "점심 식사 시간입니다.", },

    { id: 3, message: "이제 곧 미팅이 시작됩니다.", },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        // extends의 React부분을 가져옴

        this.state = {
            // class NotificationList의 state를 설정
            notifications : [],
        };
    }

    componentDidMount() {
        // 컴포넌트가 마운트 된 직후에 실행할 내용
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({notifications: [],});
                clearInterval(timer); }
        },1000);
    }
    componentWillUnmount() {
        if(timer) {
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notifications) => {
                                          // (e로 대체 하여 사용 가능)
                    return <Notification 
                            key={notifications.id} 
                            id={notifications.id} 
                            message={notifications.message} />
                            // 위를 e로 표기했다면 여기도 e를 넣어야 함(ex; e.id 와 e.message)
             })}
            </div>
        );
    }
}

export default NotificationList;