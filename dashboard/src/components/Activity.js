import React, {useEffect, useState} from "react";
import axios from "axios";

const Activity = () => {
    const [doing, setDoing] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://www.boredapi.com/api/activity'
        })
            .then((res) => {
                if (res.data.errors) {
                    console.log("Data not found, please check in few minutes");
                } else {
                    setDoing(res.data);
                }
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("error : ", err);
            })
    }, []);
    return (
        <>
            {isLoading ? (
                <p> Loading ... </p>
            ) : (
                <div>
                    <p>Random activity</p>
                    <p><h4>Type : </h4>{doing.type}</p>
                    <p><h4>activity : </h4>{doing.activity}</p>
                    <p><h4>price : </h4>{doing.price}</p>
                </div>
            )}
        </>
    )
}

export default Activity