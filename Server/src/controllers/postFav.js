const {Favorite} = require('../DB_connection');

const postFav = async (req, res)=>{
    try {
        const {id,name, status, species, gender, origin, image} = req.body;

        if(!id ||!name || !origin || !status || !image || !species || !gender){
            return res.status(401).json({ message: 'Faltan datos'});
        }
        const character= {
            id,
            name, 
            status, 
            species, 
            gender, 
            origin, 
            image
        }
        const char= await Favorite.create(character);
        const favorites= await Favorite.findAll();
        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

module.exports= {
    postFav
}