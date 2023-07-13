const {Favorite} = require('../DB_connection');

const deleteFav = async (req, res)=>{
    try {
       const {id} =req.params;
       if(!id) res.status(400).json({ message : 'id no encontrado'});

       const character= await Favorite.findByPk(id);
       if(character){
            await Favorite.destroy({
                where:{
                    id
                }
            });
       }
       const favorites= await Favorite.findAll();
       return res.status(200).json(favorites); 
    } catch (error) {
        return res.status(500).json({ error : error.message})
    }
}
module.exports= {
    deleteFav
}