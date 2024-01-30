/*import { Duffel } from '@duffel/api'

const duffel = new Duffel({
  token: duffel_test_1qLh1AiM7nYWQ5tKG-KMYxwNn74jHhPKYd2BbYTnZYe,
})*/

/*const http = require('http');
 
const requestListener = (req, res)=>{
  console.log("Request is Incoming");
     
  const responseData = {
      message:"Hello, GFG Learner",
    articleData:{
        articleName: "How to send JSON response from NodeJS",
        category:"NodeJS",
        status: "published"
    },
    endingMessage:"Visit Geeksforgeeks.org for more",
  }
   
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
};
 
const server = http.createServer(requestListener);
 
server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});*/

var express = require('express'); 
var app = express(); 
 
const bodyParser = require('body-parser'); 
var server = app.listen(3000); 
 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
 
app.post('/postdata', (req, res) => { 
	var data = req.body.data; // your data 
    // do something with that data (write to a DB, for instance) 
    console.log("message recieved");
	res.status(200).json({ 
		message: "Data received successfully" 
	}); 
}); 