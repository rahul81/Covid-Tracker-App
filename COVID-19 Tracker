
// Importing the request package 
const request = require("request"); 
  
// API endpoint to which the http 
// request will be made 
const url = "https://api.covid19india.org/data.json"; 
  
// HTTP request 
request(url, (error, response, body) => { 
  
    // Error - Any possible error when 
    // request is made. 
  
    // Eesponse - HTTP response status codes 
    // indicate whether a specific HTTP  
    // request has been successfully completed 
  
    // body - response data 
  
    // 200 - successful response 
    if (!error && response.statusCode == 200) { 
  
        // The response data will be in string 
        // Convert it to Object. 
        body = JSON.parse(body); 
  
        // The data have lot of extra properties 
        // We will filter it 
        var data = []; 
        for (let i = 0; i < body.statewise.length; i++) { 
            data.push({ 
                "State": body.statewise[i].state, 
  
                "Confirmed": body.statewise[i].confirmed, 
  
                "Active": body.statewise[i].active, 
  
                "Recovered": body.statewise[i].recovered, 
  
                "Death": body.statewise[i].deaths 
            }); 
        } 
  
        console.log("-----Total Cases in India "
            + "and in each state-----"); 
  
        // Format to table 
        console.table(data); 
    } 
}) 
