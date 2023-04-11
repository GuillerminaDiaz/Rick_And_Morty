import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import logoTitulo from '../../img/logoTituloRick.png'
import style from './Nav.module.css';

const Nav = ({onSearch, logout}) => {
    return(
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <div className={style.divButtons}>
            <button className={style.button}>
                <NavLink to='about'>About</NavLink>
            </button>
            <button className={style.button}>
            <NavLink to='home'>Home</NavLink>
            </button>
            <button onClick={logout} className={style.button}>
            <NavLink to='/'>Log out</NavLink>    
            </button>
            </div>
            <img src={logoTitulo} alt="" className={style.img}/>
        </nav>
    )
}

export default Nav;