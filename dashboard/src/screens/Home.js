import React from "react";
import Weather from "../components/Weather";
import MyPage from "../components/MyPage";
import Cookies from "js-cookie";
import Covid from "../components/Covid";

const Home = () => {

    const token = Cookies.get('userToken');

    return (
        <>
            {token ? (
                <MyPage/>
            ) : (
                <>
                <Weather/>
                {/*<Covid/>*/}
                </>
            )}

        </>
    )
}

export default Home;