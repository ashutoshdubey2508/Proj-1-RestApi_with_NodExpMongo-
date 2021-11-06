const express = require('express');
const router = express.Router();

const Alien = require('../models/alien')

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    }
    catch (err) {
        res.send('Error : ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const aliens = await Alien.findById(req.params.id)
        res.json(aliens)
    }
    catch (err) {
        res.send('Error : wrong id ')
    }
})

router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const a1 = await alien.save()
        res.json(a1)
    }
    catch (err) {
        res.send('Error' + err)
    }
})


router.patch('/:id', async (req, res) => {
    try {
        const aliens = await Alien.findById(req.params.id)
        aliens.sub = req.body.sub
        const a1 = await aliens.save()
        res.json(a1)
    }
    catch (err) {
        res.send('Error : wrong id ')
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const aliens = await Alien.findById(req.params.id)
        await aliens.remove()
        res.json(Alien)
    }
    catch (err) {
        res.send('Error : wrong id ')
    }
})



module.exports = router







