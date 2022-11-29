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
    var DATE = new Date()
    var DayValue = DATE.getDay()
    
    switch (DayValue) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    
    res.render('lists', {
        KindOfDay: day
    })
    

})

app.listen(3000,function(){
    console.log('server started on port 3000')
})