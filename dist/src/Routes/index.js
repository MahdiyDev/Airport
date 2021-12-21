"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planes_1 = __importDefault(require("./planes"));
const addresses_1 = __importDefault(require("./addresses"));
const passengers_1 = __importDefault(require("./passengers"));
const tickets_1 = __importDefault(require("./tickets"));
const router = (0, express_1.Router)();
router.use(planes_1.default)
    .use(addresses_1.default)
    .use(passengers_1.default)
    .use(tickets_1.default);
exports.default = router;
