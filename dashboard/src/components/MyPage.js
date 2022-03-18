import React, {useContext} from 'react';
import WidgetContext from "./WidgetContext";
import Bitcoin from "./Bitcoin";
import Weather from "./Weather";
import Activity from "./Activity";
import Covid from "./Covid";


const MyPage = () => {
    const {widgetList, setWidgetList} = useContext(WidgetContext);
    const info = localStorage.getItem('list')
    console.log(widgetList);
    const display = (param) => {
        console.log('display fired')
        if (param === 'bitcoin') {
            return <li>
                <Bitcoin/>
            </li>
        } else if (param === 'weather') {
            return <li>
                <Weather/>
            </li>
        } else if (param === 'random activity') {
            return <li><Activity/></li>
        } else if (param === 'Covid 19 stats France') {
            return <li><Covid/></li>
        } else {

        }
    }
    return (
        <div>
            <Weather/>
            {/*<Covid/>*/}
            <>

            <ul className="my-widget">
                {widgetList.map((widget, index) => {
                        return (<li> {display(widget.widget_name)}</li>)
                        // <li key={index}>{widget.widget_name}</li>
                    }
                )}
            </ul>
                </>
        </div>
    );
};

export default MyPage;