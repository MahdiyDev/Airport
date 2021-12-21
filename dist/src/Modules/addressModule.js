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
exports.deleteAddress = exports.updateAddress = exports.postAddress = exports.getAddress = void 0;
const pg_1 = require("../Config/pg");
const GET_ADDRESS = `
    select * from addresses
    inner join planes
    on addresses.address_ref_plane = planes.plane_uid
`;
const POST_ADDRESS = `
    insert into addresses(address_name, address_distance, address_ref_plane)
    values($1, $2, $3) returning * 
`;
const UPDATE_ADRESS = `
    update addresses
        set address_name = $1, address_distance = $2,
        address_ref_plane = $3
    where address_uid = $4 returning *
`;
const DELETE_ADRRESS = `
    delete from addresses
    where address_uid = $1
`;
const getAddress = () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetchAll)(GET_ADDRESS); });
exports.getAddress = getAddress;
const postAddress = (a) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(POST_ADDRESS, a.address_name, a.address_distance, a.address_ref_plane); });
exports.postAddress = postAddress;
const updateAddress = (p) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(UPDATE_ADRESS, p.address_name, p.address_distance, p.address_ref_plane, p.address_uid); });
exports.updateAddress = updateAddress;
const deleteAddress = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(DELETE_ADRRESS, id.address_uid); });
exports.deleteAddress = deleteAddress;
