const express = require('express'); // Exportando o express

const app = express() // É uma instância do Express
const porta = 3000;

app.get("/api/:id", (req, res) => {
    const id = req.params.id
    res.send("Hello World :)   " + id)
})

app.post("/", (req, res) => {
    res.send("Foi Post")
})

// Exercícios

app.get("/somar/:num1/:num2", (req,res) => {
    // Soma de Route Params
    let soma = (Number(req.params.num1) + Number(req.params.num2))
    res.send("Soma:  " + soma)
})

app.get("/somar2/:num1", (req, res) => {
    // Soma de Route Param e Query Param
    let soma =  Number(req.params.num1) + Number(req.query.num) 
    res.send("Soma2:  " + soma)
})
 
app.listen(porta, () => {
    console.log("Servidor Rodando na porta", porta)
}); 