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
const planesModule_1 = require("../Modules/planesModule");
const GET = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield (0, planesModule_1.getPlane)());
    }
    catch (error) {
        console.log(error);
    }
});
exports.GET = GET;
const POST = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPlane = yield (0, planesModule_1.postPlane)(req.body);
        res.json(newPlane);
    }
    catch (error) {
        console.log(error);
    }
});
exports.POST = POST;
const PUT = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPlane = yield (0, planesModule_1.updatePlane)(req.body);
        res.json(newPlane);
    }
    catch (error) {
        console.log(error);
    }
});
exports.PUT = PUT;
const DELETE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, planesModule_1.deletePlane)(req.body);
        res.json({ message: 'plane deleted' });
    }
    catch (error) {
        res.json({ message: 'plane not deleted' });
    }
});
exports.DELETE = DELETE;
