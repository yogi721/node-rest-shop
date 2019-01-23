const express = require('express');
const router = express.Router();

// GET Method
router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

// GET Method With Arguments
router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

//POST Method
router.post('/', (req, res, next) =>{
    res.status(201).json({
        message: 'Handling POST request to /products'
    });
});

// PATCH Method 
router.patch('/:productId', (req, res, next) =>{
    res.status(200).json({
        message: 'Updated product'
    });
});

// DELETE Method 
router.delete('/:productId', (req, res, next) =>{
    res.status(200).json({
        message: 'Deleted product'
    });
});

module.exports = router;