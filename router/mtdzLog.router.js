const express = require('express');
const router = express.Router();

const middleware = require("../middleware/test.middleware");
const mtdzLog = require("../controller/mtdzLog.controller");

router.route('/').get(middleware.test, mtdzLog.index);

module.exports = router;
