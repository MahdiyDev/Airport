import { fetch, fetchAll } from "../Config/pg"
import Passengers from "../Schemas/passengersSchema"

const GET_PASSENGER = `
    select * from passengers
`

const POST_PASSENGER = `
    insert into passengers(passenger_fullname, passenger_phone_number)
    values($1, $2) returning * 
`

const UPDATE_PASSENGER = `
    update passengers
        set passenger_fullname = $1, passenger_phone_number = $2
    where passenger_uid = $3 returning *
`

const DELETE_PASSENGER = `
    delete from passengers
    where passenger_uid = $1
`

const getPassenger = async () => await fetchAll(GET_PASSENGER)
const postPassenger = async (p: Passengers) => await fetch(POST_PASSENGER, p.passenger_fullname, p.passenger_phone_number, )
const updatePassenger = async (p: Passengers) => await fetch(UPDATE_PASSENGER, p.passenger_fullname, p.passenger_phone_number, p.passenger_uid)
const deletePassenger = async (id: Passengers) => await fetch(DELETE_PASSENGER, id.passenger_uid)

export {
    getPassenger,
    postPassenger,
    updatePassenger,
    deletePassenger
}
