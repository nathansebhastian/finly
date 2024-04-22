const express = require('express');
const router = express.Router();

const customersRouter = require('./customer.route');

router.get('/', (req, res) => {
  res.render('pages/dashboard', {
    title: 'Dashboard',
    info: req.flash('info')[0],
  });
});

router.use('/customers', customersRouter);

module.exports = router;
