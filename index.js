const express = require('express');
const hodlinfoRoutes = require('./src/HODLINFO/routes');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/src/static'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});

app.use('/api/v1/hodlinfo',hodlinfoRoutes);

app.listen(port,() => console.log(`app is listening on Port ${port}`));

