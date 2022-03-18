import {createContext} from 'react';

const WidgetContext = createContext();

/*const WidgetContextProvider = (props) => {
    const [widgetList, setWidgetList] = useState();
    return (
        <WidgetContext.Provider value={{widgetList, setWidgetList}}>
            {props.children}
        </WidgetContext.Provider>
    )
}*/
export default WidgetContext;