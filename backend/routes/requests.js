const express = require('express')
// const details = require('../data/details')
const router = express.Router();
const Details = require('../models/db');

//get all data
router.get('/' , async(req,res) => {
    const data = await Details.find();
    res.json(data);
})

//get specific data
router.get('/:key' , async(req,res) => {
    try{
        const data = await Details.findById(req.params.key);
        res.json(data);
    }
    catch(err){
        res.json({message : err});
    }
    
})

//Post data {ONly for admin}{later}
router.post('/', async(req,res) =>{

    const data = new Details({
        title : req.body.title,
        desc : req.body.desc,
        wishlist : req.body.wishlist
    }); 
    try{
        const savedData = await data.save();
        res.json(savedData); // RESPONSE FOR CONSOLE
    }catch(err){ 
        res.json({message: err}); // RESPONSE FOR CONSOLE
    }
} )

//DELETE POST
router.delete('/:key', async(req,res) => {
    try{
        const deletedData = await Details.deleteOne({ _id : req.params.key});
        res.json(deletedData);
    }catch(err){
        res.json({message : err});
    }
})


//UPDATE POST
router.patch('/:key', async(req,res) => {
    try{
        const updatedData = await Details.updateOne(
            { _id : req.params.key},
            [    
                { $set :{title : req.body.title}},
                { $set :{desc : req.body.desc}},
                { $set :{wishlist : req.body.wishlist}}
            ]
            );
        res.json(updatedData);
    }catch(err){
        res.json({message : err});
    }
})



module.exports = router;