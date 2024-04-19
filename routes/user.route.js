const express = require('express');
const router = express.Router();

const {
  signup
} = require('../controllers/user.controller');

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Finly' });
});

router.get('/signup', (req, res) => {
  res.render('pages/signup', {
    title: 'Sign up',
  });
});

router.post('/signup', signup);

router.get('/login', (req, res) => {
  res.render('pages/login', {
    title: 'Sign in',
  });
});

module.exports = router;
