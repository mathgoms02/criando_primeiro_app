//Importando nossos Models, utilizando o require ao inves do import
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

//definindo rota
app.get('/',(req,res)=>{
    res.send('Meu servidor backend ja está rodando!');
})

// criando uma variável com a porta
let port=process.env.PORT || 3000;
app.listen(port, (req, res)=>{
    console.log('Servidor Rodando');
})