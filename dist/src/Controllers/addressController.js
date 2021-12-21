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
const addressModule_1 = require("../Modules/addressModule");
const GET = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield (0, addressModule_1.getAddress)();
        res.json(address);
    }
    catch (error) {
        console.log(error);
    }
});
exports.GET = GET;
const POST = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield (0, addressModule_1.postAddress)(req.body);
        res.json(address);
    }
    catch (error) {
        console.log(error);
    }
});
exports.POST = POST;
const PUT = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAddress = yield (0, addressModule_1.updateAddress)(req.body);
        res.json(newAddress);
    }
    catch (error) {
        console.log(error);
    }
});
exports.PUT = PUT;
const DELETE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, addressModule_1.deleteAddress)(req.body);
        res.json({ message: 'address deleted' });
    }
    catch (error) {
        res.json({ message: 'address not deleted' });
    }
});
exports.DELETE = DELETE;
