const express = require('express');  
const cors = require('cors');  
const bodyParser = require('body-parser');  

const app = express();  
const PORT = 3000;  

app.use(cors());  
app.use(bodyParser.json());  

app.get('/', (req, res) => {  
  res.send('API de Raking Anime Course');  
});  

app.listen(PORT, () => {  
  console.log(`Servidor corriendo en http://localhost:${PORT}`);  
});