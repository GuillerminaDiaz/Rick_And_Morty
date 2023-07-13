import { useState } from "react";
import validation from "../Validation/validation";
import style from './Form.module.css';
//import logo from '../../img/rickLogo.jpg'
//import axios from 'axios';

const Form = ({login})=>{
    const [userData, setUserData]= useState({
        email: '',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange= (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit= (event) =>{
        event.preventDefault();
        // axios.post('http://localhost:3001/rickandmorty/character/login/register', {
        // email: userData.email,
        // password: userData.password,
        // id: 1
        // }). then(({data})=>{
        // console.log(data)
        // })
        login(userData);
    }

    
    return(
       
        <form onSubmit={handleSubmit}>
            <div className={style.divForm}>
            {/* <img src={logo} alt="Rick and Morty logo" className={style.img}/> */}
            <label htmlFor="email">Username:</label>
            <input type="text" name='email' value={userData.email} onChange={handleChange} className={style.input}/>
            {errors.email && <p className={style.p}>{errors.email}</p>}
            <label htmlFor="password">Password:</label>
            <input type="text" name='password' value={userData.password} onChange={handleChange} className={style.input}/>
            {errors.password && <p className={style.p}>{errors.password}</p>}
            <button type='submit' className={style.submitButton}>Submit</button>
            </div>
        </form>
        
    )
}

export default Form;