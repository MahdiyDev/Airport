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
exports.deleteTickets = exports.updateTickets = exports.postTickets = exports.getTickets = void 0;
const pg_1 = require("../Config/pg");
const GET_TICKETS = `
    select * from tickets
    inner join passengers
    on tickets.ticket_ref_passenger = passengers.passenger_uid
    inner join addresses
    on tickets.ticket_ref_address = addresses.address_uid
`;
const POST_TICKETS = `
    insert into tickets(ticket_ref_passenger, ticket_ref_address)
    values($1, $2) returning * 
`;
const UPDATE_TICKETS = `
    update tickets
        set ticket_ref_passenger = $1, ticket_ref_address = $2
    where ticket_uid = $3 returning *
`;
const DELETE_TICKETS = `
    delete from tickets
    where ticket_uid = $1
`;
const getTickets = () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetchAll)(GET_TICKETS); });
exports.getTickets = getTickets;
const postTickets = (t) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(POST_TICKETS, t.ticket_ref_passenger, t.ticket_ref_address); });
exports.postTickets = postTickets;
const updateTickets = (t) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(UPDATE_TICKETS, t.ticket_ref_passenger, t.ticket_ref_address, t.ticket_uid); });
exports.updateTickets = updateTickets;
const deleteTickets = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, pg_1.fetch)(DELETE_TICKETS, id.ticket_uid); });
exports.deleteTickets = deleteTickets;
