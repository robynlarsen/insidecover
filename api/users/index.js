var express = require('express');
var router = new express.Router();
var controller = require('./controller');

// router.get('/', controller.index);
router.get('/', controller.show);
// router.post('/', controller.create);
router.put('/', controller.update);
// router.delete('/:id', controller.delete);

module.exports = router;
