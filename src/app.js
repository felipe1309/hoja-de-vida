const express = require('express')
const app = express()
const path = require('node:path')
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname,"public")))
app.get('/',(req,res)=>{
    res.render('index.html')
})
app.listen(app.get('port'),()=>{
    console.log(`conected in port ${app.get('port')}`)
})