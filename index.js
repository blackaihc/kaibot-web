const express = require('express')

const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/index', (req, res) => {
  res.redirect('/')
})

app.get('/404', (req, res) => {
  res.render('404')
})

app.get('/developers', (req, res) => {
    res.render('developers')
})

app.get('/commands', (req, res) => {
    // res.render('commingsoon')
    res.redirect('https://kaibot.kro.kr')
})

app.get('/success', (req, res) => {
    res.render('success')
})

app.get('/support', (req, res) => {
    res.redirect('https://discord.gg/Z8cBSGmNCf')
})

app.get('/invite', (req, res) => {
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=775542914117795860&permissions=2147483639&scope=bot')
})

app.get('/repository', (req, res) => {
    // res.redirect('/404')
    res.render('commingsoon')
})

app.listen(port, () => console.log(`Listening on ${port}!`))