import { Request, Response } from "express";
import { deleteTickets, getTickets, postTickets, updateTickets } from "../Modules/ticketsModule";

const GET = async (req: Request, res: Response) => {
    try {
        res.json(await getTickets())
    } catch (error) {
        console.log(error);
    }
}

const POST = async (req: Request, res: Response) => {
    try {
        const newTickets = await postTickets(req.body)     
        
        res.json(newTickets)
    } catch (error) {
        console.log(error);       
    }
}

const PUT = async (req: Request, res: Response) => {
    try {
        const newTickets = await updateTickets(req.body)
        
        res.json(newTickets)
    } catch (error) {
        console.log(error);       
    }
}

const DELETE = async (req: Request, res: Response) => {
    try {
        await deleteTickets(req.body)     
        res.json({ message: 'Tickets deleted' })
    } catch (error) {
        res.json({ message: 'Tickets not deleted' })
    }
}

export {
    GET,
    POST,
    PUT,
    DELETE
}
