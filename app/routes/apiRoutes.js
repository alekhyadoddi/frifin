// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) { 
    res.json(friendData);
  });

  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
console.log(req.body);
var currentuser=req.body;
var frienddiffs=[];
for(var i=0;i<friendData.length;i++)
{
  var totaldiff=0;
  for(var j=0;j<9;j++)
  {
    totaldiff+=Math.abs(friendData[i].scores[j]-currentuser.score[j]);
    console.log(totaldiff);
  }
  console.log(friendData[i]);
  console.log(totaldiff);

frienddiffs.push(
  {
    "user":friendData[i].customerName,
    "photo":friendData[i].photolink,
  "difference":totaldiff
}
 );
}
console.log(frienddiffs);
var similar={};
console.log("looping for similar");
for(var i=0;i<frienddiffs.length;i++ )
{
  console.log(" inside looping for similar");
if(frienddiffs[i].difference <= similar.difference|| Object.keys(similar).length === 0)
{
similar=frienddiffs[i]
console.log(similar);
}
}
console.log(similar);

friendData.push(req.body);


       res.json(similar);
 
   
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = [];
    waitListData.length = [];

    res.json({ ok: true });
  });
};
