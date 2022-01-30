const { request, response } = require("express");
const express = require("express");
const app = express();
app.listen(3000, () => console.log('listeing on #3000'));
app.use(express.static('public'));
app.use(express.json({limit: '100kb'}));

//lets cache the data coming from client
const database = [];
app.post('/api' , (request , response) => {
    console.log(request.body);
    const data = request.body;
    database.push(data);
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    })
});