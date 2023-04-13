import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card"
import style from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react"


const Favorites = () => {
    const myFavorites= useSelector((state)=> state.myFavorites)
    const dispatch= useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder= (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter= (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div className={style.divFav}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>

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