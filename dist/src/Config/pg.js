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
exports.fetchAll = exports.fetch = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: 'postgres://postgres:1407@localhost:5432/airport'
});
const fetch = (SQL, ...values) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const { rows: [row] } = yield client.query(SQL, values);
        return row;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        client.release();
    }
});
exports.fetch = fetch;
const fetchAll = (SQL, ...values) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const { rows } = yield client.query(SQL, values);
        return rows;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        client.release();
    }
});
exports.fetchAll = fetchAll;
