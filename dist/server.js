"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const Routes_1 = __importDefault(require("./src/Routes"));
const app = express();
app.use(cors());
app.use(express.json());
app.use(Routes_1.default);
const port = process.env.PORT || 4100;
app.listen(port, () => {
    console.log('app is running on http://localhost:' + port);
});
