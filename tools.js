const request = require("request");

function getData(url){
  request.get(url, (error, response, body) => {
    if (error) return console.log(error);
    else return console.log(body);
  });
};

module.exports.getData = getData;
