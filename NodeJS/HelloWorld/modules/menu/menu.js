/*DEFINE ROUTER FOR / */
//using html and css file to display menu
const express = require('express');
const path = require('path');

let router = express.Router();

let fileMenuHtml = path.join(__dirname, '../../public/menu.html');

router.use(express.static('public'));

router.get('/', (req,res) => {
  res.sendFile(fileMenuHtml);
});

module.exports = router;
