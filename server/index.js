const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const connect = require('../database/db.js')
// const path = require('path')

app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.get(`/api/restaurant/:id`, (req,res)=>{
  var ok = req.params.id
  connect.getdb(ok, (error,data)=>{
    if (error){
      console.log(error)
    }
    else {
      console.log('success!')
      res.status(200).send(data);
    }

  })
});

// app.post('/endpoint', (error,data));

app.put('/api/restaurant/:id',(req,res)=>{
  
  var name = req.body.name
  var data = [req.body.usefulCount,req.body.usefulToggle,req.body.usefulColor]
  var id = req.params.id;
  connect.putdb(id, data, name, (error)=>{
    if (error){
      res.status(400).send();
    }
    else {
      console.log(data)
      res.status(200).send();
    }

  })
})



app.listen(3004)
console.log(`listening on port ${3004}`)