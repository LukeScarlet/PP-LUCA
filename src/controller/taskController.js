const connection = require('../config/db');
const dotenv = require('dotenv').config();
 
async function storeLogin(request, response) {
 
// recuperando fromulario
    const params = Array(
        request.body.email,
        request.body.senha
    );
const query = "insert into cadastro(email, senha) Values(?,?)";
    console.log(params)
connection.query(query, params, (err, results) => {
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
})
}
 
module.exports = {
    storeLogin
}