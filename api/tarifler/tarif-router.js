const router = require("express").Router();

const mw = require("./tarif-middleware");

router.get("/:id",mw.checkTarifId,(reg,res,next)=>{
    try {
        res.json(reg.tarif);
    } catch (error) {
        next(error)
        
    }
});

module.exports = router ;