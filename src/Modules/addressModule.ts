import { fetch, fetchAll } from "../Config/pg"
import Address from "../Schemas/addressSchema"

const GET_ADDRESS = `
    select * from addresses
    inner join planes
    on addresses.address_ref_plane = planes.plane_uid
`

const POST_ADDRESS = `
    insert into addresses(address_name, address_distance, address_ref_plane)
    values($1, $2, $3) returning * 
`

const UPDATE_ADRESS = `
    update addresses
        set address_name = $1, address_distance = $2,
        address_ref_plane = $3
    where address_uid = $4 returning *
`

const DELETE_ADRRESS = `
    delete from addresses
    where address_uid = $1
`

const getAddress = async () => await fetchAll(GET_ADDRESS)
const postAddress = async (a: Address) => await fetch(POST_ADDRESS, a.address_name, a.address_distance, a.address_ref_plane)
const updateAddress = async (p: Address) => await fetch(UPDATE_ADRESS, p.address_name, p.address_distance, p.address_ref_plane, p.address_uid)
const deleteAddress = async (id: Address) => await fetch(DELETE_ADRRESS, id.address_uid)

export {
    getAddress,
    postAddress,
    updateAddress,
    deleteAddress
}