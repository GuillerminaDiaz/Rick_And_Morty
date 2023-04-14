import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import logoTitulo from '../../img/logoTituloRick.png'
import style from './Nav.module.css';
import { useNavigate } from 'react-router-dom';

const Nav = ({onSearch, logout}) => {
    const navigate= useNavigate()
    return(
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <div className={style.divButtons}>
            <button className={style.button}>
                <NavLink to='about' className={style.link}>About</NavLink>
            </button>
            <button className={style.button}>
            <NavLink to='home' className={style.link}>Home</NavLink>
            </button>
            <button onClick={()=> navigate('/favorites')} className={style.button}>Favorites</button>
            <button onClick={logout} className={style.button}>
            {/* <NavLink to='/'>Log out</NavLink>     */}Log out
            </button>
            </div>
            <img src={logoTitulo} alt="" className={style.img}/>
        </nav>
    )
}

export default Nav;