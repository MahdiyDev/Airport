import { fetch, fetchAll } from "../Config/pg"
import Tickets from "../Schemas/ticketsSchema"

const GET_TICKETS = `
    select * from tickets
`

const POST_TICKETS = `
    insert into tickets(ticket_ref_passenger, ticket_ref_address)
    values($1, $2) returning * 
`

const UPDATE_TICKETS = `
    update tickets
        set ticket_ref_passenger = $1, ticket_ref_address = $2
    where ticket_uid = $3 returning *
`

const DELETE_TICKETS = `
    delete from tickets
    where ticket_uid = $1
`

const getTickets = async () => await fetchAll(GET_TICKETS)
const postTickets = async (t: Tickets) => await fetch(POST_TICKETS, t.ticket_ref_passenger, t.ticket_ref_address)
const updateTickets = async (t: Tickets) => await fetch(UPDATE_TICKETS, t.ticket_ref_passenger, t.ticket_ref_address, t.ticket_uid)
const deleteTickets = async (id: Tickets) => await fetch(DELETE_TICKETS, id.ticket_uid)

export {
    getTickets,
    postTickets,
    updateTickets,
    deleteTickets
}
