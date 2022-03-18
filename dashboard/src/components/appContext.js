/*import {createContext, useState} from 'react';

const UidContextProvider = (props) => {
    const UidContext = createContext();
    const [uid, setUid] = useState('dfg');
    return (
        <UidContext.Provider value={{uid, setUid}}>
            {props.children}
        </UidContext.Provider>
    )
}
export default UidContextProvider;*/


import {createContext} from "react";

const UidContext = createContext()

export default UidContext