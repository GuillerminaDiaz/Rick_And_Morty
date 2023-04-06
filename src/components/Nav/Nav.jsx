import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const Nav = ({onSearch, logout}) => {
    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button>
                <NavLink to='about'>About</NavLink>
            </button>
            <button>
            <NavLink to='home'>Home</NavLink>
            </button>
            <button onClick={logout}>
            <NavLink to='/'>Log out</NavLink>    
            </button>
        </nav>
    )
}

export default Nav;