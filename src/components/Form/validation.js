const validation= (userData)=>{
    let errors={}
    if(!userData.email) errors.email= 'Por favor, completa este campo' 
    else if (userData.email.length>35) errors.email= 'Email no puede superar los 35 caracteres' 
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) errors.email= 'Email inválido' 
    else if(userData.password.length <6 ||userData.password.length > 10) errors.password= 'Password debe tener una longitud entre 6 y 10 caracteres' 
    else if(!/\d/.test(userData.password)) errors.password= 'Password debe contener al menos un número' 
    return errors;
}

export default validation;