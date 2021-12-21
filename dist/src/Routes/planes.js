"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planesController_1 = require("../Controllers/planesController");
const router = (0, express_1.Router)();
router.get('/planes', planesController_1.GET)
    .post('/planes', planesController_1.POST)
    .put('/planes', planesController_1.PUT)
    .delete('/planes', planesController_1.DELETE);
exports.default = router;
