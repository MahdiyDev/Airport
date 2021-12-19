import { Request, Response } from "express";
import { deletePassenger, getPassenger, postPassenger, updatePassenger } from "../Modules/passengersModule";

const GET = async (req: Request, res: Response) => {
    try {
        res.json(await getPassenger())
    } catch (error) {
        console.log(error);
    }
}

const POST = async (req: Request, res: Response) => {
    try {
        const newPassenger = await postPassenger(req.body)        
        res.json(newPassenger)
    } catch (error) {
        console.log(error);       
    }
}

const PUT = async (req: Request, res: Response) => {
    try {
        const newPassenger = await updatePassenger(req.body)
        res.json(newPassenger)
    } catch (error) {
        console.log(error);       
    }
}

const DELETE = async (req: Request, res: Response) => {
    try {
        await deletePassenger(req.body)     
        res.json({ message: 'Passenger deleted' })
    } catch (error) {
        res.json({ message: 'Passenger not deleted' })
    }
}

export {
    GET,
    POST,
    PUT,
    DELETE
}
