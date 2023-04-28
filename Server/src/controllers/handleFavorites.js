let myFavorites= [];

const postFav= (req, res) => {
    try {
        const myFav= req.body;
        const favFound= myFavorites.find(fav=> fav.id === myFav.id);
    
        if(favFound) throw Error('Personaje favorito repetido');
        
        myFavorites.push(myFav);
    
        return res.status(200).json(myFavorites);
        
        
    } catch (error) {
        return res.status(404).send(error.message);
    };

    
};

const deleteFav= (req, res)=> {
    const {id} = req.params;

    myFavorites = myFavorites.filter(fav => fav.id !== +id);

    return res.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
};