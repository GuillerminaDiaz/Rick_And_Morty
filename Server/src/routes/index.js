const getCharById = require('../controllers/getCharById');
const {postFav}= require('../controllers/postFav')
const { postUser }= require('../controllers/postUser')
const {login} = require('../controllers/login');
const { deleteFav } = require('../controllers/deleteFav');
//const {register}= require('../controllers/register');
const router = require('express').Router();

router.get("/character/:id", (req, res)=>{
    getCharById(req, res);
});

router.get( "/login", login);

router.post('/login', postUser);

//router.post('/login/register', register)

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);


module.exports= router;