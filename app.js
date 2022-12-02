const express = require('express')
const bodyParser = require('body-parser')

const app = express()


let itemsArr = ['Buy Food','cook food','eat food']
let workArr = []

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));
// ****************************************************************************
app.get('/',function(req,res){
  
  let today = new Date()
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  let day = today.toLocaleDateString('en-US',options)
  // *****************************************************************************************
  
  res.render('lists', {
      KindOfDay: day, Title: "Main", NewAddedItem: itemsArr
  
    })
    
})
app.post('/', function(req,res){
  
  if (req.body.button === "Main"){
    let item = req.body.newItem
    itemsArr.push(item)
    res.redirect('/')
    // console.log(req.body)
  }
  else{
      let workitem = req.body.newItem
      workArr.push(workitem)
      res.redirect('/work')
      // console.log(req.body)
      
    // })
  }
  
})
// *********************************************************************************

// ************************************************************************************
app.get('/work',function(req,res){
  let today = new Date()
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  let day = today.toLocaleDateString('en-US',options)
  res.render('lists', {
    KindOfDay: day, Title: "Work", NewAddedItem: workArr
})
  
}) 
app.post('/work', function(req,res){
  let workitem = req.body.newItem
  workArr.push(workitem)
  res.redirect('/work')
  // console.log(req.body)
  
})
// *******************************************************************************************


app.listen(3000,function(){
    console.log('server started on port 3000')
})
