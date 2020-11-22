const express = require('express');
const app = express();
var tools = require('./tools');
const url = 'https://www.vrk.lt/statiniai/puslapiai/rinkimai/rt.json';


app.get('/api/v1/elections', (req, res) =>{
  tools.getData(url, (error, body) =>{
    if (error) return console.log(error);
    console.log(body);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
