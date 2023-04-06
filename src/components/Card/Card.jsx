import style from './Card.module.css'
import { NavLink } from 'react-router-dom';

export default function Card({id, name, status, species,gender,origin,image, onClose}) {
   return (
      <div className={style.divCard}>
         <button onClick={() => onClose(id)} className={style.xButton}>X</button>
         <div className={style.divText}>
         <NavLink to={`/detail/${id}`}>
            <h2>{name}</h2>
         </NavLink>
         <h2 className={style.h2}>{status}</h2>
         <h2 className={style.h2}>{species}</h2>
         <h2 className={style.h2}>{gender}</h2>
         <h2 className={style.h2}>{origin}</h2>
         </div>
         <img src={image} alt='' className={style.img}/> 
      </div>
   );
}
