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
exports.deletePlane = exports.updatePlane = exports.postPlane = exports.getPlane = void 0;
const pg_1 = require("../Config/pg");
const GET_PLANES = `
    select * from planes
`;
const POST_PLANE = `
    insert into planes(plane_name, plane_max_speed, plane_capacity)
    values($1, $2, $3) returning * 
`;
const UPDATE_PLANE = `
    update planes
        set plane_name = $1, plane_max_speed = $2,
        plane_capacity = $3
    where plane_uid = $4 returning *
`;
const DELETE_PLANE = `
    delete from planes
    where plane_uid = $1
`;
const getPlane = () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetchAll)(GET_PLANES); });
exports.getPlane = getPlane;
const postPlane = (p) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(POST_PLANE, p.plane_name, p.plane_max_speed, p.plane_capacity); });
exports.postPlane = postPlane;
const updatePlane = (p) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(UPDATE_PLANE, p.plane_name, p.plane_max_speed, p.plane_capacity, p.plane_uid); });
exports.updatePlane = updatePlane;
const deletePlane = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(DELETE_PLANE, id.plane_uid); });
exports.deletePlane = deletePlane;
