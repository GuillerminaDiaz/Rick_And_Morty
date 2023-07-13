// const {User}= require('../DB_connection');

// const register= async(req, res)=> {
//     try {
//         const {email, password, id}= req.body;
//         if(!password || !email) res.status(400).jason({ message: 'faltan datos para registrarse'})
//     const user= User.create({
//         email,
//         password,
//         id
//     })
//     return res.status(200).json(user)
//     } catch (error) {
//         res.status(500).jason({ error: error.message})
//     }
// }
// module.exports={
//     register
// }