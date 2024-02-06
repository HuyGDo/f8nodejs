const express = require('express');
const router = express.Router();
const NewsController = require('../app/controller/NewsController.js');

router.use('/:slug', NewsController.show);
router.use('/', NewsController.index);


module.exports = router;