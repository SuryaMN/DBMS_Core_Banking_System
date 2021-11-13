const express = require('express');
const app = express();
const cors = require('cors');

//Middleware
app.use(cors());
app.use(express.json());

//connect postgresql db
const pool = require('./db');

//routes
app.use('/api/signup',require('./routes/signupRoute'));
app.use('/api/login',require('./routes/loginRoute'));
app.use('/api/account',require('./routes/accountRoute'));
app.use('/api/transaction',require('./routes/transactionRoute'));
app.use('/api/loadUser',require('./routes/loadUserRoute'));

const PORT = process.env.PORT || 8000;
app.listen(PORT ,()=> console.log(`Server is listening at port ${PORT}`))