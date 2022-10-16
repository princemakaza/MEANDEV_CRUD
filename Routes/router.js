const express = require('express')
const { get } = require('mongoose')
const router = express.Router()
const User = require('../Models/User')

router.post("/", async ( req, res, error)=>{
    const Usesss = User(req.body)
    try {
        const userAdded = await Usesss.save(req.body)
        if (!userAdded) throw error;
        res.json(userAdded)
        
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async( req, res) =>{
    try{
        const getUser = await User.find()
        if(!getUser) throw error
        res.json(getUser)
    }
    catch{
        console.log(error)
    }
})


router.get('/:id',( req, res, error) =>{
    try{
        const getUser = User.findById(req.params.id)
        if(!getUser) throw error
        res.json(getUser)
    }
    catch{
        console.log(error)
    }
})

router.put('/:id', async( req, res, error) =>{
    try{
        const getUser = await User.findByIdAndUpdate(req.params.id, req.body)
        if(!getUser) throw error
        res.json({success : true})
    }
    catch{
        console.log(error)
    } 
})

router.delete('/:id', async(req, res, error) =>{
    try{
        const getUser = await User.findByIdAndDelete(req.params.id)
        if(!getUser) throw error
        res.json({success : true })
    }
    catch{
        console.log(error)
    }
})

module.exports = router