import { useState } from "react";
import validation from "./validation";

const Form = ({login})=>{
    const [userData, setUserData]= useState({
        email: '',
        password:''
    })

    const [errors, setErrors] = useState({
        email:'',
        password:''
    })

    const handleChange= (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit= (event) =>{
        event.preventDefault();
        login(userData);
    }

    return(
        <form>
            <label htmlFor="email">Username:</label>
            <input type="text" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            <label htmlFor="password">Password:</label>
            <input type="text" name='password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;