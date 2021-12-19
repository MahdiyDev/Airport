import { Request, Response } from "express";
import { deleteAddress, getAddress, postAddress, updateAddress } from "../Modules/addressModule";

const GET = async (req: Request, res: Response) => {
    try {
        const address = await getAddress()
        res.json(address)
    } catch (error) {
        console.log(error);
    }
}

const POST = async (req: Request, res: Response) => {
    try {
        const address = await postAddress(req.body)
        res.json(address)
    } catch (error) {
        console.log(error);
    }
}

const PUT = async (req: Request, res: Response) => {
    try {
        const newAddress = await updateAddress(req.body)
        res.json(newAddress)
    } catch (error) {
        console.log(error);       
    }
}

const DELETE = async (req: Request, res: Response) => {
    try {
        await deleteAddress(req.body)     
        res.json({ message: 'address deleted' })
    } catch (error) {
        res.json({ message: 'address not deleted' })
    }
}

export {
    GET,
    POST,
    PUT,
    DELETE
}
