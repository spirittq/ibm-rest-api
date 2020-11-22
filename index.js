const request = require("request");
const url = "https://www.vrk.lt/statiniai/puslapiai/rinkimai/rt.json";

function getData(url){
  request.get(url, (error, response, body) => {
    if (error) return console.log(error);
    else return console.log(body);
  });
};

getData(url);
