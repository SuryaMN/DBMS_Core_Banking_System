const pool = require("../db");
const router = require("express").Router();
require('dotenv').config();
const employeeAuth = require('../middleware/employeeAuth')

router.post('/create',employeeAuth,async (req,res)=>{
    const {customer_id,acc_number,acc_type,ifsc,nominee_acc_name,balance} = req.body;

    if(!customer_id || !acc_number || !acc_type || !ifsc || !nominee_acc_name || !balance)
        return res.status(400).json({ msg: "Enter all fields" });
    
    try{
        const customer = await pool.query("select * from customer where customer_id = $1", [customer_id]);
        const account = await pool.query("select * from account where acc_number = $1", [acc_number]);

        
        if(customer.rows.length===0)
            return res.status(400).json({msg:"Customer id not found"});
        if(account.rows.length)
            return res.status(400).json({msg:"Account number already exists"});
        //check if branch exists

        try{
            const newAccount = await pool.query("insert into account values($1,$2,$3,$4,$5,$6) RETURNING *", [balance, acc_type, acc_number, nominee_acc_name,ifsc,customer_id]);
            return res.status(200).json(newAccount.rows[0]);
        }catch(err){
            return res.json(500).json({msg:"Unsuccessful Query"})
        }
    }catch(err){
        return res.json(500).json({msg:"Unsuccessful Query"})
    }


})

module.exports = router;