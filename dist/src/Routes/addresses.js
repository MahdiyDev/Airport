"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addressController_1 = require("../Controllers/addressController");
const router = (0, express_1.Router)();
router.get('/address', addressController_1.GET)
    .post('/address', addressController_1.POST)
    .put('/address', addressController_1.PUT)
    .delete('/address', addressController_1.DELETE);
exports.default = router;
