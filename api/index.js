// import libraries
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

// import router
import postRoute from './route/post.js'



// app config
const app = express()
dotenv.config();
const port = process.env.PORT || 5000

// end point(route)
app.get('/', (req, res) => {
    res.send('we are server home')
})

// middleware for cors
app.use(cors())

// Middleware for data parser
app.use(express.json());

// middleware for post route
app.use("/api/post/", postRoute)

// connect to DB
mongoose.connect(process.env.DB_CONNECTION)
.then(console.log('the DB is connected'))
.catch((err) => console.log(err))

// listen to the server
app.listen(port, console.log(`the server connected @${port}`))