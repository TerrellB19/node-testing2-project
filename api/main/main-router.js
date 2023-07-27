
const router = require('express').Router()
const Data = require('./main_model')

router.get('/', async (req, res, next) => { // get all
    try{
        const data = await Data.getall()
        res.status(200).json(data)
    } catch(err){
        next(err)
    }
    })
    
    
    router.get('/:id', async (req, res, next) => { // get by id
    try{
        const data = await Data.getBy({id: req.params.id})
        res.status(200).json(data)
    } catch(err){
        next(err)
    }
    })
    
    
    router.post('/', async (req, res, next) => { // create new data
        try{
            const newData = await Data.add(req.body)
            res.status(201).json(newData)
        } catch(err){
            next(err)
        }
    })
    
    
    router.delete('/:id', async (req, res, next) => { // delete data
        try{
            const deleteData = await Data.del(req.params.id)
            res.status(201).json(deleteData)
        } catch(err){
            next(err)
        }
    })

    router.use(( err, req, res, next ) => { //eslint-disable-next-line
        res.status(500).json({
            message: err.message,
            stack: err.stack
        })
    })

    module.exports = router;