const connection = require('../config/db');
const dotenv = require('dotenv').config();
 
async function loginPost(request, response) {
   
    let query = "select * from cadastro where email = ;";
 
    connection.query(query, (err, results) => {
        console.log(err, results);
    if(results) {
        response
        .status(201)
        .json({
            success: true,
            message: "sucesso",
            data: results
        })
    } else{
        response
        .status(400)
        .json({
            success: false,
            message: "ops, deu problema!",
            data: err
        })
    }
    });
}
 
module.exports = {
    loginPost
}