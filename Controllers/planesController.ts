import { Request, Response } from "express";
import { deletePlane, getPlane, postPlane, updatePlane } from "../Modules/planesModule";

const GET = async (req: Request, res: Response) => {
    try {
        res.json(await getPlane())
    } catch (error) {
        console.log(error);
    }
}

const POST = async (req: Request, res: Response) => {
    try {
        const newPlane = await postPlane(req.body)        
        res.json(newPlane)
    } catch (error) {
        console.log(error);       
    }
}

const PUT = async (req: Request, res: Response) => {
    try {
        const newPlane = await updatePlane(req.body)
        res.json(newPlane)
    } catch (error) {
        console.log(error);       
    }
}

const DELETE = async (req: Request, res: Response) => {
    try {
        await deletePlane(req.body)     
        res.json({ message: 'plane deleted' })
    } catch (error) {
        res.json({ message: 'plane not deleted' })
    }
}

export {
    GET,
    POST,
    PUT,
    DELETE
}
