import React, {useEffect, useState} from "react";
import axios from "axios";

const Covid = () => {
    const [news, setNews] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://coronavirusapifr.herokuapp.com/data/live/france'
        })
            .then((res) => {
                if (res.data.errors) {
                    console.log("Data not found, please check in few minutes");
                } else {
                    setNews(res.data);
                    console.log(news)
                    // ne retourne rien pour l instant
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
                    <h4> Stats of COVID 19 in France </h4>
                    <h4>Date : </h4>{news.date}
                    <h4>Nb of hospitalization : </h4>{news.hosp}
                    <h4>Intensive care : </h4>{news.rea}
                </div>
            )}
        </>
    )
}

export default Covid