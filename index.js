const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');

require('dotenv').config();
require('./libs/dbConnect');

const userRouter = require('./routes/user.route');
const dashboardRouter = require('./routes/dashboard.route');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.AUTH_SECRET,
    saveUninitialized: true,
    resave: false,
  })
);

app.use(flash());

app.use('/', userRouter);
app.use('/dashboard', dashboardRouter);

app.get('*', (req, res) => {
  res.status(404).render('index', { message: 'Not Found' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
