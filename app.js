const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')


// app.get('/',function(req,res){
//     // var today = new Date();
//     // var currentDay =  today.getDay()
//     // var d = new Date();
//     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     var d = new Date();
//     var currentDay = d.getDay()
//     var dayName = days[d.getDay()];
//     var dayTimeH = d.getHours()
//     var dayTimeM = d.getMinutes()
//     var dayTimeS = d.getSeconds()
//     // console.log(dayName+" "+dayTimeH+'hrs:'+dayTimeM+"min:"+dayTimeS+'sec')
//     var notice = ''
//     if (currentDay === 6 || currentDay === 0){
//         notice = dayName+" "+dayTimeH+'hrs:'+dayTimeM+"min:"+dayTimeS+'sec' + '***WEEKEND***'
//     }
//     else{
//         notice = dayName+" "+dayTimeH+'hrs:'+dayTimeM+"min:"+dayTimeS+'sec' + '!!!WEEKDAY!!!'
//     }
//     res.render('lists', {
//         KindOfDay: notice
//     })
// })

app.get('/',function(req,res){
    
    var today = new Date()
    var options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    }
    
    var day = today.toLocaleDateString('en-US',options)

    
    res.render('lists', {
        KindOfDay: day
    })
    

})

app.listen(3000,function(){
    console.log('server started on port 3000')
})