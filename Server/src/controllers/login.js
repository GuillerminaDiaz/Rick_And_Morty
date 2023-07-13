//const { User } = require('../DB_connection');
require('dotenv').config();
const EMAIL= process.env.EMAIL_LOG;
const PASSWORD = process.env.PASSWORD_LOG;

const login = async (req, res) => {
    try {
        const {email, password}= req.query;
        if(!email || !password) res.status(400).json({ message: 'Faltan datos'})

        if(password !== PASSWORD)res.status(403).send("Contraseña incorrecta")
        if(email === EMAIL && password === PASSWORD){
            return res.status(200).json({access: true})
        }
        // const userEmail= await User.findOne({
        //     where:{
        //         email
        //     }
        // });
        // if(!userEmail) res.status(404).json({ message: 'Usuario no encontrado'})
        // const user= User.findOne({
        //     where:{
        //         email,
        //         password
        //     }
        // });
        // if(!user) res.status(403).json({ message: 'Contraseña incorrercta'});
        
        
        // return res.status(200).json({access: true});
        
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
   
    
}

module.exports= {
    login
};