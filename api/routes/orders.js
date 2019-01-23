const express = require('express');
const router = express.Router();


//POST Method
router.post('/', (req, res, next) =>{
    res.status(201).json({
        message: 'Orders was created'
    });
});

// GET Method
router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

// GET Method
router.get('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});


// DELETE Method 
router.delete('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message: 'Order deleted', 
        orderId: req.params.orderId
    });
});

module.exports = router;