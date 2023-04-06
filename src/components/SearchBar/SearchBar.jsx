import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId]= useState('');

   const handleChange= (event)=>{
      setId(event.target.value)
   }

   return (
      <div className={style.divBarra}>
          <input type='search' className={style.input} onChange={handleChange} value={id}/>
         <button onClick={() =>onSearch(id)} className={style.button}>Agregar</button> 
      </div>
   );
}
