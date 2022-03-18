import React, {useEffect, useState} from 'react';
import axios from "axios";

const Weather = () => {
    const [city, setCity] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=5855aa75b8b0bd44726f3a182ad9a770'
        })
            .then((res) => {
                if (res.data.errors) {
                    console.log("météo non disponible");
                } else {
                    setCity(res.data);
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
                <p> En cours de chargement </p>
            ) : (
                <div>
                    <p>Weather of the day</p>
                    <p>{city.name}</p>
                    <p>Température actuelle : {city.main.temp}</p>
                    <p>vitesse du vent : {city.wind.speed} km/h et direction : {city.wind.deg} degrés</p>
                </div>
            )}
        </>
    );
};

export default Weather;