const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Resto = mongoose.model("Restaurants");
router.get('/list',(req,res) =>{
    Resto.find({})
    .then((match)=>{
       res.status(200).json(match);
    })
    .catch((err) => console.log(err));
})
router.get('/search/:name',(req,res) =>{
    Resto.find({"host_name":req.params.name})
    .then((match)=>{
       res.status(200).json(match);
    })
    .catch((err) => console.log(err));
})
router.get('/sort/:order',(req,res) =>{
    Resto.find().sort({"price":req.params.order})
     .then((match)=>{
       res.status(200).json(match);
    })
    .catch((err) => console.log(err));

})
module.exports = router;