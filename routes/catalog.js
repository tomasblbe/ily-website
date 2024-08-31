const express = require("express");
const router = express.Router();
const upload = require('../upload.js');

const mracik_controller = require("../controllers/mracikController");

router.get('/', mracik_controller.index)

router.get('/mraciky/:id', mracik_controller.mracik_detail)

router.get('/create', mracik_controller.mracik_create_get)

router.post('/create', upload.single('obrazok'), mracik_controller.mracik_create_post)

router.get('/missing_info', mracik_controller.missing_info)

module.exports = router