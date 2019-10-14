const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const connect = require('../database/db.js')

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

app.put('/api/restaurant/:id',(req,res)=>{
  var name = req.body.name
  var data = [
    req.body[`${req.body.argument}Count`],
    req.body[`${req.body.argument}Toggle`],
    req.body[`${req.body.argument}Color`]
  ]
  var id = req.params.id;
  var argument = req.body.argument;

    connect.putdb(id, data, name, argument, (error)=>{
      if (error){
        res.status(400).send();
      }
      else {
        res.status(200).send();
      }
    })
  })

app.listen(3306)
console.log(`listening on port ${3000}`)
