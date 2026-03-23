const express = require ('express');

const router = express.Router();

router.get('/info', (req,res)=>{
    return res.json({msg: "comming from the v2 routes"});
})

module.exports = router;