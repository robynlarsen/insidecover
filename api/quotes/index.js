var express = require('express');
var router = new express.Router();
var controller = require('./controller');

router.get('/', controller.index);
router.get('/quote/:id', controller.show);
router.post('/quote/', controller.create);
router.put('/quote/:id', controller.update);

module.exports = router;
