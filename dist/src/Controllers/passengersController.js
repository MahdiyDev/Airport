"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.POST = exports.GET = void 0;
const passengersModule_1 = require("../Modules/passengersModule");
const GET = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield (0, passengersModule_1.getPassenger)());
    }
    catch (error) {
        console.log(error);
    }
});
exports.GET = GET;
const POST = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPassenger = yield (0, passengersModule_1.postPassenger)(req.body);
        res.json(newPassenger);
    }
    catch (error) {
        console.log(error);
    }
});
exports.POST = POST;
const PUT = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPassenger = yield (0, passengersModule_1.updatePassenger)(req.body);
        res.json(newPassenger);
    }
    catch (error) {
        console.log(error);
    }
});
exports.PUT = PUT;
const DELETE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, passengersModule_1.deletePassenger)(req.body);
        res.json({ message: 'Passenger deleted' });
    }
    catch (error) {
        res.json({ message: 'Passenger not deleted' });
    }
});
exports.DELETE = DELETE;
