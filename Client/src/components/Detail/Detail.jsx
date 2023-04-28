import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import style from './Detail.module.css'


const Detail= ()=>{
    // const URL_BASE= 'https://be-a-rym.up.railway.app/api/character';
    // const API_KEY= '01c32bd903d2.7111a52bfa816b6df674';

    const {id}= useParams();
    const [character, setCharacter]= useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
        <div className={style.detailDiv}>
            <div className={style.divText}>
                <h2 className={style.text}>Name:  {character?.name}</h2>
                <h2 className={style.text}>Status:  {character?.status}</h2>
                <h2 className={style.text}>Specie:  {character?.species}</h2>
                <h2 className={style.text}>Gender:  {character?.gender}</h2>
                <h2 className={style.text}>Origin:  {character?.origin?.name}</h2>
            </div>
            <img src={character?.image} alt={character?.name} className={style.image} />    
        </div>
    )
}

export default Detail;