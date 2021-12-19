import { fetch, fetchAll } from "../Config/pg"
import Plane from "../Schemas/planesSchema"

const GET_PLANES = `
    select * from planes
`

const POST_PLANE = `
    insert into planes(plane_name, plane_max_speed, plane_capacity)
    values($1, $2, $3) returning * 
`

const UPDATE_PLANE = `
    update planes
        set plane_name = $1, plane_max_speed = $2,
        plane_capacity = $3
    where plane_uid = $4 returning *
`

const DELETE_PLANE = `
    delete from planes
    where plane_uid = $1
`

const getPlane = async () => await fetchAll(GET_PLANES)
const postPlane = async (p: Plane) => await fetch(POST_PLANE, p.plane_name, p.plane_max_speed, p.plane_capacity)
const updatePlane = async (p: Plane) => await fetch(UPDATE_PLANE, p.plane_name, p.plane_max_speed, p.plane_capacity, p.plane_uid)
const deletePlane = async (id: Plane) => await fetch(DELETE_PLANE, id.plane_uid)

export {
    getPlane,
    postPlane,
    updatePlane,
    deletePlane
}
