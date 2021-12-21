"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticketsController_1 = require("../Controllers/ticketsController");
const router = (0, express_1.Router)();
router.get('/tickets', ticketsController_1.GET)
    .post('/tickets', ticketsController_1.POST)
    .put('/tickets', ticketsController_1.PUT)
    .delete('/tickets', ticketsController_1.DELETE);
exports.default = router;
