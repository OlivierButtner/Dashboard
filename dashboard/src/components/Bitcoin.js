import React, {useEffect, useState} from 'react';
import axios from "axios";

const Bitcoin = () => {
    const [cost, setCost] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
        })
            .then((res) => {
                if (res.data.errors) {
                    console.log("cours non disponible");
                } else {
                    setCost(res.data);
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
                <div className="container-bitcoin">
                    <p>Price of Bitcoin</p>
                    <div className="bitcoin-rate">
                        <h4>USD</h4>
                        <p>{cost.bpi.USD.rate_float}</p>
                    </div>
                    <div className="bitcoin-rate">
                        <h4>GBP</h4>
                        <p>{cost.bpi.GBP.rate_float}</p>
                    </div>
                    <div className="bitcoin-rate">
                        <h4>EUR</h4>
                        <p>{cost.bpi.EUR.rate_float}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Bitcoin;