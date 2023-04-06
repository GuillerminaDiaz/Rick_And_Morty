import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";


const Detail= ()=>{
    const URL_BASE= 'https://be-a-rym.up.railway.app/api/character';
    const API_KEY= '01c32bd903d2.7111a52bfa816b6df674';

    const {id}= useParams();
    const [character, setCharacter]= useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />    
        </div>
    )
}

export default Detail;