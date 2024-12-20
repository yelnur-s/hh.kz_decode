const express = require('express');
const logger = require('morgan')
const passport = require('passport');
const cors = require("cors")
const app = express();
const PORT = 3002;

app.use(logger('dev'))
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(__dirname + "/public"))

app.use(passport.initialize());

require('./app/auth/passport')


app.use(require('./app/auth/routes'))
app.use(require('./app/region/routes'))
app.use(require('./app/skills/routes'))
app.use(require('./app/employment-type/routes'))
app.use(require('./app/languages/routes'))
app.use(require('./app/resume/routes'))
app.use(require('./app/specializations/routes'))
app.use(require('./app/vacancy/routes'))
app.use(require('./app/applies/routes'))

app.get('/', (req, res)=>res.status(200).end())


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtci5lbG51cjk1QGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwicGhvbmUiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJlbXBsb3llZSJ9LCJpYXQiOjE2ODU3MDI4OTQsImV4cCI6MTcxNzIzODg5NH0.YOsnLABrLqIhkqNT5qQ5jesC1P70X22jM_Hx2mJjasg