const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())


//Import Routs
const postsRoute = require('./routs/posts')
const productsRoute = require('./routs/products')

// Acsessing Routs by Meadle waer 
app.use('/posts', postsRoute)
app.use('/products', productsRoute)

//ROUTS
app.get('/', (req, res) => {
  res.send('We are at HOME')
})

//Connect to DB
// The following mongoose.set solves deprication worning problems
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(
    process.env.DB_CONNECTION,
  () => console.log('Connected to DB YEEHHAAA!',)
)

//Start listen to the server
app.listen(3000)
