const {Router} = require('express')
const dataSet = require('./bd')
const dataset = require('./bd')

const router = Router()

router.get('/users', (req, res) => {
    res.send(dataSet)
})

module.exports = {router}