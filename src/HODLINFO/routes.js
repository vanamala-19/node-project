const {Router} = require('express');
const pool = require('../../db');
const queries = require('./queries');

const router = Router();

router.get('/',(req,res) => {
    pool.query(queries.getInfo, (error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
});
router.get('/:name',(req,res) => {
    const name = req.params.name;
    console.log(name);
    pool.query(queries.getInfoByUnit,[name] ,(error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
});
router.post('/',(req,res) =>{
    const {name, last, buy, sell, volume, base_unit } = req.body;
    pool.query(queries.addInfo,[name, last, buy, sell, volume, base_unit],(error,results) =>{
        if(error) throw error;
        res.status(201).send("Information Added to DataBase Sucessfully!");

    });
});
router.delete('/:name',(req,res) => {
    const name = req.params.name;
    pool.query(queries.getInfoByUnit,[name],(error,results) =>{
        const noDataFound = results.rows.length;
        if(noDataFound == 0){
            res.send("data doest not exists in the DataBase.");
        }
        pool.query(queries.removeInfo,[name],(error,results) =>{
            if(error) throw error;
            res.status(200).send("data is removed from DataBase Sucessfully.");
        })

    });
});

module.exports = router;