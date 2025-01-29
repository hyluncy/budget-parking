
const express = require("express"); 
const next = require("next"); 
const path = require('path'); 

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production'; 

const app = next({ dev }); 
const handle = app.getRequestHandler(); 

const server = express(); 

server.use('/static', express.static(path.join(__dirname, 'static'))); 

app.prepare().then(() => {
    server.all('*', (req, res) => {
        return handle(req, res); 
    }); 

    server.listen(3000, (err) => {
        if (err) throw err; 
        console.log('> Ready on http://localhost:3000'); 
    }); 
}); 


