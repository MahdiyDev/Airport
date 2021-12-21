"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passengersController_1 = require("../Controllers/passengersController");
const router = (0, express_1.Router)();
router.get('/passengers', passengersController_1.GET)
    .post('/passengers', passengersController_1.POST)
    .put('/passengers', passengersController_1.PUT)
    .delete('/passengers', passengersController_1.DELETE);
exports.default = router;
