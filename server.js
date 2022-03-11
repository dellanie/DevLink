const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000
//it will look for an environment called port to use(heroku) and if there is no environment set it will default to 5000.

app.get('/',(req,res) => res.send('API Running'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));