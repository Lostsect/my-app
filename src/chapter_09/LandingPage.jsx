import React, {useState} from "react";
import Toolbar from "./Tollbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogIn = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar 
                isLoggedIn={isLoggedIn}
                onClickLogIn={onClickLogIn}
                onClickLogout={onClickLogout}
                />
                {isLoggedIn && <div style={{padding: 16}}>소플과 함께하는 리액트 공부!</div>}
        </div>
    );
}

export default LandingPage;