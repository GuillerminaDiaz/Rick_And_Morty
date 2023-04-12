import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from './Favorites.module.css'


const Favorites = () => {
    const myFavorites= useSelector((state)=> state.myFavorites)
    return(
        <div className={style.divFav}>
        {
            myFavorites?.map(({id, name, status, species, gender, origin, image}) => {
                return(
                    <Card key={id}
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin.name}
                    image={image}
                    
                
                    />
                )
            })
        }
        </div>
    )

}

export default Favorites;