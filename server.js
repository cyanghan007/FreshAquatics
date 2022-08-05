const express = require('express')
const mongoose = require('mongoose')
require.apply('dontenv').config()
const app = express()
const methodOverride = require('method-override')
const port =  process.env.PORT || 3003

app.get('/', (req, res) => {
    res.send('Welcome to Fresh Aquatics')
})



// My port
app.listen(port,() => {
    // This will create a hyperlink in the terminal that will take you straight to the site
    console.log(`I am listening on http://localhost:${port}`) 
})
