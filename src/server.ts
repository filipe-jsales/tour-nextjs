import express from 'express'
import routes from './routes'
import mongoose from "mongoose";

const app = express()

app.use(express.json())
app.use(routes)

mongoose.connect('mongodb+srv://filipe:123@cluster0.erkk2at.mongodb.net/?retryWrites=true&w=majority')

    .then((data) => {
        console.log('MongoDB Connection Succeeded', data.version);
    })

    .catch((err) => {
        console.log('Error in DB connection:', err.message);
    })


app.listen(3333,()=> console.log('Server running on port http://localhost:3333'))
