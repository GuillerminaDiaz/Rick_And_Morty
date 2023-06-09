import style from './Card.module.css'
import { NavLink ,useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';


const Card=({id, name, status, species,gender,origin,image, onClose, addFav, removeFav, myFavorites}) => {

   const [isFav, setIsFav]= useState(false);
   const location= useLocation();

   const handleFavorite= () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({id, name, status, species,gender,origin,image})
         
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      

   }, [myFavorites, id]);

   return (
      <div className={style.divCard}>
        
         <button onClick={handleFavorite} className={style.heart}>{isFav? '❤️' : '🤍'}</button>
             
         
        

         <div className={style.divText}>

         <NavLink to={`/detail/${id}`} className={style.link}>
            <h2>{name}</h2>
         </NavLink>

         
         <img src={image} alt='' className={style.img}/> 
         <h2 className={style.h2}>{species}</h2>
         
         { location.pathname!=='/favorites' && <button onClick={() => onClose(id)} className={style.xButton}>X</button>}
         

         </div>
        
         </div>
   );
}

const mapStateToProps= (state)=>{
   return{
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps= (dispatch) =>{
   return {
      addFav: (character) => { dispatch(addFav(character))},
      removeFav: (id) => { dispatch(removeFav(id))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);