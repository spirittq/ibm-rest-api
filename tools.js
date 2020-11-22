const request = require("request");

function getData(url, callback){
  request.get(url, (error, response, body) => {
    if (error) callback(error);
    else callback(undefined, body);
  });
};

module.exports.getData = getData;
