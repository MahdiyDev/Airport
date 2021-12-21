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
exports.deletePassenger = exports.updatePassenger = exports.postPassenger = exports.getPassenger = void 0;
const pg_1 = require("../Config/pg");
const GET_PASSENGER = `
    select * from passengers
`;
const POST_PASSENGER = `
    insert into passengers(passenger_fullname, passenger_phone_number)
    values($1, $2) returning * 
`;
const UPDATE_PASSENGER = `
    update passengers
        set passenger_fullname = $1, passenger_phone_number = $2
    where passenger_uid = $3 returning *
`;
const DELETE_PASSENGER = `
    delete from passengers
    where passenger_uid = $1
`;
const getPassenger = () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetchAll)(GET_PASSENGER); });
exports.getPassenger = getPassenger;
const postPassenger = (p) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(POST_PASSENGER, p.passenger_fullname, p.passenger_phone_number); });
exports.postPassenger = postPassenger;
const updatePassenger = (p) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(UPDATE_PASSENGER, p.passenger_fullname, p.passenger_phone_number, p.passenger_uid); });
exports.updatePassenger = updatePassenger;
const deletePassenger = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(DELETE_PASSENGER, id.passenger_uid); });
exports.deletePassenger = deletePassenger;
