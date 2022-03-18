import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import Register from "./screens/Register";
import Login from "./screens/Login";
import UidContext from "./components/appContext";
import WidgetContext from "./components/WidgetContext";
import MyPage from "./components/MyPage";
import Header from "./components/Header";
import Logout from "./screens/Logout";



function App() {
    const [uid, setUid] = useState('xcfecrfrtvtrrtv');
    const [widgetList, setWidgetList] = useState([]);


    return (

        <BrowserRouter>
            <Header/>
            <Switch>
                <UidContext.Provider value={{uid, setUid}}>
                    <WidgetContext.Provider value={{widgetList, setWidgetList}}>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/logout" exact component={Logout}/>
                    </WidgetContext.Provider>
                </UidContext.Provider>
            </Switch>
        </BrowserRouter>

    );
}

export default App;
