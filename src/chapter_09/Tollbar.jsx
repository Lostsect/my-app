import React, {useState} from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    const {isLoggedIn, onClickLogIn, onClickLogout} = props;
                
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const onClickLogIn = () => {
    //     setIsLoggedIn(true);
    // };

    // const onClickLogout = () => {
    //     setIsLoggedIn(false);
    // };

    return (
        <div style = {styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogIn}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;