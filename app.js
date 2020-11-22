const express = require('express');
const app = express();
var tools = require('./tools');
const url = 'https://www.vrk.lt/statiniai/puslapiai/rinkimai/rt.json';


app.get('/api/v1/elections', (req, res) =>{
  tools.getData(url, (error, body) =>{
    if (error) return console.log(error);
    body = JSON.parse(body);
    const electionsArray = [];

    body.data.forEach((entry) => {
      const election = {
        date: entry.rink_data,
        name: entry.vrt_pav,
        id: entry.vrt_id
      };
      electionsArray.push(election);
    });

    if (req.query.sortbydate){
      if (req.query.sortbydate === 'asc'){
        electionsArray.sort((a, b) =>{
          return (new Date(a.date) - new Date(b.date));
        });
      } else if (req.query.sortbydate === 'desc'){
        electionsArray.sort((a, b) =>{
          return (new Date(b.date) - new Date(a.date));
        });
      };
    };

    res.send(JSON.stringify(electionsArray, null, 2));
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
