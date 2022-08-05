const express = require('express')
const mongoose = require('mongoose')
require.apply('dontenv').config()
const app = express()
const methodOverride = require('method-override')
const port =  process.env.PORT || 3003




// My port
app.listen(port,() => {
    console.log('I am listening on port' , port)
})