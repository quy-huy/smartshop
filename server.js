//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static( './dist/shopping-web'));
 
app.get('/*', (req,res)=> {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname , '/dist/shopping-web/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server Started');  
});