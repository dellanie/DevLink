const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect databae
connectDB()

//init middleware
app.use(express.json({extended:false}));



app.get('/',(req,res) => res.send('API Running'));

//define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profiles',require('./routes/api/profiles'));
app.use('/api/post',require('./routes/api/post'));

const PORT = process.env.PORT || 5000
//it will look for an environment called port to use(heroku) and if there is no environment set it will default to 5000.

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));